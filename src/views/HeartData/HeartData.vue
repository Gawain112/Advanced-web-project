<template>
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

</template>
<script>
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
</script> 