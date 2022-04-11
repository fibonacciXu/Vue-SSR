import { createSSRApp } from 'vue'
import { createMemoryHistory } from 'vue-router'

import createRouter from './router'
import createStore from './store'
import App from './App'

export default async function createApp ({ url }) {
  const app = createSSRApp(App)
  const router = createRouter(createMemoryHistory())
  const store = createStore()

  router.push(url)
  await router.isReady()

  // vue-router 4.x版本使用这样的方式来获取匹配路由组件
  const matched = router.currentRoute.value.matched.flatMap((record) =>
    Object.values(record.components)
  )

  // 获取接口数据并添加到store中
  await Promise.all(
    matched
      .filter((item) => item.asyncData)
      .map((item) => item.asyncData({ store }))
  )

  app.use(router)
  app.use(store)
  return { app, router, store }
}
