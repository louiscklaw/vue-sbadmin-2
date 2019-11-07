
<template>
  <404-content />
</template>
<script>
  import 404Content from '../components/404Content.vue'
  import mainLayoutVue from '../layouts/mainLayout.vue'

  export default {
    components: {
      '404-content': 404Content
    },
    created(){
      this.$emit('update:layout', mainLayoutVue)
    }
  }
</script>
<style>
</style>
  