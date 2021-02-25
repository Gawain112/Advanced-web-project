<template>
  <el-main>
    <el-card>
      <template #header>
        <h2>{{ geneSymbol }}</h2>
      </template>
      <div v-if="error">
        <el-row>{{ error }}</el-row>
      </div>
      <div v-else-if="geneInfo.entry">
        <el-row><h2>Basic Information</h2></el-row>
        <el-row>
          <el-col :span="4"><p class="text-primary fs-bold">Name:</p></el-col>
          <el-col :span="20"
            ><p class="text-secondary">
              {{ geneInfo.entry.titles.preferredTitle }}
            </p></el-col
          >
        </el-row>
        <el-row>
          <el-col :span="4"
            ><p class="text-primary fs-bold">Description:</p></el-col
          >
          <el-col :span="20">
            <p class="text-secondary">
              {{
                geneInfo.entry.textSectionList[0].textSection.textSectionContent
              }}
            </p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4"
            ><p class="text-primary fs-bold">Assosiated Diseases:</p></el-col
          >
          <el-col :span="20">
            <ol>
              <li
                v-for="disease in geneInfo.entry.geneMap.phenotypeMapList"
                :key="disease"
                class="text-secondary"
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
  name: "GeneAdditionalInformation",
  props: {
    geneSymbol: {
      name: "Gene Symbol",
      type: String,
      required: true,
    },
  },
  setup(props) {
    const geneInfo = ref({});
    const error = ref("");

    const geneInfoUrl =
      "https://api.omim.org/api/entry/search?start=0&limit=20&format=json&include=geneMap&include=text&apiKey=Jm05PtgLRD2GxaGYfr4xxg&search=" +
      "approved_gene_symbol:" +
      props.geneSymbol;

    window
      .fetch(geneInfoUrl, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(async res => {
        return res.json();
      })
      .then(async json => {
        if (Object.keys(json.omim.searchResponse.entryList).length > 0) {
          geneInfo.value = json.omim.searchResponse.entryList[0];
        } else {
          error.value =
            "Could not find information on this gene, checked: " + geneInfoUrl;
        }
        console.log(geneInfo.value);
      });

    return { geneInfo, error };
  },
};
</script>

<style></style>
