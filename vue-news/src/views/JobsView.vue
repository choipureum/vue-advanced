<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
//import { mapGetters, mapState } from 'vuex';
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';
import bus from '../utils/bus.js';

export default {
  components: { ListItem },
  mounted(){
    bus.$emit('end:spinner');
  },
  //mixins: [ListMixin],
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