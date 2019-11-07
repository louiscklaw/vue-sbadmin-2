<template>
  <div class="container">
    <div class="heading">
      <h1 class="h3 mb-2 text-gray-800">Credits and change logs</h1>
      <p class="mb-4">listing out the referenced opensource/free projects.</p>

    </div>

    <div class="row justify-content-md-center">
      <div class="col-lg-6">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">credits</h6>
          </div>
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

      <div class="col-lg-6">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">change logs</h6>
          </div>
          <div class="card-body" v-for="change in change_logs" :key="change_logs.indexOf(change)">
            <div class="row">
              <div class="col-12">
                <p>{{ change.date }}</p>
                <p>{{ change.desc }}</p>
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
          } ],
        change_logs: [ {
            date: '2019-11-07',
            desc: 'init commit'
          } ]
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

  .heading {
    text-align: center;
  }
</style>