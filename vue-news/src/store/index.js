import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news:[],
        ask:[],
        jobs:[],
        user:{},
        item:{},
        list: [],
    },
    getters:{
        fetchAsk(state){
            return state.ask;
        },
        fetchNews(state){
            return state.news;
        },
        fetchJobs(state){
            return state.jobs;
        },
        fetchUser(state){
            return state.user;
        },
        fetchItem(state){
            return state.item;
        }
    },
    mutations,
    actions,
});
  