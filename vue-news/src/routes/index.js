import Vue from "vue";
import VueRouter from "vue-router";

import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import createListView from '../views/CreatedListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // 컴포넌트 전환간 #/(해시값) 값 없애줌
    //routes도 모듈화 가능하다.
    routes:[
        {
            path:'/',
            redirect: '/news',
        },
        {
            path: '/news', //url 주소
            name:'news',
            component: NewsView, //url 주소로 갔을때 표시될 컴포넌트 (mixin적용)
            //component: createListView('NewsView'), //HOC
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            //component: createListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            //component: createListView('JobsView'),
        },
        {
            //동적라우팅
            path:'/user/:id',
            name:'user',
            component: UserView,   
        },
        {
            path:'/item/:id',
            name: 'item',
            component: ItemView,   
        },
    ]
})