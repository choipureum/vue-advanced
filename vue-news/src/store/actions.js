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
        return fetchAskList()
            .then(({ data }) => {
                commit('SET_ASKS', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_JOBS(context){
        return fetchJobsList()
            .then(response => {
                context.commit('SET_JOBS', response.data);
                return response;
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_USER({ commit }, name){
        return fetchUserInfo(name)
            .then(({data}) =>{
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ITEM({commit}, itemid){
        return fetchItemInfo(itemid)
            .then(({data}) => {
                commit('SET_ITEM', data);
                return response;
            }) 
            .catch(error =>{
                console.log(error);
            });
    },
    //
    async FETCH_LIST(context, pageName){
        const response = await fetchList(pageName);
        context.commit('SET_LIST', response.data);
        return response;
    },
    // promise 변경 // 정규 패턴
    async FETCH_ASYNC(context){
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response; //반환해줘야 이후 .then().catch() 처리가 가능
    },
}