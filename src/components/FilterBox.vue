<template>
    <div :class="['filter-1', filterBox]"
         :style="`background-image: url(${uploadImage})`"
         @click="filter">
        <slot></slot>
    </div>
</template>

<script>
    import EventBus from "../EventBus";

    export default {
        name: "FilterBox",
        props: {
            filterBox: String,
            uploadImage: String
        },
        methods: {
            filter() {
                EventBus.$emit('selectFilter', this.filterBox);
            }
        }
    }
</script>

<style scoped>

</style>