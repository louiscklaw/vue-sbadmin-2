<template>
  <status-404-content />
</template>
<script>
  import mainLayoutVue from '../layouts/mainLayout.vue'
  import status404Content from '../components/status404Content.vue'

  export default {
    components: {
      'status-404-content': status404Content
    },
    created() {
      this.$emit( 'update:layout', mainLayoutVue )
    }
  }
</script>
<style>
</style>