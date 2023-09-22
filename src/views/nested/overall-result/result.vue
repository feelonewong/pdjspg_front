<template>
  <div class="container">
    <h2>一、全区调研结果</h2>
    <br />
    <h2>1.1 全区整体调研结果</h2>
    <br />
    <h2>1.1.1 全区整体得分率与得分分布情况</h2>
    <p class="pfont">(1)全区整体得分率</p>
      <div style="display: flex;box-sizing: border-box;">
        <mip-chart :chartData="allResultRating" :width="'50%'" :height="'600px'"></mip-chart>
        <el-card class="box-card" style="width: 500px; margin-right: 10%; height: 550px;">
          <div slot="header">
            <span>全区整体得分率情况</span>
          </div>
          <div style="display: flex; justify-content: center; align-items: center;"></div>
          <p v-for="(item, index) in allResultRating.data" :key="index">            
            <span>{{ item.name }}得分率为: {{ item.value }}%</span>
          </p>
        </el-card>
      </div>
    <p class="pfont">(2)全区整体得分分布情况</p>
    <div style="display: flex;box-sizing: border-box;">
      <PieChart :chartData="allScore" :width="'50%'" :height="'280px'"></PieChart>
      <el-card class="box-card" style="width: 500px; margin-right: 10%; height: 350px;">
          <div slot="header">
            <span>全区整体得分分布情况</span>
          </div>
          <div style="display: flex; justify-content: center; align-items: center;"></div>
          <p v-for="(item, index) in allScore.data" :key="index">            
            <span>{{ item.name }}得分率为: {{ item.value }}%</span>
          </p>
        </el-card>
    </div>
    <!-- <template v-for="(item, idx) in resultData">
      <div :key="idx">
        <h2>{{ item.title }}</h2>
        <br />
        <h2 class="second">{{ item.subTitle }}</h2>
        <br />
        <template v-if="idx === 0">
          <div>
            <CommonEcharts :chartData="item.chartDataList[0]"></CommonEcharts>
          </div>
          <div style="margin-top: 20px">
            <ResultEcharts :chartData="item.otherCharData[0]"></ResultEcharts>
          </div>
          <div class="table-wrap">
            <ResultTable
              :TableData="item.tableData"
              style="width: 80%; display: flex; justify-self: center"
            ></ResultTable>
          </div>
          <DescComp :descInfo="item.desc"></DescComp>
        </template>
        <template v-else-if="idx === 1">
          <template v-for="(child, childIdx) in item.children">
            <section :key="childIdx">
              <div
                v-for="(lastChild, lastIndex) in child.chartDataList"
                :key="lastIndex"
              >
                <CommonEcharts :chartData="lastChild"></CommonEcharts>
              </div>
              <div class="table-wrap">
                <ResultTable
                  :TableData="child.tableData"
                  style="width: 80%; display: flex; justify-self: center"
                ></ResultTable>
              </div>
            </section>
              <DescComp :descInfo="child.desc"></DescComp>
              <h2>{{ child.subTitle }}</h2>
          </template>
        </template>
        <template v-else>
          <template v-for="(child, childIdx) in item.chartDataList">
            
            <section :key="childIdx" style="margin-bottom: 10px;">
              <CommonEcharts :chartData="child"></CommonEcharts>
            </section>
          </template>
          <div class="table-wrap">
            <ResultTable
              v-if="idx !== 5"
              :TableData="item.tableData"
              style="width: 80%; display: flex; justify-self: center"
            ></ResultTable>
            <ResultTableQualified
              v-else
              :TableData="item.tableData"
              style="width: 80%; display: flex; justify-self: center">
            </ResultTableQualified>
          </div>
          
          <DescComp v-if="idx !== 5" :descInfo="item.desc"></DescComp>
            
        </template>
      </div>
    </template> -->
  </div>
</template>

<script>
import CommonEcharts from "@/views/nested/overall-result/components/common-echarts-axBle.vue";
import CommonTable from "@/views/nested/overall-result/components/common-table.vue";
import ResultEcharts from "@/views/nested/overall-result/components/result-echarts.vue";
import ResultTable from "@/views/nested/overall-result/components/result-table.vue";
import ResultTableQualified from "@/views/nested/overall-result/components/result-table-qualified.vue";
import { RESULT_DATA } from "@/constant/result";
import DescComp from '@/views/nested/overall-result/components/desc-comp.vue'
import { getScoreRate } from '@/api/result/index'
import MipChart from "@/components/Echart/result/MipChart"
import PieChart from "@/components/Echart/result/PieChart"

export default {
  components: {
    CommonEcharts,
    CommonTable,
    ResultTable,
    ResultEcharts,
    ResultTableQualified,
    DescComp,
    MipChart,
    PieChart
  },
  data() {
    return {
      chartData: {},
      resultData: [],
      tableData: [],
      allResultRating: {},
      allScore:{}
    };
  },
  mounted() {
    getScoreRate().then(res => {
      // 全区得分率
      const {allScoreRate} = res 
      allScoreRate.forEach(element => {
        element.name = element.group
      });
      this.allResultRating = {
        data: allScoreRate,
      }
      // 全区整体得分情况
      console.log(res)
      const {all} = res
      this.allScore = {
        data: all
      }
      console.log(all)
    })
  },
};
</script>
<style scoped>
.container {
  padding: 15px;
}
.pfont {
  margin-top: 10px;
  margin-left: 20px;
  color: #409eff;
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
.table-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
