<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <app-sidebar/>
    <app-content/>
    <app-footer />

  </div>
  <!-- End of Page Wrapper -->
</template>

<script>
  import footer from './footer.vue'
  import sidebar from './sidebar.vue'
  import content from './content.vue'

export default {
  name: 'wrapper',
  components: {
    'app-content': content,
    'app-sidebar': sidebar,
    'app-footer': footer
  }
}
</script>

<style>

</style>