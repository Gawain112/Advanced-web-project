<template>
  <el-main>
    <h1>Add Data</h1>

    <el-form ref="addDataForm">
      <el-form-item>
        <el-row><h3>Gene</h3></el-row>
        <el-row
          ><el-radio-group v-model="gene">
            <el-radio label="TNNT">TNNT</el-radio>
            <el-radio label="MYH">MYH</el-radio>
            <el-radio label="MYBPC3">MYBPC3</el-radio>
            <el-radio label="TPM1">TPM1</el-radio>
          </el-radio-group></el-row
        >
      </el-form-item>

      <el-form-item>
        <el-row><h4>Data Type</h4></el-row>
        <el-row
          ><el-col :span="20"
            ><el-select
              v-model="hearttype"
              style="width: 100%"
              clearable
              placeholder="Select"
            >
              <el-option
                v-for="option in selectOptions"
                :key="option"
                :label="option"
                :value="option"
              >
              </el-option> </el-select></el-col
        ></el-row>
      </el-form-item>

      <el-form-item>
        <el-row><h4>Upload CSV File of X and Y axis</h4></el-row>
        <el-row
          ><el-upload
            accept="csv"
            :on-success="uploadCsv"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                The uploaded csv should only contain 2 columns. The first column
                should be the X axis.
              </div>
            </template>
          </el-upload></el-row
        ></el-form-item
      >

      <el-form-item>
        <el-button @click="submitAddedData">Add Data</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="this.$router.push({ path: `home` })"
          >Cancel</el-button
        >
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>
import { ref } from "vue";
import { timestamp, firebaseFireStore } from "@/firebase/database";

export default {
  name: "AddDataForm",
  props: {
    user: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const gene = ref("");
    const hearttype = ref("");
    const csv = ref({});

    const selectOptions = [
      "Force-Time curve",
      "Sarcomere Length VS Time",
      "Sliding Velocity VS Calcium Concentration",
      "Tension VS Calcium Concentration",
      "Tension VS Sarcomere Shortening Velocity",
      "Sarcomere Shortening VS Time",
    ];

    let uploadCsv = async (res, file) => {
      file.raw.text().then(res => {
        csv.value = res;
      });
    };

    let submitAddedData = async () => {
      const newData = {
        uuid: "" + new Date().toLocaleTimeString(),
        gene: "" + gene.value,
        hearttype: "" + hearttype.value,
        csv: "" + csv.value,
        createdAt: "" + timestamp().toString(),
        createdBy: props.user,
      };

      firebaseFireStore
        .collection("data")
        .doc(newData.gene)
        .collection(newData.hearttype)
        .add(newData);
    };

    return {
      gene,
      hearttype,
      csv,
      submitAddedData,
      selectOptions,
      uploadCsv,
    };
  },
};
</script>
