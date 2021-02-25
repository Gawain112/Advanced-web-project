<template>
  <div v-if="availableDocuments.length">
    <p>Here are some documents we have on {{ gene }}.</p>
    <ul>
      <li v-for="document in availableDocuments" :key="document">
        <router-link
          :to="{
            name: 'Graph',
            params: {
              geneSymbol: document.data.gene,
              graphId: document.id,
              graphType: document.collection,
            },
          }"
          >{{ document.data.hearttype }}, uploaded by
          {{ document.data.createdBy }}</router-link
        >
      </li>
    </ul>
  </div>
  <div v-else>
    <p>
      We have no documents stored on this gene. Would you like to
      <router-link to="/AddData">Add Some?</router-link>
    </p>
  </div>
</template>

<script>
import { firebaseFireStore } from "@/firebase/database";
import { ref } from "vue";
export default {
  props: {
    gene: {
      required: true,
      type: String,
      default: "",
    },
  },
  setup(props) {
    const selectOptions = [
      "Force-Time curve",
      "Sarcomere Length VS Time",
      "Sliding Velocity VS Calcium Concentration",
      "Tension VS Calcium Concentration",
      "Tension VS Sarcomere Shortening Velocity",
      "Sarcomere Shortening VS Time",
    ];

    const availableDocuments = ref([]);

    selectOptions.forEach(collection => {
      firebaseFireStore
        .collection("data")
        .doc(props.gene.toUpperCase())
        .collection(collection)
        .get()
        .then(res => {
          if (res.empty) return;
          for (let doc in res.docs) {
            let document = {
              collection: collection,
              id: res.docs[doc].id,
              data: res.docs[doc].data(),
            };
            availableDocuments.value.push(document);
          }
          console.log(availableDocuments.value);
        });
    });

    return { availableDocuments };
  },
};
</script>

<style></style>
