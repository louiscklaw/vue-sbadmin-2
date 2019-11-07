<script>
  import {
    Bar
  } from 'vue-chartjs'

  export default {
    extends: Bar,
    data: () => ( {
      chartdata: {
        labels: [ "January", "February", "March", "April", "May", "June" ],
        datasets: [ {
          label: "Revenue",
          backgroundColor: "#4e73df",
          hoverBackgroundColor: "#2e59d9",
          borderColor: "#4e73df",
          data: [ 4215, 5312, 6251, 7841, 9821, 14984 ],
        } ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        layout: {
          padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0
          }
        },
        legend: {
          display: false
        },

        scales: {
          xAxes: [ {
            time: {
              unit: 'month'
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              maxTicksLimit: 6
            },
            maxBarThickness: 25,
          } ],

          yAxes: [ {

            gridLines: {
              color: "rgb(234, 236, 244)",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              borderDash: [ 2 ],
              zeroLineBorderDash: [ 2 ]
            }
          } ]
        },

        tooltips: {
          titleMarginBottom: 10,
          titleFontColor: '#6e707e',
          titleFontSize: 14,
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        }
      }
    } ),

    mounted() {
      this.renderChart( this.chartdata, this.options )
    }
  }
</script>

<style>

</style>