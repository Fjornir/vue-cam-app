<template>
    <div class="history-wrapper">
        <div class="history-name">
            History
        </div>
        <div  class="history-items" >
            <div class="history-item" id="photos"></div>
        </div>
    </div>
</template>

<script>
    import "../css/style.css"


    export default {
        props: ['images'],
        name: "History",
    }
</script>

<style scoped>

</style>