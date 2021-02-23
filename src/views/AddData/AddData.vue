<template>

<h1>Add Data</h1>

<el-form ref="addDataForm">

<el-form-item>
   <h3>Gene</h3>
   <input style="margin-left:2.5em" type="radio" id="TNNT" value="TNNT" v-model="gene">
   <label for="TNNT"> TNNT</label>
   <input style="margin-left:2.5em" type="radio" id="MYH" value="MYH" v-model="gene">
   <label for="MYH"> MYH</label>
   <input style="margin-left:2.5em" type="radio" id="MYBPC3" value="MYBPC3" v-model="gene">
   <label for="MYBPC3"> MYBPC3</label>
   <input style="margin-left:2.5em" type="radio" id="TPM1" value="TPM1" v-model="gene">
   <label for="TPM1"> TPM1</label>

</el-form-item>

 <el-form-item>
    <h4>Data Type</h4>
    <select v-model="hearttype">
        <option value="Force-Time curve">Force-Time Curve</option>
        <option value="Sarcomere Length VS Time">Sarcomere Length VS Time</option>
        <option value="Sliding Velocity VS Calcium Concentration">Sliding Velocity VS Calcium Concentration</option>
        <option value="Tension/Force VS Calcium Concentration">Tension/Force VS Calcium Concentration</option>
        <option value="Force/Tension VS Sarcomere Shortening Velocity">Force/Tension VS Sarcomere Shortening Velocity</option>
        <option value="Sarcomere Shortening VS Time">Sarcomere Shortening VS Time</option>
    </select>
 </el-form-item>

 <el-form-item>
    <h5>Value 1</h5>
    <el-input v-model="value1"></el-input>
 </el-form-item>

 <h3>VS</h3>

 <el-form-item>
    <h5>Value 2</h5>
    <el-input v-model="value2"></el-input>
 </el-form-item>

 <el-form-item v-model="csv">

    <input type="file">
    <progress max="100"></progress>
</el-form-item>

<el-form-item>
    <el-button type="submit" @click="submitAddedData">Add Data</el-button>
</el-form-item>
<el-form-item>
   <el-button type="submit" @click="this.$router.push({path: `home`})">Cancel</el-button>
</el-form-item>

 </el-form>   

</template>

<script>
import { ref } from "vue";

export default {
   name: "AddDataForm",
   emits: ["add-data"],
   props: {
    dataAdded: {
      type: Array,
      default: () => [],
    },
   },

   setup(props,context) {
      const gene = ref("");
      const hearttype = ref("");
      const value1 = ref("");
      const value2 = ref("");
      const csv = ref("");


      function submitAddedData() {
         context.emit("add-data", gene.value, hearttype.value, value1.value, value2.value, csv.value);


      }

      return { gene, hearttype, value1, value2, csv, submitAddedData };

   }
};
</script>
<!-- <template>
  <el-main>
    <div class="card">
      <div class="card-title border-bottom">
        <h1 class="display-1">Add Data</h1>
      </div>
      <AddDataForm />
    </div>
  </el-main>
</template>

<script>
import AddDataForm from "@/components/AddData/AddDataForm.vue";

export default {
  components: { AddDataForm }
};
</script>

<style></style> -->
