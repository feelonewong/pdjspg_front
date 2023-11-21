<template>
  <div style="margin-bottom: 50px; padding: 0 20px; box-sizing: border-box">
    <h2>二、学前教育调研结果</h2>
    <br />
    <h2 class="title" style="margin-top: 30px; margin-bottom: 30px">
      2.1全区学前教育整体得分率与得分分布情况
    </h2>
    <span
      @click="
        handleExpandModule('flag2_1', [
          'flag2_1',
          'flag2_1_1',
          'flag2_1_2_2',
          'flag2_1_2_1',
        ])
      "
      style="margin-left: 1em; cursor: pointer"
    >
      <template v-if="!flag2_1">
        展开更多 <i class="el-icon-arrow-down"></i>
      </template>
      <template v-else> 收起 <i class="el-icon-arrow-up"></i> </template>
    </span>
    <br />
    <h2 class="title" style="margin-top: 10px; margin-bottom: 60px">
      2.1.1全区学前教育整体得分率
    </h2>
    <span
      @click="handleExpand('flag2_1_1')"
      style="margin-left: 1em; cursor: pointer"
    >
      <template v-if="!flag2_1_1">
        展开更多 <i class="el-icon-arrow-down"></i>
      </template>
      <template v-else> 收起 <i class="el-icon-arrow-up"></i> </template>
    </span>
    <br />
    <template v-if="flag2_1_1">
      <div class="wrap-d at8">
        <div class="area-left">
          <BoxPlotChart
            :title="'整体得分率'"
            :chartData="allResult.allScoreRating.chartData"
          />
        </div>
        <div class="area-right">
          <desc-slot>
            全区学前教育年总体得分率为:{{
              allResult.allScoreRating.chartData[0].average
            }}%
          </desc-slot>
        </div>
      </div>
    </template>
    <h2 class="title" style="margin-top: 30px; margin-bottom: 30px">
      2.1.2全区学前教育整体得分分布情况
    </h2>
    <span
      @click="handleExpandModule('flag2_1_2', ['flag2_1_2_1', 'flag2_1_2_2'])"
      style="margin-left: 1em; cursor: pointer"
    >
      <template v-if="!flag2_1_2">
        展开更多 <i class="el-icon-arrow-down"></i>
      </template>
      <template v-else> 收起 <i class="el-icon-arrow-up"></i> </template>
    </span>
    <br />
    <h2 class="title" style="margin-top: 10px; margin-bottom: 70px">
      2.1.2.1全区学前教育总体得分分布情况
    </h2>
    <span
      @click="handleExpand('flag2_1_2_1')"
      style="margin-left: 1em; cursor: pointer"
    >
      <template v-if="!flag2_1_2_1">
        展开更多 <i class="el-icon-arrow-down"></i>
      </template>
      <template v-else> 收起 <i class="el-icon-arrow-up"></i> </template>
    </span>
    <br />
    <template v-if="flag2_1_2_1">
      <div>
        <div class="wrap-d at8">
          <div class="area-left">
            <PieChart
              :title="'总体得分情况'"
              :chartData="allResult.scoreDistribution.chartData"
            ></PieChart>
          </div>
          <div class="area-right">
            <desc-slot>
              全区学前教育总体得分分布情况:<br />
              优秀人数:{{
                allResult.scoreDistribution.chartData[0].value
              }}
              占比({{
                allResult.scoreDistribution.chartData[0].precent
              }}%)<br />
              良好人数:{{
                allResult.scoreDistribution.chartData[1].value
              }}
              占比({{
                allResult.scoreDistribution.chartData[1].precent
              }}%)<br />
              及格人数:{{
                allResult.scoreDistribution.chartData[2].value
              }}
              占比({{
                allResult.scoreDistribution.chartData[2].precent
              }}%)<br />
              待提升人数{{
                allResult.scoreDistribution.chartData[3].value
              }}
              占比({{ allResult.scoreDistribution.chartData[3].precent }}%)
            </desc-slot>
          </div>
        </div>
      </div>
    </template>
    <h2 class="title" style="margin-top: 50px; margin-bottom: 40px">
      2.1.2.2学前教育整体平均分、中位数、标准差
    </h2>
    <span
      @click="handleExpand('flag2_1_2_2')"
      style="margin-left: 1em; cursor: pointer"
    >
      <template v-if="!flag2_1_2_2">
        展开更多 <i class="el-icon-arrow-down"></i>
      </template>
      <template v-else> 收起 <i class="el-icon-arrow-up"></i> </template>
    </span>
    <br />

    <template v-if="flag2_1_2_2">
      <div class="wrap-d">
        <div class="area-left">
          <BoxPlotChart
            :title="'整体平均分'"
            :chartData="allResult.minMaxScore.all.chartData"
          />
        </div>
        <div class="area-right">
          <BoxPlotChart
            :title="'自陈问题平均分'"
            :chartData="allResult.minMaxScore.self.chartData"
          />
        </div>
        <div class="area-left">
          <BoxPlotChart
            :title="'情景问题平均分'"
            :chartData="allResult.minMaxScore.secene.chartData"
          />
        </div>
      </div>
      <div class="wrap-d" style="margin-top: 50px; margin-bottom: 30px">
        <!-- <div class="area-left">
        <BoxPlotChart
          :title="'学前教育情景问题平均分'"
          :chartData="allResult.minMaxScore.secene.chartData"
        />
      </div> -->
        <div class="area-right at8">
          <desc-slot>
            全区学前教育整体得分结果如下: <br />
            总体平均分:{{
              allResult.minMaxScore.all.chartData[0].average
            }}
            总体中位数:{{ allResult.minMaxScore.all.chartData[0].median }}
            <br />
            情景问题平均分:
            {{ allResult.minMaxScore.secene.chartData[0].average }}
            情景问题中位数:
            {{
              allResult.minMaxScore.secene.chartData[0].median
            }}
            情景问题最高分:
            {{ allResult.minMaxScore.secene.chartData[0].max }} 情景问题最低分:
            {{ allResult.minMaxScore.secene.chartData[0].min }} <br />
            自陈问题平均分:
            {{
              allResult.minMaxScore.self.chartData[0].average
            }}
            自陈问题中位数:
            {{ allResult.minMaxScore.self.chartData[0].median }} 自陈问题最高分:
            {{ allResult.minMaxScore.self.chartData[0].max }} 自陈问题最低分:
            {{ allResult.minMaxScore.self.chartData[0].min }} <br />
          </desc-slot>
        </div>
      </div>
      <div class="wrap-d at8" style="margin-top: 60px; margin-bottom: 80px">
        <div class="area-left">
          <ZoomBarChart
            :title="'学前教育自陈问题、情景问题标准差'"
            :chartData="allResult.standradScore.chartData"
          ></ZoomBarChart>
        </div>
        <div class="area-right">
          <desc-slot>
            在自陈问题方面，学前教育的标准差为:
            {{ allResult.standradScore.chartData[0].value }} <br />
            在情景问题方面，学前教育的标准差为:
            {{ allResult.standradScore.chartData[1].value }} <br />
          </desc-slot>
        </div>
      </div>
    </template>
    <h2 class="title" style="margin-top: 30px; margin-bottom: 30px">
      2.2 全区学前教育各维度调研结果
    </h2>
    <span
      @click="handleExpandModule('flag2_2', ['flag2_2_1_1', 'flag2_2_1_2'])"
      style="margin-left: 1em; cursor: pointer"
    >
      <template v-if="!flag2_2">
        展开更多 <i class="el-icon-arrow-down"></i>
      </template>
      <template v-else> 收起 <i class="el-icon-arrow-up"></i> </template>
    </span>
    <br />
    <h2 class="title" style="margin-top: 10px; margin-bottom: 30px">
      2.2.1 全区学前教育各维度得分率与得分分布情况
    </h2>
    <span
      @click="handleExpandModule('flag2_2_1', ['flag2_2_1_1', 'flag2_2_1_2'])"
      style="margin-left: 1em; cursor: pointer"
    >
      <template v-if="!flag2_2_1">
        展开更多 <i class="el-icon-arrow-down"></i>
      </template>
      <template v-else> 收起 <i class="el-icon-arrow-up"></i> </template>
    </span>
    <br />
    <h2 class="title" style="margin-top: 10px; margin-bottom: 60px">
      2.2.1.1 全区学前教育各维度得分率
    </h2>
    <span
      @click="handleExpand('flag2_2_1_1')"
      style="margin-left: 1em; cursor: pointer"
    >
      <template v-if="!flag2_2_1_1">
        展开更多 <i class="el-icon-arrow-down"></i>
      </template>
      <template v-else> 收起 <i class="el-icon-arrow-up"></i> </template>
    </span>
    <br />
    <template v-if="flag2_2_1_1">
      <div class="wrap-d at8">
        <div class="area-left">
          <PieRoseChart
            :title="'学前教育各维度得分率'"
            :chartData="allResult.dimensionRating.chartData"
          ></PieRoseChart>
        </div>
        <div class="area-right">
          <CommonTable
            :tableInfo="allResult.dimensionRating.tableInfo"
          ></CommonTable>
        </div>
      </div>
    </template>
    <h2 class="title" style="margin-top: 40px; margin-bottom: 40px">
      2.2.1.2 全区学前教育各维度得分分布情况
    </h2>
    <span
      @click="handleExpand('flag2_2_1_2')"
      style="margin-left: 1em; cursor: pointer"
    >
      <template v-if="!flag2_2_1_2">
        展开更多 <i class="el-icon-arrow-down"></i>
      </template>
      <template v-else> 收起 <i class="el-icon-arrow-up"></i> </template>
    </span>
    <br />
    <template v-if="flag2_2_1_2">
      <div style="display: flex; flex-wrap: wrap" class="at8">
        <div
          class="area-left"
          v-for="(eachItem, eachIndex) in allResult.eachScoreDistribution"
          :key="eachIndex"
          style="margin-bottom: 30px; width: 50%"
        >
          <PieChart
            :title="eachItem.title"
            :chartData="eachItem.chartData"
          ></PieChart>
          <desc-slot>
            <span style="font-weight: bold; font-size: 20px">{{
              eachItem.title
            }}</span
            >维度结果如下:<br />
            优秀人数:{{ eachItem.chartData[0].value }} 占比({{
              eachItem.chartData[0].precent
            }}%)<br />
            良好人数:{{ eachItem.chartData[1].value }} 占比({{
              eachItem.chartData[1].precent
            }}%)<br />
            及格人数:{{ eachItem.chartData[2].value }} 占比({{
              eachItem.chartData[2].precent
            }}%)<br />
            待提升人数:{{ eachItem.chartData[3].value }} 占比({{
              eachItem.chartData[3].precent
            }}%)<br />
          </desc-slot>
        </div>
      </div>
    </template>
    <template v-for="(item, index) in preEduData.modules">
      <div :key="index">
        <h2 style="margin-bottom: 20px">{{ item.title }}</h2>
        <span @click="handleExpandModuleObj(`flagModules`,[`flagObj`, `flagObj2` ], index)" style="margin-left: 1em; cursor: pointer;">
          <template v-if="!flagModules[index]">
            展开更多 <i class="el-icon-arrow-down"></i> 
          </template>
          <template v-else>
            收起 <i class="el-icon-arrow-up"></i> 
          </template>  
      </span>
        <br />
        <h2 class="title" style="margin-bottom: 50px; margin-top: 20px">
          {{ item.subTitle }}
        </h2>
        <span
          @click="handleExpand2('flagObj', index)"
          style="margin-left: 1em; cursor: pointer"
        >
          <template v-if="!flagObj[index]">
            展开更多 <i class="el-icon-arrow-down"></i>
          </template>
          <template v-else> 收起 <i class="el-icon-arrow-up"></i> </template>
        </span>
        <br />
        <template v-if="flagObj[index]">
          <div class="wrap-d at8" style="margin-top: 60px; margin-bottom: 60px">
            <div class="area-left">
              <BoxPlotChart
                :title="item.scoreRating.title + '得分率'"
                :chartData="item.scoreRating.chartData"
              />
            </div>
            <div class="area-right">
              <desc-slot>
                学前教育<span style="font-weight: 600; font-size: 20px">{{
                  item.scoreRating.title
                }}</span
                >维度结果如下: <br />
                得分率平均为:{{ item.scoreRating.chartData[0].average }}% <br />
                得分率中位数为:{{ item.scoreRating.chartData[0].median }}%
                <br />
                得分率最高数为:{{ item.scoreRating.chartData[0].max }}% <br />
                得分率最低数为:{{ item.scoreRating.chartData[0].min }}% <br />
              </desc-slot>
            </div>
          </div>
          <div class="wrap-d at8" style="margin-top: 80px; margin-bottom: 80px">
            <div class="area-left">
              <PieChart
                :title="item.scoreRating.title + '得分分布情况'"
                :chartData="item.eachScoreDistribution.chartData"
              ></PieChart>
          
            </div>
            
            <div class="area-right">
              <CommonTable
                :tableInfo="item.eachScoreDistribution.tableInfo"
              ></CommonTable>
            </div>
          </div>
        </template>
        <h2 class="title" style="margin-top: 20px; margin-bottom: 50px">
          {{ item.second }}
        </h2>
        <span
          @click="handleExpand2('flagObj2', index)"
          style="margin-left: 1em; cursor: pointer"
        >
          <template v-if="!flagObj2[index]">
            展开更多 <i class="el-icon-arrow-down"></i>
          </template>
          <template v-else> 收起 <i class="el-icon-arrow-up"></i> </template>
        </span>
        <template v-if="flagObj2[index]">
          <div class="wrap-d at8">
            <div class="area-left">
              <ZoomBarChart
                :title="item.scoreRating.title + '总体平均分 '+item.scoreRating.title + '自陈、情景问题平均分'"
                :chartData="item.averageScore.all.chartData.concat(item.averageScore.selfAndSecene.chartData)"
              ></ZoomBarChart>
            </div>
           
            <div class="area-right">
              <desc-slot>
                学前教育{{ item.averageScore.title }}维度：<br />
                总体平均分为:{{ item.averageScore.all.chartData[0].value }}
                <br />
                自陈问题平均分为:{{
                  item.averageScore.selfAndSecene.chartData[0].value
                }}
                <br />
                情景问题平均分为:{{
                  item.averageScore.selfAndSecene.chartData[1].value
                }}
                <br />
              </desc-slot>
            </div>
          </div>
          <div class="wrap-d at8" style="margin-top: 80px; margin-bottom: 80px">
            <div class="area-left">
              <BoxPlotChart
                :title="item.scoreRating.title + '最低分、中位数、最高分'"
                :chartData="item.minMaxSocre.chartData"
              />
            </div>
            <div class="area-right">
              <desc-slot>
                学前教育{{ item.scoreRating.title }}维度结果如下: <br />
                得分平均为:{{ item.minMaxSocre.chartData[0].average }} <br />
                得分中位数为:{{ item.minMaxSocre.chartData[0].median }} <br />
                得分最高数为:{{ item.minMaxSocre.chartData[0].max }} <br />
                得分最低数为:{{ item.minMaxSocre.chartData[0].min }} <br />
              </desc-slot>
            </div>
          </div>
          <div class="wrap-d at8" style="margin-bottom: 50px">
            <div class="area-left">
              <ZoomBarChart
                :title="item.scoreRating.title + '标准差'"
                :chartData="item.standardScore.chartData"
              ></ZoomBarChart>
            </div>
            <div class="area-right">
              <desc-slot>
                学前教育{{ item.scoreRating.title }}维度标准差结果如下:
                <br />
                自陈问题标准差为:{{ item.standardScore.chartData[0].value }}
                <br />
                情景问题标准差为:{{ item.standardScore.chartData[1].value }}
                <br />
              </desc-slot>
            </div>
          </div>
        </template>
      </div>
    </template>
    <!-- <CommonTable :TableData="tableData"/> -->
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

import { PreEdu } from "./constant/preEdu/index";
export default {
  components: {
    PolyChart,
    PieChart,
    DescSlot,
    CommonTable,
    BoxPlotChart,
    HistogramChart,
    ZoomBarChart,
    PieRoseChart,
  },
  data() {
    return {
      aaa: 100,
      emptyTitle: "",
      allResult: {},
      plotData: {
        title:
          "义务教育学段6个学科职业态度分题型中位数、平均分、最低分、最高分",
        chartData: [
          {
            name: "学前教育",
            min: 50,
            median: 70,
            average: 60,
            max: 80,
          },
        ],
      },
      preEduData: {},
      flag2_1: true,
      flag_2_1_2: true,
      flag2_1_1: true,
      flag2_1_2_1: true,
      flag2_1_2_2: true,
      flag2_2_1_1: true,
      flag2_2_1_2: true,
      flag2_2: true,
      flagModules: {
        0: true,
        1: true,
        2: true,
        3: true,
      },
      flagObj: {
        0: true,
        1: true,
        2: true,
        3: true,
      },
      flagObj2: {
        0: true,
        1: true,
        2: true,
        3: true,
      },
    };
  },
  mounted() {
    this.preEduData = PreEdu;
    this.allResult = this.preEduData.allResult;
    // console.log(this.preEduData.allResult.chartData)
  },
  methods: {
    handleExpand(val) {
      this[val] = !this[val];
    },
    handleExpand2(val, index) {
      this[val][index] = !this[val][index];
    },
    handleExpandModule(field, args) {
      this[field] = !this[field];
      args.map((item) => {
        this[item] = this[field];
      });
    },
    handleExpandModuleObj(field, args, index) {
      this[field][index] = !this[field][index];
      args.map((item) => {
        this[item][index] = this[field][index];
      });
    },
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
.area-left {
  width: 100%;
}
.area-right {
  width: 100%;
  margin: auto 0;
}
.at8 {
  width: 93%;
  margin: 0 auto;
}
</style>
