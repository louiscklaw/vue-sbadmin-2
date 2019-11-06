<template>
  <index-inside></index-inside>
</template>

<script>
  import mainLayout from '../layouts/mainLayout.vue';



  import indexContent from '../components/indexContent.vue'

  // import defaultCardExample from '../components/defaultCardExample.vue'

  export default {
    name: 'index',
    components: {


      "index-inside": indexContent
    },
    created() {
      this.$emit( 'update:layout', mainLayout );
    },
  };
</script>
