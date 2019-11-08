<template>
  <div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Charts</h1>
    <p class="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme. The charts below
      have been customized - for further customization options, please visit the <a target="_blank"
        href="https://www.chartjs.org/docs/latest/">official Chart.js documentation</a>.</p>

    <!-- Content Row -->
    <div class="row">

      <div class="col-xl-8 col-lg-7">
        <chart-parking />
      </div>

      <chart-donut-wrapper />

    </div>
  </div>
</template>
<script>
  import chartParking from './chartParking.vue'
  import donutChartWrapper from './charts/DonutChartWrapper.vue'

  export default {
    components: {
      'chart-donut-wrapper': donutChartWrapper,
      'chart-parking': chartParking
    }
  }
</script>
<style></style>