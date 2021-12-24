import Vue from "vue";
import VueRouter from "vue-router";
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import AsyncEx from '../views/AsyncEx.vue';

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
            beforeEnter: (to, from, next) => {
                // to : 이동할 URL 정보
                // from : 현재 URL 정보
                // next : function => next function을 호출해야만 to url로 넘어감 next();
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name) // this.$route.name = to.name
                    .then(()=> {
                        console.log('5 fetched');
                        //bus.$emit('end:spinner');
                        next();
                    })
                    .catch(error =>{
                        console.log(error);
                    })
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            //component: createListView('AskView'),
            beforeEnter: (to, from, next) => {
                // to : 이동할 URL 정보
                // from : 현재 URL 정보
                // next : function => next function을 호출해야만 to url로 넘어감 next();
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name) // this.$route.name = to.name
                    .then(()=> {
                        console.log('5 fetched');
                        //bus.$emit('end:spinner');
                        next();
                    })
                    .catch(error =>{
                        console.log(error);
                    })
            }            
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            //component: createListView('JobsView'),
            beforeEnter: (to, from, next) => {
                // to : 이동할 URL 정보
                // from : 현재 URL 정보
                // next : function => next function을 호출해야만 to url로 넘어감 next();
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name) // this.$route.name = to.name
                    .then(()=> {
                        console.log('5 fetched');
                        //bus.$emit('end:spinner');
                        next();
                    })
                    .catch(error =>{
                        console.log(error);
                    })
            }
        },
        {
            //동적라우팅
            path:'/async',
            name:'async',
            component: AsyncEx,   
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