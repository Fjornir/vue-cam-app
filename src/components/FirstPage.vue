<template>
    <div class="page-wrapper">
        <div class="app-wrapper">
            <div class="img-wrapper">
                <div class="img">
                    <img src="../assets/PhotoGallery.png" />
                </div>
            </div>
            <div class="button-wrapper">
                <div class="button camera-button">
                    Open camera
                </div>
                <div class="button clear-button__disable">
                    Clear history
                </div>
            </div>

        </div>
        <History />
    </div>
</template>

<script>
    import "../css/style.css"
    import History from "./History";

    export default {
        name: "FirstPage",
        components: {History}
    }
</script>

<style scoped>

</style>