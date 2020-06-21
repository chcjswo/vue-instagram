<template>
    <div id="app">
        <div class="header">
            <ul class="header-button-left" v-if="step !== 0">
                <li @click="cancel">Cancel</li>
            </ul>
            <ul class="header-button-right">
                <li @click="nextStep" v-if="step === 1">Next</li>
                <li @click="publish" v-if="step === 2">발행</li>
            </ul>
            <img src="./assets/logo.png" class="logo">
        </div>
        <Body @test="customEvent($event)"
              @postText="postText = $event"
              :PostsData="PostsData"
              :step="step"
              :uploadImage="uploadImage"/>
        <div class="footer">
            <ul class="footer-button-plus">
                <input type="file" id="file" class="inputfile" @change="upload($event)">
                <label for="file" class="input-plus">+</label>
            </ul>
        </div>
    </div>
</template>

<script>
    import Body from './components/Body';
    import PostsData from "./assets/PostsData";

    export default {
        name: 'App',
        components: {
            Body
        },
        data() {
            return {
                PostsData,
                step: 0,
                uploadImage: '',
                eventData: '',
                postText: ''
            }
        },
        methods: {
            upload(e) {
                const file = e.target.files;
                const reader = new FileReader();
                reader.readAsDataURL(file[0]);
                reader.onload = e => {
                    this.uploadImage = e.target.result;
                    this.step = 1;
                }
            },
            nextStep() {
                this.step = 2;
            },
            initPost: function () {
                this.step = 0;
                this.uploadImage = '';
            },
            publish() {
                const post = {
                    name: 'chcjswo',
                    userImage: "https://placeimg.com/200/200/arch",
                    postImage: this.uploadImage,
                    likes: 0,
                    date: new Date(),
                    liked: false,
                    caption: this.postText,
                    filter: "clarendon"
                };
                // this.PostsData = [post, ...this.PostsData];
                this.PostsData.unshift(post);
                this.initPost();
            },
            cancel() {
                this.initPost();
            },
            customEvent(e) {
                console.log(e);
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    body {
        margin: 0;
    }

    ul {
        padding: 5px;
        list-style-type: none;
    }

    .logo {
        width: 22px;
        margin: auto;
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        top: 13px;
    }

    .header {
        width: 100%;
        height: 40px;
        background-color: white;
        padding-bottom: 8px;
        position: sticky;
        top: 0;
    }

    .header-button-left {
        color: skyblue;
        float: left;
        width: 50px;
        padding-left: 20px;
        cursor: pointer;
        margin-top: 10px;
    }

    .header-button-right {
        color: skyblue;
        float: right;
        width: 50px;
        cursor: pointer;
        margin-top: 10px;
    }

    .footer {
        width: 100%;
        position: sticky;
        bottom: 0;
        padding-bottom: 10px;
        background-color: white;
    }

    .footer-button-plus {
        width: 80px;
        margin: auto;
        text-align: center;
        cursor: pointer;
        font-size: 24px;
        padding-top: 12px;
    }

    .sample-box {
        width: 100%;
        height: 600px;
        background-color: bisque;
    }

    .inputfile {
        display: none;
    }

    .input-plus {
        cursor: pointer
    }

    #app {
        box-sizing: border-box;
        font-family: 'consolas';
        margin-top: 60px;
        width: 100%;
        max-width: 460px;
        margin: auto;
        position: relative;
        border-right: 1px solid #eee;
        border-left: 1px solid #eee;
    }
</style>
