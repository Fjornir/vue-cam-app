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
                <div id="clr" class="button clear-button__disable">
                    Clear history
                </div>
            </div>

        </div>
        {{name}}
    </div>
</template>

<script>
    import "../css/style.css"



    export default {
        name: "FirstPage",
        props:{name}

    }
</script>

<style scoped>

</style>