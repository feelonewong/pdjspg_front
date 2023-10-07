<template>
  <div style="margin-bottom: 50px">
    <h2 >二、学前教育与特殊教育学段调研结果</h2>
    <br />
    <h2 class="title" style="margin-top: 30px; margin-bottom: 30px; ">2.1全区学前教育学段整体得分率与得分分布情况</h2>
    <br />
    <h2 class="title"  style="margin-top: 10px; margin-bottom: 60px; ">2.1.1全区学前教育学段整体得分率</h2>
    <br />
    <div class="wrap-d">
      <div class="area-left">
        <BoxPlotChart
          :title="'整体得分率'"
          :chartData="allResult.allScoreRating.chartData"
        />
      </div>
      <div class="area-right">
        <desc-slot>
          全区学前教育学段年总体得分率为:{{
            allResult.allScoreRating.chartData[0].average
          }}
        </desc-slot>
      </div>
    </div>
    <h2 class="title"  style="margin-top: 30px; margin-bottom: 30px; ">2.1.2全区学前教育学段整体得分分布情况</h2>
    <br />
    <h2 class="title" style="margin-top: 10px; margin-bottom: 70px; ">2.1.2.1全区学前教育学段总体得分分布情况</h2>
    <br />
    <div>
      <div class="wrap-d">
        <div class="area-left">
          <PieChart
            :title="'总体得分情况'"
            :chartData="allResult.scoreDistribution.chartData"
          ></PieChart>
        </div>
        <div class="area-right">
          <desc-slot>
            全区学前教育学段总体得分分布情况:<br />
            优秀人数:{{
              allResult.scoreDistribution.chartData[0].value
            }}
            占比({{ allResult.scoreDistribution.chartData[0].precent }})<br />
            良好人数:{{
              allResult.scoreDistribution.chartData[1].value
            }}
            占比({{ allResult.scoreDistribution.chartData[1].precent }})<br />
            及格人数:{{
              allResult.scoreDistribution.chartData[2].value
            }}
            占比({{ allResult.scoreDistribution.chartData[2].precent }})<br />
            不及格人数{{
              allResult.scoreDistribution.chartData[3].value
            }}
            占比({{ allResult.scoreDistribution.chartData[3].precent }})
          </desc-slot>
        </div>
      </div>
    </div>
    <h2 class="title" style="margin-top: 50px; margin-bottom: 40px; ">2.1.2.2学前教育学科整体平均分、中位数、标准差</h2>
    <br />
    <div class="wrap-d">
      <div class="area-left">
        <BoxPlotChart
          :title="'学前教育学科整体平均分'"
          :chartData="allResult.minMaxScore.all.chartData"
        />
      </div>
      <div class="area-right">
        <BoxPlotChart
          :title="'学前教育学科自陈问题平均分'"
          :chartData="allResult.minMaxScore.self.chartData"
        />
      </div>
    </div>
    <div class="wrap-d" style="margin-top: 50px; margin-bottom: 30px;">
      <div class="area-left">
        <BoxPlotChart
          :title="'学前教育学科情景问题平均分'"
          :chartData="allResult.minMaxScore.secene.chartData"
        />
      </div>
      <div class="area-right">
        <desc-slot>
          全区学前教育学段整体得分结果如下: <br />
          总体平均分:{{
            allResult.minMaxScore.all.chartData[0].average
          }}
          总体中位数:{{ allResult.minMaxScore.all.chartData[0].median }} <br />
          情景问题平均分:
          {{
            allResult.minMaxScore.secene.chartData[0].average
          }}
          情景问题中位数:
          {{ allResult.minMaxScore.secene.chartData[0].median }} 情景问题最高分:
          {{ allResult.minMaxScore.secene.chartData[0].max }} 情景问题最低分:
          {{ allResult.minMaxScore.secene.chartData[0].min }} <br />
          自我问题平均分:
          {{ allResult.minMaxScore.self.chartData[0].average }} 自我问题中位数:
          {{ allResult.minMaxScore.self.chartData[0].median }} 自我问题最高分:
          {{ allResult.minMaxScore.self.chartData[0].max }} 自我问题最低分:
          {{ allResult.minMaxScore.self.chartData[0].min }} <br />
        </desc-slot>
      </div>
    </div>
    <div class="wrap-d">
      <div class="area-left">
        <ZoomBarChart
          :title="'学前教育学科自陈问题、情景问题标准差'"
          :chartData="allResult.standradScore.chartData"
        ></ZoomBarChart>
      </div>
      <div class="area-right">
        <desc-slot>
          在自陈问题方面，学前教育的标准差为:
          {{ allResult.standradScore.chartData[0].value }} <br />
          在情景问题方面，学前教育的标准差为:
          {{ allResult.standradScore.chartData[1].value }} <br />
        </desc-slot>
      </div>
    </div>
    <h2 class="title" style="margin-top: 30px; margin-bottom: 30px; ">2.2 全区学前教育学段各维度调研结果</h2>
    <br />
    <h2 class="title" style="margin-top: 10px; margin-bottom: 30px; ">2.2.1 全区学前教育学段各维度得分率与得分分布情况</h2>
    <br />
    <h2 class="title" style="margin-top: 10px; margin-bottom: 60px; ">2.2.1.1 全区学前教育学段各维度得分率</h2>
    <br />
    <div class="wrap-d">
      <div class="area-left">
        <PieRoseChart
          :title="'学前教育学科各维度得分率'"
          :chartData="allResult.dimensionRating.chartData"
        ></PieRoseChart>
      </div>
      <div class="area-right">
        <CommonTable
          :tableInfo="allResult.dimensionRating.tableInfo"
        ></CommonTable>
      </div>
    </div>
    <h2 class="title" style="margin-top: 40px; margin-bottom: 40px; ">2.2.1.2 全区学前教育学段各维度得分分布情况</h2>
    <br />
    <div style="display: flex; flex-wrap: wrap;">
      <div
        class="area-left"
        v-for="(eachItem, eachIndex) in allResult.eachScoreDistribution"
        :key="eachIndex"
        style="margin-bottom: 30px; width: 50%;"
      >
        <PieChart :title="eachItem.title" :chartData="eachItem.chartData"></PieChart>
        <desc-slot>
          <span style="font-weight: bold; font-size: 20px;">{{ eachItem.title }}</span>维度结果如下:<br />
          优秀人数:{{ eachItem.chartData[0].value }} 占比({{
            eachItem.chartData[0].precent
          }})<br />
          良好人数:{{ eachItem.chartData[1].value }} 占比({{
            eachItem.chartData[1].precent
          }})<br />
          及格人数:{{ eachItem.chartData[2].value }} 占比({{
            eachItem.chartData[2].precent
          }})<br />
          不及格人数:{{ eachItem.chartData[3].value }} 占比({{
            eachItem.chartData[3].precent
          }})<br />
        </desc-slot>
      </div>
    </div>
    <template v-for="(item, index) in preEduData.modules">
      <div :key="index">
        <h2 style="margin-bottom: 20px;">{{ item.title }}</h2>
        <br />
        <h2 class="title" style="margin-bottom: 30px; margin-top: 20px;">{{ item.subTitle }}</h2>
        <br />
        <div class="wrap-d">
          <div class="area-left">
            <BoxPlotChart :title="item.scoreRating.title+'得分率'" :chartData="item.scoreRating.chartData" />
          </div>
          <div class="area-right">
            <desc-slot>
              学前教育学段<span style="font-weight: 600; font-size: 20px;">{{ item.scoreRating.title }}</span>维度结果如下: <br />
              得分率平均为:{{ item.scoreRating.chartData[0].average }} <br />
              得分率中位数为:{{ item.scoreRating.chartData[0].median }} <br />
              得分率最高数为:{{ item.scoreRating.chartData[0].max }} <br />
              得分率最低数为:{{ item.scoreRating.chartData[0].min }} <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d" style="margin-top: 20px; margin-bottom: 50px;">
          <div class="area-left">
            <PieChart :title="item.scoreRating.title+'得分分布情况'" :chartData="item.eachScoreDistribution.chartData"></PieChart>
          </div>
          <div class="area-right">
            <CommonTable
              :tableInfo="item.eachScoreDistribution.tableInfo"
            ></CommonTable>
          </div>
        </div>
        <h2 class="title"  style="margin-top: 20px; margin-bottom: 50px;">{{ item.second }}</h2>
        <div class="wrap-d">
          <div class="area-left">
              <ZoomBarChart
                :title="item.scoreRating.title+'总体平均分'"
                :chartData="item.averageScore.all.chartData"
              ></ZoomBarChart>
          </div>
          <div class="area-left">
              <ZoomBarChart
                :title="item.scoreRating.title+'自陈问题平均分、情景问题平均分'"
                :chartData="item.averageScore.selfAndSecene.chartData"
              ></ZoomBarChart>
          </div>
          <div class="area-left">
            <desc-slot>
              学前教育学段{{ item.averageScore.title }}维度：<br />
              总体平均分为:{{ item.averageScore.all.chartData[0].value }} <br />
              自我问题平均分为:{{ item.averageScore.selfAndSecene.chartData[0].value }} <br />
              情景问题平均分为:{{ item.averageScore.selfAndSecene.chartData[1].value }} <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d" style="margin-top: 30px; margin-bottom: 30px;">
          <div class="area-left">
            <BoxPlotChart 
            :title="item.scoreRating.title+'最低分、中位数、最高分'"
            :chartData="item.minMaxSocre.chartData" />
          </div>
          <div class="area-right">
            <desc-slot>
              学前教育学段{{ item.scoreRating.title }}维度结果如下: <br />
              得分平均为:{{ item.minMaxSocre.chartData[0].average }} <br />
              得分中位数为:{{ item.minMaxSocre.chartData[0].median }} <br />
              得分最高数为:{{ item.minMaxSocre.chartData[0].max }} <br />
              得分最低数为:{{ item.minMaxSocre.chartData[0].min }} <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d" style="margin-bottom: 50px;">
          <div class="area-left">
            <ZoomBarChart
                :title="item.scoreRating.title+'标准差'"
                :chartData="item.standardScore.chartData"
              ></ZoomBarChart>
          </div>
          <div class="area-right">
            <desc-slot>
              学前教育学段{{ item.scoreRating.title }}维度标准差结果如下: <br />
              自陈问题标准差为:{{ item.standardScore.chartData[0].value }} <br />
              情景问题标准差为:{{ item.standardScore.chartData[1].value }} <br />
            </desc-slot>
          </div>
        </div>
        <!-- <div class="wrap-d">
          <div class="area-left">
            <BoxPlotChart
              :title="plotData.title"
              :chartData="plotData.chartData"
            />
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
          <div class="area-right">
            <desc-slot>
              全区学前教育学段总体得分分布情况: 优秀人数:学段总体得分分布情况:
              优秀人数:学段总体得分分布情况: 优秀人数:,成绩良好人数:,
              成绩及格人数:, 成绩不及格人数:
            </desc-slot>
          </div>
        </div> -->
      </div>
    </template>
    <!-- <CommonTable :TableData="tableData"/> -->
  </div>
</template>

<script>
import PolyChart from "./components/all/PolyChart.vue";
import BoxPlotChart from "@/components/Charts/BoxPlotChart";
import PieRoseChart from "@/components/Charts/PieRoseChart";

import PieChart from "@/components/Charts/PieChart.vue";
import DescSlot from "./components/all/desc-slot.vue";
import CommonTable from "./components/all/common-table.vue";
import HistogramChart from "./components/all/HistogramChart.vue";
import ZoomBarChart from "@/components/Charts/ZoomBarChart";

import { PreEdu } from "./constant/preEdu/index";
export default {
  components: {
    PolyChart,
    PieChart,
    DescSlot,
    CommonTable,
    BoxPlotChart,
    HistogramChart,
    ZoomBarChart,
    PieRoseChart,
  },
  data() {
    return {
      aaa: 100,
      emptyTitle: '',
      allResult: {},
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
      preEduData: {},
    };
  },
  mounted() {
    this.preEduData = PreEdu;
    this.allResult = this.preEduData.allResult;
    // console.log(this.preEduData.allResult.chartData)
  },
};
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
.chart-left {
  display: inline-block;
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
