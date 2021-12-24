<template>
  <div>
    <canvas ref="barChart" id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
//import Chart from 'chart.js';

export default {
  props:['propsdata'],
  mounted(){
    //const ctx = document.getElementById('myChart');
    const ctx = this.$refs.barChart; // ref(레퍼런스)의 장점 = 에러없는 코딩에 수월(같은 id를 바라보는게 아니라 해당 태그만 바라볼수있음)

    const myChart = new this.$_Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: this.propsdata
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  }
}
</script>

<style>

</style>