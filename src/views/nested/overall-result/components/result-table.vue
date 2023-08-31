<template>
    <div style="margin-top: 20px ;">
        <el-table :data="tableData" border style="width: 80%;">
            <el-table-column prop="subject" label="学段学科" align="center"></el-table-column>
            <el-table-column prop="person" label="参评人数" align="center"></el-table-column>
            <el-table-column prop="selfProblemAva" align="center" label="自陈问题平均分"></el-table-column>
            <el-table-column prop="selfProblemMinus" align="center" label="自陈问题标准差"></el-table-column>
            <el-table-column prop="selfProblemMid" align="center" label="自陈问题中位数"></el-table-column>
            <el-table-column prop="situationAva" align="center" label="情景问题平均分"></el-table-column>
            <el-table-column prop="situationMinus" align="center" label="情景问题标准差"></el-table-column>
            <el-table-column prop="situationMid" align="center" label="情景问题中位数"></el-table-column>
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