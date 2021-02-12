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

    const base_url = "https://api.omim.org/api";

    async function search() {
      let url = base_url + searchQuery.value;
      console.log(url);
      window
        .fetch(url)
        .then(res => res.ok ? res.text() : "")
        .then(resText => console.log(resText));
    }

    return { search, searchQuery, searchResults };
  }
};
</script>

<style></style>
