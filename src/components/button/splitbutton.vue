<template>
  <a href="#" :class="'btn btn-icon-split '+button_color">
    <span class="icon text-white-50">
      <i :class="button_fa"></i>
    </span>
    <span class="text">{{ button_text }}</span>
  </a>
</template>

<script>
  export default {
    props:['button_text', 'button_fa','button_color']
  }
</script>

<style>

</style>