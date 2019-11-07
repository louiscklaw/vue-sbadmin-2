<template>
  <div class="container">
    <h1 class="h3 mb-2 text-gray-800">Credits</h1>
    <p class="mb-4">listing out the referenced opensource/free projects.</p>

    <div class="row justify-content-md-center">
      <div class="col-lg-6">
        <div class="card shadow mb-4">
          <div class="card-body" v-for="credit in credit_list" :key="credit_list.indexOf(credit)">
            <div class="row">
              <div class="col-12">
                <p>{{ credit.desc }}</p>
                <a class="credit_link" :href="credit.link">{{ credit.name }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mainLayoutVue from '../layouts/mainLayout.vue'

  export default {
    data() {
      return {
        credit_list: [ {
            desc: 'origional theme provider',
            name: 'sb-admin-2',
            link: 'https://startbootstrap.com/themes/sb-admin-2/'
          }, {
            desc: 'chartjs',
            name: 'www.chartjs.org/',
            link: '//www.chartjs.org/'
          }, {
            desc: 'vue-chartjs',
            name: 'vue-chartjs.org/',
            link: '//vue-chartjs.org/'
          }, {
            desc: 'data table / grid',
            name: 'github.com/matfish2/vue-tables-2',
            link: '//github.com/matfish2/vue-tables-2'
          }, {
            desc: 'vue',
            name: 'vuejs.org',
            link: 'vuejs.org'
          }
        ]
      }
    },
    created() {
      this.$emit( 'update:layout', mainLayoutVue )
    }
  }
</script>

<style scroped>
  .page_title {
    text-align: center;
  }

  .credit_link {

    font-size: 1.75rem;
  }
</style>