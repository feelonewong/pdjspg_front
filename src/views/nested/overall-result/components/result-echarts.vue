<template>
  <div :class="className" :style="{ height: height, width: width }"></div>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "@/components/Charts/mixins/resize";
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
      this.setOptions(this.chartData);
    },
    setOptions({ expectedData, actualData } = {}) {
      this.chart.setOption({
        height: 200,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true },
        //   },
        // },
        legend: {
          data: this.$props.chartData.legend,
        },
        xAxis: [
          {
            type: "category",
            data: this.$props.chartData.xDataLable,
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "",
          },
          {
            type: "value",
            name: this.$props.chartData.legend[5],
          },
        ],
        series: [
          {
            name: this.$props.chartData.legend[0],
            type: "bar",
            data: this.$props.chartData.yData1,
          },
          {
            name: this.$props.chartData.legend[1],
            type: "bar",
            data: this.$props.chartData.yData2
          },
          {
            name: this.$props.chartData.legend[2],
            type: "bar",
            yAxisIndex: 1,
            data: this.$props.chartData.yData3
          },
          {
            name: this.$props.chartData.legend[3],
            type: "bar",
            yAxisIndex: 1,
            data: this.$props.chartData.yData4
          },
          {
            name: this.$props.chartData.legend[4],
            type: "line",
            yAxisIndex: 1,
            data: this.$props.chartData.yData5,
          },
          {
            name: this.$props.chartData.legend[5],
            type: "line",
            yAxisIndex: 1,
            data: this.$props.chartData.yData6,
          },
        ],
      });
    },
  },
};
</script>
