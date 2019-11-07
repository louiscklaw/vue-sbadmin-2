
<template>
  <utilities-border-content />
</template>
<script>
  import utilitiesBorderContent from '../components/utilities-borderContent.vue'
  import mainLayoutVue from '../layouts/mainLayout.vue'

  export default {
    components: {
      'utilities-border-content': utilitiesBorderContent
    },
    created(){
      this.$emit('update:layout', mainLayoutVue)
    }
  }
</script>
<style>
</style>
  