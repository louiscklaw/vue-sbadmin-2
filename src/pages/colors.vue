<template>
  <colors-content />
</template>

<script>
  import colorsContent from '../components/colorsContent.vue'
  import mainLayoutVue from '../layouts/mainLayout.vue'

  export default {
    components: {
      'colors-content': colorsContent
    },
    created(){
      this.$emit('update:layout', mainLayoutVue)
    }
  }

</script>

<style>

</style>