<template>
  <p v-if="user">Hello {{ user }}</p>
</template>
<script>
import { firebaseFireStore } from "@/firebase/database";
import { ref } from "vue";
export default {
  setup() {
    const user = ref(false);
    firebaseFireStore
      .collection("users")
      .doc("Xd8VAl9HMgVbTBs8kM7I")
      .get()
      .then(function(snapshot) {
        user.value = snapshot.data().username;
      });

    return { user };
  }
};
</script>
