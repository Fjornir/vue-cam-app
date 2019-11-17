<template>
  <div id="app">
    <router-view></router-view>
    <History/>
  </div>
</template>

<script>
  import History from "./components/History";
   import "./css/style.css"

export default {
  name: 'app',
  components: {
    History
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
