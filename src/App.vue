<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/adddata">Add Data</router-link> |
  <router-link to="/heartdata">Heart Data</router-link>
  <router-view @add-data="addNewData"/>

  <heart-data 
  v-for="data in data"
  :key="data.uuid"
  :data="data"
  @delete-data="deleteData">
  </heart-data>

  <!-- <router-view 
  v-for="data in data"
  :key="data.uuid"
  :data="data"
  @add-data="addNewData"
  @delete-data="deleteData"/> -->
  
</template>


<script>
import { ref, reactive } from "vue";
import heartData from "./views/HeartData/HeartData.vue";
import { firebaseFireStore, timestamp } from "./firebase/database.js";
 
export default {
  name: "App",
  components: { heartData },

  setup() {
    const addedInfo = ref(null);
    const data = reactive([{
      uuid: " ",
      hearttype: "Force-Time curve",
      value1: "Test 1",
      value2: "Test 1",
    }]);

     firebaseFireStore
        .collection("addedData")
        .doc("CmfvL1XyujCRhmnEOEzq")
        .get()
        .then((snapshot) => {
          addedInfo.value = snapshot.data().hearttype;
          addedInfo.value = snapshot.data().value1;
          addedInfo.value = snapshot.data().value2;
        });  

      /* firebaseFireStore
      .collection("addedData")
      .doc("bGHbGugKUXpUjXwXRmpy")
      .collection("dataAdded")
      .onSnapshot((snapShot) => {
        const snapData = [];

        snapShot.forEach((doc) => {
          snapData.push({
            hearttype: doc.data().hearttype,
            value1: doc.data().value1,
            value2: doc.data().value2
          });
        });
        addedInfo.value = snapData;
        console.log(snapData);
      }); */ 
        

    function addNewData(hearttype, value1, value2) {
      const newData = reactive({
        uuid: new Date().getMilliseconds(),
        hearttype: hearttype,
        value1: value1,
        value2: value2,
        createdAt: timestamp()
      });

      data.push(newData);
    

      firebaseFireStore
      .collection("addedData")
      .doc(addedInfo.value.uid)
      .collection("dataAdded")
      .add(newData);
  
    }

        function deleteData(uuid) {
        console.log(uuid);
        
        firebaseFireStore
        .collection("addedData")
        .doc(addedInfo.value.uid)
        .collection("dataAdded")
        .where("uuid", "==", uuid )
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.delete();
          });
        });
        
        /* {
          if (querySnapshot.size > 0 ) {
            console.log(querySnapshot.docs[0].data());
          } else {
            console.log("No Data");
          }
          })
          .catch(function(error){
                console.error("Error removing " + error);
          }); */
        
        } 

/*       function deleteData(hearttype){

        var q = firebaseFireStore.collection("addedData")
        .doc(addedInfo.value.uid)
        .collection("dataAdded")
        .where("hearttype", "==", hearttype);
        
        console.log(q.get());

        q.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
          console.log("SUCCESS");
          });
        });
      } */

    /* function deleteData(hearttype) {
      const returnedData = data.find(data => data.hearttype === hearttype);
      const pos = data.indexOf(returnedData);
      data.splice(pos, 1); 
    } */
      
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
