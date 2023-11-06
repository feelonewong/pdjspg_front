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
      default: "PieRoseChart",
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
          left: "center",
          top: 0,
          textVerticalAlign: 'bottom',
          textStyle: {
            fontSize: 24,
            color: '#000',
            fontWeight: "bold",
          },
        },
        grid: {
          top: 100,
          botttom: 0,
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          top: "bottom",
          textStyle: {
            fontSize: 17
          }
        },
        series: [
          {
            name: this.$props.title,
            type: "pie",
            radius: ["23%", "45%"],
            label: {
              show: true,
              position: "outside",
              fontSize: 18,
              formatter: "{b}\n{c} ({d}%)",
            },
            labelLine: {
              show: true,
            },
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 17,
                fontWeight: "bold",
              },
            },
            data: this.$props.chartData,
          },
        ],
      };
    },
  },
};
</script>
