<template>
  <div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Tables</h1>
    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more
      information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official
        DataTables documentation</a>.
        </p>

    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
      </div>
      <div class="card-body">
        <v-client-table :data="tableData" :columns="columns" :options="options" />
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  import {
    ClientTable
  } from 'vue-tables-2';
  Vue.use( ClientTable, {}, false, 'bootstrap4', 'footerPagination' );

  export default {
    data() {
      return {
        columns: [ 'id', 'name', 'age', 'email', 'phone', 'registered', 'balance' ],
        tableData: [],
        options: {
          // see the options API
        }
      }
    },
    created() {
      fetch( '../json/sample_user.json' )
        .then( res => res.json() )
        .then( res_json => this.tableData = res_json )
    }
  }
</script>