<template>
  <el-card class="box-card-main">
    <el-row>
      <el-col>
        <el-card>Data Type: {{ data.hearttype }}</el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-card>Value 1: {{ data.value1 }}</el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-card>Value 2: {{ data.value2 }}</el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-button type="submit" @click="deleteSubmittedData"
          >Delete Data</el-button
        >
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { firebaseFireStore } from "@/firebase/database";

export default {
  name: "HeartData",
  setup(props) {
    function deleteSubmittedData() {
      let uuid = "test";

      firebaseFireStore
        .collection("users")
        .doc(props.user.value.uid)
        .collection("dataAdded")
        .where("uuid", "==", uuid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete();
          });
        });
    }

    return { deleteSubmittedData };
  },
};
</script>
