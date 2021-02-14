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
                <el-button @click="$emit('delete-data', data.hearttype)">Delete Data</el-button>
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
            required: true,
        
        }
    },

    setup() {
    },
};
</script>