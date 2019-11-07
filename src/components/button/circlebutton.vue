<template>
  <a href="#" :class="'btn btn-circle '+a_class">
    <i :class="fa_class"></i>
  </a>
</template>

<script>
  export default {
    props: [
      'fa_class',
      'a_class'
      ]
  }
</script>

<style>

</style>