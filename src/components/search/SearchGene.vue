<template>
  <el-main>
    <el-card>
      <template #header>
        <h1>{{ geneSymbol }}</h1>
      </template>
      <div v-if="geneInfo.basicInfo">
        <el-row><h2>Basic Information</h2></el-row>
        <el-row v-for="(value, key) in geneInfo.basicInfo" :key="key">
          <p class="text-success fw-bold">{{ key }}:&nbsp;</p>
          <p class="fst-italic">{{ value }}</p>
        </el-row>
      </div>
    </el-card>
  </el-main>
</template>

<script>
import { ref } from "vue";

export default {
  name: "External Search",
  props: {
    geneSymbol: {
      name: "Gene Symbol",
      type: String,
      required: true
    }
  },
  setup(props) {
    const geneInfo = ref({});

    const geneInfoUrl = "http://rest.genenames.org/fetch/symbol/";

    window
      .fetch(geneInfoUrl + props.geneSymbol, {
        headers: {
          Accept: "application/json"
        }
      })
      .then(async res => {
        return res.json();
      })
      .then(async json => {
        geneInfo.value["basicInfo"] = json.response.docs[0];
        console.log(geneInfo.value["basicInfo"]);
      });

    return { geneInfo };
  }
};
</script>

<style></style>
