<template>
  <div>
    <cards-content></cards-content>
  </div>

</template>

<script>
  import cardsContent from '../components/cardsContent.vue'
import mainLayoutVue from '../layouts/mainLayout.vue'

  export default {
    components:{
      'cards-content': cardsContent
    },
    created(){
      this.$emit('update:layout',mainLayoutVue)
    }
  }

</script>

<style>

</style>