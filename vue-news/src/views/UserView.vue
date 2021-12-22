<template>
    <div>
        <p>{{ userInfo.id }}</p>
        <p>{{ userInfo.karma }}</p>
        <p>{{ userInfo.created }}</p>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
    computed:{
        userInfo(){
            return this.$store.state.user;
        }
    },
    created(){
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    },
}
</script>

<style scoped>

</style>