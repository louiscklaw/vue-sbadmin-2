
<template>
  <charts-content />
</template>
<script>
  import chartsContent from '../components/chartsContent.vue'
  import mainLayoutVue from '../layouts/mainLayout.vue'

  export default {
    components: {
      'charts-content': chartsContent
    },
    created(){
      this.$emit('update:layout', mainLayoutVue)
    }
  }
</script>
<style>
</style>
  