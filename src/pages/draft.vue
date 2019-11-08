<template>
  <div class="container">
    <div class="row ">
      <div class="col-12">
        <div class="heading">
          <h1 class="h3 mb-2 text-gray-800">draft and scratch pad</h1>
          <p class="mb-4">new feature incubator.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              clipboard.js
            </h6>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <source-code
                  :testpre="test_source_code"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mainLayout from '../layouts/mainLayout.vue'
  import copiableSourceCode from '../components/copiable_source_code.vue'

  let test_source_code = "console.log('testing 123')"

  export default {
    data(){
      return {test_source_code: test_source_code}
    },
    mounted() {
      this.$emit( 'update:layout', mainLayout )
    },
    components: {
      'source-code': copiableSourceCode
    }
  }
</script>

<style scroped>

</style>