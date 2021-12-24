<template>
  <div>
      <ul>    
        <item v-for="item in items" v-bind:key="item">{{ item }}</item> <!-- 굳어있는 관계 -->
        <h3></h3>
        <!-- slot 표현일때 -->
        <item>아이템 1</item>
        <item>아이템 2  <button>Click me</button></item>
        <item>
          <div>
            아이템 3 
          </div> 
          <img src="./assets/logo.png" alt="temp"/>
        </item>
        <item>
          <div style="color:blue;font-size:20px;">
            아이템 4
          </div>
        </item>
      </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
    components:{
        Item,
    }
}
</script>

<style>

</style>