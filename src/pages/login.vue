
<template>
  <login-content />
</template>
<script>
  import loginContent from '../components/loginContent.vue'
  import mainLayoutVue from '../layouts/mainLayout.vue'

  export default {
    components: {
      'login-content': loginContent
    },
    created(){
      this.$emit('update:layout', mainLayoutVue)
    }
  }
</script>
<style>
</style>
  