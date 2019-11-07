
<template>
  <utilities-other-content />
</template>
<script>
  import utilitiesOtherContent from '../components/utilities-otherContent.vue'
  import mainLayoutVue from '../layouts/mainLayout.vue'

  export default {
    components: {
      'utilities-other-content': utilitiesOtherContent
    },
    created(){
      this.$emit('update:layout', mainLayoutVue)
    }
  }
</script>
<style>
</style>
  