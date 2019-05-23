<template>
  <router-view id="app">
  </router-view>
</template>

<script>
  import Login from './components/Login'
  export default {
    name: 'App',
    components: {Login}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
