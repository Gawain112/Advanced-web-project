<template>
  <el-main>
    <el-row><h1>Search</h1></el-row>
    <el-row>
      <el-col :span="4"
        ><label for="cardiomyopathyTypeInput">Cardiomyopathy Type:</label></el-col
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
        >
          <el-option v-for="key in mutatedGenes" :key="key" :value="key">{{
            key
          }}</el-option></el-select
        ></el-col
      >
    </el-row>
  </el-main>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Search",
  setup() {
    const data = {
      TPM1: {},
      TNNT: {
        cardiomyopathyTypes: [
          "hypertrophic cardiomyopathy",
          "standard cardiomyopathy"
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

    console.log(cardiomyopathyTypes);

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
