<template>
    <el-card class="box-card-main">
        <el-row>
            <el-col>
                <el-button> {{data.hearttype}}</el-button>
            </el-col>
        </el-row>

        <el-row>
            <el-col>
                <el-button> {{data.value1}}</el-button>
            </el-col>
        </el-row>

        <el-row>
            <el-col>
                <el-button> {{data.value2}}</el-button>
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