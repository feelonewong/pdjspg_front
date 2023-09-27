<template>
  <div style="margin-bottom: 50px">
    <h2>三、全区义务教育学段调研结果</h2>
    <br />
    <h2 class="title">3.1全区义务教育学段整体得分率与得分分布情况</h2>
    <br />
    <h2 class="title">2.1.1全区义务教育学段整体得分率</h2>
    <br />
    <div class="wrap-d">
      <div class="area-left">
        <PieChart
          :title="scoreTotal.title"
          :chartData="scoreTotal.chartData"
        ></PieChart>
      </div>
      <div class="area-right">
        <desc-slot> 全区义务教育学段年总体得分率为: </desc-slot>
      </div>
    </div>
    <h2 class="title">2.1.2全区义务教育学段整体得分分布情况</h2>
    <br />
    <h2 class="title">2.1.2.1全区义务教育学段总体得分分布情况</h2>
    <br />
    <div>
      <div class="wrap-d">
        <div class="area-left">
          <PieChart
            :title="scoreTotal.title"
            :chartData="scoreTotal.chartData"
          ></PieChart>
        </div>
        <div class="area-right">
          <desc-slot>
            全区义务教育学段总体得分分布情况: 优秀人数:,成绩良好人数:,
            成绩及格人数:, 成绩不及格人数:
          </desc-slot>
        </div>
      </div>
      <!-- 预留一个点位，这里一共13个点位 -->
    </div>

    <h2 class="title">2.1.2.2义务教育学科整体平均分、中位数、标准差</h2>
    <br />
    <div class="wrap-d">
      <div class="area-left">
        <HistogramChart></HistogramChart>
      </div>
      <div class="area-right">
        <desc-slot>
          全区义务教育学段总体得分分布情况: 优秀人数:,成绩良好人数:,
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
          全区义务教育学段总体得分分布情况: 优秀人数:,成绩良好人数:,
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
          全区义务教育学段总体得分分布情况: 优秀人数:,成绩良好人数:,
          成绩及格人数:, 成绩不及格人数:
        </desc-slot>
      </div>
    </div>
    <div class="wrap-d">
      <div class="area-left">
        <BoxPlotChart :title="plotData.title" :chartData="plotData.chartData" />
      </div>
      <div class="area-right">
        <desc-slot>
          全区义务教育学段总体得分分布情况: 优秀人数:学段总体得分分布情况:
          优秀人数:学段总体得分分布情况: 优秀人数:,成绩良好人数:, 成绩及格人数:,
          成绩不及格人数:
        </desc-slot>
      </div>
    </div>
    <div class="wrap-d">
      <div class="area-left">
        <BoxPlotChart :title="plotData.title" :chartData="plotData.chartData" />
      </div>
      <div class="area-right">
        <desc-slot>
          全区义务教育学段总体得分分布情况: 优秀人数:学段总体得分分布情况:
          优秀人数:学段总体得分分布情况: 优秀人数:,成绩良好人数:, 成绩及格人数:,
          成绩不及格人数:
        </desc-slot>
      </div>
    </div>
    <div class="wrap-d">
      <div class="area-left">
        <HistogramChart></HistogramChart>
      </div>
      <div class="area-right">
        <desc-slot>
          全区义务教育学段总体得分分布情况: 优秀人数:学段总体得分分布情况:
          优秀人数:学段总体得分分布情况: 优秀人数:,成绩良好人数:, 成绩及格人数:,
          成绩不及格人数:
        </desc-slot>
      </div>
    </div>
    <div class="wrap-d">
      <div class="area-left">
        <HistogramChart></HistogramChart>
      </div>
      <div class="area-right">
        <desc-slot>
          全区义务教育学段总体得分分布情况: 优秀人数:学段总体得分分布情况:
          优秀人数:学段总体得分分布情况: 优秀人数:,成绩良好人数:, 成绩及格人数:,
          成绩不及格人数:
        </desc-slot>
      </div>
    </div>
    <h2 class="title">3.2 全区义务教育学段各维度调研结果</h2>
    <br />
    <h2 class="title">3.2.1 全区义务教育学段各维度得分率与得分分布情况</h2>
    <br />
    <h2 class="title">3.2.1.1 全区义务教育学段得分率</h2>
    <br />
    <div class="wrap-d-wrap">
      <div
        v-for="(ratingItem, index) in compEduData.allResult.scoreRating"
        class="area-left-3"
      >
        <PieChart
          :title="scoreTotal.title"
          :chartData="scoreTotal.chartData"
        ></PieChart>
        <desc-slot>
          全区义务教育学段总体得分分布情况: 优秀人数:学段总体得分分布情况:
          优秀人数:学段总体得分分布情况: 优秀人数:,成绩良好人数:, 成绩及格人数:,
          成绩不及格人数:
        </desc-slot>
      </div>
    </div>
    <CommonTable
      style="width: 80%; margin: 0 auto"
      :tableInfo="compEduData.allResult.wapTableInfo"
    ></CommonTable>
    <h2 class="title">3.2.1.2 全区义务教育学段得分分布情况</h2>
    <br />
    <div
      class="wrap-d"
      v-for="(item, index) in compEduData.allResult.subjectDistri"
      :key="index"
    >
      <div
        class="area-left"
        v-for="(childItem, childIndex) in item"
        :key="childIndex"
      >
        <PieChart
          :title="scoreTotal.title"
          :chartData="scoreTotal.chartData"
        ></PieChart>
        <desc-slot>
          全区义务教育学段总体得分分布情况: 优秀人数:学段总体得分分布情况:
          优秀人数:学段总体得分分布情况: 优秀人数:,成绩良好人数:, 成绩及格人数:,
          成绩不及格人数:
        </desc-slot>
      </div>
    </div>
    <template v-for="(item, index) in compEduData.modules">
      <div :key="index">
        <h2>{{ item.title }}</h2>
        <br />
        <h2 class="title">{{ item.subTitle }}</h2>
        <br />
        <div class="wrap-d">
          <div class="area-left">
            <RardarChart></RardarChart>
          </div>
          <div class="area-right"></div>
        </div>
        <div class="wrap-d-wrap">
          <div
            class="area-left-3"
            v-for="(childItem, childIndex) in item.scoreDistri"
            :key="childIndex"
          >
            <PieChart
              :title="scoreTotal.title"
              :chartData="scoreTotal.chartData"
            ></PieChart>
          </div>
        </div>
        <div class="wrap-d-wrap">
          <div
            class="area-left-3"
            v-for="(childItem, childIndex) in item.scoreDistri"
            :key="childIndex"
          >
            <PieChart
              :title="scoreTotal.title"
              :chartData="scoreTotal.chartData"
            ></PieChart>
            <desc-slot> 全区义务教育学段年总体得分率为: </desc-slot>
          </div>
        </div>
        <div class="wrap-d">
          <div class="area-left">
            <PieChart
              :title="scoreTotal.title"
              :chartData="scoreTotal.chartData"
            ></PieChart>
          </div>
          <div class="area-right">
            <desc-slot> 全区义务教育学段年总体得分率为: </desc-slot>
          </div>
        </div>
        <CommonTable
          style="width: 80%; margin: 0 auto"
          :tableInfo="compEduData.allResult.wapTableInfo"
        ></CommonTable>
        <h2 class="title">{{ item.second }}</h2>
        <div class="wrap-d">
          <div class="area-left">
            <HistogramChart></HistogramChart>
          </div>
          <div class="area-right">
            <desc-slot>
              全区义务教育学段总体得分分布情况: 优秀人数:学段总体得分分布情况:
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
              全区义务教育学段总体得分分布情况: 优秀人数:学段总体得分分布情况:
              优秀人数:学段总体得分分布情况: 优秀人数:,成绩良好人数:,
              成绩及格人数:, 成绩不及格人数:
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d">
          <div class="area-left">
            <BoxPlotChart
              :title="plotData.title"
              :chartData="plotData.chartData"
            />
          </div>
          <div class="area-right">
            <desc-slot>
              全区义务教育学段总体得分分布情况: 优秀人数:学段总体得分分布情况:
              优秀人数:学段总体得分分布情况: 优秀人数:,成绩良好人数:,
              成绩及格人数:, 成绩不及格人数:
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d">
          <div class="area-left">
            <BoxPlotChart
              :title="plotData.title"
              :chartData="plotData.chartData"
            />
          </div>
          <div class="area-right">
            <desc-slot>
              全区义务教育学段总体得分分布情况: 优秀人数:学段总体得分分布情况:
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
              全区义务教育学段总体得分分布情况: 优秀人数:学段总体得分分布情况:
              优秀人数:学段总体得分分布情况: 优秀人数:,成绩良好人数:,
              成绩及格人数:, 成绩不及格人数:
            </desc-slot>
          </div>
        </div>
      </div>
    </template>
    <!-- <CommonTable :TableData="tableData"/> -->
  </div>
</template>

<script>
import PieRoseChart from "@/components/Charts/PieRoseChart";
import PieChart from "@/components/Charts/PieChart.vue";
import ZoomBarChart from "@/components/Charts/ZoomBarChart";
import DescSlot from "./components/all/desc-slot.vue";
import BoxPlotChart from "@/components/Charts/BoxPlotChart";
import HistogramChart from "./components/all/HistogramChart.vue";
import CommonTable from "./components/all/common-table.vue";
import RardarChart from "./components/all/RadarChart.vue";
import { CompEduData } from "@/views/nested/overall-result/constant/compEdu/index";
export default {
  components: {
    RardarChart,
    CommonTable,
    PieRoseChart,
    HistogramChart,
    PieChart,
    ZoomBarChart,
    BoxPlotChart,
    DescSlot,
  },
  data() {
    return {
      compEduData: {},
      // 义务教育学段各学科得分率
      total: {
        title: "义务教育学段各学科得分率",
        chartData: [
          { value: 40, name: "语文" },
          { value: 38, name: "数学" },
          { value: 32, name: "英语" },
          { value: 30, name: "社科" },
          { value: 28, name: "理工" },
          { value: 26, name: "艺体" },
        ],
      },
      // 全区义务教育学段整体得分分布情况
      scoreTotal: {
        title: "全区义务教育学段整体得分分布情况",
        chartData: [
          { value: 40, name: "语1文" },
          { value: 38, name: "数1学" },
          { value: 32, name: "英1语" },
          { value: 30, name: "社1科" },
          { value: 28, name: "理1工" },
          { value: 26, name: "艺1体" },
        ],
      },
      // 义务教育学段平均分
      avgScore: {
        title: "义务教育学段平均分",
        chartData: [
          { value: 86, name: "语文" },
          { value: 92, name: "数学" },
          { value: 88, name: "英语" },
          { value: 78, name: "社科" },
          { value: 77, name: "理工" },
          { value: 75, name: "艺体" },
        ],
      },
      // 义务教育学段6个学科职业态度分题型中位数、平均分、最低分、最高分
      plotData: {
        title:
          "义务教育学段6个学科职业态度分题型中位数、平均分、最低分、最高分",
        chartData: [
          {
            name: "语文",
            min: 50,
            median: 70,
            average: 60,
            max: 80,
          },
          {
            name: "数学",
            min: 40,
            median: 60,
            average: 55,
            max: 75,
          },
          {
            name: "英语",
            min: 30,
            median: 55,
            average: 66,
            max: 85,
          },
          {
            name: "社科",
            min: 20,
            median: 35,
            average: 45,
            max: 80,
          },
          {
            name: "理工",
            min: 33,
            median: 44,
            average: 55,
            max: 66,
          },
          {
            name: "艺体",
            min: 22,
            median: 33,
            average: 66,
            max: 77,
          },
        ],
      },
    };
  },
  mounted() {
    this.compEduData = CompEduData;
  },
  methods: {},
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
.wrap-d-wrap {
  display: flex;
  flex-wrap: wrap;
}
.area-left-3 {
  width: 33%;
}
</style>
