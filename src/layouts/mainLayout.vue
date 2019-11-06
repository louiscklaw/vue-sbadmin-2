<template>
  <div class="LayoutDefault">
    <div id="page">

      <!-- Page Wrapper -->
      <div id="wrapper">
        <app-sidebar />
        <div id="content-wrapper" class="d-flex flex-column">

          <!-- Main Content -->
          <div id="content">
            <app-topbar />

            <slot />

          </div>
          <!-- End of Main Content -->

          <app-footer />
        </div>
        <!-- End of Content Wrapper -->
      </div>
      <!-- End of Page Wrapper -->

      <scroll-to-top />
      <logout-modal />

    </div>

  </div>
</template>

<script>
  import topbar from "../components/topbar.vue";
  import sidebar from '../components/sidebar.vue'
  import footer from '../components/footer.vue'


  export default {
    components:{
      "app-topbar": topbar,
      'app-sidebar': sidebar,
      'app-footer': footer
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i');
  @import url('../assets/css/sb-admin-2.css');
</style>