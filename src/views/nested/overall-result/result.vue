<template>
  <div style="margin-bottom: 50px; padding: 0 10px;">
    <h2 class="mtb-15">一、全区调研结果</h2>
    <br />
    <h2 class="title mtb-15">1.1全区整体调研结果</h2>
    <br />
    <h2 class="title mtb-15">1.1.1全区整体得分率与得分分布情况</h2> 
      <span @click="handleExpand('flag1')" style="margin-left: 1em; cursor: pointer;">
          <template v-if="!flag1">
            展开更多 <i class="el-icon-arrow-down"></i> 
          </template>
          <template v-else>
            收起 <i class="el-icon-arrow-up"></i> 
          </template>  
      </span>
    <br />
    <template  v-if="flag1">
      <div class="wrap-d" style="margin-top: 30px;">
      <div class="area-left" style="width: 70%">
        <PieRoseChart
          :title="'全区整体得分率'"
          :height="'520px'"
          :chartData="allResult.allScoreRating.chartData"
        ></PieRoseChart>
      </div>
      <div class="area-right" style="width: 50%">
        <desc-slot>
          <span style="font-size: 20px; font-weight: bold;"> 全区学科整体得分率为 (%) :</span><br />
          学前教育得分率为: {{ allResult.allScoreRating.chartData[0].value
          }}%<br />
          义务教育语文得分率为:
          {{ allResult.allScoreRating.chartData[1].value }}%<br />
          义务教育数学得分率为:
          {{ allResult.allScoreRating.chartData[2].value }}%<br />
          义务教育英语得分率为:
          {{ allResult.allScoreRating.chartData[3].value }}%<br />
          义务教育社会得分率为:
          {{ allResult.allScoreRating.chartData[4].value }}%<br />
          义务教育理工得分率为:
          {{ allResult.allScoreRating.chartData[5].value }}%<br />
          义务教育艺体得分率为:
          {{ allResult.allScoreRating.chartData[6].value }}%<br />
          高中语文得分率为: {{ allResult.allScoreRating.chartData[7].value
          }}%<br />
          高中数学得分率为: {{ allResult.allScoreRating.chartData[8].value
          }}%<br />
          高中英语得分率为: {{ allResult.allScoreRating.chartData[9].value
          }}%<br />
          高中社会得分率为: {{ allResult.allScoreRating.chartData[10].value
          }}%<br />
          高中理工得分率为: {{ allResult.allScoreRating.chartData[11].value
          }}%<br />
          高中艺体得分率为: {{ allResult.allScoreRating.chartData[12].value
          }}%<br />

          {{ allResult.allScoreRating.max }}得分率最高<br />
          {{ allResult.allScoreRating.min }}得分率最低<br />
        </desc-slot>
      </div>
    </div>  
    <div class="wrap-d" style="margin-top: 80px; margin-bottom: 40px;">
      <div class="area-left" style="width: 70%">
        <PieRoseChart
          :title="'全区各学段得分率'"
          :height="'520px'"
          :chartData="allResult.periondScoreRating.chartData"
        ></PieRoseChart>
      </div>
      <div class="area-right" style="width: 50%">
        <desc-slot>
          <span style="font-size: 20px; font-weight: bold;"> 全区各学段得分率 (%) :</span><br />
          学前教育得分率为: {{ allResult.periondScoreRating.chartData[0].value
          }}%<br />
          义务教育得分率为:
          {{ allResult.periondScoreRating.chartData[1].value }}%<br />
          高中教育得分率为:
          {{ allResult.periondScoreRating.chartData[2].value }}%<br />
          

          {{ allResult.periondScoreRating.max }}得分率最高<br />
          {{ allResult.periondScoreRating.min }}得分率最低<br />
        </desc-slot>
      </div>
    </div>  
    </template>
    <h2 class="title mtb-15" style="margin-top: 40px">1.1.2 全区整体得分分布情况</h2>
    <span @click="handleExpandModule('flag1_1_2',['flag2', 'flag3', 'flag1_1_2'])" style="margin-left: 1em; cursor: pointer;">
          <template v-if="!flag1_1_2">
            展开更多 <i class="el-icon-arrow-down"></i> 
          </template>
          <template v-else>
            收起 <i class="el-icon-arrow-up"></i> 
          </template>  
      </span>
    <br />
    <h2 class="title mtb-15">1.1.2.1全区总体得分分布情况</h2>
    <span @click="handleExpand('flag2')" style="margin-left: 1em; cursor: pointer;">
          <template v-if="!flag2">
            展开更多 <i class="el-icon-arrow-down"></i> 
          </template>
          <template v-else>
            收起 <i class="el-icon-arrow-up"></i> 
          </template>  
      </span>
    <br />
    <template v-if="flag2">
      
    <div>
      <!-- 整体分布情况 -->
      <div class="wrap-d" style="margin: 40px 0;">
        <div class="area-left">
          <PieChart
            :title="'全区得分分布情况'"
            :height="'520px'"
            :chartData="allResult.scoreDistribution.chartData"
          ></PieChart>
        </div>
        <div class="area-right">
          <desc-slot>
            全区总体得分分布情况(人数 占比%):<br />
            优秀人数: {{
              allResult.scoreDistribution.chartData[0].value
            }}
            占比( {{
              allResult.scoreDistribution.chartData[0].proportion
            }}% )<br />
            良好人数: {{
              allResult.scoreDistribution.chartData[1].value
            }}
            占比( {{
              allResult.scoreDistribution.chartData[1].proportion
            }}% )<br />
            及格人数: {{
              allResult.scoreDistribution.chartData[2].value
            }}
            占比( {{
              allResult.scoreDistribution.chartData[2].proportion
            }}% )<br />
            待提升人数: {{
              allResult.scoreDistribution.chartData[3].value
            }}
            占比( {{ allResult.scoreDistribution.chartData[3].proportion }}% )
          </desc-slot>
        </div>
      </div>
    </div>
    <div></div>
    <!-- 循环6个学科 -->
    <div class="wrap-d-wrap" style=" margin-top: 60px;">
      <div
        class="area-left"
        v-for="(eachItem, eachIndex) in allResult.subjectScoreDistribution"
        :key="eachIndex"
        style="width: 33%; margin-top: 35px; "
      >
        <PieChart
          :height="'420px'"
          :title="eachItem.title"
          :chartData="eachItem.chartData"
        ></PieChart>
        <desc-slot>
          
          <span style="font-weight: 600; font-size: 18px">
            {{ eachItem.title }}
          </span
          >结果如下:<br />
          优秀人数:{{ eachItem.chartData[0].value }} 占比({{
            eachItem.chartData[0].proportion
          }} %)<br />
          良好人数:{{ eachItem.chartData[1].value }} 占比({{
            eachItem.chartData[1].proportion
          }} %)<br />
          及格人数:{{ eachItem.chartData[2].value }} 占比({{
            eachItem.chartData[2].proportion
          }} %)<br />
          待提升人数:{{ eachItem.chartData[3].value }} 占比({{
            eachItem.chartData[3].proportion
          }} %)<br />
        </desc-slot>
      </div>
    </div>
  </template>

    <!-- 平均分、中位数、标准差 -->
    <h2 class="title mtb-15" style="margin-top: 60px">1.1.2.2全区整体平均分、中位数、标准差</h2>
    <span @click="handleExpand('flag3')" style="margin-left: 1em; cursor: pointer;">
          <template v-if="!flag3">
            展开更多 <i class="el-icon-arrow-down"></i> 
          </template>
          <template v-else>
            收起 <i class="el-icon-arrow-up"></i> 
          </template>  
      </span>
    <br />
    <!-- 整体平均分 -->
    <template v-if="flag3">
    <div class="wrap-d" style="margin: 60px 0;">
      <div class="area-left">
        <ZoomBarChart
          :title="'全区整体平均分'"
          :chartData="allResult.minMaxScore.all.chartData"
        ></ZoomBarChart>
      </div>
      <div class="area-right">
        <desc-slot
          >全区总体得分分布情况:<br />
          平均分最高的学科是: {{ allResult.minMaxScore.all.max }} <br />
          平均分最低的学科是: {{ allResult.minMaxScore.all.min }} <br />
        </desc-slot>
      </div>
    </div>
    <!-- 自陈问题平局分 -->
    <div class="wrap-d" style="margin: 80px 0;">
      <div class="area-left">
        <ZoomBarChart
          :title="'全区自陈问题平均分'"
          :chartData="allResult.minMaxScore.self.chartData"
        ></ZoomBarChart>
      </div>
      <div class="area-right">
        <desc-slot
          >全区总体得分分布情况:<br />
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
          :title="'全区情景问题平均分'"
          :chartData="allResult.minMaxScore.scene.chartData"
        ></ZoomBarChart>
      </div>
      <div class="area-right">
        <desc-slot
          >全区总体得分分布情况:<br />
          情景问题平均分最高的学科是: {{ allResult.minMaxScore.scene.max }}
          <br />
          情景问题平均分最低的学科是: {{ allResult.minMaxScore.scene.min }}
          <br />
        </desc-slot>
      </div>
    </div>
    <div class="wrap-d" style="margin: 80px 0;">
      <div class="area-left">
        <BoxPlotChart
          :title="'自陈问题最低分、中位数、最高分'"
          :chartData="allResult.midMaxMinSceneAndSelf.self.chartData"
        />
      </div>
      <div class="area-left">
        <BoxPlotChart
          :title="'情景问题最低分、中位数、最高分'"
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
    <!-- 标准差  -->
    <div class="wrap-d" style="margin: 80px 0;">
      <div class="area-left">
        <ZoomBarChart
          :title="'自陈问题标准差'"
          :chartData="allResult.standradScore.self.chartData"
        ></ZoomBarChart>
      </div>

      <div class="area-left">
        <ZoomBarChart
          :title="'情景问题标准差'"
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
  </template>

    <h2 class="title mtb-15">1.2 全区各维度调研结果</h2>
    <span @click="handleExpandModule('flag1_2_1',['flag4', 'flag5', 'flag1_2_1'])" style="margin-left: 1em; cursor: pointer;">
          <template v-if="!flag1_2_1">
            展开更多 <i class="el-icon-arrow-down"></i> 
          </template>
          <template v-else>
            收起 <i class="el-icon-arrow-up"></i> 
          </template>  
      </span>
    <br />
    <h2 class="title mtb-15">1.2.1 全区各维度得分率情况</h2>
    <span @click="handleExpand('flag4')" style="margin-left: 1em; cursor: pointer;">
          <template v-if="!flag4">
            展开更多 <i class="el-icon-arrow-down"></i> 
          </template>
          <template v-else>
            收起 <i class="el-icon-arrow-up"></i> 
          </template>  
      </span>
    <br />
    <!-- <h2 class="title mtb-15"  style="margin-bottom: 30px;">1.2.1.1 全区各维度得分率</h2>
    <span @click="handleExpand('flag4')" style="margin-left: 1em; cursor: pointer;">
          <template v-if="!flag4">
            展开更多 <i class="el-icon-arrow-down"></i> 
          </template>
          <template v-else>
            收起 <i class="el-icon-arrow-up"></i> 
          </template>  
      </span>
    <br /> -->
    <!-- 得分率开始 -->
    <template v-if="flag4">
    <div class="wrap-d">
      <div class="area-left"></div>
      <div class="area-right"></div>
    </div>
    <div class="wrap-d-wrap">
      <div
        class="area-left"
        v-for="(eachItem, eachIndex) in allResult.dimensionPeriondRating.wrap"
        :key="eachIndex"
        style="width: 33%;padding: 20px;"
      >
        <PieRoseChart
          :title="eachItem.title+'得分率'"
          :chartData="eachItem.chartData"
        ></PieRoseChart>

        <desc-slot>
          在<span style="font-weight: 600; font-size: 18px">{{
            eachItem.title
          }}</span
          >中整体结果如下:<br />
          整体得分率: {{ eachItem.chartData[0].value }}% <br />
          职业态度: {{ eachItem.chartData[1].value }}% <br />
          教学实践: {{ eachItem.chartData[2].value }}%<br />
          综合育人: {{ eachItem.chartData[3].value }}%<br />
          自主发展: {{ eachItem.chartData[4].value }}%<br />
        </desc-slot>
      </div>
    </div>
    <div style="width: 80%; margin: 0 auto; margin-top: 40px; margin-bottom: 40px;">
      <CommonTable
        :tableInfo="allResult.dimensionPeriondRating.tableInfo"
      ></CommonTable>
    </div>
  </template>
    <!-- 得分率结束 -->
    <!-- <h2 class="title" style="margin-bottom: 60px; margin-top: 30px;">1.2.1.2 全区各维度得分分布情况</h2>
    <span @click="handleExpand('flag5')" style="margin-left: 1em; cursor: pointer;">
          <template v-if="!flag5">
            展开更多 <i class="el-icon-arrow-down"></i> 
          </template>
          <template v-else>
            收起 <i class="el-icon-arrow-up"></i> 
          </template>  
      </span>
    <br />
    <template v-if="flag5">
    <div class="wrap-d-wrap" style="position: relative">
      <div style="width: 500px; position: absolute; left: 10px">
      </div>
      <div
        class="area-left"
        style="width: 33%"
        v-for="(eachItem, eachIndex) in allResult.eachScoreDistribution"
        :key="eachIndex"
      >
        <PieChart
          :title="eachItem.title"
          :chartData="eachItem.chartData"
        ></PieChart>
        <desc-slot>
          <span style="font-weight: 600; font-size: 18px">{{
            eachItem.title
          }}</span
          >维度结果如下:<br />
          优秀人数:{{ eachItem.chartData[0].value }} <br />
          良好人数:{{ eachItem.chartData[1].value }}<br />
          及格人数:{{ eachItem.chartData[2].value }}<br />
          待提升人数:{{ eachItem.chartData[3].value }} <br />
        </desc-slot>
      </div>
    </div>
  </template> -->
    <template v-for="(item, index) in compEduData.modules">
      <div :key="index" style="margin-bottom: 30px">
        <h2 style="margin-bottom: 40px; margin-top: 10px;">{{ item.title }}</h2>
        <span @click="handleExpandModuleObj(`flagModules`,[`flagObj`, `flagObj1` ], index)" style="margin-left: 1em; cursor: pointer;">
          <template v-if="!flagModules[index]">
            展开更多 <i class="el-icon-arrow-down"></i> 
          </template>
          <template v-else>
            收起 <i class="el-icon-arrow-up"></i> 
          </template>  
      </span>
        <br />
        <h2 class="title" style="margin-bottom: 60px; margin-top: 10px;">{{ item.subTitle }}</h2>
        <span @click="handleExpand('flagObj', index)" style="margin-left: 1em; cursor: pointer;">
          <template v-if="!flagObj[index]">
            展开更多 <i class="el-icon-arrow-down"></i> 
          </template>
          <template v-else>
            收起 <i class="el-icon-arrow-up"></i> 
          </template>  
      </span>
        <br />
        <template v-if="flagObj[index]">
        <!-- 全区职业态度得分率与得分分布情况 -->
        <div class="wrap-d" style="margin-bottom: 40px; margin-top: 10px;">
          <div class="area-left" style="width: 60%">
            <RadarChart
              :chartData="{
                title: '全区'+item.scoreRating.title + '得分率',
                config: radarChartOptions,
                data: item.scoreRating.chartData,
              }"
            ></RadarChart>
          </div>
          <div class="area-right" style="width: 40%">
            <desc-slot>
              全区<span style="font-weight: 600; font-size: 18px">{{
            item.scoreRating.title
          }}</span
          >维度结果如下: <br />
              全区教育学科得分率为：{{ item.scoreRating.chartData[0] }}% <br />

              学前教育得分率为：{{ item.scoreRating.chartData[1] }}% <br />
              义务教育语文得分率为：{{ item.scoreRating.chartData[2] }}% <br />
              义务教育数学得分率为：{{ item.scoreRating.chartData[3] }}% <br />
              义务教育英语得分率为：{{ item.scoreRating.chartData[4] }}% <br />
              义务教育社会得分率为：{{ item.scoreRating.chartData[5] }}% <br />
              义务教育理工得分率为：{{ item.scoreRating.chartData[6] }}% <br />
              义务教育艺体得分率为：{{ item.scoreRating.chartData[7] }}% <br />

              高中教育语文得分率为：{{ item.scoreRating.chartData[7] }}%
              <br />
              高中教育数学得分率为：{{ item.scoreRating.chartData[8] }}%
              <br />
              高中教育英语得分率为：{{ item.scoreRating.chartData[9] }}%
              <br />
              高中教育社会得分率为：{{ item.scoreRating.chartData[10] }}%
              <br />
              高中教育理工得分率为：{{ item.scoreRating.chartData[11] }}%
              <br />
              高中教育艺体得分率为：{{ item.scoreRating.chartData[12] }}%
              <br />
              高中教育艺体得分率为：{{ item.scoreRating.chartData[13] }}%
              <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d-wrap">
          <div
            class="area-left"
            v-for="(eachItem, eachIndex) in item.eachScoreDistribution.wap"
            :key="eachIndex"
            style="width: 33%; margin-bottom: 60px;"
          >
            <PieChart
              :title="eachItem.title"
              :chartData="eachItem.chartData"
            ></PieChart>
            <desc-slot>
              <span style="font-weight: 600; font-size: 18px">结果如下:</span
          ><br/>
              
              优秀人数：{{ eachItem.chartData[0].value }} 占比 ({{
                eachItem.chartData[0].proportion
              }}%)<br />
              良好人数：{{ eachItem.chartData[1].value }} 占比 ({{
                eachItem.chartData[1].proportion
              }}%)<br />
              及格人数：{{ eachItem.chartData[2].value }} 占比 ({{
                eachItem.chartData[2].proportion
              }}%)<br />
              待提升人数：{{ eachItem.chartData[3].value }} 占比 ({{
                eachItem.chartData[3].proportion
              }}%)<br />
            </desc-slot>
          </div>
        </div>
        <div style="width: 80%; margin: 0px auto; margin-bottom: 60px;">
          <CommonTable
            :tableInfo="item.eachScoreDistribution.tableInfo"
          ></CommonTable>
        </div>
      </template>
        <h2 class="title" style="margin-bottom: 60px; margin-top: 40px;">{{ item.second }}</h2>
        <span @click="handleExpand('flagObj1', index)" style="margin-left: 1em; cursor: pointer;">
          <template v-if="!flagObj1[index]">
            展开更多 <i class="el-icon-arrow-down"></i> 
          </template>
          <template v-else>
            收起 <i class="el-icon-arrow-up"></i> 
          </template>  
      </span>
      <template v-if="flagObj1[index]">
        <div class="wrap-d" style="margin-bottom: 70px;">
          <div class="area-left">
            <ZoomBarChart
              :title="item.averageScore.title+'整体平均分'"
              :chartData="item.averageScore.all.chartData"
            ></ZoomBarChart>
          </div>
          <div class="area-right">
            <desc-slot>
              全区{{ item.averageScore.title }}维度：<br />
              平均分最低的学科为：{{ item.averageScore.all.min }} <br />
              平均分最高的学科为：{{ item.averageScore.all.max }} <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d"  style="margin-bottom: 70px;">
          <div class="area-left">
            <ZoomBarChart
              :title="item.averageScore.title+'自陈问题平均分'"
              :chartData="item.averageScore.self.chartData"
            ></ZoomBarChart>
          </div>
          <div class="area-right">
            <desc-slot>
              全区{{ item.averageScore.title }}维度：<br />
              自陈问题平均分最低的学科为:{{ item.averageScore.self.min }} <br />
              自陈问题平均分最高的学科为:{{ item.averageScore.self.max }} <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d"  style="margin-bottom: 70px;">
          <div class="area-left">
            <ZoomBarChart
              :title="item.averageScore.title+'情景问题平均分'"
              :chartData="item.averageScore.scene.chartData"
            ></ZoomBarChart>
          </div>
          <div class="area-right">
            <desc-slot>
              全区{{ item.averageScore.title }}维度：<br />
              情景问题平均分最低的学科为:{{ item.averageScore.scene.min }}
              <br />
              情景问题平均分最高的学科为:{{ item.averageScore.scene.max }}
              <br />
            </desc-slot>
          </div>
        </div>
        <!-- 最低分 最高分 中位数 -->
        <div class="wrap-d"  style="margin-bottom: 70px;">
          <div class="area-left">
            <BoxPlotChart
              :title="item.averageScore.title+'自陈问题问题最低分、中位数、最高分'"  
              :chartData="item.minMaxSocre.self.chartData"
            />
          </div>
          <div class="area-right">
            <desc-slot>
              全区{{ item.scoreRating.title }}维度结果如下(自陈问题):
              <br />
              中位数最高的学科为:{{ item.minMaxSocre.self.midMax }} <br />
              中位数最低的学科为:{{ item.minMaxSocre.self.midMin }} <br />
              分数最高的学科为:{{ item.minMaxSocre.self.min }} <br />
              分数最低的学科为:{{ item.minMaxSocre.self.max }} <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d"  style="margin-bottom: 70px;">
          <div class="area-left">
            <BoxPlotChart
            :title="item.averageScore.title+'情景问题问题最低分、中位数、最高分'"  
              :chartData="item.minMaxSocre.scene.chartData"
            />
          </div>
          <div class="area-right">
            <desc-slot>
              全区{{ item.scoreRating.title }}维度结果如下(情景问题):
              <br />
              中位数最高的学科为:{{ item.minMaxSocre.scene.midMax }} <br />
              中位数最低的学科为:{{ item.minMaxSocre.scene.midMin }} <br />
              分数最高的学科为:{{ item.minMaxSocre.scene.min }} <br />
              分数最低的学科为:{{ item.minMaxSocre.scene.max }} <br />
            </desc-slot>
          </div>
        </div>

        <!-- 标准差 -->
        <div class="wrap-d"  style="margin-bottom: 70px;">
          <div class="area-left">
            <ZoomBarChart
              :title="item.averageScore.title+'自陈问题问题标准差'"  
              :chartData="item.standardScore.self.chartData"
            ></ZoomBarChart>
          </div>
          <div class="area-right">
            <desc-slot>
              全区{{ item.scoreRating.title }}维度标准差结果如下: <br />
              自陈问题标准差最大的学科为:{{ item.standardScore.self.max }}
              <br />
              自陈问题标准差最大的学科为:{{ item.standardScore.self.min }}
              <br />
            </desc-slot>
          </div>
        </div>
        <div class="wrap-d"  style="margin-bottom: 70px;">
          <div class="area-left">
            <ZoomBarChart
              :title="item.averageScore.title+'情景问题问题标准差'"  
              :chartData="item.standardScore.scene.chartData"
            ></ZoomBarChart>
          </div>
          <div class="area-right">
            <desc-slot>
              全区{{ item.scoreRating.title }}维度标准差结果如下: <br />
              情景问题标准差最大的学科为:{{ item.standardScore.scene.max }}
              <br />
              情景问题标准差最大的学科为:{{ item.standardScore.scene.min }}
              <br />
            </desc-slot>
          </div>
        </div>
</template>

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
        { name: "全区总体得分率", max: 100 },
        { name: "学前教育", max: 100 },
        { name: "义务教育语文", max: 100 },
        { name: "义务教育数学", max: 100 },
        { name: "义务教育英语", max: 100 },
        { name: "义务教育社会", max: 100 },
        { name: "义务教育理工", max: 100 },
        { name: "义务教育艺体", max: 100 },
        { name: "高中教育语文", max: 100 },
        { name: "高中教育数学", max: 100 },
        { name: "高中教育英语", max: 100 },
        { name: "高中教育社会", max: 100 },
        { name: "高中教育理工", max: 100 },
        { name: "高中教育艺体", max: 100 },
      ],
      subProjectArr: [
        "学前教育",
        "义务教育语文",
        "义务教育数学",
        "义务教育英语",
        "义务教育社会",
        "义务教育理工",
        "义务教育艺体",
        "高中教育语文",
        "高中教育数学",
        "高中教育英语",
        "高中教育社会",
        "高中教育理工",
        "高中教育艺体",
      ],
      flag1: true,
      flag2: true,
      flag3: true,
      flag4: true,
      flag5: true,
      flagObj: {
        0: true,
        1: true,
        2: true,
        3: true,
      },
      flagObj1: {
        0: true,
        1: true,
        2: true,
        3: true,
      },
      flag1_1_2: true,
      flag1_2_1: true,
      flagModules: {
        0: true,
        1: true,
        2: true,
        3: true
      },
    };
  },
  mounted() {
    this.compEduData = ResponsResult;
    this.allResult = this.compEduData.allResult;
  },
  methods: {
    handleExpand(val, index) {
      if(index === 0 || index === 1 || index === 2 || index === 3 || index === 4) {
        this[val][index] = !this[val][index]
      }else {
        this[val] = !this[val]
      }
    },
    handleExpandModule(field, args){
      this[field] = !this[field]
      args.map(item=>{

        this[item] = this[field]
      })
    },
    handleExpandModuleObj(field, args, index){
      this[field][index] = !this[field][index]
      args.map(item=>{
        this[item][index] = this[field][index]
      })
    },
  }
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
.mtb-15 {
  margin-top: 25px;
  margin-bottom: 25px;
}

</style>
