<template>
  <el-main>
    <el-card>
      <template #header>
        <h1>{{ geneSymbol }}</h1>
      </template>
      <div v-if="error">
        <el-row>{{ error }}</el-row>
      </div>
      <div v-else-if="geneInfo.geneMapList">
        <el-row><h2>Basic Information</h2></el-row>
        <el-row>
          <el-col :span="4"><p class="text-primary fs-bold">Name:</p></el-col>
          <el-col :span="20"
            ><p class="text-secondary">
              {{ geneInfo.geneMapList[0].geneMap.geneName }}
            </p></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="4"
            ><p class="text-primary fs-bold">Assosiated Diseases:</p></el-col
          >
          <el-col :span="20">
            <ol>
              <li
                class="text-secondary"
                v-for="disease in geneInfo.geneMapList[0].geneMap
                  .phenotypeMapList"
                :key="disease"
              >
                {{ disease.phenotypeMap.phenotype }}
              </li>
            </ol>
          </el-col>
        </el-row>
      </div>
      <div v-else>
        <el-row
          v-loading="geneInfo"
          element-loading-text="Loading..."
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
          style="width: 100%; margin-bottom: 4rem; margin-top: 4rem;"
        >
        </el-row>
      </div>
    </el-card>
  </el-main>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Gene Additional Information",
  props: {
    geneSymbol: {
      name: "Gene Symbol",
      type: String,
      required: true
    }
  },
  setup(props) {
    const geneInfo = ref({});
    const error = ref("");

    const geneInfoUrl =
      "https://api.omim.org/api/geneMap/search?start=0&limit=20&format=json&apiKey=Jm05PtgLRD2GxaGYfr4xxg&search=" +
      props.geneSymbol;

    window
      .fetch(geneInfoUrl, {
        headers: {
          Accept: "application/json"
        }
      })
      .then(async res => {
        return res.json();
      })
      .then(async json => {
        if (Object.keys(json.omim.searchResponse.geneMapList).length > 0) {
          geneInfo.value = json.omim.searchResponse;
        } else {
          error.value = "Could not find information on this gene";
        }
      });

    return { geneInfo, error };
  }
};
</script>

<style></style>
