<!-- <template>
 <el-button
        type="success"
        icon="el-icon-delete-solid"
        circle
        style="margin-top: 10px;"
        @click="deleteSubmittedData"
      ></el-button>

</template>

<script>
export default {
  props: {
    hearttype: {
      type: String
    },
    value1: {
      type: String
    },
    value2: {
      type: String
    }
  },

  setup(props, context) {

    function deleteSubmittedData() {
      context.emit("delete-post", props.hearttype);
      console.log("deleteData in hearttypeItem " + props.hearttype);
    }

    return { deleteSubmittedData };
  },
};
</script> -->