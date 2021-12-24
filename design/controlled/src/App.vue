<template>
  <div id="app">
    <check-box v-model="checked"></check-box>
  </div>
</template>

<script>
import CheckBox from './components/CheckBox.vue';

export default {
  name: 'App',
  components:{
    CheckBox,
  },
  data(){
    return{
      checked: false,
    }
  },
  created(){/*
    try{
      fetchCheckBox()
      .then(result => this.checkboxes = result.data);
    }catch(error){
       console.log(error);
    }*/
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
