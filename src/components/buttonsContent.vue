<template>

  <!-- Begin Page Content -->
  <div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-4 text-gray-800">Buttons</h1>

    <div class="row">

      <div class="col-lg-6">
        <circle-button-card />
        <brand-button-card />

      </div>

      <div class="col-lg-6">
        <split-button-card />
      </div>

    </div>

  </div>
  <!-- /.container-fluid -->

</template>

<script>
import circlebuttonCardVue from './circlebuttonCard.vue';
import brandbuttonCardVue from './brandbuttonCard.vue';
import splitbuttonCardVue from './splitbuttonCard.vue';
  export default {
    components:{
      'circle-button-card': circlebuttonCardVue,
      'brand-button-card': brandbuttonCardVue,
      'split-button-card':splitbuttonCardVue
    }
  }
</script>

<style>

</style>