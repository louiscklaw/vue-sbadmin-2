<template>
  <div>
    <h1>credits page</h1>
  </div>
</template>

<script>
  import mainLayoutVue from '../layouts/mainLayout.vue'

  export default {
    mounted() {
      this.$emit( 'update:layout', mainLayoutVue )
    }
  }
</script>

<style>
  div{
    text-align: center;
  }
</style>