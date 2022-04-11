<template>
  <article>
    <p>age: {{ age }}</p>
    <button @click="onClick">过年了</button>
  </article>
</template>

<script>
export default {
  name: 'About-View',
  computed: {
    age () {
      return this.$store.state.age
    }
  },
  // 服务端渲染上下文没有this.$store，所以我们在调用时需要将store传进来
  async asyncData ({ store }) {
    store.dispatch('getUserInfo')
  },
  methods: {
    onClick () {
      this.$store.commit('addAge')
    }
  }
}
</script>
