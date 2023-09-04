<template>
    <div style="margin-bottom: 50px;">
      <div v-for="(item, idx) in moduleData" :key="idx">
        <h2>{{ item.title }}</h2><br>
        <h2 class="second">{{ item.subTitle }}</h2><br>
        <div v-for="(child, index) in item.chartDataList" :key="index" class="charts-wrap">
          <CommonEcharts :chartData="child" :autoResize="Boolean(true)" />
        </div>
        <div class="table-wrap">
          <CommonTable v-if="idx !== 5" :TableData="item.tableData" style="width: 80%; display: flex; justify-self: center;"/>
          <PassTable v-else :TableData="item.tableData" style="width: 80%; display: flex; justify-self: center;"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CommonEcharts from '@/views/nested/overall-result/components/common-echarts.vue'
  import CommonTable from '@/views/nested/overall-result/components/common-table.vue'
  import PassTable from '@/views/nested/overall-result/components/pass-table.vue'
  export default {
    components: {
      CommonEcharts,
      CommonTable,
      PassTable
    },
    props : {
      moduleData: {
        type: Array,
        default: () => []
      }
    },
    data(){
      return {
        moduleEduInfo: [],
        chartData: {
          
        },
        tableData: []
      }
    },
    mounted(){
      // this.moduleEduInfo = this.$props.moduleData
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
  .charts-wrap {
    margin-bottom: 20px;
  }
  .table-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  