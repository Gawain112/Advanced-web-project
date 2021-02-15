<template>
  <el-main>
    <el-card>
      <template #header>
        <h1>Search external databases</h1>
      </template>
      <el-row>
        <el-col :span="16">
          <el-input
            placeholder="Type something"
            prefix-icon="el-icon-search"
            v-model="searchQuery"
          ></el-input>
        </el-col>
        <el-col :span="4">
          <el-button @click="search">Search</el-button>
        </el-col>
      </el-row>
    </el-card>
  </el-main>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const searchQuery = ref("");
    const searchResults = ref([]);

    const data = require("../../assets/cardiomyopathyData.json");

    async function searchByGeneSymbol() {
      searchResults.value = data.genes.filter(data => {
        return data.entrezGeneSymbol == searchQuery.value;
      });

      console.log(searchResults.value);
    }

    async function search(){
      searchByGeneSymbol();
    }

    return { search, searchQuery, searchResults };
  }
};
</script>

<style></style>
