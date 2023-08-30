<template>
  <div>
    <h2>1.1.2 各维度平均分、标准差与中位数字</h2><br>
    <h2 class="second">1.1.2.1 职业态度</h2><br>
    <CommonEcharts :chartData="chartData" />
    <CommonTable :TableData="tableData"/>
  </div>
</template>

<script>
import CommonEcharts from '@/views/nested/overall-result/components/common-echarts.vue'
import CommonTable from '@/views/nested/overall-result/components/common-table.vue'
import { TABLE_DATA } from '@/constant/result'
export default {
  components: {
    CommonEcharts,
    CommonTable
  },
  data(){
    return {
      chartData: {
        
      },
      tableData: []
    }
  },
  mounted(){
    this.tableData = TABLE_DATA
  }
}
</script>
<style scoped>
.container {
  padding: 15px;
}
h2 {
  margin-top: 10px;
  margin-left: 20px;
  display: inline-block;
  position: relative;
  color: #409eff;
}
h3 {
  margin-top: 20px;
  display: inline-block;
  position: relative;
  color: #409eff;
}
h3,
h2::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  background-color: #409eff;
  bottom: -5px;
  left: 0;
}
.second {
  font-size: 20px;
  font-weight: 400;
}
</style>
