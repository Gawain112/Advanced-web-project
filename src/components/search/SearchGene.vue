<template>
  <el-main>
    <el-card>
      <template #header>
        <h1>{{ geneSymbol }}</h1>
      </template>
      <div v-if="error">
        <el-row>{{ error }}</el-row>
      </div>
      <div v-else-if="geneInfo.basicInfo">
        <el-row><h2>Basic Information</h2></el-row>
        <el-row>
          <el-col :span="4"><p class="text-primary fs-bold">Name:</p></el-col>
          <el-col :span="20"
            ><p class="text-secondary">
              {{ geneInfo.basicInfo.nomenclaturename }}
            </p></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="4"
            ><p class="text-primary fs-bold">Description:</p></el-col
          >
          <el-col :span="20"
            ><p class="text-secondary">
              {{ geneInfo.basicInfo.summary }}
            </p></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="4"
            ><p class="text-primary fs-bold">Other Aliases:</p></el-col
          >
          <el-col :span="20"
            ><p class="text-secondary">
              {{ geneInfo.basicInfo.otheraliases }}
            </p></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="4"
            ><p class="text-primary fs-bold">Assosiated Diseases:</p></el-col
          >
          <el-col :span="20">
            <ul>
              <li v-for="disease in geneInfo.dbDiseases" :key="disease">
                {{ disease.diseaseName }}
              </li>
            </ul>
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

    let cardiomyopathyData = require("@/assets/cardiomyopathyData.json");
    geneInfo.value = cardiomyopathyData["genes"].filter(e => {
      return e.entrezGeneSymbol == props.geneSymbol;
    })[0];

    if (!geneInfo.value) {
      error.value = "Could not find additional gene information.";
    } else {
      const geneInfoUrl =
        "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?retmode=json&db=gene&id=" +
        geneInfo.value.entrezGeneId;

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
          geneInfo.value["basicInfo"] =
            json.result[geneInfo.value.entrezGeneId];
        });
    }

    return { geneInfo, error };
  }
};
</script>

<style></style>
