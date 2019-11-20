<template>
    <div class="second">
        <div class="page-wrapper">
            <div class="app-wrapper">
                <div>
                    <div class="video-output">
                        <video class="video" id="video" autoplay></video>
                        <svg class="marker" width="161" height="249" viewBox="0 0 161 249" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M79.8379 6.30421C67.1495 6.28511 42.4001 11.9974 27.6242 28.048C20.105 36.2157 7.41079 53.7791 6.13382 94.539C5.55488 113.02 11.7611 162.158 17.5552 179.828C21.6054 192.181 48.2078 228.83 67.1784 239.704C72.541 242.777 79.7783 242.696 81.0341 242.696C82.36 242.601 89.21 242.777 94.572 239.704C113.543 228.83 139.635 192.001 144.195 179.828C149.103 166.728 156.196 113.02 155.617 94.539C154.34 53.7791 141.645 36.2157 134.126 28.048C119.35 11.9974 94.7465 6.26571 81.9514 6.30421C81.1184 6.30668 79.8379 6.30421 79.8379 6.30421Z" stroke="#4CA585" stroke-width="10.65" stroke-linejoin="round"/>
                        </svg>

                    </div>
                </div>
                <div class="button-wrapper">
                    <div @click="printScreen" id="cap" class="button camera-button">
                        Capture
                    </div>
                    <router-link to="/">
                        <div class="button back-button">
                            Back
                        </div>
                    </router-link>
                </div>
            </div>
            <canvas id="canvas"></canvas>
        </div>
    </div>
</template>

<script >

    import "../css/style.css"


    export default {
        name: "SecondPage",
        methods:{
            async Camera(){
                navigator.mediaDevices.getUserMedia({
                    audio:false,
                    video:true
                }).then(stream =>{
                    const video = document.querySelector('video');
                    if("srcObject" in video){
                        video.srcObject = stream;
                    }
                    video.onloadedmetadata = () =>{
                        video.play()
                    }
                }).catch((err) =>  Error(err))
            },


            async printScreen(){

                let video = document.getElementById('video');
                let photo = document.getElementById('canvas');
                let photoContext = photo.getContext('2d');
                const photos = document.getElementById('photos');

                photo.width = video.videoWidth;
                photo.height = video.videoHeight;

                photoContext.drawImage(video, 0, 0, photo.width, photo.height);

                const imgUrl = photo.toDataURL('image/png');

                const img = document.createElement('img');

                img.setAttribute('src', imgUrl);

                photos.prepend(img);

            }

        },
        mounted() {
            this.Camera();
        }
    }
</script>

<style scoped>

</style>