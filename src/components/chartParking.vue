<template>
  <div>
  <!-- Area Chart -->
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Area Chart</h6>
    </div>
    <div class="card-body">
      <div class="chart-area">
        <canvas id="myAreaChart"></canvas>
      </div>
      <hr>
      Styling for the area chart can be found in the <code>/js/demo/chart-area-demo.js</code> file.
    </div>
  </div>

  <!-- Bar Chart -->
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Bar Chart</h6>
    </div>
    <div class="card-body">
      <div class="chart-bar">
        <canvas id="myBarChart"></canvas>
      </div>
      <hr>
      Styling for the bar chart can be found in the <code>/js/demo/chart-bar-demo.js</code> file.
    </div>
  </div>
  </div>


</template>

<script>
  export default {

  }
</script>

<style>

</style>