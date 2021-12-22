<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
//import { mapGetters, mapState } from 'vuex';
import ListItem from '../components/ListItem.vue';

export default {
    components:{ListItem},
    /*
    computed:{
        ...mapGetters([
            'fetchJobs',
        ]),
    },
    created(){
        //화살표 함수를 씀으로써 비동기 처리에서 this로 해당 함수를 정확히 가르킬수있음 
        this.$store.dispatch('FETCH_JOBS');
    },
    */
}
</script>

<style>
</style>