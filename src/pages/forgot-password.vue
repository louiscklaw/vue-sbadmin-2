
<template>
  <forgot-password-content />
</template>
<script>
  import forgotPasswordContent from '../components/forgot-passwordContent.vue'
  import mainLayoutVue from '../layouts/mainLayout.vue'

  export default {
    components: {
      'forgot-password-content': forgotPasswordContent
    },
    created(){
      this.$emit('update:layout', mainLayoutVue)
    }
  }
</script>
<style>
</style>
  