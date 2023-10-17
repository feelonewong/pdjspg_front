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
        "label": "待提升",
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
                "title": "义务教育语文",
                "chartData": data.allResult.subjectScoreDistribution.chnChartData
            },
            "math":{
                "title": "义务教育数学",
                "chartData": data.allResult.subjectScoreDistribution.mathChartData
            },
            "eng":{
                "title": "义务教育英语",
                "chartData": data.allResult.subjectScoreDistribution.engChartData
            },
            "soc":{
                "title": "义务教育社会",
                "chartData": data.allResult.subjectScoreDistribution.socChartData
            },
            "sci":{
                "title": "义务教育理工",
                "chartData": data.allResult.subjectScoreDistribution.sciChartData
            },
            "art":{
                "title": "义务教育艺体",
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
            "wrap": {
                "chn":{
                    "title": "义务教育语文",
                    "chartData": data.allResult.dimensionRating.chnChartData
                },
                "math":{
                    "title": "义务教育数学",
                    "chartData": data.allResult.dimensionRating.mathChartData
                },
                "eng":{
                    "title": "义务教育英语",
                    "chartData": data.allResult.dimensionRating.engChartData
                },
                "soc":{
                    "title": "义务教育社会",
                    "chartData": data.allResult.dimensionRating.socChartData
                },
                "sci":{
                    "title": "义务教育理工",
                    "chartData": data.allResult.dimensionRating.sciChartData
                },
                "art":{
                    "title": "义务教育艺体",
                    "chartData": data.allResult.dimensionRating.artChartData
                },

            },
            "tableInfo": {
                "data": data.allResult.dimensionRating.tableData,
                "config": tableConfig
            }
        },
        "eachScoreDistribution": {
            "chn":{
                "attitude": {
                    "title": "职业态度",
                    "chartData": data.allResult.eachScoreDistribution.chn.attitude.chartData,
                },
                "practice": {
                    "title": "教学实践",
                    "chartData": data.allResult.eachScoreDistribution.chn.practice.chartData,
                },
                "comprehensive": {
                    "title": "综合育人",
                    "chartData": data.allResult.eachScoreDistribution.chn.comprehensive.chartData,
                },
                "development": {
                    "title": "自主发展",
                    "chartData": data.allResult.eachScoreDistribution.chn.development.chartData,
                }
            },
            "math":{
                "attitude": {
                    "title": "职业态度",
                    "chartData": data.allResult.eachScoreDistribution.math.attitude.chartData,
                },
                "practice": {
                    "title": "教学实践",
                    "chartData": data.allResult.eachScoreDistribution.math.practice.chartData,
                },
                "comprehensive": {
                    "title": "综合育人",
                    "chartData": data.allResult.eachScoreDistribution.math.comprehensive.chartData,
                },
                "development": {
                    "title": "自主发展",
                    "chartData": data.allResult.eachScoreDistribution.math.development.chartData,
                }
            },
            "eng":{
                "attitude": {
                    "title": "职业态度",
                    "chartData": data.allResult.eachScoreDistribution.eng.attitude.chartData,
                },
                "practice": {
                    "title": "教学实践",
                    "chartData": data.allResult.eachScoreDistribution.eng.practice.chartData,
                },
                "comprehensive": {
                    "title": "综合育人",
                    "chartData": data.allResult.eachScoreDistribution.eng.comprehensive.chartData,
                },
                "development": {
                    "title": "自主发展",
                    "chartData": data.allResult.eachScoreDistribution.eng.development.chartData,
                }
            },
            "soc":{
                "attitude": {
                    "title": "职业态度",
                    "chartData": data.allResult.eachScoreDistribution.soc.attitude.chartData,
                },
                "practice": {
                    "title": "教学实践",
                    "chartData": data.allResult.eachScoreDistribution.soc.practice.chartData,
                },
                "comprehensive": {
                    "title": "综合育人",
                    "chartData": data.allResult.eachScoreDistribution.soc.comprehensive.chartData,
                },
                "development": {
                    "title": "自主发展",
                    "chartData": data.allResult.eachScoreDistribution.soc.development.chartData,
                }
            },
            "sci":{
                "attitude": {
                    "title": "职业态度",
                    "chartData": data.allResult.eachScoreDistribution.sci.attitude.chartData,
                },
                "practice": {
                    "title": "教学实践",
                    "chartData": data.allResult.eachScoreDistribution.sci.practice.chartData,
                },
                "comprehensive": {
                    "title": "综合育人",
                    "chartData": data.allResult.eachScoreDistribution.sci.comprehensive.chartData,
                },
                "development": {
                    "title": "自主发展",
                    "chartData": data.allResult.eachScoreDistribution.sci.development.chartData,
                }
            },
            "art":{
                "attitude": {
                    "title": "职业态度",
                    "chartData": data.allResult.eachScoreDistribution.art.attitude.chartData,
                },
                "practice": {
                    "title": "教学实践",
                    "chartData": data.allResult.eachScoreDistribution.art.practice.chartData,
                },
                "comprehensive": {
                    "title": "综合育人",
                    "chartData": data.allResult.eachScoreDistribution.art.comprehensive.chartData,
                },
                "development": {
                    "title": "自主发展",
                    "chartData": data.allResult.eachScoreDistribution.art.development.chartData,
                }
            }
        }
    },
    "modules": [
        {
            "title": "3.2.2 全区义务教育职业态度",
            "subTitle": "3.2.2.1 全区义务教育职业态度得分率与得分分布情况",
            "second": "3.2.2.2 全区义务教育职业态度平均分、中位数、标准差",
            "scoreRating": {
                "title": "职业态度",
                "chartData": data.modules[0].scoreRating.chartData,
            },
            "eachScoreDistribution": {
                "tableInfo":{
                    "config": moduleTableConfig,
                    "data": data.modules[0].eachScoreDistribution.tableData,
                },
                "wap": {
                    "chn": {
                        "title": "义务教育语文",
                        chartData: data.modules[0].eachScoreDistribution.chnChartData
                    },
                    "math": {
                        "title": "义务教育数学",
                        chartData: data.modules[0].eachScoreDistribution.mathChartData
                    },
                    "eng": {
                        "title": "义务教育英语",
                        chartData: data.modules[0].eachScoreDistribution.engChartData
                    },
                    "soc": {
                        "title": "义务教育社会",
                        chartData: data.modules[0].eachScoreDistribution.socChartData
                    },
                    "sci": {
                        "title": "义务教育理工",
                        chartData: data.modules[0].eachScoreDistribution.sciChartData
                    },
                    "art": {
                        "title": "义务教育艺体",
                        chartData: data.modules[0].eachScoreDistribution.artChartData
                    }
                }
            },
            "averageScore": {
                "title": "职业态度",
                "all": {
                    "max": data.modules[0].averageScore.all.max,
                    "min": data.modules[0].averageScore.all.min,
                    "chartData": data.modules[0].averageScore.all.chartData,
                },
                "self": {
                    "max": data.modules[0].averageScore.self.max,
                    "min": data.modules[0].averageScore.self.min,
                    "chartData": data.modules[0].averageScore.self.chartData,
                },
                "scene": {
                    "max": data.modules[0].averageScore.scene.max,
                    "min": data.modules[0].averageScore.scene.min,
                    "chartData": data.modules[0].averageScore.scene.chartData,
                },
            },
            "standardScore": {
                "self": {
                    "max": data.modules[0].standardScore.self.max,
                    "min": data.modules[0].standardScore.self.min,
                    "chartData": data.modules[0].standardScore.self.chartData,
                },
                "scene": {
                    "max": data.modules[0].standardScore.scene.max,
                    "min": data.modules[0].standardScore.scene.min,
                    "chartData": data.modules[0].standardScore.scene.chartData,
                }
            },
            "minMaxSocre": {
                "self": {
                    "max": data.modules[0].minMaxSocre.self.max,
                    "min": data.modules[0].minMaxSocre.self.min,
                    "midMax": data.modules[0].minMaxSocre.self.midMax,
                    "midMin": data.modules[0].minMaxSocre.self.midMin,
                    "chartData": data.modules[0].minMaxSocre.self.chartData,
                },
                "scene": {
                    "max": data.modules[0].minMaxSocre.scene.max,
                    "min": data.modules[0].minMaxSocre.scene.min,
                    "midMax": data.modules[0].minMaxSocre.scene.midMax,
                    "midMin": data.modules[0].minMaxSocre.scene.midMin,
                    "chartData": data.modules[0].minMaxSocre.scene.chartData,
                }
            }
        },
        {
            "title": "3.2.3 全区义务教育教学实践",
            "subTitle": "3.2.3.1 全区义务教育教学实践得分率与得分分布情况",
            "second": "3.2.2.3 全区义务教育教学实践平均分、中位数、标准差",
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
                        "max": data.modules[1].averageScore.all.max,
                        "min": data.modules[1].averageScore.all.min,
                        "chartData": data.modules[1].averageScore.all.chartData,
                    },
                    "self": {
                        "max": data.modules[1].averageScore.self.max,
                        "min": data.modules[1].averageScore.self.min,
                        "chartData": data.modules[1].averageScore.self.chartData,
                    },
                    "scene": {
                        "max": data.modules[1].averageScore.scene.max,
                        "min": data.modules[1].averageScore.scene.min,
                        "chartData": data.modules[1].averageScore.scene.chartData,
                },
            },
            "standardScore": {
                "self": {
                    "max": data.modules[1].standardScore.self.max,
                    "min": data.modules[1].standardScore.self.min,
                    "chartData": data.modules[1].standardScore.self.chartData,
                },
                "scene": {
                    "max": data.modules[1].standardScore.scene.max,
                    "min": data.modules[1].standardScore.scene.min,
                    "chartData": data.modules[1].standardScore.scene.chartData,
                }
            },
            "minMaxSocre": {
                    "self": {
                        "max": data.modules[1].minMaxSocre.self.max,
                        "min": data.modules[1].minMaxSocre.self.min,
                        "midMax": data.modules[1].minMaxSocre.self.midMax,
                        "midMin": data.modules[1].minMaxSocre.self.midMin,
                        "chartData": data.modules[1].minMaxSocre.self.chartData,
                    },
                    "scene": {
                        "max": data.modules[1].minMaxSocre.scene.max,
                        "min": data.modules[1].minMaxSocre.scene.min,
                        "midMax": data.modules[1].minMaxSocre.scene.midMax,
                        "midMin": data.modules[1].minMaxSocre.scene.midMin,
                        "chartData": data.modules[1].minMaxSocre.scene.chartData,
                    }
            }
        },
        {
            "title": "3.2.4 全区义务教育综合育人",
            "subTitle": "3.2.4.1 全区义务教育综合育人得分率与得分分布情况",
            "second": "3.2.2.4 全区义务教育综合育人平均分、中位数、标准差",
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
                        "max": data.modules[2].averageScore.all.max,
                        "min": data.modules[2].averageScore.all.min,
                        "chartData": data.modules[2].averageScore.all.chartData,
                    },
                    "self": {
                        "max": data.modules[2].averageScore.self.max,
                        "min": data.modules[2].averageScore.self.min,
                        "chartData": data.modules[2].averageScore.self.chartData,
                    },
                    "scene": {
                        "max": data.modules[2].averageScore.scene.max,
                        "min": data.modules[2].averageScore.scene.min,
                        "chartData": data.modules[2].averageScore.scene.chartData,
                },
            },
            "standardScore": {
                "self": {
                    "max": data.modules[2].standardScore.self.max,
                    "min": data.modules[2].standardScore.self.min,
                    "chartData": data.modules[2].standardScore.self.chartData,
                },
                "scene": {
                    "max": data.modules[2].standardScore.scene.max,
                    "min": data.modules[2].standardScore.scene.min,
                    "chartData": data.modules[2].standardScore.scene.chartData,
                }
            },
            "minMaxSocre": {
                    "self": {
                        "max": data.modules[2].minMaxSocre.self.max,
                        "min": data.modules[2].minMaxSocre.self.min,
                        "midMax": data.modules[2].minMaxSocre.self.midMax,
                        "midMin": data.modules[2].minMaxSocre.self.midMin,
                        "chartData": data.modules[2].minMaxSocre.self.chartData,
                    },
                    "scene": {
                        "max": data.modules[2].minMaxSocre.scene.max,
                        "min": data.modules[2].minMaxSocre.scene.min,
                        "midMax": data.modules[2].minMaxSocre.scene.midMax,
                        "midMin": data.modules[2].minMaxSocre.scene.midMin,
                        "chartData": data.modules[2].minMaxSocre.scene.chartData,
                    }
            }
        },
        {
            "title": "3.2.5 全区义务教育自主发展",
            "subTitle": "3.2.5.1 全区义务教育自主发展得分率与得分分布情况",
            "second": "3.2.5.2 全区义务教育自主发展平均分、中位数、标准差",
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
                        "max": data.modules[3].averageScore.all.max,
                        "min": data.modules[3].averageScore.all.min,
                        "chartData": data.modules[3].averageScore.all.chartData,
                    },
                    "self": {
                        "max": data.modules[3].averageScore.self.max,
                        "min": data.modules[3].averageScore.self.min,
                        "chartData": data.modules[3].averageScore.self.chartData,
                    },
                    "scene": {
                        "max": data.modules[3].averageScore.scene.max,
                        "min": data.modules[3].averageScore.scene.min,
                        "chartData": data.modules[3].averageScore.scene.chartData,
                },
            },
            "standardScore": {
                "self": {
                    "max": data.modules[3].standardScore.self.max,
                    "min": data.modules[3].standardScore.self.min,
                    "chartData": data.modules[3].standardScore.self.chartData,
                },
                "scene": {
                    "max": data.modules[3].standardScore.scene.max,
                    "min": data.modules[3].standardScore.scene.min,
                    "chartData": data.modules[3].standardScore.scene.chartData,
                }
            },
            "minMaxSocre": {
                    "self": {
                        "max": data.modules[3].minMaxSocre.self.max,
                        "min": data.modules[3].minMaxSocre.self.min,
                        "midMax": data.modules[3].minMaxSocre.self.midMax,
                        "midMin": data.modules[3].minMaxSocre.self.midMin,
                        "chartData": data.modules[3].minMaxSocre.self.chartData,
                    },
                    "scene": {
                        "max": data.modules[3].minMaxSocre.scene.max,
                        "min": data.modules[3].minMaxSocre.scene.min,
                        "midMax": data.modules[3].minMaxSocre.scene.midMax,
                        "midMin": data.modules[3].minMaxSocre.scene.midMin,
                        "chartData": data.modules[3].minMaxSocre.scene.chartData,
                    }
                }
        }
    ]
}