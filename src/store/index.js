import { createStore } from 'vuex'
import axios from 'axios'

export default function () {
  return createStore({
    state: {
      age: 22,
      name: 'test'
    },
    mutations: {
      addAge (state) {
        state.age++
      },
      setUserInfo (state, { name, age }) {
        state.age = age
        state.name = name
      }
    },
    actions: {
      async getUserInfo (context) {
        try {
          const res = await axios.get('http://localhost:1234/api/getUserInfo')
          const { name, age } = res.data.data
          context.commit('setUserInfo', { name, age })
        } catch (err) {}
      }
    },
    modules: {}
  })
}
