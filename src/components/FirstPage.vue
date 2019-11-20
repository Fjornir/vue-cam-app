<template>
    <div class="page-wrapper">
        <div class="app-wrapper">
            <div class="img-wrapper">
                <div class="img">
                    <img src="../assets/PhotoGallery.png" />
                </div>
            </div>
            <div class="button-wrapper">
                <router-link to="/capture">
                <div class="button camera-button">
                    Open camera
                </div>
                </router-link>
                <div @click="clear" id="clr" class="button clear-button__disable">
                    Clear history
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import "../css/style.css"



    export default {
        name: "FirstPage",
        methods:{
            changeButton(){
                const butnDis = document.querySelector('#clr');
                const arrImg = document.querySelector('#photos');

                if(arrImg.childNodes.length >= 1){
                    butnDis.classList.toggle('clear-button__enable');
                }
            },

            clear(){
                document.querySelector('#photos').innerHTML = "";
                document.querySelector('#clr').classList.toggle('clear-button__disable');
            }
        },
       mounted() {
            this.changeButton();
        }


    }
</script>

<style scoped>

</style>