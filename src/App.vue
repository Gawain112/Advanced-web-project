<template>
  <appHeader />

  <router-view
    :data="data"
    :user="user"
    @loggedIn="logIn"
    @add-data="addNewData"
  />

  <heart-data
    v-for="data in data"
    :key="data.uuid"
    :data="data"
    @delete-data="deleteData"
  >
  </heart-data>

  <appFooter />
  <Header></Header>

  <Footer></Footer>
</template>

<script>
import { ref, reactive } from "vue";
import heartData from "./views/HeartData/HeartData.vue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  firebaseFireStore,
  firebaseAuthentication,
  timestamp,
} from "./firebase/database.js";

export default {
  name: "App",
  components: { heartData, appHeader: Header, appFooter: Footer },

  setup() {
    const user = ref(null);
    const data = reactive([
      {
        uuid: ref(""),
        gene: ref(""),
        hearttype: ref(""),
        value1: ref(""),
        value2: ref(""),
        csv: ref(""),
      },
    ]);

    firebaseAuthentication.onAuthStateChanged(currentUser => {
      if (currentUser) {
        user.value = currentUser;
        console.log(user.value);

        firebaseFireStore
          .collection("users")
          .doc(user.value.uid)
          .collection("dataAdded")
          .onSnapshot(snapShot => {
            const snapData = [];

            snapShot.forEach(doc => {
              snapData.push({
                uuid: doc.data().uuid,
                gene: doc.data().gene,
                hearttype: doc.data().hearttype,
                value1: doc.data().value1,
                value2: doc.data().value2,
                csv: doc.data().csv,
              });
            });

            data.value = snapData;
          });
      } else {
        user.value == null;
      }
    });

    function addNewData(gene, hearttype, value1, value2, csv) {
      const newData = reactive({
        uuid: new Date().getMilliseconds(),
        gene: gene,
        hearttype: hearttype,
        value1: value1,
        value2: value2,
        csv: csv,
        createdAt: timestamp(),
      });

      data.push(newData);

      firebaseFireStore
        .collection("users")
        .doc(user.value.uid)
        .collection("dataAdded")
        .add(newData);
    }

    function deleteData(uuid) {
      console.log(uuid);

      firebaseFireStore
        .collection("users")
        .doc(user.value.uid)
        .collection("dataAdded")
        .where("uuid", "==", uuid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete();
          });

          const returnedData = data.find(data => data.uuid === uuid);
          const pos = data.indexOf(returnedData);
          data.splice(pos, 1);
        });
    }

    return { user, data, addNewData, deleteData };
  },
  methods: {
    logIn(user) {
      console.log(user);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
