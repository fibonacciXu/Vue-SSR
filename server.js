const express = require('express')
const fs = require('fs/promises')
const path = require('path')
const { renderToString } = require('@vue/server-renderer')

const manifest = require(path.join(
  __dirname,
  'dist',
  'server',
  'ssr-manifest.json'
))

// 获取`createApp`方法
const createApp = require(path.join(
  __dirname,
  'dist',
  'server',
  manifest['app.js']
)).default;

(async () => {
  const htmlTemplate = await fs.readFile(
    path.join(__dirname, 'dist', 'client', 'index.html')
  )

  const server = express()
  // 代理静态资源
  server.use(
    '/js',
    express.static(path.join(__dirname, 'dist', 'client', 'js'))
  )

  server.get('/api/getUserInfo', async (req, res) => {
    console.log('接口请求 /api/getUserInfo')
    res.send({
      data: {
        name: 'ava',
        age: 10
      },
      result: 1
    })
  })

  server.get('*', async (req, res) => {
    // 使用`createApp`创建`vue`应用
    const { app, store } = await createApp({ url: req.path })

    // 使用`renderToString`方法将`vue`应用转换成字符串
    const appString = await renderToString(app)

    // 以*client/index.html*为模板，将字符串插入到指定的`vue`容器中。
    const html = htmlTemplate
      .toString()
      .replace('<div id="app">', `<div id="app">${appString}`)
      .replace(
        '</head>',
        `<script>window.__INITIAL_STATE__ = ${JSON.stringify(
          store.state
        )}</script></head>`
      )

    res.end(html)
  })

  server.listen(1234) // 监听一个端口，返回插入了`vue`应用的`html`
})()
