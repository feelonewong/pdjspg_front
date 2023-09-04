<template>
    <div style="margin-top: 20px ;">
        <el-table :data="tableData" border style="width: 80%;">
            <el-table-column prop="villagesAndTowns" label="街道" align="center"></el-table-column>
            <el-table-column prop="selfReportedPassingRate" label="自陈问题合格率(百分比%)" align="center"></el-table-column>
            <el-table-column prop="situationPassingRate" label="情景问题合格率(百分比%)" align="center"></el-table-column>
            
        </el-table>
    </div>
</template>

<script>
export default {
    props: {
        TableData: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return {
            tableData: []
        }
    },
    mounted(){
        this.tableData = this.TableData
    }
}
</script>