
<template>
  <utilities-animation-content />
</template>
<script>
  import utilitiesAnimationContent from '../components/utilities-animationContent.vue'
  import mainLayoutVue from '../layouts/mainLayout.vue'

  export default {
    components: {
      'utilities-animation-content': utilitiesAnimationContent
    },
    created(){
      this.$emit('update:layout', mainLayoutVue)
    }
  }
</script>
<style>
</style>
  