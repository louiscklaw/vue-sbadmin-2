
<template>
  <register-content />
</template>
<script>
  import registerContent from '../components/registerContent.vue'
  import mainLayoutVue from '../layouts/mainLayout.vue'

  export default {
    components: {
      'register-content': registerContent
    },
    created(){
      this.$emit('update:layout', mainLayoutVue)
    }
  }
</script>
<style>
</style>
  