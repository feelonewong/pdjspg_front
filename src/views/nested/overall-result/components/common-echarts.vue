<template>
  <div :class="className" :style="{ height: height, width: width }"></div>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from '@/components/Charts/mixins/resize'
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
        xAxis: {
          type: "category",
          axisLabel: { interval: 0, rotate: -270 },
          data: this.$props.chartData.xDataLable,
        },
        legend: {
            data: this.$props.chartData.legend
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: this.$props.chartData.xName,
            data: this.$props.chartData.yData,
            type: "bar",
            itemStyle: {
                color: '#409eff'
            }
          },
        ],
      });
    },
  },
};
</script>
