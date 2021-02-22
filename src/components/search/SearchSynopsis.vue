<template>
  <div v-if="geneInfo.synopsis">
    <el-select v-model="selectedSynopsis" @change="log()">
      <el-option
        v-for="(key, value) in geneInfo.synopsis"
        :key="value"
        :value="value"
        :text="key"
        >{{ key }}</el-option
      >
    </el-select>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props) {
    const geneInfo = ref({});
    geneInfo.value.synopsis = {};

    const omimUrlBaseUrl = "https://api.omim.org/api";
    let clinicalSynopsisUrl =
      omimUrlBaseUrl +
      "/clinicalSynopsis/search?format=json&apiKey=Jm05PtgLRD2GxaGYfr4xxg&limit=20&search="+props.toSearch;
    window
      .fetch(clinicalSynopsisUrl)
      .then(async res => {
        return res.json();
      })
      .then(async json => {
        for (let key in json.omim.searchResponse.clinicalSynopsisList) {
          let synopsis = json.omim.searchResponse.clinicalSynopsisList[key];
          geneInfo.value.synopsis[synopsis.clinicalSynopsis.mimNumber] =
            synopsis.clinicalSynopsis.preferredTitle;
        }
        console.log(geneInfo.value);
      });

    const selectedSynopsis = ref("");

    let log = () => {
      console.log(selectedSynopsis.value);
    };

    return { geneInfo, selectedSynopsis, log };
  }
};
</script>
