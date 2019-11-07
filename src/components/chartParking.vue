<template>
  <div>
    <area-chart-wrapper />
    <bar-chart-wrapper />
  </div>
</template>

<script>
  import areaChartWrapper from './charts/areaChartWrapper.vue'
  import barChartWrapper from './charts/barChartWrapper.vue'

  export default {
    components: {
      'area-chart-wrapper': areaChartWrapper,
      'bar-chart-wrapper': barChartWrapper,
    }
  }
</script>

<style>

</style>