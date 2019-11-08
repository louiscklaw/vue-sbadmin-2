<template>
  <a href="#" :class="'btn btn-block '+button_class">
    <i :class="'fab  fa-fw '+button_fa"></i>
    {{ button_text }}</a>
</template>

<script>
  export default {
    props:[
      'button_fa', 'button_text', 'button_class'
      ]
  }
</script>

<style>

</style>