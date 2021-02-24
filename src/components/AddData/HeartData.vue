<!-- <template>
     <el-card class="box-card-main">
        <el-row>
            <el-col>
                <el-card>{{data.hearttype}}</el-card>
            </el-col>
        </el-row>

        <el-row>
            <el-col>
                <el-card>{{data.value1}}</el-card>
            </el-col>
        </el-row>

        <el-row>
            <el-col>
                <el-card>{{data.value2}}</el-card>
            </el-col>
        </el-row>

        <el-row>
            <el-col>
                <el-button type="submit" @click="deleteSubmittedData">Delete Data</el-button>
            </el-col>
        </el-row>

        </el-card>

     <HeartDataItem
      v-for="newData in data"
      :key="newData.hearttype"
      :hearttype="newData.hearttype"
      :value1="newData.value1"
      :value2="newData.value2"

      @delete-data="deleteSubmittedData"
    /> 

</template>
<script>
//import HeartDataItem from "@/components/AddData/HeartDataItem";
export default {
    //components: { HeartDataItem },
    emits: ["delete-data"],
     name: "HeartData",

/*     props: {
        data: {
            hearttype: {
                type: String,
                required: true,
            },
            value1: {
                type: String,
                required: true,
            },
            value2: {
                type: String,
                required: true
            },
        },
        }, */ 
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
 
    setup(props, context) {

        function deleteSubmittedData() {
            context.emit("delete-data", props.data.uuid);
        } 

        return { deleteSubmittedData };
        } 

};
</script> -->