
<template>
  <blank-content />
</template>
<script>
  import blankContent from '../components/blankContent.vue'
  import mainLayoutVue from '../layouts/mainLayout.vue'

  export default {
    components: {
      'blank-content': blankContent
    },
    created(){
      this.$emit('update:layout', mainLayoutVue)
    }
  }
</script>
<style>
</style>
  