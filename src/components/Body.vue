<template>
    <div class="body">
        <button @click="$emit('test', 'tttt')">버튼</button>
        <div v-if="step === 0">
            <Post v-for="(postData, i) in PostsData" :key="i" :postData="postData"/>
        </div>
        <div v-if="step === 1">
            <div :class="['upload-image', selectFilterName]"
                 :style="`background-image: url(${uploadImage})`"></div>
            <div class="filters">
                <FilterBox v-for="(item, i) in filterBoxes" :key="i"
                           :filterBox="item"
                           :uploadImage="uploadImage"
                >
                    <p>{{item}}</p>
                </FilterBox>
            </div>
        </div>

        <div v-if="step === 2">
            <div :class="['upload-image', selectFilterName]"
                 :style="`background-image: url(${uploadImage})`"></div>
            <div class="write">
                <label>
                    <textarea
                            @input="$emit('postText', $event.target.value)"
                            class="write-box">write!</textarea>
                </label>
            </div>
        </div>

    </div>
</template>

<script>
    import Post from './Post';
    import FilterBox from "./FilterBox";

    export default {
        name: "Body",
        components: {
            FilterBox,
            Post
        },
        props: {
            PostsData: Array,
            step: Number,
            uploadImage: String,
            filterBoxes: Array,
            selectFilterName: String
        },
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
    .upload-image {
        width: 100%;
        height: 450px;
        background: cornflowerblue;
        background-size: cover;
    }

    .filters {
        overflow-x: scroll;
        white-space: nowrap;
    }

    .filter-1 {
        width: 100px;
        height: 100px;
        background-color: cornflowerblue;
        margin: 10px 10px 10px auto;
        padding: 8px;
        display: inline-block;
        color: white;
        background-size: cover;
    }

    .filters::-webkit-scrollbar {
        height: 5px;
    }

    .filters::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    .filters::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
    }

    .filters::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .write-box {
        border: none;
        width: 90%;
        height: 100px;
        padding: 15px;
        margin: auto;
        display: block;
        outline: none;
    }

</style>