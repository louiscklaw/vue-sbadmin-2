
<template>
  <utilities-color-content />
</template>
<script>
  import utilitiesColorContent from '../components/utilities-colorContent.vue'
  import mainLayoutVue from '../layouts/mainLayout.vue'

  export default {
    components: {
      'utilities-color-content': utilitiesColorContent
    },
    created(){
      this.$emit('update:layout', mainLayoutVue)
    }
  }
</script>
<style>
</style>
  