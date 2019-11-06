<template>
  <!-- Topbar -->
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

    <!-- Sidebar Toggle (Topbar) -->
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
      <i class="fa fa-bars"></i>
    </button>

    <topbar-search />
    <topbar-navbar />

  </nav>
  <!-- End of Topbar -->
</template>

<script>
  import topbarNavbar from "../components/topbarNavbar.vue";
  import topbarSearch from "../components/topbarSearch.vue";

  export default {
    name: 'app-topbar',
    components: {
      "topbar-search": topbarSearch,
      "topbar-navbar": topbarNavbar,
    }
  }
</script>

<style>

</style>