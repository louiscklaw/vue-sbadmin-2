<template>

  <!-- Brand Buttons -->
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Brand Buttons</h6>
    </div>
    <div class="card-body">
      <p>Google and Facebook buttons are available featuring each company's respective
        brand color. They are used on the user login and registration pages.</p>
      <p>You can create more custom buttons by adding a new color variable in the
        <code>_variables.scss</code> file and then using the Bootstrap button variant
        mixin to create a new style, as demonstrated in the <code>_buttons.scss</code>
        file.</p>

      <brandbutton :button_fa="'fab fa-google fa-fw'" :button_class="'btn-google'" :button_text="'.btn-google'" />

      <brandbutton :button_fa="'fab fa-facebook-f fa-fw'" :button_class="'btn-facebook'" :button_text="'.btn-facebook'" />

    </div>
  </div>

</template>

<script>
  import brandbuttonVue from './button/brandbutton.vue';
  export default {
    components: {
      'brandbutton': brandbuttonVue
    }
  }
</script>

<style>

</style>