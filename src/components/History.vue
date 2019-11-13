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


        methods:{
            async loadImg(){
                // const photos = document.getElementById('photos');
                // let hidden_canvas = document.querySelector('canvas'),
                //     video = document.querySelector('video'),
                //     //image = document.querySelector('img.photo'),
                //     width = video.videoWidth,
                //     height = video.videoHeight,
                //     context = hidden_canvas.getContext('2d');
                //
                // hidden_canvas.width = width;
                // hidden_canvas.height = height;
                //
                // context.drawImage(video, 0, 0, width, height);
                let photo = document.getElementById('canvas');
                const photos = document.getElementById('photos');

                const imgUrl = photo.toDataURL('image/png');

                const img = document.createElement('img');

                img.setAttribute('src', imgUrl);

                photos.appendChild(img);
            }
        },
        mounted() {
            this.loadImg();
        }

    }
</script>

<style scoped>

</style>