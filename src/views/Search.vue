<template>
  <br><h1>Search Results: </h1><br> 
  <SearchGene geneSymbol="NUP107" />
  <SearchGene geneSymbol="AARS2" />
</template>

<script>
import SearchGene from "@/components/search/SearchGene";

export default {
  name: "Search",
  components: { SearchGene }
};
</script>
