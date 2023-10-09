<template>
  <div
    ref="chartItem"
    :class="className"
    :style="{ height: height, width: width }"
  />
</template>
<script>
import echarts from "echarts";
import "echarts/theme/macarons";
import resize from "./mixins/resize";
import { useLazyMixin } from "./mixins/lazy";

export default {
  mixins: [resize, useLazyMixin],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "500px",
    },
    title: {
      type: String,
      default: "PieRoseChart",
    },
    chartData: {
      type: Array,
      default: () => {
        return []; // { min: 10, median: 20, average: 30, max: 40, name: "语文" } 最低分 中位数 平均分 最高分
      },
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  methods: {
    initChart() {
      this.$refs.chartItem &&
        (this.chart = echarts.init(this.$refs.chartItem, "macarons"));
      this.chart && this.chart.setOption(this.optionsData());
    },
    optionsData() {
      const dataArr = this.$props.chartData.map((item) => {
        return [
          item.min, // 最低分
          item.median, // 中位数
          item.average, // 平均分
          item.average, // 众数不要删除 用作占位
          item.max, // 最高分
          item.name,
        ];
      });
      return {
        title: {
          text: this.$props.title,
          left: "center",
          textVerticalAlign: 'bottom',
          textStyle: {
            fontSize: 24,
            color: '#000',
            fontWeight: "bold",
          },
        },
        tooltip: {
          trigger: "axis",
          confine: true,
        },
        xAxis: {
          name: "得分",
          nameLocation: "middle",
          nameGap: 30,
          scale: true,
          
        },
        yAxis: {
          type: "category",
         
          // data: this.$props.chartData.map((item) => item.name),
        },
        grid: {
          bottom: 100,
          top: 120,
          left: 200,
          // containLabel: true
        },
        dataZoom: [
          {
            type: "inside",
          },
          {
            type: "slider",
            height: 20,
          },
        ],
        dataset: [
          {
            id: "income_aggregate",
            dimensions: [
              { name: "min", displayName: "最低分" },
              { name: "Q1", displayName: "中位数" },
              { name: "median", displayName: "平均分" },
              { name: "Q3", displayName: "众数" },
              { name: "max", displayName: "最高分" },
              "Subject",
            ],
            source: dataArr,
          },
        ],
        series: [
          {
            name: "分布",
            type: "boxplot",
            datasetId: "income_aggregate",
            itemStyle: {
              color: "#b8c5f2",
            },
            encode: {
              x: ["min", "Q1", "median", "Q3", "max"],
              y: "Subject",
              itemName: ["Subject"],
              tooltip: ["min", "Q1", "median", "max"],
            },
          },
        ],
      };
    },
  },
};
</script>
