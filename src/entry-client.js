import { createSSRApp } from 'vue'
import { createWebHistory } from 'vue-router'

import createRouter from './router'
import createStore from './store'
import App from './App'

const app = createSSRApp(App)
const router = createRouter(createWebHistory())
const store = createStore()

// 解决非首屏渲染展示错误数据问题
router.beforeResolve(async (to, from, next) => {
  if (from.matched.length > 0) {
    const { matched } = to
    console.log('loading start')
    try {
      await Promise.all(
        matched
          .filter(item => item.components.default.asyncData)
          .map(item => item.components.default.asyncData({ store }))
      )
    } catch (err) {}
    console.log('loading end')
  }
  next()
})

// 解决客户端激活时store数据传递问题
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

app.use(router)
app.use(store)
app.mount('#app')
