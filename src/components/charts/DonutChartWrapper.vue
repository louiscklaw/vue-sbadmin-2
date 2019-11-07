<template>
  <!-- Donut Chart -->
  <div class="col-xl-4 col-lg-5">
    <div class="card shadow mb-4">
      <!-- Card Header - Dropdown -->
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Donut Chart</h6>
      </div>
      <!-- Card Body -->
      <div class="card-body">
        <div class="chart-pie pt-4" ref="bbb">
          <!-- <canvas id="myPieChart"></canvas> -->
          <pie-chart :styles="myStyles"/>

        </div>
        <hr>
        Styling for the donut chart can be found in the <code>/js/demo/chart-pie-demo.js</code> file.
      </div>
    </div>

  </div>

</template>

<script>
  import pieChart from './pie_chart.vue'
  export default {
    data () {
      return {
        myStyles: {height: '200px'}
      }
    },
    components: {
      'pie-chart': pieChart
    },
    mounted(){
      // TODO: fix animation of the pie chart
      this.myStyles = {height: `${Math.round(this.$refs.bbb.clientHeight * 0.8)}px`}
    },

  }
</script>

<style>

</style>