<template>
  <el-main>
    <div v-if="dataReady">
      <VueApexCharts
        type="line"
        height="350"
        width="500"
        :options="chartOptions"
        :series="series"
      ></VueApexCharts>
    </div>
  </el-main>
</template>

<script>
import { firebaseFireStore } from "@/firebase/database";
import VueApexCharts from "vue3-apexcharts";
import { ref } from "vue";

export default {
  components: { VueApexCharts },
  props: {
    graphId: {
      type: String,
      required: true,
      default: "",
    },
    geneSymbol: {
      type: String,
      required: true,
      default: "",
    },
    graphType: {
      type: String,
      required: true,
      default: "",
    },
  },
  setup(props) {
    const dataReady = ref(false);

    const title = "Loading";
    const xAxisTitle = "Loading";
    const yAxisTitle = "Loading";
    const xValues = [1, 1, 1, 1, 1, 1];
    const yValues = [4, 5, 7, 4, 2, 22, 4, 5, 6];

    firebaseFireStore
      .collection("data")
      .doc(props.geneSymbol)
      .collection(props.graphType)
      .doc(props.graphId)
      .get()
      .then(res => {
        return res.data();
      })
      .then(data => {
        loadCsvIntoGraph(data.csv);
        chartOptions.title.text = data.gene + ": " + data.hearttype;
      });

    let loadCsvIntoGraph = async csv => {
      const parser = require("csv-parse");
      parser(csv, { delimiter: ";" }, (err, output) => {
        let xAxis = [];
        let yAxis = [];
        output.forEach(element => {
          if (isNaN(Number(element[0]))) {
            chartOptions.xaxis.title.text = element[0];
            chartOptions.yaxis.title.text = element[1];
          } else {
            xAxis.push(element[0]);
            yAxis.push(element[1]);
          }
        });

        chartOptions.xaxis.categories = xAxis;
        series[0].data = yAxis;
        dataReady.value = true;
      });
    };

    let chartOptions = {
      chart: {
        id: 123,
        height: 350,
        type: "line",
        zoom: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Loading...",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#8080", "#eee"],
          opacity: 0.75,
        },
      },
      xaxis: {
        title: {
          text: xAxisTitle,
        },
        categories: xValues,
      },
      yaxis: {
        title: {
          text: yAxisTitle,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    };

    let series = [
      {
        name: title,
        data: yValues,
      },
    ];

    return { chartOptions, series, dataReady };
  },
};
</script>

<style></style>
