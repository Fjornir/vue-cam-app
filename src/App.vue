<template>
  <div id="app">
<!--    <FirstPage/>-->
    <SecondPage/>
  </div>
</template>

<script>
import "./css/style.css"
//import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";

export default {
  name: 'app',
  components: {
    SecondPage
    //FirstPage,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
