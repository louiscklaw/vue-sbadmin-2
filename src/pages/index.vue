<template>
  <index-content></index-content>
</template>

<script>
  import mainLayout from '../layouts/mainLayout.vue';
  import indexContent from '../components/indexContent.vue'

  export default {
    name: 'index',
    components: {
      "index-content": indexContent
    },
    created() {
      this.$emit( 'update:layout', mainLayout );
    },
    metaInfo: {
      title: 'My Example App',
      titleTemplate: '%s - Yay!',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    }
  }
</script>
