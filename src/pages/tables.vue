
<template>
  <tables-content />
</template>
<script>
  import tablesContent from '../components/tablesContent.vue'
  import mainLayoutVue from '../layouts/mainLayout.vue'

  export default {
    components: {
      'tables-content': tablesContent
    },
    created(){
      this.$emit('update:layout', mainLayoutVue)
    }
  }
</script>
<style>
</style>
  