import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  /* 
  render: function(createElement){
    return createElement(App);
  },
  render: function(h){
    return h(App);
  },
  render: (h) =>{
    return h(App);
  },
  render: h => h(App)
  */
}).$mount('#app')
