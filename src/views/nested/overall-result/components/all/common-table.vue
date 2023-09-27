<template>
    <div>
        <el-table border :data="currentTableInfo.data">
            <el-table-column v-for="(item, index) in currentTableInfo.config" :key="index" :prop="item.prop" :label="item.label"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    props: {
        tableInfo: Object,
        default: ()=> {}
    },
    mounted() {
        this.currentTableInfo = this.tableInfo
    },
    data() {
        return {
            currentTableInfo: {}
        }
    }
}
</script>