<template>

  <!-- Circle Buttons -->
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Circle Buttons</h6>
    </div>
    <div class="card-body">
      <p>Use Font Awesome Icons (included with this theme package) along with the circle
        buttons as shown in the examples below!</p>
      <!-- Circle Buttons (Default) -->
      <div class="mb-2">
        <code>.btn-circle</code>
      </div>


      <circle-button v-for="button in buttons" :key="buttons.indexOf(button)" :fa_class="button[0]"
        :a_class="button[1]" />

      <!-- Circle Buttons (Small) -->
      <div class="mt-4 mb-2">
        <code>.btn-circle .btn-sm</code>
      </div>

      <circle-button v-for="button in buttons" :key="'btn-sm'+buttons.indexOf(button)" :fa_class="button[0]"
        :a_class="button[1] + ' ' + 'btn-sm'" />


      <!-- Circle Buttons (Large) -->
      <div class="mt-4 mb-2">
        <code>.btn-circle .btn-lg</code>
      </div>

      <circle-button v-for="button in buttons" :key="'btn-lg'+buttons.indexOf(button)" :fa_class="button[0]"
        :a_class="button[1] + ' ' + 'btn-lg'" />

    </div>
  </div>
</template>

<script>
  import circlebuttonVue from './button/circlebutton.vue';

  export default {
    data() {
      return {
        buttons: [
          [ 'fab fa-facebook-f', 'btn-primary' ],
          [ 'fas fa-check', 'btn-success' ],
          [ 'fas fa-info-circle', 'btn-info' ],
          [ 'fas fa-exclamation-triangle', 'btn-warning' ],
          [ 'fas fa-trash', 'btn-danger' ]
        ]
      }
    },
    components: {
      'circle-button': circlebuttonVue
    }
  }
</script>

<style scoped>
  circle-button{
    padding: 5px;
  }
</style>