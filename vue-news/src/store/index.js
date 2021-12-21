import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news:[],
        asks:[],
        jobs:[],
    },
    mutations:{
        SET_NEWS(state, news){
            state.news = news;
        },
        SET_ASKS(state, asks){
            state.asks = asks;
        },
        SET_JOBS(state, jobs){
            state.jobs = jobs;
        },
    },
    actions: {
        FETCH_NEWS(context){
            fetchNewsList()
                .then(response => {
                    //state에 담기위해선 mutation을 이용해야만 함
                    context.commit('SET_NEWS', response.data);
                })
                .catch(error => {
                    console.log(error)
                });
        },
        //ES6 Destructuring(구조 분해 문법) 적용 context.commit = {commit} (https://joshua1988.github.io/es6-online-book/destructuring.html)
        // import  {} from ~ 에서도 사용하는 부분임
        FETCH_ASKS({commit}){
            fetchAskList()
                .then(({ data }) => {
                    commit('SET_ASKS', data);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        FETCH_JOBS(context){
            fetchJobsList()
                .then(response => {
                    context.commit('SET_JOBS', response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
});
  