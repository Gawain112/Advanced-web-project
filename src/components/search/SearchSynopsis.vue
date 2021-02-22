<template>
  <el-card class="mt-2">
    <template #header>
      <h1>{{ toSearch }}</h1>
    </template>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else-if="geneInfo.synopsis">
      <div
        v-for="(key, value) in geneInfo.synopsis"
        :key="value"
        :value="value"
        :text="key"
      >
        <el-row
          ><p class="text-secondary">{{ key }}</p></el-row
        >
      </div>
    </div>
  </el-card>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    toSearch: {
      name: "Search Phrase",
      type: String,
      required: true
    }
  },
  name: "Synopsis Search",
  setup(props) {
    const geneInfo = ref({});
    geneInfo.value.synopsis = {};

    const omimUrlBaseUrl = "https://api.omim.org/api";
    let clinicalSynopsisUrl =
      omimUrlBaseUrl +
      "/clinicalSynopsis/search?format=json&apiKey=Jm05PtgLRD2GxaGYfr4xxg&limit=20&search=" +
      props.toSearch;
    window
      .fetch(clinicalSynopsisUrl)
      .then(async res => {
        return res.json();
      })
      .then(async json => {
        console.log(json);
        for (let key in json.omim.searchResponse.clinicalSynopsisList) {
          let synopsis = json.omim.searchResponse.clinicalSynopsisList[key];
          geneInfo.value.synopsis[synopsis.clinicalSynopsis.mimNumber] =
            synopsis.clinicalSynopsis.preferredTitle;
        }
      });

    return { geneInfo };
  }
};
</script>
