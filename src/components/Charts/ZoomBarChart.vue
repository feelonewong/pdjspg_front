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
      default: "520px",
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
      const average = this.$props.chartData.reduce((acc, val) =>{
        return acc + Number(val.value)
      }, 0) / this.$props.chartData.length;
      const itemStyle = this.$props.chartData.map(value => {
        if (value > average) {
          return { itemStyle: { color: '#0000FF' } }; // 设置高于平均分的柱子颜色为蓝色
        } else {
          return { itemStyle: { color: '#FF0000' } }; // 设置低于平均分的柱子颜色为红色
        }
      });
      return {
        title: {
          text: this.$props.title,
          left: "center",
          textVerticalAlign: 'bottom',
          textStyle: {
            fontSize: 24,
            color: "#000",
            fontWeight: "bold",
          },
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
          top: "110",
          left: "20",
          right: "50",
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
            axisLabel: {
              fontSize: 14,
            //  rotate: 40, // 将x轴标签旋转90度
            // formatter: function (value) {
            //   // if(!this.$props.chartData.flag){

              
            //   // }else {
            //   //   return value
                
            //   // }
            //   // return value;
            //     var str = value.split("");
            //     return str.join("\n");
            // },
        }
          },
        ],
        // y-轴
        yAxis: [
          {
            type: "value",
            scale: true,
            max: this.$props.maxValue,
          },
        ],
        series: [
          {
            type: "bar",
            barMaxWidth: "20",
            height: "100",
            data: this.$props.chartData.map((item) => item.value),
            colorBy: "data",
            markLine: {
              lineStyle: {
                type: "solid",
                width: 2,
                color: "#8EA0C9",
              },
              label: { position: "middle", formatter: this.markLineFormatter },
              data: [{ type: "average", name: this.markLineName }],
            },
            itemStyle: {
              color: function(value){
                if (value.data > average) {
                  return '#67C2A3' // 设置高于平均分的柱子颜色为蓝色
                } else {
                  return '#FC8A61' // 设置低于平均分的柱子颜色为红色
                }
              }
            }
          },
          // ...itemStyle
        ],
      };
    },
  },
};
</script>
