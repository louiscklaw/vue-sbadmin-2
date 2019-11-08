<template>
  <div>
    <vuetable2-content />
  </div>
</template>

<script>
  import mainLayoutVue from '../layouts/mainLayout.vue'
  import vuetable2Content from '../components/vuetable2Content.vue'

  export default {
    components:{
      'vuetable2-content': vuetable2Content
    },
    created() {
      this.$emit( 'update:layout', mainLayoutVue )
    }
  }
</script>
