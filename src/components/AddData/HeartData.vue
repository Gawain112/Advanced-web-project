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
//import { ref } from "vue";
//import { firebaseFireStore } from "@/firebase/database.js";
export default {
     name: "HeartData",

    props: {
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
            }
        
        } 
}, 

    setup() {

    }
};
</script> 