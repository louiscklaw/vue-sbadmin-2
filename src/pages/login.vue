
<template>
  <login-content />
</template>
<script>
  import fullScreenLayoutVue from '../layouts/fullScreenLayout.vue'

  import loginContent from '../components/loginContent.vue'

  export default {
    components: {
      'login-content': loginContent
    },
    created(){
      this.$emit('update:layout', fullScreenLayoutVue)
    }
  }
</script>
<style>
</style>
