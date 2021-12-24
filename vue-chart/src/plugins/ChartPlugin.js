//플러그인 Vue.use(플러그인명)
//plugin은 install(Vue) 함수 선언시 사용가능

import Chart from 'chart.js';

export default{
    install(Vue){
        console.log('플러그인 init');
        Vue.prototype.$_Chart = Chart; // == this.$_Chart == Chart 랑 같음(더이상 import 안해도댐) => 
        //어디서든 접근가능함(스타일은 $_[명칭] 스타일 가이드임)   
    }

}