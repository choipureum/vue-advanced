import axios from 'axios';
import { handlerException } from '../utils/handler';

//여기서 보통 try catch 적용
// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. API 함수들을 정리
function fetchNewsList(){
    //return axios.get(config.baseUrl+'news/1.json');
            //axios 객체는 기본적으로 promise로 반환해줌
    try{
        const response = axios.get(`${config.baseUrl}news/1.json`); //ES6 템플릿 string
        return response;
    }catch(error){
        handlerException(error);
    } 
}

function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchUserInfo(username){
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(itemid){
    return axios.get(`${config.baseUrl}item/${itemid}.json`);
}

//통일된 api함수
function fetchList(pageName){
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

export{
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList,
}

