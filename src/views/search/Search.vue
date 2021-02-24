<template>
  <el-main>
    <el-row><h1>Search</h1></el-row>
    <el-row>
      <el-col :span="4"
        ><label for="cardiomyopathyTypeInput">Type to search: </label></el-col
      >
      <el-col :span="16">
        <el-input v-model="search" @input="submitPressed = false"></el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="selectedSearchType" @change="submitPressed = false">
          <el-option default value="genes">Genes</el-option>
          <el-option value="synopsis">Clinical Synopsis</el-option>
          <el-option value="phenotype">Phenotype</el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24" class="mt-2"
        ><el-button
          id="search-button"
          @click="submitPressed = true"
          @keyup.enter="submitPressed = true"
          >Search</el-button
        ></el-col
      >
    </el-row>

    <div v-if="submitPressed">
      <div v-if="selectedSearchType == 'synopsis'">
        <SearchSynopsis :to-search="search" />
      </div>
      <div v-if="selectedSearchType == 'genes'">
        <SearchGene :gene-symbol="search" />
      </div>
    </div>
  </el-main>
</template>

<script>
import { ref } from "vue";
import SearchGene from "@/components/search/SearchGene";
import SearchSynopsis from "@/components/search/SearchSynopsis";

export default {
  name: "Search",
  components: { SearchGene, SearchSynopsis },
  setup() {
    const selectedSearchType = ref("");
    const search = ref("");
    const submitPressed = ref(false);

    return {
      selectedSearchType,
      submitPressed,
      search,
    };
  },
};
</script>
