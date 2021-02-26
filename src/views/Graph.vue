<template>
  <el-main>
    <el-row class="mb-3"><h1>Graph visualizing experimental data</h1></el-row>
    <div v-if="dataReady" id="graph-styling">
      <el-row
        ><el-col :span="24"
          ><VueApexCharts
            type="line"
            width="100%"
            :options="chartOptions"
            :series="series"
          ></VueApexCharts></el-col
      ></el-row>
    </div>
    <el-row
      ><p class="text-primary font-weight-bold">
        To view more graphs like this, log in and search for a gene by its
        approved gene symbol.
      </p></el-row
    >
    <div v-if="graphOwner">
      <el-row
        ><p>You own this graph. Would you like to delete it?</p>
        <el-button type="danger" @click="deleteGraph"
          >Delete Graph</el-button
        ></el-row
      >
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
    user: {
      type: String,
      required: false,
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

    const graphOwner = ref(false);

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
        chartOptions.title.text =
          data.gene +
          ": " +
          data.hearttype +
          ". Uploaded by: " +
          data.createdBy;
        if (props.user == data.createdBy) {
          graphOwner.value = true;
        }
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

    let deleteGraph = () => {
      firebaseFireStore
        .collection("data")
        .doc(props.geneSymbol)
        .collection(props.graphType)
        .doc(props.graphId)
        .get()
        .then(doc => {
          doc.ref.delete();
        });
    };

    return { chartOptions, series, dataReady, graphOwner, deleteGraph };
  },
};
</script>

<style>
#graph-styling {
  margin: 0 auto;
  justify-content: center;
}
</style>
