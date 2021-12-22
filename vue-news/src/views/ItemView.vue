<template>
    <div>
        <section>
            <!-- 질문 상세 정보 -->
            <div class="user-container">
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-description">
                    <router-link v-bind:to="`/user/${fetchItem.user}`">
                    {{ fetchItem.user }}
                    </router-link>
                    <div class="time">
                        {{ fetchItem.time_ago }}
                    </div>
                </div>        
            </div>
            <h2>{{ fetchItem.title }}</h2>
        </section>
        <section>
            <!-- 질문 댓글 -->
            <div v-html="fetchItem.content"></div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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