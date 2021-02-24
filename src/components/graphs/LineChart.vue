<template>
  <div>
    <VueApexCharts
      type="line"
      height="350"
      width="500"
      :options="chartOptions"
      :series="series"
    ></VueApexCharts>
  </div>
</template>

<script>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
export default {
  components: {
    VueApexCharts,
  },
  props: {
    data: {
      required: false,
      default: null,
      name: "GraphData",
      type: Array,
    },
  },
  setup(props) {
    //data.geneTitle == graph name
    //data.xaxisvals == autogenned
    //data.yaxisvals == autogenned
    //data.xtitle == x axis title
    //data.yaxistitle == y axis titlte
    const chartOptions = ref({
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: props.data.title,
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        title: {
          text: props.data.xAxisTitle,
          categories: props.data.xValues,
        },
      },
      yaxis: {
        title: {
          text: props.data.yAxisTitle,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    });

    //data.xtitle
    //data.ytitle
    const series = ref([
      {
        name: "Test",
        data: props.data.yValues,
      },
    ]);

    return { chartOptions, series };
  },
};
</script>
