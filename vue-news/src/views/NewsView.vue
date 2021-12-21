<template>
    <div>
        <div v-for="news in this.$store.state.news" v-bind:key="news.id">{{news.title}}</div>
    </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
    created(){
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

</style>