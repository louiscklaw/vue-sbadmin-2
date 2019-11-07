<template>
  <!-- Area Chart -->
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Area Chart</h6>
    </div>
    <div class="card-body">
      <div class="chart-area" ref="bbb">
        <area-chart :style="myStyles" />
      </div>
      <hr>
      Styling for the area chart can be found in the <code>/js/demo/chart-area-demo.js</code> file.
    </div>
  </div>
</template>


<script>
  import areaChart from './area_chart.vue'
  export default {
    data () {
      return {
        myStyles: {height: '200px'}
      }
    },
    components: {
      'area-chart': areaChart
    },
    mounted(){
    //   // TODO: fix animation of the pie chart
      this.myStyles = {height: `${Math.round(this.$refs.bbb.clientHeight * 1)}px`}
    },

  }
</script>
