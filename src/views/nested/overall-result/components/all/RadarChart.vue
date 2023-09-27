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
        title: {
          text: "",
        },
        legend: {
          data: ["Allocated Budget"],
        },
        radar: {
          // shape: 'circle',
          indicator: RadarOptions,
        },
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            if (params.value) {
              return params.name + ": " + params.value + "%";
            }
          },
        },
        series: [
          {
            name: "Budget vs spending",
            type: "radar",
            data: [
              {
                value: this.chartData.scoreRateDistribution || [],
                name: "Allocated Budget",
              }
            ],
          },
        ],
      });
    },
  },
};
</script>
