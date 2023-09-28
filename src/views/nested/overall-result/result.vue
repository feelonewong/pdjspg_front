<template>
  <div class="container">
    <h2>一、全区调研结果</h2>
    <br />
    <h2>1.1 全区整体调研结果</h2>
    <br />
    <h2>1.1.1 全区整体得分率与得分分布情况</h2>
    <p class="pfont">(1)全区整体得分率</p>
    <!-- <div class="wrap-d">
      <div class="area-left">
        <PieRoseChart
          :title="emptyTitle"
          :chartData="allResult.allScoreRating.chartData"
        ></PieRoseChart>
      </div>
      <div class="area-right">
        <desc-slot>
          高中教育学科整体得分率为:<br>

          {{
            allResult.allScoreRating.max
          }}得分率最高<br>
          {{
            allResult.allScoreRating.min
          }}得分率最低<br>
        </desc-slot>
      </div>
    </div> -->
    <div style="display: flex; box-sizing: border-box">
      <PieChart
        :chartData="allScore"
        :width="'50%'"
        :height="'280px'"
      ></PieChart>
      <!-- <el-card
        class="box-card"
        style="width: 500px; margin-right: 10%; height: 350px"
      >
        <div slot="header">
          <span>全区整体得分分布情况</span>
        </div>
        <div
          style="display: flex; justify-content: center; align-items: center"
        ></div>
        <p v-for="(item, index) in allScore.data" :key="index">
          <span>{{ item.name }}得分率为: {{ item.value }}%</span>
        </p>
      </el-card> -->
    </div>
    <!-- 四个维度循环 -->
    <template v-for="(item, index) in newFourModuleResult">
      <div :key="index">
        <h2>{{ item.title }}</h2>
        <br />
        <h2 class="second">{{ item.subTitle }}</h2>
        <br />
        <div class="wrap-d">
          <div class="area-left">
            <RadarChart :chartData="item.scoreChartData"></RadarChart>
          </div>
          <div class="area-right">
            <desc-slot>
              全区学前教育学段总体得分分布情况: 优秀人数:学段总体得分分布情况:
              优秀人数:学段总体得分分布情况: 优秀人数:,成绩良好人数:,
              成绩及格人数:, 成绩不及格人数:
            </desc-slot>
          </div>
        </div>
        <div
          style="
            width: 100%;
            display: flex;
            box-sizing: border-box;
            flex-wrap: wrap;
          "
        >
          <div
            v-for="(childItem, childIndex) in item.pieChart"
            style="width: 25%"
          >
            <PieChartAll :width="'100%'" :height="'280px'"></PieChartAll>
            <RadarDesc :cardInfo="item.card"></RadarDesc>
          </div>
        </div>
        <div style="width: 80%; margin: 0 auto">
          <CommonTable :tableInfo="item.tableInfo"></CommonTable>
        </div>

        <h2 class="second">{{ item.secondTitle }}</h2>
        <br />
        <!-- 平均分、中位数、标准差 -->
        <div class="wrap-d">
          <div class="area-left">
            <HistogramChart></HistogramChart>
          </div>
          <div class="area-right">
            <desc-slot>
              全区学前教育学段总体得分分布情况: 优秀人数:学段总体得分分布情况:
              优秀人数:学段总体得分分布情况: 优秀人数:,成绩良好人数:,
              成绩及格人数:, 成绩不及格人数:
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d">
          <div class="area-left">
            <HistogramChart></HistogramChart>
          </div>
          <div class="area-left">
            <HistogramChart></HistogramChart>
          </div>
          <div class="area-right">
            <desc-slot>
              全区学前教育学段总体得分分布情况: 优秀人数:学段总体得分分布情况:
              优秀人数:学段总体得分分布情况: 优秀人数:,成绩良好人数:,
              成绩及格人数:, 成绩不及格人数:
            </desc-slot>
          </div>
        </div>
      
        <div class="wrap-d">
          <div class="area-left">
            <BoxPlotChart :title="plotData.title" :chartData="plotData.chartData"></BoxPlotChart>
          </div>
          <div class="area-left">
            <BoxPlotChart :title="plotData.title" :chartData="plotData.chartData"></BoxPlotChart>
          </div>
          <div class="area-right">
            <desc-slot>
              全区学前教育学段总体得分分布情况: 优秀人数:学段总体得分分布情况:
              优秀人数:学段总体得分分布情况: 优秀人数:,成绩良好人数:,
              成绩及格人数:, 成绩不及格人数:
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d">
          <div class="area-left">
            <HistogramChart></HistogramChart>
          </div>
          <div class="area-left">
            <HistogramChart></HistogramChart>
          </div>
          <div class="area-right">
            <desc-slot>
              全区学前教育学段总体得分分布情况: 优秀人数:学段总体得分分布情况:
              优秀人数:学段总体得分分布情况: 优秀人数:,成绩良好人数:,
              成绩及格人数:, 成绩不及格人数:
            </desc-slot>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { getScoreRate } from "@/api/result/index";
import MipChart from "@/components/Echart/result/MipChart";
import PieChart from "@/components/Echart/result/PieChart";
import { NewFourModuleResult } from "./constant/index";
import RadarChart from "./components/all/RadarChart";
import RadarDesc from "./components/all/RadarDesc";
import PieChartAll from "./components/all/PieChart";
import DescSlot from "./components/all/desc-slot.vue";
import CommonTable from "./components/all/common-table.vue";
import BoxPlotChart from "@/components/Charts/BoxPlotChart";
import HistogramChart from "./components/all/HistogramChart.vue";
import PieRoseChart from "@/components/Charts/PieRoseChart";

export default {
  components: {
    RadarChart,
    MipChart,
    RadarDesc,
    PieChartAll,
    DescSlot,
    CommonTable,
    HistogramChart,
    BoxPlotChart,
    PieRoseChart
  },
  data() {
    return {
      chartData: {},
      resultData: [],
      tableData: [],
      allResultRating: {},
      allScore: {},
      newFourModuleResult: [],
      plotData: {
        title:
          "义务教育学段6个学科职业态度分题型中位数、平均分、最低分、最高分",
        chartData: [
          {
            name: "学前教育学科",
            min: 50,
            median: 70,
            average: 60,
            max: 80,
          },
        ],
      },
    };
  },
  mounted() {
    this.newFourModuleResult = NewFourModuleResult;
    getScoreRate().then((res) => {
      // 全区得分率
      const { allScoreRate } = res;
      allScoreRate.forEach((element) => {
        element.name = element.group;
      });
      this.allResultRating = {
        data: allScoreRate,
      };
      // 全区整体得分情况
      console.log(res);
      const { all } = res;
      this.allScore = {
        data: all,
      };
      console.log(all);
    });
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
.dflex {
  display: flex;
  /* justify-content: center; */
  width: 100%;
}
.wrap-d {
  display: flex;
}
.area-left {
  width: 100%;
}
.area-right {
  width: 100%;
  margin: auto 0;
}
</style>
