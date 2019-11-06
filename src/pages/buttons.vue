<template>
  <buttons-content></buttons-content>
</template>

<script>
  import mainLayoutVue from '../layouts/mainLayout.vue'
  import buttonsContent from '../components/buttonsContent.vue'

  export default {
    components:{
      'buttons-content':buttonsContent
    },
    created(){
      this.$emit('update:layout',mainLayoutVue)
    }
  }
</script>
