<template>

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
    </div>
    <div class="card-body">
      <p>Works with any button colors, just use the <code>.btn-icon-split</code> class and
        the markup in the examples below. The examples below also use the
        <code>.text-white-50</code> helper class on the icons for additional styling,
        but it is not required.</p>


      <div class="split-button-container" v-for="button in buttons" :key="buttons.indexOf(button)">
        <split-button  :button_text="button[0]" :button_fa="button[1]" :button_color="button[2]" />
      </div>

    </div>
  </div>

</template>

<script>
  import splitbuttonVue from './button/splitbutton.vue';
  export default {
    data() {
      return {
        buttons: [
          [ 'Split Button Primary', 'fas fa-flag', 'btn-primary' ],
          [ 'Split Button Success', 'fas fa-check', 'btn-success' ],
          [ 'Split Button Info', 'fas fa-info-circle', 'btn-info' ],
          [ 'Split Button Warning', 'fas fa-exclamation-triangle', 'btn-warning' ],
          [ 'Split Button Danger', 'fas fa-trash', 'btn-danger' ],
          [ 'Split Button Secondary', 'fas fa-arrow-right', 'btn-secondary' ],
          [ 'Split Button Primary', 'fas fa-arrow-right', 'btn-light' ],
          [ 'Split Button Small', 'fas fa-flag', 'btn-primary btn-sm' ],
          [ 'Split Button Large', 'fas fa-flag', 'btn-primary btn-lg' ],
        ]
      }
    },
    components: {
      'split-button': splitbuttonVue
    }
  }
</script>

<style scroped>
  .split-button-container{
    padding: 5px;
  }
</style>