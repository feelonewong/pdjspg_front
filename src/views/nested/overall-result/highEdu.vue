<template>
  <div style="margin-bottom: 50px">
    <h2>二、高中教育与特殊教育学段调研结果</h2>
    <br />
    <h2 class="title" style="margin-top: 30px; margin-bottom: 40px;">4.1全区高中教育学段整体得分率与得分分布情况</h2>
    <br />
    <h2 class="title">4.1.1全区高中教育学段整体得分率</h2>
    <br />
    <div class="wrap-d" style="margin: 30px 0;" >
      <div class="area-left">
        <PieRoseChart
          :title="'高中教育学段整体得分率'"
          :chartData="allResult.allScoreRating.chartData"
        ></PieRoseChart>
      </div>
      <div class="area-right">
        <desc-slot>
          高中教育学科整体得分率为:<br>

          {{
            allResult.allScoreRating.max
          }}得分率最高<br>
          {{
            allResult.allScoreRating.min
          }}得分率最低<br>
        </desc-slot>
      </div>
    </div>
    <h2 class="title" style="margin-top: 30px;margin-bottom: 30px;">4.1.2全区高中教育学段整体得分分布情况</h2>
    <br />
    <h2 class="title" style="margin-top: 10px;margin-bottom: 30px;">4.1.2.1全区高中教育学段总体得分分布情况</h2>
    <br />
    <div>
      <div class="wrap-d" style="margin: 40px 0;">
        <div class="area-left">
          <PieChart
            :title="'高中教育学段整体得分分布情况'"
            :chartData="allResult.scoreDistribution.chartData"
          ></PieChart>
        </div>
        <div class="area-right">
          <desc-slot>
            全区高中教育学段总体得分分布情况:<br />
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
            待提升人数{{
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
        style="width: 33%; margin: 30px 0;"
      >
        <PieChart :title="eachItem.title" :chartData="eachItem.chartData"></PieChart>
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
          待提升人数:{{ eachItem.chartData[3].value }} 占比({{
            eachItem.chartData[3].precent
          }})<br />
        </desc-slot>
      </div>
    </div>

    <h2 class="title">4.1.2.2高中教育学科整体平均分、中位数、标准差</h2>
    <br />
    <div class="wrap-d" style="margin: 40px 0;">
      <div class="area-left">
        <ZoomBarChart
          :title="'高中教育学科整体平均分'"
          :chartData="allResult.minMaxScore.all.chartData"
        ></ZoomBarChart>
      </div>
      <div class="area-right">
        <ZoomBarChart
          :title="'高中教育学科自陈问题平均分'"
          :chartData="allResult.minMaxScore.self.chartData"
        ></ZoomBarChart>
      </div>
    </div>
    <div class="wrap-d" style="margin: 30px 0;">
      <div class="area-left">
        <ZoomBarChart
          :title="'高中教育学科情景问题平均分'"
          :chartData="allResult.minMaxScore.scene.chartData"
        ></ZoomBarChart>
      </div>
      <div class="area-right">
        <desc-slot>
           全区高中教育学段整体得分结果如下: <br />
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
            <BoxPlotChart :title="'高中教育学段自陈问题最低分、中位数、最高分'" :chartData="allResult.midMaxMinSceneAndSelf.self.chartData" />
          </div>
          <div class="area-left">
            <BoxPlotChart :title="'高中教育学段情景问题最低分、中位数、最高分'" :chartData="allResult.midMaxMinSceneAndSelf.scene.chartData" />
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
    <div class="wrap-d" style="margin: 40px 0;">
      <div class="area-left">
        <ZoomBarChart
          :title="'高中教育学段自陈问题标准差'"
          :chartData="allResult.standradScore.self.chartData"
        ></ZoomBarChart>
      </div>
      
      <div class="area-left">
        <ZoomBarChart
          :title="'高中教育学段情景问题标准差'"
          :chartData="allResult.standradScore.scene.chartData"
        ></ZoomBarChart>
      </div>
      <div class="area-right">
        <desc-slot>
          在自陈问题方面，高中教育的标准差最大的学科为:
          {{ allResult.standradScore.self.max }} <br />
          在自陈问题方面，高中教育的标准差最小的学科为:
          {{ allResult.standradScore.self.min }} <br />
          在情景问题方面，高中教育的标准差最大的学科为:
          {{ allResult.standradScore.scene.max }} <br />
          在情景问题方面，高中教育的标准差最小的学科为:
          {{ allResult.standradScore.scene.min }} <br />
        </desc-slot>
      </div>
    </div>
    <h2 class="title">4.2 全区高中教育学段各维度调研结果</h2>
    <br />
    <h2 class="title" style="margin-bottom: 30px;">4.2.1 全区高中教育学段各维度得分率与得分分布情况</h2>
    <br />
    <h2 class="title" style="margin-bottom: 50px;">4.2.1.1 全区高中教育学段各维度得分率</h2>
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
        style="width: 33%; margin: 30px 0;"
      >
        <PieRoseChart :title="eachItem.title" :chartData="eachItem.chartData"></PieRoseChart>
       
         <desc-slot>
          整体得分率:{{ eachItem.chartData[0].value }} <br />
          职业态度:{{ eachItem.chartData[1].value }} <br />
          教学实践:{{ eachItem.chartData[2].value }}<br />
          综合育人:{{ eachItem.chartData[3].value }}<br />
          自主发展:{{ eachItem.chartData[4].value }}<br />
        </desc-slot> 
      </div>
    </div>
    <div style="width: 80%; margin: 0 auto; margin-bottom: 30px;">
      <CommonTable
          :tableInfo="allResult.dimensionRating.tableInfo"
        ></CommonTable>
    </div>
    
    <!-- 得分率结束 -->
    <h2 class="title" style="margin-top: 30px; margin-bottom: 50px">4.2.1.2 全区高中教育学段各维度得分分布情况</h2>
    <br />
    <!-- 得分分布 -->
    <div  style="display: flex; flex-wrap: wrap;" v-for="(wapItem, wapIndex) in allResult.eachScoreDistribution" :key="index">
      <!-- <div style="width: 500px; position: absolute; left: 10px;">{{ subProject[wapIndex] }}</div> -->
      <div
        class="area-left"
        v-for="(eachItem, eachIndex) in wapItem"
        :key="eachIndex"
        style="width: 50%; margin: 30px 0;"
      >
        <PieChart :title="subProject[wapIndex]" :chartData="eachItem.chartData"></PieChart>
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
          待提升人数:{{ eachItem.chartData[3].value }} 占比({{
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
        <div class="wrap-d" style="margin-top: 40px;">
          <div class="area-left">
            <RadarChart :chartData="{
              title: '全区高中教育'+item.scoreRating.title+'得分率',
              config: radarChartOptions,
              data: item.scoreRating.chartData
            }"></RadarChart>
          </div>
          <div class="area-right">
            <desc-slot>
              高中教育学段{{ item.scoreRating.title }}维度结果如下: <br />
              高中教育语文科得分率为:{{ item.scoreRating.chartData[0] }} <br />
              高中教育数学科得分率为:{{ item.scoreRating.chartData[1] }} <br />
              高中教育英语科得分率为:{{ item.scoreRating.chartData[2] }} <br />
              高中教育社会科得分率为:{{ item.scoreRating.chartData[3] }} <br />
              高中教育理工科得分率为:{{ item.scoreRating.chartData[4] }} <br />
              高中教育艺体科得分率为:{{ item.scoreRating.chartData[5] }} <br />
            </desc-slot>
          </div>
        </div>
         <div class="wrap-d-wrap">
          <div
            class="area-left"
            v-for="(eachItem, eachIndex) in item.eachScoreDistribution.wap"
            :key="eachIndex"
            style="width: 33%;"
          >
            <PieChart :title="eachItem.title" :chartData="eachItem.chartData"></PieChart>
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
              待提升人数:{{ eachItem.chartData[3].value }} 占比({{
                eachItem.chartData[3].precent
              }})<br />
            </desc-slot>
          </div>
        </div> 
        <div style="width: 80%; margin: 0 auto; margin-top: 40px; margin-bottom: 40px;">
          <CommonTable
              :tableInfo="item.eachScoreDistribution.tableInfo"
            ></CommonTable>
        </div>
        <h2 class="title">{{ item.second }}</h2>
        <div class="wrap-d" style="margin: 30px 0;">
          <div class="area-left">
              <ZoomBarChart
                :title="'全区高中教育'+item.scoreRating.title+'整体平均分'"
                :chartData="item.averageScore.all.chartData"
              ></ZoomBarChart>
          </div>
          <div class="area-left">
            <desc-slot>
              高中教育学段{{ item.averageScore.title }}维度：<br />
              平均分最低的学科为:{{ item.averageScore.all.min }} <br />
              平均分最高的学科为:{{ item.averageScore.all.max }} <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d" style="margin: 40px 0;">
          <div class="area-left">
              <ZoomBarChart
                :title="'全区高中教育'+item.scoreRating.title+'自陈问题平均分'"
                :chartData="item.averageScore.self.chartData"
              ></ZoomBarChart>
          </div>
          <div class="area-left">
            <desc-slot>
              高中教育学段{{ item.averageScore.title }}维度：<br />
              自陈问题平均分最低的学科为:{{ item.averageScore.self.min }} <br />
              自陈问题平均分最高的学科为:{{ item.averageScore.self.max }} <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d">
          <div class="area-left">
              <ZoomBarChart
              :title="'全区高中教育'+item.scoreRating.title+'情景问题平均分'"
                :chartData="item.averageScore.scene.chartData"
              ></ZoomBarChart>
          </div>
          <div class="area-left">
            <desc-slot>
              高中教育学段{{ item.averageScore.title }}维度：<br />
              情景问题平均分最低的学科为:{{ item.averageScore.scene.min }} <br />
              情景问题平均分最高的学科为:{{ item.averageScore.scene.max }} <br />
            </desc-slot>
          </div>
        </div>
        <!-- 最低分 最高分 中位数 -->
        <div class="wrap-d" style="margin: 30px 0;">
          <div class="area-left">
            <BoxPlotChart
            :title="'全区高中教育'+item.scoreRating.title+'自陈问题最低分、中位数、最高分'"            
            :chartData="item.minMaxSocre.self.chartData" />
          </div>
          <div class="area-right">
            <desc-slot>
              高中教育学段{{ item.scoreRating.title }}维度结果如下(自陈问题): <br />
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
            :title="'全区高中教育'+item.scoreRating.title+'情景问题最低分、中位数、最高分'"            
            :chartData="item.minMaxSocre.scene.chartData" />
          </div>
          <div class="area-right">
            <desc-slot>
              高中教育学段{{ item.scoreRating.title }}维度结果如下(情景问题): <br />
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
                :title="'全区高中教育'+item.scoreRating.title+'自陈问题标准差'"            
                :chartData="item.standardScore.self.chartData"
              ></ZoomBarChart>
          </div>
          <div class="area-right">
            <desc-slot>
              高中教育学段{{ item.scoreRating.title }}维度标准差结果如下: <br />
              自陈问题标准差最大的学科为:{{ item.standardScore.self.max }} <br />
              自陈问题标准差最大的学科为:{{ item.standardScore.self.min }} <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d" style="margin: 50px 0;">
          <div class="area-left">
            <ZoomBarChart
                :title="'全区高中教育'+item.scoreRating.title+'情景问题标准差'"            
                :chartData="item.standardScore.scene.chartData"
              ></ZoomBarChart>
          </div>
          <div class="area-right">
            <desc-slot>
              高中教育学段{{ item.scoreRating.title }}维度标准差结果如下: <br />
              情景问题标准差最大的学科为:{{ item.standardScore.scene.max }} <br />
              情景问题标准差最大的学科为:{{ item.standardScore.scene.min }} <br />
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
import ZoomBarChart from "@/components/Charts/ZoomBarChart";
import RadarChart from './components/all/RadarChart2.vue'
import {HighEdu} from './constant/highEdu/index'
export default {
  components: {
    PolyChart,
    PieChart,
    DescSlot,
    CommonTable,
    BoxPlotChart,
    RadarChart,
    ZoomBarChart,
    PieRoseChart,
  },
  data() {
    return {
      emptyTitle: '',
      allResult: {},
      compEduData: {},
      subProject: {
        "chn": "高中教育语文学科",
        "math": "高中教育数学学科",
        "eng": "高中教育英语学科",
        "soc": "高中教育社会学科",
        "sci": "高中教育理工学科",
        "art": "高中教育艺体学科",
      },
      radarChartOptions:  [
        { name: "高中教育语文科教师", max: 100 },
        { name: "高中教育数学科教师", max: 100 },
        { name: "高中教育英语科教师", max: 100 },
        { name: "高中教育社会科教师", max: 100 },
        { name: "高中教育理工科教师", max: 100 },
        { name: "高中教育艺体科教师", max: 100 },
      ]
    };
  },
  mounted() {
    this.compEduData = HighEdu;
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
