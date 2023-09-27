import {data} from '@/json/compEdu/index'
const tableConfig = [
    {
        "prop": "name",
        "label": "学科/维度"
    },
    {
        "prop": "all",
        "label": "整体"
    },
    {
        "prop": "attitude",
        "label": "职业态度",
    },
    {
        "prop": "practice",
        "label": "教学实践",
    },
    {
        "prop": "comprehensive",
        "label": "综合育人",
    },
    {
        "prop": "development",
        "label": "自主发展",
    },
]
const moduleTableConfig = [
    {
        "prop": "name",
        "label": "学科/维度"
    },
    {
        "prop": "excellent",
        "label": "优秀"
    },
    {
        "prop": "good",
        "label": "良好",
    },
    {
        "prop": "pass",
        "label": "及格",
    },
    {
        "prop": "fail",
        "label": "不及格",
    },
]
function findMaxAndMin(arr) {
    let max = arr[0];
    let min = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].value > max.value) {
        max = arr[i];
      }
      if (arr[i].value < min.value) {
        min = arr[i];
      }
    }
  
    return { max, min };
  }
  
export const CompEdu = {
    "allResult":{
        "allScoreRating": {
            "title": "",
            "max": findMaxAndMin(data.allResult.allScoreRating.chartData).max.name,
            "min": findMaxAndMin(data.allResult.allScoreRating.chartData).min.name,
            "chartData": data.allResult.allScoreRating.chartData,
        },
        "scoreDistribution": {
            chartData: data.allResult.scoreDistribution.chartData,
        },
        "subjectScoreDistribution":{
            "chn":{
                "chartData": data.allResult.subjectScoreDistribution.chnChartData
            },
            "math":{
                "chartData": data.allResult.subjectScoreDistribution.mathChartData
            },
            "eng":{
                "chartData": data.allResult.subjectScoreDistribution.engChartData
            },
            "soc":{
                "chartData": data.allResult.subjectScoreDistribution.socChartData
            },
            "sci":{
                "chartData": data.allResult.subjectScoreDistribution.sciChartData
            },
            "art":{
                "chartData": data.allResult.subjectScoreDistribution.artChartData
            },
        },
        "minMaxScore": {
            "all": {
                "max":data.allResult.minMaxScore.all.max,
                "min":data.allResult.minMaxScore.all.min,
                "chartData": data.allResult.minMaxScore.all.chartData,
            },
            "self": {
                "max":data.allResult.minMaxScore.self.max,
                "min":data.allResult.minMaxScore.self.min,
                "chartData": data.allResult.minMaxScore.self.chartData,
            },
            "scene": {
                "max":data.allResult.minMaxScore.scene.max,
                "min":data.allResult.minMaxScore.scene.min,
                "chartData": data.allResult.minMaxScore.scene.chartData,
            }
        },
        "standradScore": {
            "self": {
                "max": data.allResult.standradScore.self.max,
                "min": data.allResult.standradScore.self.min,
                "chartData":data.allResult.standradScore.self.chartData
            },
            "scene": {
                "max": data.allResult.standradScore.scene.max,
                "min": data.allResult.standradScore.scene.min,
                "chartData":data.allResult.standradScore.scene.chartData
            },
        },
        "midMaxMinSceneAndSelf":{
            "self": {
                "midMax": data.allResult.midMaxMinSceneAndSelf.self.midMax,
                "midMin": data.allResult.midMaxMinSceneAndSelf.self.midMin,
                "min": data.allResult.midMaxMinSceneAndSelf.self.min,
                "max": data.allResult.midMaxMinSceneAndSelf.self.max,
                "chartData": data.allResult.midMaxMinSceneAndSelf.self.chartData
            },
            "scene": {
                "midMax": data.allResult.midMaxMinSceneAndSelf.scene.midMax,
                "midMin": data.allResult.midMaxMinSceneAndSelf.scene.midMin,
                "min": data.allResult.midMaxMinSceneAndSelf.scene.min,
                "max": data.allResult.midMaxMinSceneAndSelf.scene.max,
                "chartData": data.allResult.midMaxMinSceneAndSelf.scene.chartData
            },
        },
        "dimensionRating": {
            "chartData": data.allResult.dimensionRating.chartData,
            "tableInfo": {
                "data": data.allResult.dimensionRating.tableData,
                "config": tableConfig
            }
        },
        "eachScoreDistribution": {
            "attitude": {
                "title": "教学态度",
                "chartData": data.allResult.eachScoreDistribution.attitude.chartData,
            },
            "practice": {
                "title": "教学实践",
                "chartData": data.allResult.eachScoreDistribution.practice.chartData,
            },
            "comprehensive": {
                "title": "综合育人",
                "chartData": data.allResult.eachScoreDistribution.comprehensive.chartData,
            },
            "development": {
                "title": "自主发展",
                "chartData": data.allResult.eachScoreDistribution.development.chartData,
            }
        }
    },
    "modules": [
        {
            "title": "3.2.2 全区义务教育学段职业态度",
            "subTitle": "3.2.2.1 全区义务教育学段职业态度得分率与得分分布情况",
            "second": "3.2.2.2 全区义务教育学段职业态度平均分、中位数、标准差",
            "scoreRating": {
                "title": "职业态度",
                "chartData": data.modules[0].scoreRating.chartData,
            },
            "eachScoreDistribution": {
                "tableInfo":{
                    "config": moduleTableConfig,
                    "data": data.modules[0].eachScoreDistribution.tableData,
                },
                "chartData": data.modules[0].eachScoreDistribution.chartData,
            },
            "averageScore": {
                "title": "职业态度",
                "all": {
                    "chartData": data.modules[0].averageScore.all.chartData,
                },
                "selfAndSecene": {
                    "chartData": data.modules[0].averageScore.selfAndSecene.chartData,
                }
            },
            "standardScore": {
                "chartData": data.modules[0].standardScore.chartData,
            },
            "minMaxSocre": {
                "chartData": data.modules[0].minMaxSocre.chartData,
            }
        },
        {
            "title": "3.2.3 全区义务教育学段教学实践",
            "subTitle": "3.2.3.1 全区义务教育学段教学实践得分率与得分分布情况",
            "second": "3.2.2.3 全区义务教育学段教学实践平均分、中位数、标准差",
            "scoreRating": {
                "title": "教学实践",
                "chartData": data.modules[1].scoreRating.chartData,
            },
            "eachScoreDistribution": {
                "tableInfo":{
                    "config": moduleTableConfig,
                    "data": data.modules[1].eachScoreDistribution.tableData,
                },
                "chartData": data.modules[1].eachScoreDistribution.chartData,
            },
            "averageScore": {
                "title": "教学实践",
                "all": {
                    "chartData": data.modules[1].averageScore.all.chartData,
                },
                "selfAndSecene": {
                    "chartData": data.modules[1].averageScore.selfAndSecene.chartData,
                }
            },
            "standardScore": {
                "chartData": data.modules[1].standardScore.chartData,
            },
            "minMaxSocre": {
                "chartData": data.modules[1].minMaxSocre.chartData,
            }
        },
        {
            "title": "3.2.4 全区义务教育学段综合育人",
            "subTitle": "3.2.4.1 全区义务教育学段综合育人得分率与得分分布情况",
            "second": "3.2.2.4 全区义务教育学段综合育人平均分、中位数、标准差",
            "scoreRating": {
                "title": "综合育人",
                "chartData": data.modules[2].scoreRating.chartData,
            },
            "eachScoreDistribution": {
                "tableInfo":{
                    "config": moduleTableConfig,
                    "data": data.modules[2].eachScoreDistribution.tableData,
                },
                "chartData": data.modules[2].eachScoreDistribution.chartData,
            },
            "averageScore": {
                "title": "综合育人",
                "all": {
                    "chartData": data.modules[2].averageScore.all.chartData,
                },
                "selfAndSecene": {
                    "chartData": data.modules[2].averageScore.selfAndSecene.chartData,
                }
            },
            "standardScore": {
                "chartData": data.modules[2].standardScore.chartData,
            },
            "minMaxSocre": {
                "chartData": data.modules[2].minMaxSocre.chartData,
            }
        },
        {
            "title": "3.2.5 全区义务教育学段自主发展",
            "subTitle": "3.2.5.1 全区义务教育学段自主发展得分率与得分分布情况",
            "second": "3.2.5.2 全区义务教育学段自主发展平均分、中位数、标准差",
            "scoreRating": {
                "title": "自主发展",
                "chartData": data.modules[3].scoreRating.chartData,
            },
            "eachScoreDistribution": {
                "tableInfo":{
                    "config": moduleTableConfig,
                    "data": data.modules[3].eachScoreDistribution.tableData,
                },
                "chartData": data.modules[3].eachScoreDistribution.chartData,
            },
            "averageScore": {
                "title": "自主发展",
                "all": {
                    "chartData": data.modules[3].averageScore.all.chartData,
                },
                "selfAndSecene": {
                    "chartData": data.modules[3].averageScore.selfAndSecene.chartData,
                }
            },
            "standardScore": {
                "chartData": data.modules[3].standardScore.chartData,
            },
            "minMaxSocre": {
                "chartData": data.modules[3].minMaxSocre.chartData,
            }
        }
    ]
}