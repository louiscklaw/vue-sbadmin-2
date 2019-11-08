<template>
  <div>
    <code ref="testcode" @click="testClick">{{ testpre }}</code>
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

</style>