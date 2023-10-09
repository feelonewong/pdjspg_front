<template>
  <div class="container">
    <div class="chat-area">
      <!-- 义务教育学段各学科得分率 -->
      <PieRoseChart
        :title="total.title"
        :chartData="total.chartData"
        width="50%"
        class="chart-left"
      />
      <div class="chart-right">
        <p>
          <el-tag> 全区义务教育学段总体得分率为80% </el-tag>
        </p>
        <p>
          <el-tag type="success"> 义务教育学段语文学科分率最高20.62% </el-tag>
        </p>
        <p>
          <el-tag type="danger"> 义务教育学段艺体学科得分率最低13.4% </el-tag>
        </p>
      </div>
    </div>
    <!-- 全区义务教育学段整体得分分布情况 -->
    <div class="chat-area">
      <PieChart
        :title="scoreTotal.title"
        :chartData="scoreTotal.chartData"
        width="50%"
        class="chart-left"
      />
      <div class="chart-right">
        <p><el-tag>全区义务教育学段成绩优秀的人数为XX (占比XXXX%)</el-tag></p>
        <p><el-tag>成绩良好的人数为XX(占比XX.XX%)</el-tag></p>
        <p><el-tag>成绩及格的人数为XX(占比XX.XX%)</el-tag></p>
        <p><el-tag> 成绩待提升的人数为XX (占比XX.XX%)</el-tag></p>
      </div>
    </div>
    <!-- 义务教育学段平均分 -->
    <div class="chat-area">
      <ZoomBarChart
        :title="avgScore.title"
        :chartData="avgScore.chartData"
        width="50%"
        class="chart-left"
      />
      <div class="chart-right">
        <p><el-tag>全区义务教育学段成绩优秀的人数为XX (占比XXXX%)</el-tag></p>
        <p><el-tag>成绩良好的人数为XX(占比XX.XX%)</el-tag></p>
        <p><el-tag>成绩及格的人数为XX(占比XX.XX%)</el-tag></p>
        <p><el-tag> 成绩待提升的人数为XX (占比XX.XX%)</el-tag></p>
      </div>
    </div>
    <!-- 义务教育学段6个学科职业态度分题型中位数、平均分、最低分、最高分 -->
    <div class="chat-area">
      <BoxPlotChart
        :title="plotData.title"
        :chartData="plotData.chartData"
        width="50%"
        class="chart-left"
      />
      <div class="chart-right">
        <p><el-tag>全区义务教育学段成绩优秀的人数为XX (占比XXXX%)</el-tag></p>
        <p><el-tag>成绩良好的人数为XX(占比XX.XX%)</el-tag></p>
        <p><el-tag>成绩及格的人数为XX(占比XX.XX%)</el-tag></p>
        <p><el-tag> 成绩待提升的人数为XX (占比XX.XX%)</el-tag></p>
      </div>
    </div>
  </div>
</template>

<script>
import PieRoseChart from "@/components/Charts/PieRoseChart";
import PieChart from "@/components/Charts/PieChart.vue";
import ZoomBarChart from "@/components/Charts/ZoomBarChart";
import BoxPlotChart from "@/components/Charts/BoxPlotChart";
export default {
  components: { PieRoseChart, PieChart, ZoomBarChart, BoxPlotChart },
  data() {
    return {
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
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.container {
  padding: 10px;
}
.chat-area {
  margin-bottom: 20px;
}
.chart-left {
  display: inline-block;
  vertical-align: top;
}
.chart-right {
  display: inline-block;
  width: 50%;
}
</style>
