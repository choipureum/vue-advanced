<template>
    <div>
        <div v-for="job in this.$store.state.jobs" v-bind:key="job.id">{{job.title}}</div>
    </div>
</template>

<script>


export default {
    created(){
        //화살표 함수를 씀으로써 비동기 처리에서 this로 해당 함수를 정확히 가르킬수있음 
        this.$store.dispatch('FETCH_JOBS');
    },
}
</script>

<style>

</style>