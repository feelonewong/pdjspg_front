<!-- 雷达图 -->
<template>
  <div
    :class="className"
    :style="{ height: height, width: width }"
    style="min-height: 550px"
  ></div>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "@/components/Charts/mixins/resize";
import { RadarOptions } from "../../constant/index";
export default {
  mixins: [resize],
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
      default: "350px",
    },
    autoResize: {
      type: Boolean,
      default: true,
    },
    chartData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chart: null,
      source: []
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      console.log('dddd')
      this.setOptions(this.chartData);
    },
    setOptions(chartData) {
      this.chart.setOption({
        title: [
          {
            text: "",
            left: "center",
          },
        ],
        
        dataset: [
          {
            // prettier-ignore
            source: [
                [850,960, 980],
                [850,960, 580],
                [850,960, 480],
                [850,960, 380],
                [850,960, 280]
            ]
          },
          {
            transform: {
              type: "boxplot",
              config: {
                itemNameFormatter: function (params) {
                  return "学前教育";
                },
              },
            },
          },
          {
            fromDatasetIndex: 1,
            fromTransformResult: 1,
          },
        ],
        tooltip: {
          trigger: "item",
          axisPointer: {
            type: "shadow",
          },
          formatter: function (params) {
            return (
              "最低分: " +
              params.data[1] +
              " 中位数: " +
              params.data[3] +
              " 最高分:" +
              params.data[5]
            );
          },
        },
        grid: {
          left: "10%",
          right: "10%",
          bottom: "15%",
        },
        yAxis: {
          type: "category",
          boundaryGap: true,
          nameGap: 30,
          splitArea: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        xAxis: {
          type: "value",
          name: "",
          splitArea: {
            show: true,
          },
          scale: true,
        },
        series: [
          {
            name: "boxplot",
            type: "boxplot",
            datasetIndex: 1,
          },
        ],
      });
    },
  },
};
</script>
