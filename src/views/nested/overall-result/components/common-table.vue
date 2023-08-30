<template>
    <div>
        <el-table :data="tableData" border style="width: 80%;">
            <el-table-column prop="street" label="街道" align="center"></el-table-column>
            <el-table-column prop="person" label="参评人数" align="center"></el-table-column>
            <el-table-column label="自陈问题" align="center">
                <el-table-column prop="myAverage" align="center" label="平均分"></el-table-column>
                <el-table-column prop="myAminus" align="center" label="标准差"></el-table-column>
                <el-table-column prop="myMedium" align="center" label="中位数"></el-table-column>
            </el-table-column>
            <el-table-column label="情境问题" align="center">
                <el-table-column prop="sitAverage" align="center" label="平均分"></el-table-column>
                <el-table-column prop="sitMinus" align="center" label="标准差"></el-table-column>
                <el-table-column prop="sitMedium" align="center" label="中位数"></el-table-column>
            </el-table-column>
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