<template>
    <div style="margin-top: 20px ;">
        <el-table :data="tableData" border style="width: 80%;">
            <el-table-column prop="villagesAndTowns" label="学段学科" align="center"></el-table-column>
            <el-table-column prop="numberOfPeople" label="参评人数" align="center"></el-table-column>
            <el-table-column prop="selfReportedPassingRate" align="center" label="自陈问题合格率(百分比%)"></el-table-column>
            <el-table-column prop="situationPassingRate" align="center" label="情景问题合格率(百分比%)"></el-table-column>
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