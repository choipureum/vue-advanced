<template>
  <div>
      <div v-for="item in items" :key="item.id">{{ item.id }}</div>
  </div>
</template>

<script>
import { handlerException } from '../utils/handler.js';

export default {
    data(){
        return{
            items:[],
        }
    },
    created(){
        this.loginUser();
    },
    methods:{
        async loginUser(){
            // promise 의 then catch 예외처리는 네트워크 에러만 처리=> 예외처리 안티패턴 하지만
            // try catch 는 기본 js. 에러까지 잡아준다 => try catch 가 에센셜
            try{
                var response = await axios.get('https://jsonplaceholder.typicode.com/user/1');
                if(response.data.id === 1){
                    console.log('사용자가 인증되었습니다');
                    var list = await axios.get('https://jsonplaceholder.typicode.com/user/1');
                    this.items = list.data;
                }
            }catch(error){
                //핸들 익셉션 
                handlerException(error);
            }
        }
    }
}
</script>

<style>

</style>