<template>

<h1>Add Data</h1>

<el-form ref="addDataForm">

 <el-form-item label="Info" v-model="heartType">
    <h4>Please select data type</h4>
    <select v-model="heartType">
        <option value="Force-Time curve">Force-Time Curve</option>
        <option value="Sarcomere length VS Time">Sarcomere Length VS Time</option>
        <option value="Sliding Velocity VS Calcium Concentration">Sliding Velocity VS Calcium Concentration</option>
        <option value="Tension/Force VS Calcium Concentration">Tension/Force VS Calcium Concentration</option>
        <option value="Force/Tension VS Sarcomere Shortening Velocity">Force/Tension VS Sarcomere Shortening Velocity</option>
        <option value="Sarcomere Shortening VS Time">Sarcomere Shortening VS Time</option>
    </select>
 </el-form-item>

 <el-form-item label="Value 1">
    <el-input v-model="inputValue1"></el-input>
 </el-form-item>

 <h3>VS</h3>

 <el-form-item label="Value 2">
    <el-input v-model="inputValue2"></el-input>
 </el-form-item>

<el-form-item>
    <el-button type="submit" @click="submitAddedData">Add Data</el-button>
</el-form-item>

 </el-form>   

</template>

<script>
import { ref } from "vue";
//import { useRouter } from "vue-router";

export default {
   emits: ["add-data"],

   setup(props,context) {
      const heartType = ref("");
      const inputValue1 = ref("");
      const inputValue2 = ref("");


      function submitAddedData() {
         context.emit("add-data", heartType.value, inputValue1.value, inputValue2.value);

      }
      

      return {heartType, inputValue1, inputValue2, submitAddedData };

   }
};
</script>


