<template>
  <div style="margin-bottom: 50px">
    <h2>二、义务教育与特殊教育学段调研结果</h2>
    <br />
    <h2 class="title">3.1全区义务教育学段整体得分率与得分分布情况</h2>
    <br />
    <h2 class="title">3.1.1全区义务教育学段整体得分率</h2>
    <br />
    <div class="wrap-d">
      <div class="area-left">
        <PieRoseChart
          :title="emptyTitle"
          :chartData="allResult.allScoreRating.chartData"
        ></PieRoseChart>
      </div>
      <div class="area-right">
        <desc-slot>
          义务教育学科整体得分率为:<br>

          {{
            allResult.allScoreRating.max
          }}得分率最高<br>
          {{
            allResult.allScoreRating.min
          }}得分率最低<br>
        </desc-slot>
      </div>
    </div>
    <h2 class="title">3.1.2全区义务教育学段整体得分分布情况</h2>
    <br />
    <h2 class="title">3.1.2.1全区义务教育学段总体得分分布情况</h2>
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
            全区义务教育学段总体得分分布情况:<br />
            优秀人数:{{
              allResult.scoreDistribution.chartData[0].value
            }}
            占比({{ allResult.scoreDistribution.chartData[0].precent }})<br />
            良好人数:{{
              allResult.scoreDistribution.chartData[1].value
            }}
            占比({{ allResult.scoreDistribution.chartData[1].precent }})<br />
            及格人数:{{
              allResult.scoreDistribution.chartData[2].value
            }}
            占比({{ allResult.scoreDistribution.chartData[2].precent }})<br />
            不及格人数{{
              allResult.scoreDistribution.chartData[3].value
            }}
            占比({{ allResult.scoreDistribution.chartData[3].precent }})
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
        style="width: 33%;"
      >
        <PieChart :title="emptyTitle" :chartData="eachItem.chartData"></PieChart>
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

    <h2 class="title">3.1.2.2义务教育学科整体平均分、中位数、标准差</h2>
    <br />
    <div class="wrap-d">
      <div class="area-left">
        <ZoomBarChart
          :title="emptyTitle"
          :chartData="allResult.minMaxScore.all.chartData"
        ></ZoomBarChart>
      </div>
      <div class="area-right">
        <ZoomBarChart
          :title="emptyTitle"
          :chartData="allResult.minMaxScore.self.chartData"
        ></ZoomBarChart>
      </div>
    </div>
    <div class="wrap-d">
      <div class="area-left">
        <ZoomBarChart
          :title="emptyTitle"
          :chartData="allResult.minMaxScore.scene.chartData"
        ></ZoomBarChart>
      </div>
      <div class="area-right">
        <desc-slot>
           全区义务教育学段整体得分结果如下: <br />
          总体平均分中: {{
            allResult.minMaxScore.all.min
          }}最低<br/>
          总体平均分: {{
            allResult.minMaxScore.all.max
          }}最高<br/>
          <br>
           自陈问题平均分:
          {{
            allResult.minMaxScore.self.min
          }}最低<br/>
           {{
            allResult.minMaxScore.self.max
          }}最高<br/>
          <br>

         情景问题平均分:
          {{
            allResult.minMaxScore.scene.min
          }}最低<br/>
           {{
            allResult.minMaxScore.scene.max
          }}最高<br/> 
          
        </desc-slot>
      </div>
    </div>
    <div class="wrap-d">
          <div class="area-left">
            <BoxPlotChart :title="''" :chartData="allResult.midMaxMinSceneAndSelf.self.chartData" />
          </div>
          <div class="area-left">
            <BoxPlotChart :title="''" :chartData="allResult.midMaxMinSceneAndSelf.scene.chartData" />
          </div>
         
      </div>
      <div>
            <desc-slot>
              在自陈问题方面: <br>
                中位数分数最高的学科为: {{allResult.midMaxMinSceneAndSelf.self.midMax  }}
                中位数分数最低的学科为: {{allResult.midMaxMinSceneAndSelf.self.midMin  }}
                分数最高的学科为: {{ allResult.midMaxMinSceneAndSelf.self.max }}
                分数最低的学科为: {{ allResult.midMaxMinSceneAndSelf.self.min }}<br/>
                <br>
              在情景问题方面: <br>
              中位数分数最高的学科为: {{allResult.midMaxMinSceneAndSelf.scene.midMax  }}
                中位数分数最低的学科为: {{allResult.midMaxMinSceneAndSelf.scene.midMin  }}
                分数最高的学科为: {{ allResult.midMaxMinSceneAndSelf.scene.max }}
                分数最低的学科为: {{ allResult.midMaxMinSceneAndSelf.scene.min }}<br/>
            </desc-slot>
      </div>
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
          在自陈问题方面，义务教育的标准差最大的学科为:
          {{ allResult.standradScore.self.max }} <br />
          在自陈问题方面，义务教育的标准差最小的学科为:
          {{ allResult.standradScore.self.min }} <br />
          在情景问题方面，义务教育的标准差最大的学科为:
          {{ allResult.standradScore.scene.max }} <br />
          在情景问题方面，义务教育的标准差最小的学科为:
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
      <div class="area-left">
        
        <!-- <PieRoseChart
          :title="emptyTitle"
          :chartData="allResult.dimensionRating.chartData"
        ></PieRoseChart> -->
      </div>
      <div class="area-right">
       
      </div>
    </div>
    <div class="wrap-d-wrap">
      <div
        class="area-left"
        v-for="(eachItem, eachIndex) in allResult.dimensionRating.wrap"
        :key="eachIndex"
        style="width: 33%;"
      >
        <PieRoseChart :title="emptyTitle" :chartData="eachItem.chartData"></PieRoseChart>
       
         <desc-slot>
          整体得分率:{{ eachItem.chartData[0].value }} <br />
          职业态度:{{ eachItem.chartData[1].value }} <br />
          教学实践:{{ eachItem.chartData[2].value }}<br />
          综合育人:{{ eachItem.chartData[3].value }}<br />
          自主发展:{{ eachItem.chartData[4].value }}<br />
        </desc-slot> 
      </div>
    </div>
    <div style="width: 80%; margin: 0 auto;">
      <CommonTable
          :tableInfo="allResult.dimensionRating.tableInfo"
        ></CommonTable>
    </div>
    
    <!-- 得分率结束 -->
    <h2 class="title">3.2.1.2 全区义务教育学段各维度得分分布情况</h2>
    <br />
    <!-- 得分分布 -->
    <div class="wrap-d" style="position: relative;" v-for="(wapItem, wapIndex) in allResult.eachScoreDistribution" :key="index">
      <div style="width: 500px; position: absolute; left: 10px;">{{ subProject[wapIndex] }}</div>
      <div
        class="area-left"
        v-for="(eachItem, eachIndex) in wapItem"
        :key="eachIndex"
      >
        <PieChart :title="emptyTitle" :chartData="eachItem.chartData"></PieChart>
        <desc-slot>
          {{ eachItem.title }}维度结果如下:<br />
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
    <template v-for="(item, index) in compEduData.modules">
      <div :key="index">
        <h2>{{ item.title }}</h2>
        <br />
        <h2 class="title">{{ item.subTitle }}</h2>
        <br />
        <div class="wrap-d">
          <div class="area-left">
            <BoxPlotChart :title="''" :chartData="item.scoreRating.chartData" />
          </div>
          <div class="area-right">
            <desc-slot>
              义务教育学段{{ item.scoreRating.title }}维度结果如下: <br />
              得分率平均为:{{ item.scoreRating.chartData[0].average }} <br />
              得分率中位数为:{{ item.scoreRating.chartData[0].median }} <br />
              得分率最高数为:{{ item.scoreRating.chartData[0].max }} <br />
              得分率最低数为:{{ item.scoreRating.chartData[0].min }} <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d">
          <div class="area-left">
            <PieChart :title="emptyTitle" :chartData="item.eachScoreDistribution.chartData"></PieChart>
          </div>
          <div class="area-right">
            <CommonTable
              :tableInfo="item.eachScoreDistribution.tableInfo"
            ></CommonTable>
          </div>
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
              <ZoomBarChart
                :title="emptyTitle"
                :chartData="item.averageScore.selfAndSecene.chartData"
              ></ZoomBarChart>
          </div>
          <div class="area-left">
            <desc-slot>
              义务教育学段{{ item.averageScore.title }}维度：<br />
              总体平均分为:{{ item.averageScore.all.chartData[0].value }} <br />
              自我问题平均分为:{{ item.averageScore.selfAndSecene.chartData[0].value }} <br />
              情景问题平均分为:{{ item.averageScore.selfAndSecene.chartData[1].value }} <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d">
          <div class="area-left">
            <BoxPlotChart :title="''" :chartData="item.minMaxSocre.chartData" />
          </div>
          <div class="area-right">
            <desc-slot>
              义务教育学段{{ item.scoreRating.title }}维度结果如下: <br />
              得分平均为:{{ item.minMaxSocre.chartData[0].average }} <br />
              得分中位数为:{{ item.minMaxSocre.chartData[0].median }} <br />
              得分最高数为:{{ item.minMaxSocre.chartData[0].max }} <br />
              得分最低数为:{{ item.minMaxSocre.chartData[0].min }} <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d">
          <div class="area-left">
            <ZoomBarChart
                :title="emptyTitle"
                :chartData="item.standardScore.chartData"
              ></ZoomBarChart>
          </div>
          <div class="area-right">
            <desc-slot>
              义务教育学段{{ item.scoreRating.title }}维度标准差结果如下: <br />
              自陈问题标准差为:{{ item.standardScore.chartData[0].value }} <br />
              情景问题标准差为:{{ item.standardScore.chartData[1].value }} <br />
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
import { CompEdu } from "./constant/compEdu/index";
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
      emptyTitle: '',
      allResult: {},
      compEduData: {},
      subProject: {
        "chn": "义务教育语文学科",
        "math": "义务教育数学学科",
        "eng": "义务教育英语学科",
        "soc": "义务教育社会学科",
        "sci": "义务教育理工学科",
        "art": "义务教育艺体学科",
      }
    };
  },
  mounted() {
    this.compEduData = CompEdu;
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
