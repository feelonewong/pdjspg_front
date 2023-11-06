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
      default: "420px",
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
          textVerticalAlign: 'bottom',
          textStyle: {
            fontSize: 24,
            color: '#000',
            fontWeight: "bold",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%",
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
            radius: [40, 140],
            center: ["50%", "50%"],
            roseType: "area",
            label: {
              position: "outside",
              show: true,
              formatter: "{b}\n {c} %",
              fontSize: 17
            },
            itemStyle: {
              borderRadius: 6,
            },
            data: this.$props.chartData,
          },
        ],
      };
    },
  },
};
</script>
