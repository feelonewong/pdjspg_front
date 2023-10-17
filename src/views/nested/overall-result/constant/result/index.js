import {data} from '@/json/allResult/index'
const tableConfig = [
    {
        "prop": "name",
        "label": "学科/维度"
    },
    {
        "prop": "all",
        "label": "整体(%)"
    },
    {
        "prop": "attitude",
        "label": "职业态度(%)",
    },
    {
        "prop": "practice",
        "label": "教学实践(%)",
    },
    {
        "prop": "comprehensive",
        "label": "综合育人(%)",
    },
    {
        "prop": "development",
        "label": "自主发展(%)",
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
  
export const ResponsResult = {
    "allResult":{
        "allScoreRating": {
            "title": "",
            "max": findMaxAndMin(data.allResult.allScoreRating.chartData).max.name,
            "min": findMaxAndMin(data.allResult.allScoreRating.chartData).min.name,
            "chartData": data.allResult.allScoreRating.chartData,
        },
        "periondScoreRating": {
            "title": "得分率",
            "max": "学前教育",
            "min": "高中教育",
            "chartData": data.allResult.periondScoreRating.chartData,
        },
        "scoreDistribution": {
            chartData: data.allResult.scoreDistribution.chartData,
        },
        "subjectScoreDistribution":{
            "child": {
                "title": "学前教育",
                "chartData": data.allResult.subjectScoreDistribution.childChartData
            },
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
            "highChn":{
                "title": "高中教育语文",
                "chartData": data.allResult.subjectScoreDistribution.highChnChartData
            },
            "highMath":{
                "title": "高中教育数学",
                "chartData": data.allResult.subjectScoreDistribution.highMathChartData
            },
            "highEng":{
                "title": "高中教育英语",
                "chartData": data.allResult.subjectScoreDistribution.highEngChartData
            },
            "highSoc":{
                "title": "高中教育社会",
                "chartData": data.allResult.subjectScoreDistribution.highSocChartData
            },
            "highSci":{
                "title": "高中教育理工",
                "chartData": data.allResult.subjectScoreDistribution.highSciChartData
            },
            "highArt":{
                "title": "高中教育艺体",
                "chartData": data.allResult.subjectScoreDistribution.highArtChartData
            },
        },
        "minMaxScore": {
            "all": {
                "max":findMaxAndMin(data.allResult.minMaxScore.all.chartData).max.name,
                "min":findMaxAndMin(data.allResult.minMaxScore.all.chartData).min.name,
                "chartData": data.allResult.minMaxScore.all.chartData,
            },
            "self": {
                "max":findMaxAndMin(data.allResult.minMaxScore.self.chartData).max.name,
                "min":findMaxAndMin(data.allResult.minMaxScore.self.chartData).min.name,
                "chartData": data.allResult.minMaxScore.self.chartData,
            },
            "scene": {
                "max":findMaxAndMin(data.allResult.minMaxScore.scene.chartData).max.name,
                "min":findMaxAndMin(data.allResult.minMaxScore.scene.chartData).min.name,
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
                "pre":{
                    "title": "学前教育",
                    "chartData": data.allResult.dimensionRating.preChartData
                },
                "compChn":{
                    "title": "义务教育语文",
                    "chartData": data.allResult.dimensionRating.compChnChartData
                },
                "compMath":{
                    "title": "义务教育数学",
                    "chartData": data.allResult.dimensionRating.compMathChartData
                },
                "comEng":{
                    "title": "义务教育英语",
                    "chartData": data.allResult.dimensionRating.compEngChartData
                },
                "compSoc":{
                    "title": "义务教育社会",
                    "chartData": data.allResult.dimensionRating.compSocChartData
                },
                "compSci":{
                    "title": "义务教育理工",
                    "chartData": data.allResult.dimensionRating.compSciChartData
                },
                "compArt":{
                    "title": "义务教育艺体",
                    "chartData": data.allResult.dimensionRating.compArtChartData
                },
                "highChn":{
                    "title": "高中教育语文",
                    "chartData": data.allResult.dimensionRating.highChnChartData
                },
                "highMath":{
                    "title": "高中教育数学",
                    "chartData": data.allResult.dimensionRating.highMathChartData
                },
                "highEng":{
                    "title": "高中教育英语",
                    "chartData": data.allResult.dimensionRating.highEngChartData
                },
                "highSoc":{
                    "title": "高中教育社会",
                    "chartData": data.allResult.dimensionRating.highSocChartData
                },
                "highSci":{
                    "title": "高中教育理工",
                    "chartData": data.allResult.dimensionRating.highSciChartData
                },
                "highArt":{
                    "title": "高中教育艺体",
                    "chartData": data.allResult.dimensionRating.highArtChartData
                },


            },
            "tableInfo": {
                "data": data.allResult.dimensionRating.tableData,
                "config": tableConfig
            }
        },
        "dimensionPeriondRating": {
            "wrap": {
                "preEdu": {
                    "title": "学前教育",
                    "chartData": data.allResult.dimensionPeriondRating.preEduChartData
                },
                "compEdu": {
                    "title": "义务教育",
                    "chartData": data.allResult.dimensionPeriondRating.compEduChartData
                },
                "highEdu": {
                    "title": "高中教育",
                    "chartData": data.allResult.dimensionPeriondRating.highEduChartData
                },
            },
            "tableInfo": {
                "data": data.allResult.dimensionPeriondRating.tableData,
                "config": tableConfig
            }
        },
        "eachScoreDistribution": {
            "child": {
                "title": "学前教育",
                "chartData": data.allResult.subjectScoreDistribution.childChartData
            },
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
            "highChn":{
                "title": "高中教育语文",
                "chartData": data.allResult.subjectScoreDistribution.highChnChartData
            },
            "highMath":{
                "title": "高中教育数学",
                "chartData": data.allResult.subjectScoreDistribution.highMathChartData
            },
            "highEng":{
                "title": "高中教育英语",
                "chartData": data.allResult.subjectScoreDistribution.highEngChartData
            },
            "highSoc":{
                "title": "高中教育社会",
                "chartData": data.allResult.subjectScoreDistribution.highSocChartData
            },
            "highSci":{
                "title": "高中教育理工",
                "chartData": data.allResult.subjectScoreDistribution.highSciChartData
            },
            "highArt":{
                "title": "高中教育艺体",
                "chartData": data.allResult.subjectScoreDistribution.highArtChartData
            },
        }
    },
    "modules": [
        {
            "title": "1.2.2 全区职业态度",
            "subTitle": "1.2.2.1 全区职业态度得分率与得分分布情况",
            "second": "1.2.2.2 全区职业态度平均分、中位数、标准差",
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
                    "all": {
                        title: '全区职业态度得分分布情况',
                        chartData: data.modules[0].eachScoreDistribution.allChartData
                    },
                    "child": {
                        title: '学前教育',
                        chartData: data.modules[0].eachScoreDistribution.childChartData
                    },
                    "chn": {
                        title: '义务教育语文',
                        chartData: data.modules[0].eachScoreDistribution.chnChartData
                    },
                    "math": {
                        title: '义务教育数学',
                        chartData: data.modules[0].eachScoreDistribution.mathChartData
                    },
                    "eng": {
                        title: '义务教育英语',
                        chartData: data.modules[0].eachScoreDistribution.engChartData
                    },
                    "soc": {
                        title: '义务教育社会',
                        chartData: data.modules[0].eachScoreDistribution.socChartData
                    },
                    "sci": {
                        title: '义务教育理工',
                        chartData: data.modules[0].eachScoreDistribution.sciChartData
                    },
                    "art": {
                        title: '义务教育艺体',
                        chartData: data.modules[0].eachScoreDistribution.artChartData
                    },
                    "highChn": {
                        title: '高中教育语文',
                        chartData: data.modules[0].eachScoreDistribution.highChnChartData
                    },
                    "highMath": {
                        title: '高中教育数学',
                        chartData: data.modules[0].eachScoreDistribution.highMathChartData
                    },
                    "highEng": {
                        title: '高中教育英语',
                        chartData: data.modules[0].eachScoreDistribution.highEngChartData
                    },
                    "highSoc": {
                        title: '高中教育社会',
                        chartData: data.modules[0].eachScoreDistribution.highSocChartData
                    },
                    "highSci": {
                        title: '高中教育理工',
                        chartData: data.modules[0].eachScoreDistribution.highSciChartData
                    },
                    "highArt": {
                        title: '高中教育艺体',
                        chartData: data.modules[0].eachScoreDistribution.highArtChartData
                    }
                }
            },
            "averageScore": {
                "title": "职业态度",
                "all": {
                    "max": findMaxAndMin(data.modules[0].averageScore.all.chartData).max.name,
                    "min": findMaxAndMin(data.modules[0].averageScore.all.chartData).min.name,
                    "chartData": data.modules[0].averageScore.all.chartData,
                },
                "self": {
                    "max": findMaxAndMin(data.modules[0].averageScore.all.chartData).max.name,
                    "min": findMaxAndMin(data.modules[0].averageScore.all.chartData).min.name,
                    "chartData": data.modules[0].averageScore.self.chartData,
                },
                "scene": {
                    "max": findMaxAndMin(data.modules[0].averageScore.all.chartData).max.name,
                    "min": findMaxAndMin(data.modules[0].averageScore.all.chartData).min.name,
                    "chartData": data.modules[0].averageScore.scene.chartData,
                },
            },
            "standardScore": {
                "self": {
                    "max": findMaxAndMin(data.modules[0].standardScore.self.chartData).max.name,
                    "min": findMaxAndMin(data.modules[0].standardScore.self.chartData).min.name,
                    "chartData": data.modules[0].standardScore.self.chartData,
                },
                "scene": {
                    "max": findMaxAndMin(data.modules[0].standardScore.self.chartData).max.name,
                    "min": findMaxAndMin(data.modules[0].standardScore.self.chartData).min.name,
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
            "title": "1.2.3 全区教学实践",
            "subTitle": "1.2.3.1 全区教学实践得分率与得分分布情况",
            "second": "1.2.2.3 全区教学实践平均分、中位数、标准差",
            "scoreRating": {
                "title": "教学实践",
                "chartData": data.modules[1].scoreRating.chartData,
            },
            "eachScoreDistribution": {
                "tableInfo":{
                    "config": moduleTableConfig,
                    "data": data.modules[1].eachScoreDistribution.tableData,
                },
                "wap": {
                    "all": {
                        title: '全区教学实践得分分布情况',
                        chartData: data.modules[1].eachScoreDistribution.allChartData
                    },
                    "child": {
                        title: '学前教育',
                        chartData: data.modules[1].eachScoreDistribution.childChartData
                    },
                    "chn": {
                        title: '义务教育语文',
                        chartData: data.modules[1].eachScoreDistribution.chnChartData
                    },
                    "math": {
                        title: '义务教育数学',
                        chartData: data.modules[1].eachScoreDistribution.mathChartData
                    },
                    "eng": {
                        title: '义务教育英语',
                        chartData: data.modules[1].eachScoreDistribution.engChartData
                    },
                    "soc": {
                        title: '义务教育社会',
                        chartData: data.modules[1].eachScoreDistribution.socChartData
                    },
                    "sci": {
                        title: '义务教育理工',
                        chartData: data.modules[1].eachScoreDistribution.sciChartData
                    },
                    "art": {
                        title: '义务教育艺体',
                        chartData: data.modules[1].eachScoreDistribution.artChartData
                    },
                    "highChn": {
                        title: '高中教育语文',
                        chartData: data.modules[1].eachScoreDistribution.highChnChartData
                    },
                    "highMath": {
                        title: '高中教育数学',
                        chartData: data.modules[1].eachScoreDistribution.highMathChartData
                    },
                    "highEng": {
                        title: '高中教育英语',
                        chartData: data.modules[1].eachScoreDistribution.highEngChartData
                    },
                    "highSoc": {
                        title: '高中教育社会',
                        chartData: data.modules[1].eachScoreDistribution.highSocChartData
                    },
                    "highSci": {
                        title: '高中教育理工',
                        chartData: data.modules[1].eachScoreDistribution.highSciChartData
                    },
                    "highArt": {
                        title: '高中教育艺体',
                        chartData: data.modules[1].eachScoreDistribution.highArtChartData
                    }
                }
            },
            "averageScore": {
                    "title": "教学实践",
                    "all": {
                        "max": findMaxAndMin(data.modules[1].averageScore.all.chartData).max.name,
                        "min": findMaxAndMin(data.modules[1].averageScore.all.chartData).min.name,
                        "chartData": data.modules[1].averageScore.all.chartData,
                    },
                    "self": {
                        "max": findMaxAndMin(data.modules[1].averageScore.all.chartData).max.name,
                        "min": findMaxAndMin(data.modules[1].averageScore.all.chartData).min.name,
                        "chartData": data.modules[1].averageScore.self.chartData,
                    },
                    "scene": {
                        "max": findMaxAndMin(data.modules[1].averageScore.all.chartData).max.name,
                        "min": findMaxAndMin(data.modules[1].averageScore.all.chartData).min.name,
                        "chartData": data.modules[1].averageScore.scene.chartData,
                },
            },
            "standardScore": {
                "self": {
                    "max": findMaxAndMin(data.modules[1].standardScore.self.chartData).max.name,
                    "min": findMaxAndMin(data.modules[1].standardScore.self.chartData).min.name,
                    "chartData": data.modules[1].standardScore.self.chartData,
                },
                "scene": {
                    "max": findMaxAndMin(data.modules[1].standardScore.self.chartData).max.name,
                    "min": findMaxAndMin(data.modules[1].standardScore.self.chartData).min.name,
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
            "title": "1.2.4 全区综合育人",
            "subTitle": "1.2.4.1 全区综合育人得分率与得分分布情况",
            "second": "1.2.2.4 全区综合育人平均分、中位数、标准差",
            "scoreRating": {
                "title": "综合育人",
                "chartData": data.modules[2].scoreRating.chartData,
            },
            "eachScoreDistribution": {
                "tableInfo":{
                    "data": data.modules[2].eachScoreDistribution.tableData,
                    "config": moduleTableConfig,
                },
                "wap": {
                    "all": {
                        title: '全区综合育人得分分布情况',
                        chartData: data.modules[2].eachScoreDistribution.allChartData
                    },
                    "child": {
                        title: '学前教育',
                        chartData: data.modules[2].eachScoreDistribution.childChartData
                    },
                    "chn": {
                        title: '义务教育语文',
                        chartData: data.modules[2].eachScoreDistribution.chnChartData
                    },
                    "math": {
                        title: '义务教育数学',
                        chartData: data.modules[2].eachScoreDistribution.mathChartData
                    },
                    "eng": {
                        title: '义务教育英语',
                        chartData: data.modules[2].eachScoreDistribution.engChartData
                    },
                    "soc": {
                        title: '义务教育社会',
                        chartData: data.modules[2].eachScoreDistribution.socChartData
                    },
                    "sci": {
                        title: '义务教育理工',
                        chartData: data.modules[2].eachScoreDistribution.sciChartData
                    },
                    "art": {
                        title: '义务教育艺体',
                        chartData: data.modules[2].eachScoreDistribution.artChartData
                    },
                    "highChn": {
                        title: '高中教育语文',
                        chartData: data.modules[2].eachScoreDistribution.highChnChartData
                    },
                    "highMath": {
                        title: '高中教育数学',
                        chartData: data.modules[2].eachScoreDistribution.highMathChartData
                    },
                    "highEng": {
                        title: '高中教育英语',
                        chartData: data.modules[2].eachScoreDistribution.highEngChartData
                    },
                    "highSoc": {
                        title: '高中教育社会',
                        chartData: data.modules[2].eachScoreDistribution.highSocChartData
                    },
                    "highSci": {
                        title: '高中教育理工',
                        chartData: data.modules[2].eachScoreDistribution.highSciChartData
                    },
                    "highArt": {
                        title: '高中教育艺体',
                        chartData: data.modules[2].eachScoreDistribution.highArtChartData
                    }
                }
            },
            "averageScore": {
                "title": "综合育人",
                    "all": {

                        "max": findMaxAndMin(data.modules[2].averageScore.all.chartData).max.name,
                        "min": findMaxAndMin(data.modules[2].averageScore.all.chartData).min.name,
                        "chartData": data.modules[2].averageScore.all.chartData,
                    },
                    "self": {
                        "max": findMaxAndMin(data.modules[2].averageScore.all.chartData).max.name,
                        "min": findMaxAndMin(data.modules[2].averageScore.all.chartData).min.name,
                        "chartData": data.modules[2].averageScore.self.chartData,
                    },
                    "scene": {
                        "max": findMaxAndMin(data.modules[2].averageScore.all.chartData).max.name,
                        "min": findMaxAndMin(data.modules[2].averageScore.all.chartData).min.name,
                        "chartData": data.modules[2].averageScore.scene.chartData,
                },
            },
            "standardScore": {
                "self": {
                    "max": findMaxAndMin(data.modules[2].standardScore.self.chartData).max.name,
                    "min": findMaxAndMin(data.modules[2].standardScore.self.chartData).min.name,
                    "chartData": data.modules[2].standardScore.self.chartData,
                },
                "scene": {
                    "max": findMaxAndMin(data.modules[2].standardScore.self.chartData).max.name,
                    "min": findMaxAndMin(data.modules[2].standardScore.self.chartData).min.name,
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
            "title": "1.2.5 全区自主发展",
            "subTitle": "1.2.5.1 全区自主发展得分率与得分分布情况",
            "second": "1.2.5.2 全区自主发展平均分、中位数、标准差",
            "scoreRating": {
                "title": "自主发展",
                "chartData": data.modules[3].scoreRating.chartData,
            },
            "eachScoreDistribution": {
                "tableInfo":{
                    "config": moduleTableConfig,
                    "data": data.modules[3].eachScoreDistribution.tableData,
                },
                "wap": {
                    "all": {
                        title: '全区自主发展得分分布情况',
                        chartData: data.modules[3].eachScoreDistribution.allChartData
                    },
                    "child": {
                        title: '学前教育',
                        chartData: data.modules[3].eachScoreDistribution.childChartData
                    },
                    "chn": {
                        title: '义务教育语文',
                        chartData: data.modules[3].eachScoreDistribution.chnChartData
                    },
                    "math": {
                        title: '义务教育数学',
                        chartData: data.modules[3].eachScoreDistribution.mathChartData
                    },
                    "eng": {
                        title: '义务教育英语',
                        chartData: data.modules[3].eachScoreDistribution.engChartData
                    },
                    "soc": {
                        title: '义务教育社会',
                        chartData: data.modules[3].eachScoreDistribution.socChartData
                    },
                    "sci": {
                        title: '义务教育理工',
                        chartData: data.modules[3].eachScoreDistribution.sciChartData
                    },
                    "art": {
                        title: '义务教育艺体',
                        chartData: data.modules[3].eachScoreDistribution.artChartData
                    },
                    "highChn": {
                        title: '高中教育语文',
                        chartData: data.modules[3].eachScoreDistribution.highChnChartData
                    },
                    "highMath": {
                        title: '高中教育数学',
                        chartData: data.modules[3].eachScoreDistribution.highMathChartData
                    },
                    "highEng": {
                        title: '高中教育英语',
                        chartData: data.modules[3].eachScoreDistribution.highEngChartData
                    },
                    "highSoc": {
                        title: '高中教育社会',
                        chartData: data.modules[3].eachScoreDistribution.highSocChartData
                    },
                    "highSci": {
                        title: '高中教育理工',
                        chartData: data.modules[3].eachScoreDistribution.highSciChartData
                    },
                    "highArt": {
                        title: '高中教育艺体',
                        chartData: data.modules[3].eachScoreDistribution.highArtChartData
                    }
                }
            },
            "averageScore": {
                "title": "自主发展",
                    "all": {
                        "max": findMaxAndMin(data.modules[3].averageScore.all.chartData).max.name,
                        "min": findMaxAndMin(data.modules[3].averageScore.all.chartData).min.name,
                        "chartData": data.modules[3].averageScore.all.chartData,
                    },
                    "self": {
                        "max": findMaxAndMin(data.modules[3].averageScore.all.chartData).max.name,
                        "min": findMaxAndMin(data.modules[3].averageScore.all.chartData).min.name,
                        "chartData": data.modules[3].averageScore.self.chartData,
                    },
                    "scene": {
                        "max": findMaxAndMin(data.modules[3].averageScore.all.chartData).max.name,
                        "min": findMaxAndMin(data.modules[3].averageScore.all.chartData).min.name,
                        "chartData": data.modules[3].averageScore.scene.chartData,
                },
            },
            "standardScore": {
                "self": {
                    "max": findMaxAndMin(data.modules[3].standardScore.self.chartData).max.name,
                    "min": findMaxAndMin(data.modules[3].standardScore.self.chartData).min.name,
                    "chartData": data.modules[3].standardScore.self.chartData,
                },
                "scene": {
                    "max": findMaxAndMin(data.modules[3].standardScore.self.chartData).max.name,
                    "min": findMaxAndMin(data.modules[3].standardScore.self.chartData).min.name,
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