<template>
  <div style="margin-bottom: 50px">
    <h2>一、全区调研结果</h2>
    <br />
    <h2 class="title">1.1全区整体调研结果</h2>
    <br />
    <h2 class="title">1.1.1全区整体得分率与得分分布情况</h2>
    <br />
    <div class="wrap-d">
      <div class="area-left">
        <PieRoseChart
          :title="emptyTitle"
          :height="'520px'"
          :chartData="allResult.allScoreRating.chartData"
        ></PieRoseChart>
      </div>
      <div class="area-right">
        <desc-slot>
          全区学科整体得分率为 (%) :<br />
          学前教育学科得分率为: {{ allResult.allScoreRating.chartData[0].value
          }}<br />
          义务教育语文学科得分率为:
          {{ allResult.allScoreRating.chartData[1].value }}<br />
          义务教育数学学科得分率为:
          {{ allResult.allScoreRating.chartData[2].value }}<br />
          义务教育英语学科得分率为:
          {{ allResult.allScoreRating.chartData[3].value }}<br />
          义务教育社会学科得分率为:
          {{ allResult.allScoreRating.chartData[4].value }}<br />
          义务教育理工学科得分率为:
          {{ allResult.allScoreRating.chartData[5].value }}<br />
          义务教育艺体学科得分率为:
          {{ allResult.allScoreRating.chartData[6].value }}<br />
          高中语文学科得分率为: {{ allResult.allScoreRating.chartData[7].value
          }}<br />
          高中数学学科得分率为: {{ allResult.allScoreRating.chartData[8].value
          }}<br />
          高中英语学科得分率为: {{ allResult.allScoreRating.chartData[9].value
          }}<br />
          高中社会科得分率为: {{ allResult.allScoreRating.chartData[10].value
          }}<br />
          高中理工科得分率为: {{ allResult.allScoreRating.chartData[11].value
          }}<br />
          高中艺体科得分率为: {{ allResult.allScoreRating.chartData[12].value
          }}<br />

          {{ allResult.allScoreRating.max }}得分率最高<br />
          {{ allResult.allScoreRating.min }}得分率最低<br />
        </desc-slot>
      </div>
    </div>
    <h2 class="title">1.1.2 全区整体得分分布情况</h2>
    <br />
    <h2 class="title">1.1.2.1全区总体得分分布情况</h2>
    <br />
    <div>
      <div class="wrap-d">
        <div class="area-left">
          <PieChart
            :title="''"
            :chartData="allResult.scoreDistribution.chartData"
          ></PieChart>
        </div>
        <div class="area-right">
          <desc-slot>
            全区学段总体得分分布情况(人数 占比%):<br />
            优秀人数:{{
              allResult.scoreDistribution.chartData[0].value
            }}
            占比({{
              allResult.scoreDistribution.chartData[0].proportion
            }})<br />
            良好人数:{{
              allResult.scoreDistribution.chartData[1].value
            }}
            占比({{
              allResult.scoreDistribution.chartData[1].proportion
            }})<br />
            及格人数:{{
              allResult.scoreDistribution.chartData[2].value
            }}
            占比({{
              allResult.scoreDistribution.chartData[2].proportion
            }})<br />
            不及格人数{{
              allResult.scoreDistribution.chartData[3].value
            }}
            占比({{ allResult.scoreDistribution.chartData[3].proportion }})
          </desc-slot>
        </div>
      </div>
    </div>
    <!-- 循环6个学科 -->
    <div class="wrap-d-wrap">
      <div
        class="area-left"
        v-for="(eachItem, eachIndex) in allResult.subjectScoreDistribution"
        :key="eachIndex"
        style="width: 33%"
      >
        <PieChart
          :title="emptyTitle"
          :chartData="eachItem.chartData"
        ></PieChart>
        <desc-slot>
          结果如下:<br />
          优秀人数:{{ eachItem.chartData[0].value }} 占比({{
            eachItem.chartData[0].proportion
          }})<br />
          良好人数:{{ eachItem.chartData[1].value }} 占比({{
            eachItem.chartData[1].proportion
          }})<br />
          及格人数:{{ eachItem.chartData[2].value }} 占比({{
            eachItem.chartData[2].proportion
          }})<br />
          不及格人数:{{ eachItem.chartData[3].value }} 占比({{
            eachItem.chartData[3].proportion
          }})<br />
        </desc-slot>
      </div>
    </div>
    <!-- 平均分、中位数、标准差 -->
    <h2 class="title">3.1.2.2全区学科整体平均分、中位数、标准差</h2>
    <br />
    <!-- 整体平均分 -->
    <div class="wrap-d">
      <div class="area-left">
        <ZoomBarChart
          :title="emptyTitle"
          :chartData="allResult.minMaxScore.all.chartData"
        ></ZoomBarChart>
      </div>
      <div class="area-right">
        <desc-slot
          >全区学段总体得分分布情况:<br />
          平均分最高的学科是: {{ allResult.minMaxScore.all.max }} <br />
          平均分最低的学科是: {{ allResult.minMaxScore.all.min }} <br />
        </desc-slot>
      </div>
    </div>
    <!-- 自陈问题平局分 -->
    <div class="wrap-d">
      <div class="area-left">
        <ZoomBarChart
          :title="emptyTitle"
          :chartData="allResult.minMaxScore.self.chartData"
        ></ZoomBarChart>
      </div>
      <div class="area-right">
        <desc-slot
          >全区学段总体得分分布情况:<br />
          自陈问题平均分最高的学科是: {{ allResult.minMaxScore.self.max }}
          <br />
          自陈问题平均分最低的学科是: {{ allResult.minMaxScore.self.min }}
          <br />
        </desc-slot>
      </div>
    </div>
    <!-- 情景问题平均分 -->
    <div class="wrap-d">
      <div class="area-left">
        <ZoomBarChart
          :title="emptyTitle"
          :chartData="allResult.minMaxScore.scene.chartData"
        ></ZoomBarChart>
      </div>
      <div class="area-right">
        <desc-slot
          >全区学段总体得分分布情况:<br />
          情景问题平均分最高的学科是: {{ allResult.minMaxScore.scene.max }}
          <br />
          情景问题平均分最低的学科是: {{ allResult.minMaxScore.scene.min }}
          <br />
        </desc-slot>
      </div>
    </div>
    <div class="wrap-d">
      <div class="area-left">
        <BoxPlotChart
          :title="''"
          :chartData="allResult.midMaxMinSceneAndSelf.self.chartData"
        />
      </div>
      <div class="area-left">
        <BoxPlotChart
          :title="''"
          :chartData="allResult.midMaxMinSceneAndSelf.scene.chartData"
        />
      </div>
    </div>
    <div>
      <desc-slot>
        在自陈问题方面: <br />
        中位数分数最高的学科为: {{ allResult.midMaxMinSceneAndSelf.self.midMax
        }}<br />
        中位数分数最低的学科为: {{ allResult.midMaxMinSceneAndSelf.self.midMin
        }}<br />
        分数最高的学科为: {{ allResult.midMaxMinSceneAndSelf.self.max }}<br />
        分数最低的学科为: {{ allResult.midMaxMinSceneAndSelf.self.min }}<br />
        <br />
        在情景问题方面: <br />
        中位数分数最高的学科为: {{ allResult.midMaxMinSceneAndSelf.scene.midMax
        }}<br />
        中位数分数最低的学科为: {{ allResult.midMaxMinSceneAndSelf.scene.midMin
        }}<br />
        分数最高的学科为: {{ allResult.midMaxMinSceneAndSelf.scene.max }}<br />
        分数最低的学科为: {{ allResult.midMaxMinSceneAndSelf.scene.min }}<br />
      </desc-slot>
    </div>
    <!--  -->
    <div class="wrap-d">
      <div class="area-left">
        <ZoomBarChart
          :title="emptyTitle"
          :chartData="allResult.standradScore.self.chartData"
        ></ZoomBarChart>
      </div>

      <div class="area-left">
        <ZoomBarChart
          :title="emptyTitle"
          :chartData="allResult.standradScore.scene.chartData"
        ></ZoomBarChart>
      </div>
      <div class="area-right">
        <desc-slot>
          在自陈问题方面，全区学科调查的标准差最大的学科为:
          {{ allResult.standradScore.self.max }} <br />
          在自陈问题方面，全区学科调查的标准差最小的学科为:
          {{ allResult.standradScore.self.min }} <br />
          在情景问题方面，全区学科调查的标准差最大的学科为:
          {{ allResult.standradScore.scene.max }} <br />
          在情景问题方面，全区学科调查的标准差最小的学科为:
          {{ allResult.standradScore.scene.min }} <br />
        </desc-slot>
      </div>
    </div>
    <h2 class="title">3.2 全区义务教育学段各维度调研结果</h2>
    <br />
    <h2 class="title">3.2.1 全区义务教育学段各维度得分率与得分分布情况</h2>
    <br />
    <h2 class="title">3.2.1.1 全区义务教育学段各维度得分率</h2>
    <br />
    <!-- 得分率开始 -->
    <div class="wrap-d">
      <div class="area-left"></div>
      <div class="area-right"></div>
    </div>
    <div class="wrap-d-wrap">
      <div
        class="area-left"
        v-for="(eachItem, eachIndex) in allResult.dimensionRating.wrap"
        :key="eachIndex"
        style="width: 33%"
      >
        <PieRoseChart
          :title="emptyTitle"
          :chartData="eachItem.chartData"
        ></PieRoseChart>

        <desc-slot>
          在{{ eachItem.title }}中整体结果如下:<br />
          整体得分率:{{ eachItem.chartData[0].value }} <br />
          职业态度:{{ eachItem.chartData[1].value }} <br />
          教学实践:{{ eachItem.chartData[2].value }}<br />
          综合育人:{{ eachItem.chartData[3].value }}<br />
          自主发展:{{ eachItem.chartData[4].value }}<br />
        </desc-slot>
      </div>
    </div>
    <div style="width: 80%; margin: 0 auto">
      <CommonTable
        :tableInfo="allResult.dimensionRating.tableInfo"
      ></CommonTable>
    </div>

    <!-- 得分率结束 -->
    <h2 class="title">3.2.1.2 全区义务教育学段各维度得分分布情况</h2>
    <br />
    <!-- 得分分布 -->
    <div
      class="wrap-d-wrap"
      style="position: relative"
    >
      <div style="width: 500px; position: absolute; left: 10px">
        <!-- {{ subProject[wapIndex] }} -->
      </div>
      <div
        class="area-left"
        style="width: 33%"
        v-for="(eachItem, eachIndex) in allResult.eachScoreDistribution"
        :key="eachIndex"
      >
        <PieChart
          :title="emptyTitle"
          :chartData="eachItem.chartData"
        ></PieChart>
        <desc-slot>
          <span style="font-weight: 600; font-size: 18px;">{{ eachItem.title }}</span>维度结果如下:<br />
          优秀人数:{{ eachItem.chartData[0].value }} <br />
          良好人数:{{ eachItem.chartData[1].value }}<br />
          及格人数:{{ eachItem.chartData[2].value }}<br />
          不及格人数:{{ eachItem.chartData[3].value }} <br />
        </desc-slot>
      </div>
    </div>
    <template v-for="(item, index) in compEduData.modules">
      <div :key="index">
        <h2>{{ item.title }}</h2>
        <br />
        <h2 class="title">{{ item.subTitle }}</h2>
        <br />
        <div class="wrap-d">
          <div class="area-left">
            <RadarChart
              :chartData="{
                config: radarChartOptions,
                data: item.scoreRating.chartData,
              }"
            ></RadarChart>
          </div>
          <div class="area-right">
            <desc-slot>
              义务教育学段{{ item.scoreRating.title }}维度结果如下: <br />
              义务教育语文科得分率为:{{ item.scoreRating.chartData[0] }} <br />
              义务教育数学科得分率为:{{ item.scoreRating.chartData[1] }} <br />
              义务教育英语科得分率为:{{ item.scoreRating.chartData[2] }} <br />
              义务教育社会科得分率为:{{ item.scoreRating.chartData[3] }} <br />
              义务教育理工科得分率为:{{ item.scoreRating.chartData[4] }} <br />
              义务教育艺体科得分率为:{{ item.scoreRating.chartData[5] }} <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d-wrap">
          <div
            class="area-left"
            v-for="(eachItem, eachIndex) in item.eachScoreDistribution.wap"
            :key="eachIndex"
            style="width: 33%"
          >
            <PieChart
              :title="emptyTitle"
              :chartData="eachItem.chartData"
            ></PieChart>
            <desc-slot>
              优秀人数:{{ eachItem.chartData[0].value }} 占比({{
                eachItem.chartData[0].precent
              }})<br />
              良好人数:{{ eachItem.chartData[1].value }} 占比({{
                eachItem.chartData[1].precent
              }})<br />
              及格人数:{{ eachItem.chartData[2].value }} 占比({{
                eachItem.chartData[2].precent
              }})<br />
              不及格人数:{{ eachItem.chartData[3].value }} 占比({{
                eachItem.chartData[3].precent
              }})<br />
            </desc-slot>
          </div>
        </div>
        <div style="width: 80%; margin: 0 auto">
          <CommonTable
            :tableInfo="item.eachScoreDistribution.tableInfo"
          ></CommonTable>
        </div>
        <h2 class="title">{{ item.second }}</h2>
        <div class="wrap-d">
          <div class="area-left">
            <ZoomBarChart
              :title="emptyTitle"
              :chartData="item.averageScore.all.chartData"
            ></ZoomBarChart>
          </div>
          <div class="area-left">
            <desc-slot>
              义务教育学段{{ item.averageScore.title }}维度：<br />
              平均分最低的学科为:{{ item.averageScore.all.min }} <br />
              平均分最高的学科为:{{ item.averageScore.all.max }} <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d">
          <div class="area-left">
            <ZoomBarChart
              :title="emptyTitle"
              :chartData="item.averageScore.self.chartData"
            ></ZoomBarChart>
          </div>
          <div class="area-left">
            <desc-slot>
              义务教育学段{{ item.averageScore.title }}维度：<br />
              自陈问题平均分最低的学科为:{{ item.averageScore.self.min }} <br />
              自陈问题平均分最高的学科为:{{ item.averageScore.self.max }} <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d">
          <div class="area-left">
            <ZoomBarChart
              :title="emptyTitle"
              :chartData="item.averageScore.scene.chartData"
            ></ZoomBarChart>
          </div>
          <div class="area-left">
            <desc-slot>
              义务教育学段{{ item.averageScore.title }}维度：<br />
              情景问题平均分最低的学科为:{{ item.averageScore.scene.min }}
              <br />
              情景问题平均分最高的学科为:{{ item.averageScore.scene.max }}
              <br />
            </desc-slot>
          </div>
        </div>
        <!-- 最低分 最高分 中位数 -->
        <div class="wrap-d">
          <div class="area-left">
            <BoxPlotChart
              :title="''"
              :chartData="item.minMaxSocre.self.chartData"
            />
          </div>
          <div class="area-right">
            <desc-slot>
              义务教育学段{{ item.scoreRating.title }}维度结果如下(自陈问题):
              <br />
              中位数最高的学科为:{{ item.minMaxSocre.self.midMax }} <br />
              中位数最低的学科为:{{ item.minMaxSocre.self.midMin }} <br />
              分数最高的学科为:{{ item.minMaxSocre.self.min }} <br />
              分数最低的学科为:{{ item.minMaxSocre.self.max }} <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d">
          <div class="area-left">
            <BoxPlotChart
              :title="''"
              :chartData="item.minMaxSocre.scene.chartData"
            />
          </div>
          <div class="area-right">
            <desc-slot>
              义务教育学段{{ item.scoreRating.title }}维度结果如下(情景问题):
              <br />
              中位数最高的学科为:{{ item.minMaxSocre.scene.midMax }} <br />
              中位数最低的学科为:{{ item.minMaxSocre.scene.midMin }} <br />
              分数最高的学科为:{{ item.minMaxSocre.scene.min }} <br />
              分数最低的学科为:{{ item.minMaxSocre.scene.max }} <br />
            </desc-slot>
          </div>
        </div>

        <!-- 标准差 -->
        <div class="wrap-d">
          <div class="area-left">
            <ZoomBarChart
              :title="emptyTitle"
              :chartData="item.standardScore.self.chartData"
            ></ZoomBarChart>
          </div>
          <div class="area-right">
            <desc-slot>
              义务教育学段{{ item.scoreRating.title }}维度标准差结果如下: <br />
              自陈问题标准差最大的学科为:{{ item.standardScore.self.max }}
              <br />
              自陈问题标准差最大的学科为:{{ item.standardScore.self.min }}
              <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d">
          <div class="area-left">
            <ZoomBarChart
              :title="emptyTitle"
              :chartData="item.standardScore.scene.chartData"
            ></ZoomBarChart>
          </div>
          <div class="area-right">
            <desc-slot>
              义务教育学段{{ item.scoreRating.title }}维度标准差结果如下: <br />
              情景问题标准差最大的学科为:{{ item.standardScore.scene.max }}
              <br />
              情景问题标准差最大的学科为:{{ item.standardScore.scene.min }}
              <br />
            </desc-slot>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import PolyChart from "./components/all/PolyChart.vue";
import BoxPlotChart from "@/components/Charts/BoxPlotChart";
import PieRoseChart from "@/components/Charts/PieRoseChart";
import PieChart from "@/components/Charts/PieChart.vue";
import DescSlot from "./components/all/desc-slot.vue";
import CommonTable from "./components/all/common-table.vue";
import HistogramChart from "./components/all/HistogramChart.vue";
import ZoomBarChart from "@/components/Charts/ZoomBarChart";
import RadarChart from "./components/all/RadarChart2.vue";
import { CompEdu } from "./constant/compEdu/index";
import { ResponsResult } from "./constant/result/index";
export default {
  components: {
    PolyChart,
    PieChart,
    DescSlot,
    CommonTable,
    BoxPlotChart,
    HistogramChart,
    RadarChart,
    ZoomBarChart,
    PieRoseChart,
  },
  data() {
    return {
      aaa: 100,
      emptyTitle: "",
      allResult: {},
      compEduData: {},
      subProject: {
        chn: "义务教育语文学科",
        math: "义务教育数学学科",
        eng: "义务教育英语学科",
        soc: "义务教育社会学科",
        sci: "义务教育理工学科",
        art: "义务教育艺体学科",
      },
      radarChartOptions: [
        { name: "义务教育语文科教师", max: 100 },
        { name: "义务教育数学科教师", max: 100 },
        { name: "义务教育英语科教师", max: 100 },
        { name: "义务教育社会科教师", max: 100 },
        { name: "义务教育理工科教师", max: 100 },
        { name: "义务教育艺体科教师", max: 100 },
      ],
    };
  },
  mounted() {
    this.compEduData = ResponsResult;
    this.allResult = this.compEduData.allResult;
  },
};
</script>
<style scoped>
.container {
  padding: 15px;
}
h2 {
  margin-top: 10px;
  margin-left: 20px;
  display: inline-block;
  position: relative;
  color: #409eff;
}
h3 {
  margin-top: 20px;
  display: inline-block;
  position: relative;
  color: #409eff;
}
h3,
h2::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  background-color: #409eff;
  bottom: -5px;
  left: 0;
}
.second {
  font-size: 20px;
  font-weight: 400;
}
.charts-wrap {
  margin-bottom: 20px;
}
.table-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
.chart-left {
  display: inline-block;
}
.wrap-d {
  display: flex;
}
.wrap-d-wrap {
  display: flex;
  flex-wrap: wrap;
}
.area-left {
  width: 100%;
}
.area-right {
  width: 100%;
  margin: auto 0;
}
</style>
