import Vue from "vue";
import VueRouter from "vue-router";

import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // 컴포넌트 전환간 #/(해시값) 값 없애줌
    routes:[
        {
            path:'/',
            redirect: '/news',
        },
        {
            path: '/news', //url 주소
            component: NewsView, //url 주소로 갔을때 표시될 컴포넌트
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path:'/user',
            component: UserView,   
        },
        {
            path:'/item',
            component: ItemView,   
        },
    ]
})