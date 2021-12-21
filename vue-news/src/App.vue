<template>
  <div id="app">

    <!--<ToolBar></ToolBar>-->
    <!--파스칼케이스를 구분해서 케밥으로 변경해줌-->
    <tool-bar></tool-bar>
    <!-- url이 만약 news 라면-->
    <!--<NewsView></NewsView>-->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components:{
    ToolBar,
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
</style>
