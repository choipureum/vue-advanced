<template>
    <div>
        <!-- 사용자 정보 -->
        <!-- 공통컴포넌트화 -->
        <user-profile :info="fetchItem">
            <!-- 슬롯 정의 -->
            <router-link slot="username" :to="`/user/${fetchItem.user}`">
                {{ fetchItem.user}}
            </router-link>
            <span slot="time">{{'Posted ' + fetchItem.time_ago}}</span>
        </user-profile>
        <section>
            <h2>{{ fetchItem.title }}</h2>
        </section>
        <section>
            <!-- 질문 댓글 -->
            <div v-html="fetchItem.content"></div>
        </section>
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
    components:{
        UserProfile,
    },
    computed:{
        ...mapGetters(['fetchItem'])  
    },
    created(){
        const item = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM',item);
    },
}
</script>

<style scoped>
.user-container{
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user{
    font-size: 2.5rem;
}
.user-description{
    padding-left: 8px;
}
.time{
    font-size: 0.7rem;
}
</style>