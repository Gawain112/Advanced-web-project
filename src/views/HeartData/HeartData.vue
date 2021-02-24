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
export default {
  name: "HeartData",

  props: {
    data: {
      type: Array,
      default: () => [],
    },
    addedInfo: {
      type: Object,
      default: () => {},
    },
  },
  emits: ["delete-data"],

  setup(props, context) {
    function deleteSubmittedData() {
      context.emit("delete-data", props.data.uuid);
    }

    return { deleteSubmittedData };
  },
};
</script>
