<template>

  <!-- Begin Page Content -->
  <div class="container-fluid">

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Cards</h1>
    </div>

    <div class="row">
      <div class="col-xl-3 col-md-6 mb-4" v-for="small_card in small_cards"
        :key="'card'+small_cards.indexOf(small_card)">
        <card-widget :description="small_card[0]" :value="small_card[1]" :fa_icon="small_card[2]"
          :color="small_card[3]" />

      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <default-card />
        <basic-card />
      </div>

      <div class="col-lg-6">
        <dropdown-card />
        <collapsable-card />
      </div>

    </div>

  </div>
  <!-- /.container-fluid -->

</template>

<script>
  import mainLayoutVue from '../layouts/mainLayout.vue'
  import card_widgetVue from './cards/card_widget.vue'
  import collapsableCardExample from './collapsableCardExample.vue'
  import dropdownCardExample from './dropdownCardExample.vue'
  import basicCardExample from './basicCardExample.vue'
  import defaultCardExample from './cards/defaultCardExample.vue'

  export default {
    data() {
      return {
        small_cards: [
          [ 'Earnings (Monthly)', '$40,000', 'fas fa-calendar fa-2x text-gray-300', 'primary' ],
          [ 'Earnings (Annual)', '$215,000', 'fas fa-dollar-sign fa-2x text-gray-300', 'success' ],
          // TODO: this is a button with progress bar
          [ 'Tasks', '50%', 'fas fa-calendar fa-2x text-gray-300', 'info' ],
          [ 'Pending Requests', '18', 'fas fa-comments fa-2x text-gray-300', 'warning' ],
        ]
      }
    },
    components: {
      'card-widget': card_widgetVue,
      'collapsable-card': collapsableCardExample,
      'dropdown-card': dropdownCardExample,
      'basic-card': basicCardExample,
      'default-card': defaultCardExample
    },
    created() {
      this.$emit( 'update:layout', mainLayoutVue )
    }
  }
</script>
