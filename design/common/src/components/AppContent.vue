<template>
  <div>
      <ul>
        <li v-for="item in items" v-bind:key="item"> {{ item }}</li>
      </ul>
      <button @click="$emit('renew')">renew button</button>
  </div>
</template>

<script>
export default {
    //일반적: props:['items'],
    props:{
        items:{
            type: Array,
            required: true,
        }
    }
}
</script>

<style>

</style>