<template>
  <el-main>
    <LineChart :data="fakeData"></LineChart>
  </el-main>
</template>

<script>
import LineChart from "@/components/graphs/LineChart.vue";
export default {
  components: { LineChart },
  setup() {
    let fakeData = {
      Title: "Test",
      xAxisTitle: "TestX",
      yAxisTitle: "TestY",
      xValues: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      yValues: [4, 5, 7, 4, 2, 22, 4, 5, 6],
    };

    return { fakeData };
  },
};
</script>

<style></style>
