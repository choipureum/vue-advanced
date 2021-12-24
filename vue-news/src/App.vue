<template>
  <div id="app">

    <!--<ToolBar></ToolBar>-->
    <!--파스칼케이스를 구분해서 케밥으로 변경해줌-->
    <tool-bar></tool-bar>
    <!-- url이 만약 news 라면-->
    <!--<NewsView></NewsView>-->
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  components:{
    ToolBar,
    Spinner,
  },
  data(){
    return {
      loadingStatus: false,
    }
  },
  methods:{
    startSpinner(){
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    }
  },
  created(){
    console.log(process.env.VUE_APP_TITLE);
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestory(){
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
a{
  color: #34495e;
  text-decoration: none; /* anchor 태그 밑줄 사라짐 */
}
a:hover{
  color:#42b883;
  text-decoration: underline;
}
a.router-link-exact-active.router-link-active{
  text-decoration: underline;
}
/* Router Transition */ 
.page-enter-active, .page-leave-active{
  transition: opacity .5s;
}
.page-enter, .page-leave-to{
  opacity: 0;
}
</style>
