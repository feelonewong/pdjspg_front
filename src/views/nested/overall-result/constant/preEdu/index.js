import {data} from '@/json/preEdu'
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
export const PreEdu = {
    "allResult":{
        "allScoreRating": {
            "title": "",
            "chartData": data.allResult.allScoreRating.chartData,
        },
        "scoreDistribution": {
            chartData: data.allResult.scoreDistribution.chartData,
        },
        "minMaxScore": {
            "all": {
                "chartData": data.allResult.minMaxScore.all.chartData,
            },
            "self": {
                "chartData": data.allResult.minMaxScore.self.chartData,
            },
            "secene": {
                "chartData": data.allResult.minMaxScore.secene.chartData,
            }
        },
        "standradScore": {
            "chartData": data.allResult.standradScore.chartData,
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
                "title": "职业态度",
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
            "title": "2.2.2 全区学前教育学段职业态度",
            "subTitle": "2.2.2.1 全区学前教育学段职业态度得分率与得分分布情况",
            "second": "2.2.2.2 全区学前教育学段职业态度平均分、中位数、标准差",
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
            "title": "2.2.3 全区学前教育学段教学实践",
            "subTitle": "2.2.3.1 全区学前教育学段教学实践得分率与得分分布情况",
            "second": "2.2.2.3 全区学前教育学段教学实践平均分、中位数、标准差",
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
            "title": "2.2.4 全区学前教育学段综合育人",
            "subTitle": "2.2.4.1 全区学前教育学段综合育人得分率与得分分布情况",
            "second": "2.2.2.4 全区学前教育学段综合育人平均分、中位数、标准差",
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
            "title": "2.2.5 全区学前教育学段自主发展",
            "subTitle": "2.2.5.1 全区学前教育学段自主发展得分率与得分分布情况",
            "second": "2.2.5.2 全区学前教育学段自主发展平均分、中位数、标准差",
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