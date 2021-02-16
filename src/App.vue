<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/adddata">Add Data</router-link>
  <router-view />

  <add-data @add-data="addNewData"></add-data>
  <heart-data
  v-for="data in data"
  :key="data.id"
  :data="data"
  @delete-data="deleteData">
  </heart-data>
<h1> {{hearttype}} </h1>
</template>

<script>
import { ref, reactive } from "vue";
import addData from "./components/AddData/AddDataForm.vue";
import heartData from "./components/AddData/HeartData.vue";
import { firebaseFireStore, timestamp } from "./firebase/database.js";
export default {
  name: "App",
  components: { addData, heartData },

  setup() {
    const addedInfo = ref(null);
    const data = reactive([{
      hearttype: "Force-Time curve",
      value1: "Test 1",
      value2: "Test 1",
    }]);

    firebaseFireStore
        .collection("addedData")
        .doc("gTMrlk9khbrJKs7h6Rjg")
        .get()
        .then((snapshot) => {
          addedInfo.value = snapshot.data().hearttype;
          addedInfo.value = snapshot.data().value1;
          addedInfo.value = snapshot.data().value2;
        }); 

    function addNewData(hearttype, value1, value2) {
      const newData = reactive({
        hearttype: hearttype,
        value1: value1,
        value2: value2,
        createdAt: timestamp()
      });

      data.push(newData);

      firebaseFireStore.collection("addedData")
      .doc(addedInfo.value.uid)
      .collection("dataAdded")
      .add(newData);

    }

    function deleteData(hearttype) {
      const returnedData = data.find(data => data.hearttype === hearttype);
      const pos = data.indexOf(returnedData);
      data.splice(pos, 1);
    }   
      
    return { addedInfo, data, addNewData, deleteData };
      
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
