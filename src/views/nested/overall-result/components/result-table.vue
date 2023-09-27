<template>
    <div style="margin-top: 20px ;">
        <el-table :data="tableData" border style="width: 80%;">
            <el-table-column prop="villagesAndTowns" label="学段学科" width="240" align="center"></el-table-column>
            <el-table-column prop="numberOfPeople" label="参评人数" align="center"></el-table-column>
            <el-table-column prop="average1" align="center" label="自陈问题平均分"></el-table-column>
            <el-table-column prop="median1" align="center" label="自陈问题中位数"></el-table-column>
            <el-table-column prop="standardDeviation1" align="center" label="自陈问题标准差"></el-table-column>
            <el-table-column prop="average2" align="center" label="情景问题平均分"></el-table-column>
            <el-table-column prop="median2" align="center" label="情景问题中位数"></el-table-column>
            <el-table-column prop="standardDeviation2" align="center" label="情景问题标准差"></el-table-column>
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