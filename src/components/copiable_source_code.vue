<template>
  <div class="copiable-source-code-container"  @click="testClick">
    <p>click to copy</p>
    <code ref="testcode">
      {{ testpre }}
    </code>
  </div>
</template>

<script>
  export default {
    props: ["testpre"],
    methods:{
      testClick: function () {
        this.$copyText(this.$refs.testcode.innerHTML)
        alert('source code copied !')
      }
    }
  }
</script>

<style>
  .copiable-source-code-container:hover {
    color: green;
    background-color: rgba(224, 224, 224, 0.5)
  }
</style>