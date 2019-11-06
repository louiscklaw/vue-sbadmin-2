<template>
  <p>cards content</p>
</template>

<script>
  import mainLayoutVue from '../layouts/mainLayout.vue'

  export default {
    created() {
      this.$emit( 'update:layout', mainLayoutVue )
    }
  }
</script>

<style>

</style>