<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';
import ListMixin from '../mixins/ListMixin.js';

export default {
    components:{
        ListItem,
    },
    mixins: [ListMixin],
    /*
    created(){
        bus.$emit('start:spinner');
        this.$store.dispatch('FETCH_NEWS')
            .then(()=>{
                bus.$on('end:spinner');
            })
            .catch(error =>{
                console.log(error);
            });
    },
    */
}
</script>

<style>

</style>