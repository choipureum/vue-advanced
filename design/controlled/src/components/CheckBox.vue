<template>
  <div>
      <input type="checkbox" :value="value" @click="toggleCheckBox"/>
  </div>
</template>

<script>

// input 체크박스 까지 세세한 단위로 컴포넌트화 시킬때  사용
export default {
    props:['value'],
    methods:{
        toggleCheckBox(){
            this.$emit('input', !this.value); //하위에서 상위로 올리는 $emit
        }
    }
}
</script>

<style>

</style>