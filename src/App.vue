<template>
  <article>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </article>
</template>

<script>
export default {
  name: 'App'
}
</script>
