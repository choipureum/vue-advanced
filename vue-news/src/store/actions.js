import {
    fetchNewsList, 
    fetchAskList, 
    fetchJobsList, 
    fetchUserInfo ,
    fetchItemInfo,
    fetchList,
} from '../api/index.js';

export default {
    FETCH_NEWS(context){
        fetchNewsList()
            .then(response => {
                //state에 담기위해선 mutation을 이용해야만 함
                context.commit('SET_NEWS', response.data);
                return response; //반환가능
            })
            .catch(error => {
                console.log(error)
            });
    },
    //ES6 Destructuring(구조 분해 문법) 적용 context.commit = {commit} (https://joshua1988.github.io/es6-online-book/destructuring.html)
    // import  {} from ~ 에서도 사용하는 부분임
    FETCH_ASK({commit}){
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
    },
    FETCH_USER({ commit }, name){
        fetchUserInfo(name)
            .then(({data}) =>{
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ITEM({commit}, itemid){
        fetchItemInfo(itemid)
            .then(({data}) => {
                commit('SET_ITEM', data);
            }) 
            .catch(error =>{
                console.log(error);
            });
    },
    //
    FETCH_LIST({commit}, pageName){
        fetchList(pageName)
        .then(({data})=> commit('SET_LIST', data))
        .catch(error => console.log(error));
    }
}