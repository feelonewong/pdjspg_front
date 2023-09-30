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
      default: "400px",
    },
    title: {
      type: String,
      default: "ZoomBarChart",
    },
    markLineName: {
      type: String,
      default: "平均值",
    },
    markLineFormatter: {
      type: [String, Function],
      default: "{b}: {c}",
    },
    maxValue: {
      type: Number,
      // default: 100,
    },
    chartData: {
      type: Array,
      default: () => {
        return []; // { value: 40, name: "语文" }
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
      return {
        title: {
          text: this.$props.title,
          // subtext: "Fake Data",
          left: "left",
        },
        legend: {},
        tooltip: {
          trigger: "axis",
          default: "{b}: {c}%",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "40",
          left: "20",
          right: "20",
          containLabel: true,
        },
        dataZoom: [
          {
            show: true,
            // start: 0, // 起始的百分比
            // end: 100, // 结束的百分比
          },
        ],
        xAxis: [
          {
            // x-轴
            type: "category",
            data: this.$props.chartData.map((item) => item.name),
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        // y-轴
        yAxis: [
          {
            type: "value",
            max: this.$props.maxValue,
          },
        ],
        series: [
          {
            type: "bar",
            barMaxWidth: "20",
            data: this.$props.chartData.map((item) => item.value),
            colorBy: "data",
            markLine: {
              label: { position: "middle", formatter: this.markLineFormatter },
              data: [{ type: "average", name: this.markLineName }],
            },
          },
        ],
      };
    },
  },
};
</script>
