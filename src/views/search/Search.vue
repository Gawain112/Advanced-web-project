<template>
  <el-main>
    <el-card class="box-card">
      <template #header>
        <div class="card-header border-bottom">
          <h1 class="display-1">Search</h1>
        </div>
      </template>
      <el-row>
        <el-col :span="24">
          <el-input
            v-model="search"
            placeholder="Type here to Search"
            @input="submitPressed = false"
          ></el-input>
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
        <SearchGene :gene-symbol="search" />
        <SearchData :gene="search" />
      </div>
      <div v-else>
        <h2 class="mt-5">Search results will appear here</h2>
      </div>
    </el-card>
  </el-main>
</template>

<script>
import { ref } from "vue";
import SearchGene from "@/components/search/SearchGene";
import SearchData from "@/components/search/SearchData";

export default {
  name: "Search",
  components: { SearchGene, SearchData },
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
