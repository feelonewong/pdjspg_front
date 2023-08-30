<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme

export default {
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
    console.log('---')
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: {
          type: "category",
          axisLabel: { interval: 0, rotate: 90 },
          data: [
            "北蔡镇",
            "曹路镇",
            "川沙新镇",
            "大团镇",
            "东明路街道",
            "高东镇",
            "高桥镇",
            "航头镇",
            "合庆镇",
            "沪东新村街道",
            "花木街道",
            "惠南镇",
            "金桥经开区",
            "金桥镇",
            "金杨新村街道",
            "康桥镇",
            "老港镇",
            "陆家嘴街道",
            "南汇新城镇",
            "南码头路街道",
            "泥城镇",
            "浦兴路街道",
            "三林镇",
            "上钢新村街道",
            "书院镇",
            "唐镇",
            "塘桥街道",
            "万祥镇",
            "潍坊新村街道",
            "新场镇",
            "宣桥镇",
            "洋泾街道",
            "张江镇",
            "上海自贸区",
            "周家渡街道",
            "周浦镇",
            "祝桥镇",
            "直属单位",
          ],
        },
        legend: {
            data: ['自陈问题平均分']
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "自陈问题平均分",
            data: [
              120, 200, 150, 80, 70, 110, 130, 40, 22, 40, 50, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 200, 300, 500, 500, 20, 40, 50, 60, 70, 30, 50, 20,
              40, 50, 20
            ],
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
