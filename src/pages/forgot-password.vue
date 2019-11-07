
<template>
  <forgot-password-content />
</template>
<script>
  import forgotPasswordContent from '../components/forgot-passwordContent.vue'
  import fullScreenLayoutVue from '../layouts/fullScreenLayout.vue'

  export default {
    components: {
      'forgot-password-content': forgotPasswordContent
    },
    created(){
      this.$emit('update:layout', fullScreenLayoutVue)
    }
  }
</script>
<style>
</style>
