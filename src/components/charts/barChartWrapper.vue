<template>

  <!-- Bar Chart -->
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Bar Chart</h6>
    </div>
    <div class="card-body">
      <div class="chart-bar" ref="bbb">
        <bar-chart :style="myStyles"/>
      </div>
      <hr>
      Styling for the bar chart can be found in the <code>/js/demo/chart-bar-demo.js</code> file.
    </div>
  </div>
</template>

<script>
  import barChart from './bar_chart.vue'
  export default {
    data () {
      return {
        myStyles: {height: '200px'}
      }
    },
    components: {
      'bar-chart': barChart
    },
    mounted(){
    //   // TODO: fix animation of the pie chart
      this.myStyles = {height: `${Math.round(this.$refs.bbb.clientHeight * 1)}px`}
    },

  }
</script>