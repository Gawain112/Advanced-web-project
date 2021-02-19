<template>
  <el-main>
    <el-row><h1>Search</h1></el-row>
    <el-row>
      <el-col :span="4"
        ><label for="cardiomyopathyTypeInput"
          >Cardiomyopathy Type:</label
        ></el-col
      >
      <el-col :span="20"
        ><el-select
          style="width: 90%"
          id="cardiomyopathyTypeInput"
          v-model="selectedCardiomyopathyType"
        >
          <el-option
            v-for="key in cardiomyopathyTypes"
            :key="key"
            :value="key"
            >{{ key }}</el-option
          ></el-select
        ></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="4"
        ><label for="mutatedGeneInput">Mutated Gene:</label></el-col
      >
      <el-col :span="20"
        ><el-select
          style="width: 90%"
          id="mutatedGeneInput"
          v-model="selectedMutatedGene"
          @click="selectedMutatedGene = null"
        >
          <el-option v-for="key in mutatedGenes" :key="key" :value="key">{{
            key
          }}</el-option></el-select
        ></el-col
      >
    </el-row>

    <div v-if="selectedMutatedGene">
      <SearchGene v-bind:geneSymbol="selectedMutatedGene" />
    </div>
  </el-main>
</template>

<script>
import { ref } from "vue";
import SearchGene from "@/components/search/SearchGene";

export default {
  name: "Search",
  components: { SearchGene },
  setup() {
    const data = {
      TPM1: {},
      TNNT2: {
        cardiomyopathyTypes: [
          "hypertrophic cardiomyopathy",
          "dilated cardiomyopathy"
        ]
      },
      MYH: {
        cardiomyopathyTypes: [
          "hypertrophic cardiomyopathy",
          "standard cardiomyopathy"
        ]
      }
    };

    let selectedMutatedGene = ref("");
    let selectedCardiomyopathyType = ref("");

    let mutatedGenes = Object.keys(data);
    let cardiomyopathyTypes = Object.values(data).filter(e => {
      return e.cardiomyopathyTypes;
    });
    cardiomyopathyTypes = cardiomyopathyTypes.values();

    let searchResults = ref("");

    let search = async () => {};

    return {
      mutatedGenes,
      cardiomyopathyTypes,
      searchResults,
      selectedMutatedGene,
      selectedCardiomyopathyType,
      search
    };
  }
};
</script>
