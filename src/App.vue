<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/adddata">Add Data</router-link>
  <router-view />


 <add-data @add-data="addNewData"></add-data>
  <heart-data
  v-for="data in data"
  :key="data.id"
  :data="data">
  </heart-data>

</template>

<script>
import { reactive } from "vue";
import addData from "./components/AddData/AddDataForm.vue";
import heartData from "./components/AddData/HeartData.vue";
export default {
  name: "App",
  components: { addData, heartData },

  setup() {
          const data = reactive([{
            hearttype: "Force-Time curve",
            value1: "Test 1",
            value2: "Test 1",
        }]
  );

    function addNewData(hearttype, value1, value2) {
      const newData = reactive({
        hearttype: hearttype,
        value1: value1,
        value2: value2
      });

      data.push(newData);

    }

    
    return { data, addNewData };
  }
};

</script> 
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
