<template>
  <div>
    <canvas ref="lineChart" id="lineChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
//import Chart from 'chart.js';

export default {
    mounted(){
        //const ctx = document.getElementById('lineChart'); //원래
        const ctx = this.$refs.lineChart.getContext('2d'); //vue로 dom사용
        
        const lineChart = new this.$_Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Gold'],
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    },
}
</script>

<style>

</style>