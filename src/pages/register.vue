<template>
  <register-content />
</template>
<script>
  import fullScreenLayoutVue from '../layouts/fullScreenLayout.vue'
  import registerContent from '../components/registerContent.vue'

  export default {
    components: {
      'register-content': registerContent
    },
    created() {
      this.$emit( 'update:layout', fullScreenLayoutVue )
    }
  }
</script>
<style>
</style>
