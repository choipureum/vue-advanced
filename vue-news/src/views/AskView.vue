<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';

export default {
  components: { ListItem },
  mixins: [ListMixin],
  /*
    computed:{
        // #4 배열표기법
        ...mapGetters([
            'fetchAsk',
        ]),  

        // #3 객체표기법(많이씀)
        //...mapGetters({
        //    askItems: 'fetchedAsk',
        //}),

        // #1 
        //getters 2안 -> 이것도 비효율
        //...mapState({
        //    ask: state => state.ask
        //}),
        
        // #2
        // getters 1안 -> 너무 비표율
        //ask(){
        //    return this.$store.state.ask;
        //}
    },
    created(){
        this.$store.dispatch('FETCH_ASKS');
    },
    */
}
</script>