<template>
  <div id="app">
    <router-view v-bind="name:changeButton"></router-view>
    <History/>
<!--    <FirstPage/>-->
<!--    <SecondPage/>-->
  </div>
</template>

<script>
  import History from "./components/History";
   import "./css/style.css"
// import FirstPage from "./components/FirstPage";
// //import SecondPage from "./components/SecondPage";
//
export default {
  name: 'app',
  data(){
    return{
      name:this.changeButton
    }
  },
  components: {
    History
  },
  methods:{
    changeButton(){
      const butnCam = document.querySelector('#cap');
      const butnDis = document.querySelector('#clr');
      const arrImg = document.querySelector('#photos');

      // eslint-disable-next-line no-console
      console.log(butnCam)

      butnCam.addEventListener('click', () =>{
        if(arrImg.childNodes.length >= 1){
          butnDis.classList.toggle('.clear-button__enable');
          // eslint-disable-next-line no-console
          console.log(1)
        }else {
          butnDis.classList.toggle('.clear-button__disable');
          // eslint-disable-next-line no-console
          console.log(2)
        }

        // eslint-disable-next-line no-console
        console.log(arrImg.childNodes)
      });
    }
  },
  mounted() {
    this.changeButton();
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
