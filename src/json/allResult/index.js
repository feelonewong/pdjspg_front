// 整体结果JSON数据
export const data = {
    "allResult": {
        "allScoreRating": { //***整体得分率(分数/对应的总分)
            "chartData": [
                {
                    "name":"学前教育",
                    "value":"95.10"
                },
                {
                    "name":"义务教育语文",
                    "value":"90.30"
                },
                {
                    "name":"义务教育数学",
                    "value":"89.92"
                },
                {
                    "name":"义务教育英语",
                    "value":"91.20"
                },
                {
                    "name":"义务教育社会",
                    "value":"90.11"
                },
                {
                    "name":"义务教育理工",
                    "value":"89.08"
                },
                {
                    "name":"义务教育艺体",
                    "value":"91.60"
                },
                {
                    "name":"高中教育语文",
                    "value":"89.96"
                },
                {
                    "name":"高中教育数学",
                    "value":"90.94"
                },
                {
                    "name":"高中教育英语",
                    "value":"90.52"
                },
                {
                    "name":"高中教育社会",
                    "value":"85.18"
                },
                {
                    "name":"高中教育理工",
                    "value":"89.98"
                },
                {
                    "name":"高中教育艺体",
                    "value":"86.69"
                }
            ]
        },
        "periondScoreRating":{
            "chartData":[ 
                {
                    "name":"学前教育",
                    "value":"95.09"
                },
                {
                    "name":"义务教育",
                    "value":"90.47"
                },
                {
                    "name":"高中教育",
                    "value":"88.90"
                }
            ]
        },
         // 这里待修改数据: 针对上面的allScoreRating修改为下面的数据
        "periondScoreRating":{
            "chartData":[ 
                {
                    "name":"学前教育",
                    "value":"95.10"
                },
                {
                    "name":"义务教育",
                    "value":"90.30"
                },
                {
                    "name":"高中教育",
                    "value":"89.92"
                }
            ]
        },
        "scoreDistribution": { // 义务教育学所有老师总体分布情况
            "chartData": [
                {
                    "name":"优秀",
                    "value":166,
                    "proportion":"6.51"
                },
                {
                    "name":"良好",
                    "value":356,
                    "proportion":"13.96"
                },
                {
                    "name":"及格",
                    "value":1168,
                    "proportion":"45.80"
                },
                {
                    "name":"待提升",
                    "value":860,
                    "proportion":"33.73"
                }
            ]
        },
        "subjectScoreDistribution":{  // 13个学 各个学的老师占比
            "childChartData": [
                {
                    "name":"优秀",
                    "value":153,
                    "proportion":"27.92"
                },
                {
                    "name":"良好",
                    "value":153,
                    "proportion":"27.92"
                },
                {
                    "name":"及格",
                    "value":176,
                    "proportion":"32.12"
                },
                {
                    "name":"待提升",
                    "value":66,
                    "proportion":"12.04"
                }
            ],
            "chnChartData": [
                {
                    "name":"优秀",
                    "value":1,
                    "proportion":".23"
                },
                {
                    "name":"良好",
                    "value":41,
                    "proportion":"9.45"
                },
                {
                    "name":"及格",
                    "value":227,
                    "proportion":"52.30"
                },
                {
                    "name":"待提升",
                    "value":165,
                    "proportion":"38.02"
                }
            ],
            "mathChartData": [
                {
                    "name":"优秀",
                    "value":0,
                    "proportion":"0.00"
                },
                {
                    "name":"良好",
                    "value":22,
                    "proportion":"7.38"
                },
                {
                    "name":"及格",
                    "value":153,
                    "proportion":"51.34"
                },
                {
                    "name":"待提升",
                    "value":123,
                    "proportion":"41.28"
                }
            ],
            "engChartData": [
                {
                    "name":"优秀",
                    "value":2,
                    "proportion":"0.95"
                },
                {
                    "name":"良好",
                    "value":23,
                    "proportion":"10.95"
                },
                {
                    "name":"及格",
                    "value":123,
                    "proportion":"58.57"
                },
                {
                    "name":"待提升",
                    "value":62,
                    "proportion":"29.52"
                }
            ],
            "socChartData": [
                {
                    "name":"优秀",
                    "value":3,
                    "proportion":"1.88"
                },
                {
                    "name":"良好",
                    "value":14,
                    "proportion":"8.75"
                },
                {
                    "name":"及格",
                    "value":71,
                    "proportion":"44.38"
                },
                {
                    "name":"待提升",
                    "value":72,
                    "proportion":"45.00"
                }
            ],
            "sciChartData": [
                {
                    "name":"优秀",
                    "value":0,
                    "proportion":"0.00"
                },
                {
                    "name":"良好",
                    "value":5,
                    "proportion":"4.07"
                },
                {
                    "name":"及格",
                    "value":57,
                    "proportion":"46.34"
                },
                {
                    "name":"待提升",
                    "value":61,
                    "proportion":"49.59"
                }
            ],
            "artChartData": [
                {
                    "name":"优秀",
                    "value":5,
                    "proportion":"1.74"
                },
                {
                    "name":"良好",
                    "value":49,
                    "proportion":"17.07"
                },
                {
                    "name":"及格",
                    "value":161,
                    "proportion":"56.10"
                },
                {
                    "name":"待提升",
                    "value":72,
                    "proportion":"25.09"
                }
            ],
            "highChnChartData": [ {
                "name":"优秀",
                "value":0,
                "proportion":"0.00"
            },
            {
                "name":"良好",
                "value":9,
                "proportion":"13.04"
            },
            {
                "name":"及格",
                "value":34,
                "proportion":"49.28"
            },
            {
                "name":"待提升",
                "value":26,
                "proportion":"37.68"
            }],
            "highMathChartData": [
                {
                    "name":"优秀",
                    "value":1,
                    "proportion":"1.56"
                },
                {
                    "name":"良好",
                    "value":21,
                    "proportion":"32.81"
                },
                {
                    "name":"及格",
                    "value":15,
                    "proportion":"23.44"
                },
                {
                    "name":"待提升",
                    "value":27,
                    "proportion":"42.19"
                }
            ],
            "highEngChartData": [ {
                "name":"优秀",
                "value":1,
                "proportion":"1.28"
            },
            {
                "name":"良好",
                "value":9,
                "proportion":"11.54"
            },
            {
                "name":"及格",
                "value":38,
                "proportion":"48.72"
            },
            {
                "name":"待提升",
                "value":30,
                "proportion":"38.46"
            }],
            "highSocChartData": [
                {
                    "name":"优秀",
                    "value":0,
                    "proportion":"0.00"
                },
                {
                    "name":"良好",
                    "value":0,
                    "proportion":"0.00"
                },
                {
                    "name":"及格",
                    "value":25,
                    "proportion":"24.51"
                },
                {
                    "name":"待提升",
                    "value":77,
                    "proportion":"75.49"
                }
            ],
            "highSciChartData": [
                {
                    "name":"优秀",
                    "value":0,
                    "proportion":"0.00"
                },
                {
                    "name":"良好",
                    "value":10,
                    "proportion":"7.41"
                },
                {
                    "name":"及格",
                    "value":75,
                    "proportion":"55.56"
                },
                {
                    "name":"待提升",
                    "value":50,
                    "proportion":"37.04"
                }
            ],
            "highArtChartData": [
                {
                    "name":"优秀",
                    "value":0,
                    "proportion":"0.00"
                },
                {
                    "name":"良好",
                    "value":0,
                    "proportion":"0.00"
                },
                {
                    "name":"及格",
                    "value":13,
                    "proportion":"30.95"
                },
                {
                    "name":"待提升",
                    "value":29,
                    "proportion":"69.05"
                }
            ],
        },
        "minMaxScore": { //***义务教育学平均分、自陈问题、情景问题平均分
            "all": {
                // 如有多个学分数相同请用,隔开
                "max": "学前教育",
                "min": "高中教育社会",
                "chartData": [
                    {
                        "name":"学前教育",
                        "value":"342.35"
                    },
                    {
                        "name":"义务教育语文",
                        "value":"325.08"
                    },
                    {
                        "name":"义务教育数学",
                        "value":"323.7"
                    },
                    {
                        "name":"义务教育英语",
                        "value":"328.33"
                    },
                    {
                        "name":"义务教育社会",
                        "value":"324.38"
                    },
                    {
                        "name":"义务教育理工",
                        "value":"320.68"
                    },
                    {
                        "name":"义务教育艺体",
                        "value":"329.75"
                    },
                    {
                        "name":"高中教育语文",
                        "value":"323.86"
                    },
                    {
                        "name":"高中教育数学",
                        "value":"327.38"
                    },
                    {
                        "name":"高中教育英语",
                        "value":"325.86"
                    },
                    {
                        "name":"高中教育社会",
                        "value":"306.65"
                    },
                    {
                        "name":"高中教育理工",
                        "value":"323.91"
                    },
                    {
                        "name":"高中教育艺体",
                        "value":"312.07"
                    }
                ]
            },
            "self": {
                "max": "义务教育英语",
                "min": "高中教育语文",
                "chartData": [
                    {
                        "name":"学前教育",
                        "value":"170.51"
                    },
                    {
                        "name":"义务教育语文",
                        "value":"170.68"
                    },
                    {
                        "name":"义务教育数学",
                        "value":"169.52"
                    },
                    {
                        "name":"义务教育英语",
                        "value":"172.23"
                    },
                    {
                        "name":"义务教育社会",
                        "value":"167.72"
                    },
                    {
                        "name":"义务教育理工",
                        "value":"168.24"
                    },
                    {
                        "name":"义务教育艺体",
                        "value":"172.2"
                    },
                    {
                        "name":"高中教育语文",
                        "value":"164.87"
                    },
                    {
                        "name":"高中教育数学",
                        "value":"164.88"
                    },
                    {
                        "name":"高中教育英语",
                        "value":"169.58"
                    },
                    {
                        "name":"高中教育社会",
                        "value":"166.99"
                    },
                    {
                        "name":"高中教育理工",
                        "value":"170.61"
                    },
                    {
                        "name":"高中教育艺体",
                        "value":"167.67"
                    }
                ]
            },
            "scene": {
                "max": "学前教育",
                "min": "高中教育社会",
                "chartData": [
                    {
                        "name":"学前教育",
                        "value":"171.83"
                    },
                    {
                        "name":"义务教育语文",
                        "value":"154.4"
                    },
                    {
                        "name":"义务教育数学",
                        "value":"154.18"
                    },
                    {
                        "name":"义务教育英语",
                        "value":"156.1"
                    },
                    {
                        "name":"义务教育社会",
                        "value":"156.66"
                    },
                    {
                        "name":"义务教育理工",
                        "value":"152.44"
                    },
                    {
                        "name":"义务教育艺体",
                        "value":"157.54"
                    },
                    {
                        "name":"高中教育语文",
                        "value":"158.99"
                    },
                    {
                        "name":"高中教育数学",
                        "value":"162.5"
                    },
                    {
                        "name":"高中教育英语",
                        "value":"156.28"
                    },
                    {
                        "name":"高中教育社会",
                        "value":"139.66"
                    },
                    {
                        "name":"高中教育理工",
                        "value":"153.3"
                    },
                    {
                        "name":"高中教育艺体",
                        "value":"144.4"
                    }
                ]
            },
        },
        "standradScore": { // 义务教育、各学、标准差、最大值的学、最小值的学
            "self":{ // 义务教育、自陈问题标准差
                "max": "高中教育数学",
                "min": "义务教育英语",
                "chartData": [
                    {
                        "name":"学前教育",
                        "value":"12.41"
                    },
                    {
                        "name":"义务教育语文",
                        "value":"12.08"
                    },
                    {
                        "name":"义务教育数学",
                        "value":"12.39"
                    },
                    {
                        "name":"义务教育英语",
                        "value":"10.23"
                    },
                    {
                        "name":"义务教育社会",
                        "value":"13.75"
                    },
                    {
                        "name":"义务教育理工",
                        "value":"14.12"
                    },
                    {
                        "name":"义务教育艺体",
                        "value":"12.04"
                    },
                    {
                        "name":"高中教育语文",
                        "value":"15.05"
                    },
                    {
                        "name":"高中教育数学",
                        "value":"17.13"
                    },
                    {
                        "name":"高中教育英语",
                        "value":"14.08"
                    },
                    {
                        "name":"高中教育社会",
                        "value":"16.24"
                    },
                    {
                        "name":"高中教育理工",
                        "value":"11.97"
                    },
                    {
                        "name":"高中教育艺体",
                        "value":"14.19"
                    }
                ]
            },
            "scene":{ // 义务教育、情景问题标准差、最大值的学、最小值的学
                "max": "高中教育社会",
                "min": "学前教育",
                "chartData": [
                    {
                        "name":"学前教育",
                        "value":"6.7"
                    },
                    {
                        "name":"义务教育语文",
                        "value":"9.14"
                    },
                    {
                        "name":"义务教育数学",
                        "value":"8.75"
                    },
                    {
                        "name":"义务教育英语",
                        "value":"9.31"
                    },
                    {
                        "name":"义务教育社会",
                        "value":"9.76"
                    },
                    {
                        "name":"义务教育理工",
                        "value":"7.72"
                    },
                    {
                        "name":"义务教育艺体",
                        "value":"9.06"
                    },
                    {
                        "name":"高中教育语文",
                        "value":"9.57"
                    },
                    {
                        "name":"高中教育数学",
                        "value":"9.39"
                    },
                    {
                        "name":"高中教育英语",
                        "value":"9.58"
                    },
                    {
                        "name":"高中教育社会",
                        "value":"12.09"
                    },
                    {
                        "name":"高中教育理工",
                        "value":"10.79"
                    },
                    {
                        "name":"高中教育艺体",
                        "value":"10.07"
                    }
                ]
            },
        },
        "midMaxMinSceneAndSelf":{ // 义务教育、各学、中位数、最大数、最小数
            // midMax: 中位数最大的学、midMin中位数最小的学 min: 最小分学 max: 最大分学
            "self": {
                "midMax": "高中教育社会",
                "midMin": "高中教育语文",
                "min": "义高中教育数学",
                "max": "义务教育艺体",
                "chartData": [
                    {
                        "name":"学前教育",
                        "median":"177.0",
                        "max":"180.00",
                        "min":"116.00",
                        "average":"170.51"
                    },
                    {
                        "name":"义务教育语文",
                        "median":"177.0",
                        "max":"180.00",
                        "min":"132.00",
                        "average":"170.68"
                    },
                    {
                        "name":"义务教育数学",
                        "median":"176.0",
                        "max":"180.00",
                        "min":"133.00",
                        "average":"169.52"
                    },
                    {
                        "name":"义务教育英语",
                        "median":"177.5",
                        "max":"180.00",
                        "min":"136.00",
                        "average":"172.23"
                    },
                    {
                        "name":"义务教育社会",
                        "median":"172.5",
                        "max":"180.00",
                        "min":"126.00",
                        "average":"167.72"
                    },
                    {
                        "name":"义务教育理工",
                        "median":"176.0",
                        "max":"180.00",
                        "min":"129.00",
                        "average":"168.24"
                    },
                    {
                        "name":"义务教育艺体",
                        "median":"180.0",
                        "max":"180.00",
                        "min":"120.00",
                        "average":"172.2"
                    },
                    {
                        "name":"高中教育语文",
                        "median":"167.0",
                        "max":"180.00",
                        "min":"126.00",
                        "average":"164.87"
                    },
                    {
                        "name":"高中教育数学",
                        "median":"173.0",
                        "max":"180.00",
                        "min":"108.00",
                        "average":"164.88"
                    },
                    {
                        "name":"高中教育英语",
                        "median":"179.0",
                        "max":"180.00",
                        "min":"125.00",
                        "average":"169.58"
                    },
                    {
                        "name":"高中教育社会",
                        "median":"177.5",
                        "max":"180.00",
                        "min":"120.00",
                        "average":"166.99"
                    },
                    {
                        "name":"高中教育理工",
                        "median":"176.0",
                        "max":"180.00",
                        "min":"141.00",
                        "average":"170.61"
                    },
                    {
                        "name":"高中教育艺体",
                        "median":"173.5",
                        "max":"180.00",
                        "min":"136.00",
                        "average":"167.67"
                    }
                ]
            },
            // midMax: 中位数最大的学、midMin中位数最小的学 min: 最小分学 max: 最大分学
            "scene": {
                "midMax": "学前教育",
                "midMin": "高中教育艺体",
                "min": "高中教育艺体",
                "max": "高中教育数学",
                "chartData": [
                    {
                        "name":"学前教育",
                        "median":"175.0",
                        "max":"180.00",
                        "min":"115.00",
                        "average":"171.83"
                    },
                    {
                        "name":"义务教育语文",
                        "median":"155.0",
                        "max":"175.00",
                        "min":"120.00",
                        "average":"154.4"
                    },
                    {
                        "name":"义务教育数学",
                        "median":"155.0",
                        "max":"175.00",
                        "min":"100.00",
                        "average":"154.18"
                    },
                    {
                        "name":"义务教育英语",
                        "median":"155.0",
                        "max":"175.00",
                        "min":"120.00",
                        "average":"156.1"
                    },
                    {
                        "name":"义务教育社会",
                        "median":"160.0",
                        "max":"180.00",
                        "min":"100.00",
                        "average":"156.66"
                    },
                    {
                        "name":"义务教育理工",
                        "median":"155.0",
                        "max":"170.00",
                        "min":"130.00",
                        "average":"152.44"
                    },
                    {
                        "name":"义务教育艺体",
                        "median":"160.0",
                        "max":"180.00",
                        "min":"120.00",
                        "average":"157.54"
                    },
                    {
                        "name":"高中教育语文",
                        "median":"160.0",
                        "max":"180.00",
                        "min":"130.00",
                        "average":"158.99"
                    },
                    {
                        "name":"高中教育数学",
                        "median":"165.0",
                        "max":"175.00",
                        "min":"130.00",
                        "average":"162.50"
                    },
                    {
                        "name":"高中教育英语",
                        "median":"155.0",
                        "max":"180.00",
                        "min":"125.00",
                        "average":"156.28"
                    },
                    {
                        "name":"高中教育社会",
                        "median":"140.0",
                        "max":"165.00",
                        "min":"100.00",
                        "average":"139.66"
                    },
                    {
                        "name":"高中教育理工",
                        "median":"155.0",
                        "max":"170.00",
                        "min":"95.00",
                        "average":"153.3"
                    },
                    {
                        "name":"高中教育艺体",
                        "median":"145.0",
                        "max":"165.00",
                        "min":"110.00",
                        "average":"144.40"
                    }
                ]
            },
        },
        "dimensionRating": { //***义务教育学各维度得分率
                "preChartData": [{
                    "name":"整体得分率",
                    "value":"95.10"
                },
                {
                    "name":"职业态度",
                    "value":"96.48"
                },
                {
                    "name":"教学实践",
                    "value":"95.55"
                },
                {
                    "name":"综合育人",
                    "value":"96.57"
                },
                {
                    "name":"自主发展",
                    "value":"92.11"
                }],
                "compChnChartData": [ // 义务教育、语文、各维度得分率
                {
                    "name":"整体得分率",
                    "value":"90.30"
                },
                {
                    "name":"职业态度",
                    "value":"98.13"
                },
                {
                    "name":"教学实践",
                    "value":"90.72"
                },
                {
                    "name":"综合育人",
                    "value":"88.82"
                },
                {
                    "name":"自主发展",
                    "value":"86.00"
                }
                ],
                "compMathChartData":  [ // 义务教育、数学、各维度得分率
                {
                    "name":"整体得分率",
                    "value":"89.92"
                },
                {
                    "name":"职业态度",
                    "value":"98.05"
                },
                {
                    "name":"教学实践",
                    "value":"89.92"
                },
                {
                    "name":"综合育人",
                    "value":"88.96"
                },
                {
                    "name":"自主发展",
                    "value":"85.44"
                }
            ],
            "compEngChartData":  [ // 义务教育、英语、各维度得分率
            {
                "name":"整体得分率",
                "value":"91.20"
            },
            {
                "name":"职业态度",
                "value":"93.23"
            },
            {
                "name":"教学实践",
                "value":"91.73"
            },
            {
                "name":"综合育人",
                "value":"90.20"
            },
            {
                "name":"自主发展",
                "value":"90.14"
            }
            ],
            "compSocChartData":  [ // 义务教育、社会、各维度得分率
            {
                "name":"整体得分率",
                "value":"90.11"
            },
            {
                "name":"职业态度",
                "value":"95.73"
            },
            {
                "name":"教学实践",
                "value":"85.73"
            },
            {
                "name":"综合育人",
                "value":"91.07"
            },
            {
                "name":"自主发展",
                "value":"91.23"
            }
            ],
            "compSciChartData":  [ // 义务教育、理工、各维度得分率
            {
                "name":"整体得分率",
                "value":"89.08"
            },
            {
                "name":"职业态度",
                "value":"98.03"
            },
            {
                "name":"教学实践",
                "value":"85.49"
            },
            {
                "name":"综合育人",
                "value":"88.87"
            },
            {
                "name":"自主发展",
                "value":"88.10"
            }
            ],
            "compArtChartData":  [ // 义务教育、艺体、各维度得分率
            {
                "name":"整体得分率",
                "value":"91.60"
            },
            {
                "name":"职业态度",
                "value":"93.37"
            },
            {
                "name":"教学实践",
                "value":"93.32"
            },
            {
                "name":"综合育人",
                "value":"91.23"
            },
            {
                "name":"自主发展",
                "value":"88.49"
            }
                ],
                "highChnChartData":  [ // 义务教育、艺体、各维度得分率
                {
                    "name":"整体得分率",
                    "value":"89.96"
                },
                {
                    "name":"职业态度",
                    "value":"96.18"
                },
                {
                    "name":"教学实践",
                    "value":"87.58"
                },
                {
                    "name":"综合育人",
                    "value":"88.60"
                },
                {
                    "name":"自主发展",
                    "value":"90.33"
                }
                ],
                "highMathChartData":  [ // 义务教育、艺体、各维度得分率
                {
                    "name":"整体得分率",
                    "value":"90.94"
                },
                {
                    "name":"职业态度",
                    "value":"96.07"
                },
                {
                    "name":"教学实践",
                    "value":"92.03"
                },
                {
                    "name":"综合育人",
                    "value":"88.82"
                },
                {
                    "name":"自主发展",
                    "value":"88.18"
                }
                ],
                "highEngChartData":  [ // 义务教育、艺体、各维度得分率
                {
                    "name":"整体得分率",
                    "value":"90.52"
                },
                {
                    "name":"职业态度",
                    "value":"95.17"
                },
                {
                    "name":"教学实践",
                    "value":"90.56"
                },
                {
                    "name":"综合育人",
                    "value":"89.80"
                },
                {
                    "name":"自主发展",
                    "value":"88.08"
                }
                ],
                "highSocChartData":  [ // 义务教育、艺体、各维度得分率
                {
                    "name":"整体得分率",
                    "value":"85.18"
                },
                {
                    "name":"职业态度",
                    "value":"95.25"
                },
                {
                    "name":"教学实践",
                    "value":"82.68"
                },
                {
                    "name":"综合育人",
                    "value":"82.43"
                },
                {
                    "name":"自主发展",
                    "value":"84.56"
                }
                ],
                "highSciChartData":  [ // 义务教育、艺体、各维度得分率
                {
                    "name":"整体得分率",
                    "value":"89.98"
                },
                {
                    "name":"职业态度",
                    "value":"90.45"
                },
                {
                    "name":"教学实践",
                    "value":"88.51"
                },
                {
                    "name":"综合育人",
                    "value":"91.87"
                },
                {
                    "name":"自主发展",
                    "value":"89.73"
                }
                ],
                
                "highArtChartData":  [ // 义务教育、艺体、各维度得分率
                {
                    "name":"整体得分率",
                    "value":"86.69"
                },
                {
                    "name":"职业态度",
                    "value":"90.80"
                },
                {
                    "name":"教学实践",
                    "value":"84.84"
                },
                {
                    "name":"综合育人",
                    "value":"87.38"
                },
                {
                    "name":"自主发展",
                    "value":"85.71"
                }
                ],
            "tableData": [
                {
                    "name":"学前教育",
                    "all":"95.10",
                    "attitude":"96.48",
                    "practice":"95.55",
                    "comprehensive":"96.57",
                    "development":"92.11"
                },
                {
                    "name":"义务教育语文",
                    "all":"90.30",
                    "attitude":"98.13",
                    "practice":"90.72",
                    "comprehensive":"88.82",
                    "development":"86.00"
                },
                {
                    "name":"义务教育数学",
                    "all":"89.92",
                    "attitude":"98.05",
                    "practice":"89.92",
                    "comprehensive":"88.96",
                    "development":"85.44"
                },
                {
                    "name":"义务教育英语",
                    "all":"91.20",
                    "attitude":"93.23",
                    "practice":"91.73",
                    "comprehensive":"90.20",
                    "development":"90.14"
                },
                {
                    "name":"义务教育社会",
                    "all":"90.11",
                    "attitude":"95.73",
                    "practice":"85.73",
                    "comprehensive":"91.07",
                    "development":"91.23"
                },
                {
                    "name":"义务教育理工",
                    "all":"89.08",
                    "attitude":"98.03",
                    "practice":"85.49",
                    "comprehensive":"88.87",
                    "development":"88.10"
                },
                {
                    "name":"义务教育艺体",
                    "all":"91.60",
                    "attitude":"93.37",
                    "practice":"93.32",
                    "comprehensive":"91.23",
                    "development":"88.49"
                },
                {
                    "name":"高中教育语文",
                    "all":"89.96",
                    "attitude":"96.18",
                    "practice":"87.58",
                    "comprehensive":"88.60",
                    "development":"90.33"
                },
                {
                    "name":"高中教育数学",
                    "all":"90.94",
                    "attitude":"96.07",
                    "practice":"92.03",
                    "comprehensive":"88.82",
                    "development":"88.18"
                },
                {
                    "name":"高中教育英语",
                    "all":"90.52",
                    "attitude":"95.17",
                    "practice":"90.56",
                    "comprehensive":"89.80",
                    "development":"88.08"
                },
                {
                    "name":"高中教育社会",
                    "all":"85.18",
                    "attitude":"95.25",
                    "practice":"82.68",
                    "comprehensive":"82.43",
                    "development":"84.56"
                },
                {
                    "name":"高中教育理工",
                    "all":"89.98",
                    "attitude":"90.45",
                    "practice":"88.51",
                    "comprehensive":"91.87",
                    "development":"89.73"
                },
                {
                    "name":"高中教育艺体",
                    "all":"86.69",
                    "attitude":"90.80",
                    "practice":"84.84",
                    "comprehensive":"87.38",
                    "development":"85.71"
                }
            
            ],
            
        },
        // 这里数据待修改：根据上面的一个数据进行改造
        "dimensionPeriondRating": {
            "preEduChartData": [
                {
                    "name":"整体得分率",
                    "value":"95.09"
                },
                {
                    "name":"职业态度",
                    "value":"96.48"
                },
                {
                    "name":"教学实践",
                    "value":"95.55"
                },
                {
                    "name":"综合育人",
                    "value":"96.56"
                },
                {
                    "name":"自主发展",
                    "value":"92.11"
                }
            ],
            "compEduChartData": [
                {
                    "name":"整体得分率",
                    "value":"90.47"
                },
                {
                    "name":"职业态度",
                    "value":"96.26"
                },
                {
                    "name":"教学实践",
                    "value":"90.24"
                },
                {
                    "name":"综合育人",
                    "value":"89.74"
                },
                {
                    "name":"自主发展",
                    "value":"87.66"
                }
            ],
            "highEduChartData": [
                {
                    "name":"整体得分率",
                    "value":"88.90"
                },
                {
                    "name":"职业态度",
                    "value":"93.76"
                },
                {
                    "name":"教学实践",
                    "value":"87.63"
                },
                {
                    "name":"综合育人",
                    "value":"88.33"
                },
                {
                    "name":"自主发展",
                    "value":"87.92"
                }
            ],
            "tableData": [ {
                "name":"学前教育",
                "all":"95.09",
                "attitude":"96.48",
                "practice":"95.55",
                "comprehensive":"96.56",
                "development":"92.11"
            },
            {
                "name":"义务教育",
                "all":"90.47",
                "attitude":"96.26",
                "practice":"90.24",
                "comprehensive":"89.74",
                "development":"87.66"
            },
            {
                "name":"高中教育",
                "all":"88.90",
                "attitude":"93.76",
                "practice":"87.63",
                "comprehensive":"88.33",
                "development":"87.92"
            }]
        },
        "eachScoreDistribution": { //*** 各维度得分分布情况
            // 各学、各维度、得分分布情况
            "chn": {
                "attitude": { // 职业态度 标准: 58 57 54 54
                    "chartData": [
                        {
                            name: '优秀', value: '20', precent: '40%',
                        },
                        {
                            name: '良好', value: '30', precent: '50%',
                        },
                        {
                            name: '及格', value: '40', precent: '60%',
                        },
                        {
                            name: '待提升', value: '50', precent: '70%',
                        }
                    ]
                },
                "practice": { // 教学实践 标准: 116 114 108 108
                    "chartData": [
                        {
                            name: '优秀', value: '50', precent: '42%',
    
                        },
                        {
                            name: '良好', value: '30', precent: '35%',
                        },
                        {
                            name: '及格', value: '20', precent: '65%',
                        },
                        {
                            name: '待提升', value: '60', precent: '71%',
                        }
                    ]
                },
                "comprehensive": { // 教学实践 标准:88 86 81 81
                    "chartData": [
                        {
                            name: '优秀', value: '24', precent: '40%',
    
                        },
                        {
                            name: '良好', value: '36', precent: '52%',
                        },
                        {
                            name: '及格', value: '45', precent: '62%',
                        },
                        {
                            name: '待提升', value: '51', precent: '74%',
                        }
                    ]
                },
                "development": { // 自主发展 标准:88 86 81 81
                    "chartData": [
                        {
                            name: '优秀', value: '21', precent: '40%',
    
                        },
                        {
                            name: '良好', value: '33', precent: '50%',
                        },
                        {
                            name: '及格', value: '44', precent: '60%',
                        },
                        {
                            name: '待提升', value: '55', precent: '70%',
                        }
                    ]
                }

            },
            "math": {
                "attitude": { // 职业态度 标准: 58 57 54 54
                    "chartData": [
                        {
                            name: '优秀', value: '20', precent: '40%',
                        },
                        {
                            name: '良好', value: '30', precent: '50%',
                        },
                        {
                            name: '及格', value: '40', precent: '60%',
                        },
                        {
                            name: '待提升', value: '50', precent: '70%',
                        }
                    ]
                },
                "practice": { // 教学实践 标准: 116 114 108 108
                    "chartData": [
                        {
                            name: '优秀', value: '50', precent: '42%',
    
                        },
                        {
                            name: '良好', value: '30', precent: '35%',
                        },
                        {
                            name: '及格', value: '20', precent: '65%',
                        },
                        {
                            name: '待提升', value: '60', precent: '71%',
                        }
                    ]
                },
                "comprehensive": { // 教学实践 标准:88 86 81 81
                    "chartData": [
                        {
                            name: '优秀', value: '24', precent: '40%',
    
                        },
                        {
                            name: '良好', value: '36', precent: '52%',
                        },
                        {
                            name: '及格', value: '45', precent: '62%',
                        },
                        {
                            name: '待提升', value: '51', precent: '74%',
                        }
                    ]
                },
                "development": { // 自主发展 标准:88 86 81 81
                    "chartData": [
                        {
                            name: '优秀', value: '21', precent: '40%',
    
                        },
                        {
                            name: '良好', value: '33', precent: '50%',
                        },
                        {
                            name: '及格', value: '44', precent: '60%',
                        },
                        {
                            name: '待提升', value: '55', precent: '70%',
                        }
                    ]
                }
            },
            "eng": {
                "attitude": { // 职业态度 标准: 58 57 54 54
                    "chartData": [
                        {
                            name: '优秀', value: '20', precent: '40%',
                        },
                        {
                            name: '良好', value: '30', precent: '50%',
                        },
                        {
                            name: '及格', value: '40', precent: '60%',
                        },
                        {
                            name: '待提升', value: '50', precent: '70%',
                        }
                    ]
                },
                "practice": { // 教学实践 标准: 116 114 108 108
                    "chartData": [
                        {
                            name: '优秀', value: '50', precent: '42%',
    
                        },
                        {
                            name: '良好', value: '30', precent: '35%',
                        },
                        {
                            name: '及格', value: '20', precent: '65%',
                        },
                        {
                            name: '待提升', value: '60', precent: '71%',
                        }
                    ]
                },
                "comprehensive": { // 教学实践 标准:88 86 81 81
                    "chartData": [
                        {
                            name: '优秀', value: '24', precent: '40%',
    
                        },
                        {
                            name: '良好', value: '36', precent: '52%',
                        },
                        {
                            name: '及格', value: '45', precent: '62%',
                        },
                        {
                            name: '待提升', value: '51', precent: '74%',
                        }
                    ]
                },
                "development": { // 自主发展 标准:88 86 81 81
                    "chartData": [
                        {
                            name: '优秀', value: '21', precent: '40%',
    
                        },
                        {
                            name: '良好', value: '33', precent: '50%',
                        },
                        {
                            name: '及格', value: '44', precent: '60%',
                        },
                        {
                            name: '待提升', value: '55', precent: '70%',
                        }
                    ]
                }
            },
            "soc": {
                "attitude": { // 职业态度 标准: 58 57 54 54
                    "chartData": [
                        {
                            name: '优秀', value: '20', precent: '40%',
                        },
                        {
                            name: '良好', value: '30', precent: '50%',
                        },
                        {
                            name: '及格', value: '40', precent: '60%',
                        },
                        {
                            name: '待提升', value: '50', precent: '70%',
                        }
                    ]
                },
                "practice": { // 教学实践 标准: 116 114 108 108
                    "chartData": [
                        {
                            name: '优秀', value: '50', precent: '42%',
    
                        },
                        {
                            name: '良好', value: '30', precent: '35%',
                        },
                        {
                            name: '及格', value: '20', precent: '65%',
                        },
                        {
                            name: '待提升', value: '60', precent: '71%',
                        }
                    ]
                },
                "comprehensive": { // 教学实践 标准:88 86 81 81
                    "chartData": [
                        {
                            name: '优秀', value: '24', precent: '40%',
    
                        },
                        {
                            name: '良好', value: '36', precent: '52%',
                        },
                        {
                            name: '及格', value: '45', precent: '62%',
                        },
                        {
                            name: '待提升', value: '51', precent: '74%',
                        }
                    ]
                },
                "development": { // 自主发展 标准:88 86 81 81
                    "chartData": [
                        {
                            name: '优秀', value: '21', precent: '40%',
    
                        },
                        {
                            name: '良好', value: '33', precent: '50%',
                        },
                        {
                            name: '及格', value: '44', precent: '60%',
                        },
                        {
                            name: '待提升', value: '55', precent: '70%',
                        }
                    ]
                }
            },
            "sci": {
                "attitude": { // 职业态度 标准: 58 57 54 54
                    "chartData": [
                        {
                            name: '优秀', value: '20', precent: '40%',
                        },
                        {
                            name: '良好', value: '30', precent: '50%',
                        },
                        {
                            name: '及格', value: '40', precent: '60%',
                        },
                        {
                            name: '待提升', value: '50', precent: '70%',
                        }
                    ]
                },
                "practice": { // 教学实践 标准: 116 114 108 108
                    "chartData": [
                        {
                            name: '优秀', value: '50', precent: '42%',
    
                        },
                        {
                            name: '良好', value: '30', precent: '35%',
                        },
                        {
                            name: '及格', value: '20', precent: '65%',
                        },
                        {
                            name: '待提升', value: '60', precent: '71%',
                        }
                    ]
                },
                "comprehensive": { // 教学实践 标准:88 86 81 81
                    "chartData": [
                        {
                            name: '优秀', value: '24', precent: '40%',
    
                        },
                        {
                            name: '良好', value: '36', precent: '52%',
                        },
                        {
                            name: '及格', value: '45', precent: '62%',
                        },
                        {
                            name: '待提升', value: '51', precent: '74%',
                        }
                    ]
                },
                "development": { // 自主发展 标准:88 86 81 81
                    "chartData": [
                        {
                            name: '优秀', value: '21', precent: '40%',
    
                        },
                        {
                            name: '良好', value: '33', precent: '50%',
                        },
                        {
                            name: '及格', value: '44', precent: '60%',
                        },
                        {
                            name: '待提升', value: '55', precent: '70%',
                        }
                    ]
                }
            },
            "art": {
                "attitude": { // 职业态度 标准: 58 57 54 54
                    "chartData": [
                        {
                            name: '优秀', value: '20', precent: '40%',
                        },
                        {
                            name: '良好', value: '30', precent: '50%',
                        },
                        {
                            name: '及格', value: '40', precent: '60%',
                        },
                        {
                            name: '待提升', value: '50', precent: '70%',
                        }
                    ]
                },
                "practice": { // 教学实践 标准: 116 114 108 108
                    "chartData": [
                        {
                            name: '优秀', value: '50', precent: '42%',
    
                        },
                        {
                            name: '良好', value: '30', precent: '35%',
                        },
                        {
                            name: '及格', value: '20', precent: '65%',
                        },
                        {
                            name: '待提升', value: '60', precent: '71%',
                        }
                    ]
                },
                "comprehensive": { // 教学实践 标准:88 86 81 81
                    "chartData": [
                        {
                            name: '优秀', value: '24', precent: '40%',
    
                        },
                        {
                            name: '良好', value: '36', precent: '52%',
                        },
                        {
                            name: '及格', value: '45', precent: '62%',
                        },
                        {
                            name: '待提升', value: '51', precent: '74%',
                        }
                    ]
                },
                "development": { // 自主发展 标准:88 86 81 81
                    "chartData": [
                        {
                            name: '优秀', value: '21', precent: '40%',
    
                        },
                        {
                            name: '良好', value: '33', precent: '50%',
                        },
                        {
                            name: '及格', value: '44', precent: '60%',
                        },
                        {
                            name: '待提升', value: '55', precent: '70%',
                        }
                    ]
                }
            },
            
        }
    },
    "modules": [
        {
            "scoreRating": { //*** 义务教育职业态度得分率
                // 义务教育语文、数学、英语、社会、理工、艺体的得分率 顺序要一致
                "chartData": ["95.83",
                "96.48",
                "98.13",
                "98.04",
                "93.23",
                "93.36",
                "95.73",
                "98.04",
                "96.18",
                "96.07",
                "95.17",
                "90.44",
                "90.79",
                "95.25"]
            },
            "eachScoreDistribution": { //*** 职业态度维度得分分布情况
                "tableData": [
                    {
                        "name":"学前教育",
                        "excellent":"62.77(344人)",
                        "good":"0.73(4人)",
                        "pass":"33.03(181人)",
                        "fail":"3.47(19人)"
                    },
                    {
                        "name":"义务教育语文",
                        "excellent":"80.65(350人)",
                        "good":"1.38(6人)",
                        "pass":"15.90(69人)",
                        "fail":"2.07(9人)"
                    },
                    {
                        "name":"义务教育数学",
                        "excellent":"80.54(240人)",
                        "good":"1.68(5人)",
                        "pass":"14.43(43人)",
                        "fail":"3.36(10人)"
                    },
                    {
                        "name":"义务教育英语",
                        "excellent":"32.38(68人)",
                        "good":"0(0人)",
                        "pass":"55.71(117人)",
                        "fail":"11.90(25人)"
                    },
                    {
                        "name":"义务教育艺体",
                        "excellent":"35.19(101人)",
                        "good":"0.35(1人)",
                        "pass":"52.26(150人)",
                        "fail":"12.20(35人)"
                    },
                    {
                        "name":"义务教育社会",
                        "excellent":"59.38(95人)",
                        "good":"0.63(1人)",
                        "pass":"33.13(53人)",
                        "fail":"6.88(11人)"
                    },
                    {
                        "name":"义务教育理工",
                        "excellent":"81.30(100人)",
                        "good":"0(0人)",
                        "pass":"14.63(18人)",
                        "fail":"4.07(5人)"
                    },
                    {
                        "name":"高中教育语文",
                        "excellent":"69.57(48人)",
                        "good":"0(0人)",
                        "pass":"23.19(16人)",
                        "fail":"7.25(5人)"
                    },
                    {
                        "name":"高中教育数学",
                        "excellent":"70.31(45人)",
                        "good":"4.69(3人)",
                        "pass":"15.63(10人)",
                        "fail":"9.38(6人)"
                    },
                    {
                        "name":"高中教育英语",
                        "excellent":"51.28(40人)",
                        "good":"0(0人)",
                        "pass":"41.03(32人)",
                        "fail":"7.69(6人)"
                    },
                    {
                        "name":"高中教育理工",
                        "excellent":"1.48(2人)",
                        "good":"0(0人)",
                        "pass":"82.96(112人)",
                        "fail":"15.56(21人)"
                    },
                    {
                        "name":"高中教育艺体",
                        "excellent":"21.43(9人)",
                        "good":"2.38(1人)",
                        "pass":"59.52(25人)",
                        "fail":"16.67(7人)"
                    },
                    {
                        "name":"高中教育社会",
                        "excellent":"55.88(57人)",
                        "good":"0.98(1人)",
                        "pass":"33.33(34人)",
                        "fail":"9.80(10人)"
                    }
                ],
                "allChartData": [
                    {
                        "name":"优秀",
                        "value":1499,
                        "proportion":99.81
                    },
                    {
                        "name":"良好",
                        "value":22,
                        "proportion":95
                    },
                    {
                        "name":"及格",
                        "value":860,
                        "proportion":91.54
                    },
                    {
                        "name":"待提升",
                        "value":169,
                        "proportion":82.51
                    }
                ],
                "childChartData": [
                    {
                        "name":"优秀",
                        "value":344,
                        "proportion":99.8
                    },
                    {
                        "name":"良好",
                        "value":4,
                        "proportion":95
                    },
                    {
                        "name":"及格",
                        "value":181,
                        "proportion":91.59
                    },
                    {
                        "name":"待提升",
                        "value":19,
                        "proportion":83.33
                    }
                ],
                "chnChartData": [
                    {
                        "name":"优秀",
                        "value":350,
                        "proportion":99.84
                    },
                    {
                        "name":"良好",
                        "value":6,
                        "proportion":95
                    },
                    {
                        "name":"及格",
                        "value":69,
                        "proportion":91.59
                    },
                    {
                        "name":"待提升",
                        "value":9,
                        "proportion":84.07
                    }
                ],
                "mathChartData": [
                    {
                        "name":"优秀",
                        "value":240,
                        "proportion":99.85
                    },
                    {
                        "name":"良好",
                        "value":5,
                        "proportion":95
                    },
                    {
                        "name":"及格",
                        "value":43,
                        "proportion":91.67
                    },
                    {
                        "name":"待提升",
                        "value":10,
                        "proportion":83.5
                    }
                ],
                "engChartData": [
                    {
                        "name":"优秀",
                        "value":68,
                        "proportion":99.9
                    },
                    {
                        "name":"良好",
                        "value":32,
                        "proportion":91.35
                    },
                    {
                        "name":"及格",
                        "value":117,
                        "proportion":91.55
                    },
                    {
                        "name":"待提升",
                        "value":25,
                        "proportion":82.93
                    }
                ],
                "socChartData": [
                    {
                        "name":"优秀",
                        "value":101,
                        "proportion":99.93
                    },
                    {
                        "name":"良好",
                        "value":1,
                        "proportion":95
                    },
                    {
                        "name":"及格",
                        "value":150,
                        "proportion":91.6
                    },
                    {
                        "name":"待提升",
                        "value":35,
                        "proportion":81.9
                    }
                ],
                "sciChartData": [
                    {
                        "name":"优秀",
                        "value":95,
                        "proportion":99.6
                    },
                    {
                        "name":"良好",
                        "value":1,
                        "proportion":95
                    },
                    {
                        "name":"及格",
                        "value":53,
                        "proportion":91.42
                    },
                    {
                        "name":"待提升",
                        "value":11,
                        "proportion":83.18
                    }
                ],
                "artChartData": [
                    {
                        "name":"优秀",
                        "value":100,
                        "proportion":99.88
                    },
                    {
                        "name":"良好",
                        "value":32,
                        "proportion":91.35
                    },
                    {
                        "name":"及格",
                        "value":18,
                        "proportion":91.3
                    },
                    {
                        "name":"待提升",
                        "value":5,
                        "proportion":85.33
                    }
                ],
                "highChnChartData": [
                    {
                        "name":"优秀",
                        "value":48,
                        "proportion":99.58
                    },
                    {
                        "name":"良好",
                        "value":32,
                        "proportion":91.35
                    },
                    {
                        "name":"及格",
                        "value":16,
                        "proportion":91.77
                    },
                    {
                        "name":"待提升",
                        "value":5,
                        "proportion":77.67
                    }
                ],
                "highMathChartData": [
                    {
                        "name":"优秀",
                        "value":45,
                        "proportion":99.63
                    },
                    {
                        "name":"良好",
                        "value":3,
                        "proportion":95
                    },
                    {
                        "name":"及格",
                        "value":10,
                        "proportion":91
                    },
                    {
                        "name":"待提升",
                        "value":6,
                        "proportion":78.33
                    }
                ], 
                "highEngChartData": [
                    {
                        "name":"优秀",
                        "value":40,
                        "proportion":99.92
                    },
                    {
                        "name":"良好",
                        "value":32,
                        "proportion":91.35
                    },
                    {
                        "name":"及格",
                        "value":32,
                        "proportion":91.35
                    },
                    {
                        "name":"待提升",
                        "value":6,
                        "proportion":83.89
                    }
                ], 
                "highSocChartData": [
                    {
                        "name":"优秀",
                        "value":2,
                        "proportion":99.17
                    },
                    {
                        "name":"良好",
                        "value":2,
                        "proportion":99.17
                    },
                    {
                        "name":"及格",
                        "value":112,
                        "proportion":91.55
                    },
                    {
                        "name":"待提升",
                        "value":21,
                        "proportion":83.73
                    }
                ], 
                "highSciChartData": [
                    {
                        "name":"优秀",
                        "value":9,
                        "proportion":99.81
                    },
                    {
                        "name":"良好",
                        "value":1,
                        "proportion":95
                    },
                    {
                        "name":"及格",
                        "value":25,
                        "proportion":91.47
                    },
                    {
                        "name":"待提升",
                        "value":7,
                        "proportion":76.19
                    }
                ], 
                "highArtChartData": [
                    {
                        "name":"优秀",
                        "value":57,
                        "proportion":99.65
                    },
                    {
                        "name":"良好",
                        "value":1,
                        "proportion":95
                    },
                    {
                        "name":"及格",
                        "value":34,
                        "proportion":91.32
                    },
                    {
                        "name":"待提升",
                        "value":10,
                        "proportion":83.5
                    }
                ],   
            },
            "averageScore": { // 职业态度、各平均分
                // 四个维度满分分别为: 60 120 90 90
                "all": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":57
                        },
                        {
                            "name":"义务教育语文",
                            "value":58
                        },
                        {
                            "name":"义务教育数学",
                            "value":58
                        },
                        {
                            "name":"义务教育英语",
                            "value":55
                        },
                        {
                            "name":"义务教育艺体",
                            "value":56
                        },
                        {
                            "name":"义务教育社会",
                            "value":57
                        },
                        {
                            "name":"义务教育理工",
                            "value":58
                        },
                        {
                            "name":"高中教育语文",
                            "value":57
                        },
                        {
                            "name":"高中教育数学",
                            "value":57
                        },
                        {
                            "name":"高中教育英语",
                            "value":57
                        },
                        {
                            "name":"高中教育理工",
                            "value":54
                        },
                        {
                            "name":"高中教育艺体",
                            "value":54
                        },
                        {
                            "name":"高中教育社会",
                            "value":57
                        }
                    ]
                },
                "self": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":29
                        },
                        {
                            "name":"义务教育语文",
                            "value":29
                        },
                        {
                            "name":"义务教育数学",
                            "value":29
                        },
                        {
                            "name":"义务教育英语",
                            "value":29
                        },
                        {
                            "name":"义务教育艺体",
                            "value":29
                        },
                        {
                            "name":"义务教育社会",
                            "value":29
                        },
                        {
                            "name":"义务教育理工",
                            "value":29
                        },
                        {
                            "name":"高中教育语文",
                            "value":28
                        },
                        {
                            "name":"高中教育数学",
                            "value":28
                        },
                        {
                            "name":"高中教育英语",
                            "value":29
                        },
                        {
                            "name":"高中教育理工",
                            "value":29
                        },
                        {
                            "name":"高中教育艺体",
                            "value":28
                        },
                        {
                            "name":"高中教育社会",
                            "value":29
                        }
                    ]
                },
                "scene": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":28
                        },
                        {
                            "name":"义务教育语文",
                            "value":29
                        },
                        {
                            "name":"义务教育数学",
                            "value":29
                        },
                        {
                            "name":"义务教育英语",
                            "value":26
                        },
                        {
                            "name":"义务教育艺体",
                            "value":26
                        },
                        {
                            "name":"义务教育社会",
                            "value":27
                        },
                        {
                            "name":"义务教育理工",
                            "value":29
                        },
                        {
                            "name":"高中教育语文",
                            "value":28
                        },
                        {
                            "name":"高中教育数学",
                            "value":28
                        },
                        {
                            "name":"高中教育英语",
                            "value":27
                        },
                        {
                            "name":"高中教育理工",
                            "value":24
                        },
                        {
                            "name":"高中教育艺体",
                            "value":25
                        },
                        {
                            "name":"高中教育社会",
                            "value":28
                        }
                    ]
                }
            },
            "standardScore": { // 各个小的维度、标准差
                "self": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":3.15
                        },
                        {
                            "name":"义务教育语文",
                            "value":1.94
                        },
                        {
                            "name":"义务教育数学",
                            "value":2.01
                        },
                        {
                            "name":"义务教育英语",
                            "value":3.26
                        },
                        {
                            "name":"义务教育艺体",
                            "value":3.57
                        },
                        {
                            "name":"义务教育社会",
                            "value":3.51
                        },
                        {
                            "name":"义务教育理工",
                            "value":1.69
                        },
                        {
                            "name":"高中教育语文",
                            "value":2.41
                        },
                        {
                            "name":"高中教育数学",
                            "value":3.13
                        },
                        {
                            "name":"高中教育英语",
                            "value":3.76
                        },
                        {
                            "name":"高中教育理工",
                            "value":1.05
                        },
                        {
                            "name":"高中教育艺体",
                            "value":3.54
                        },
                        {
                            "name":"高中教育社会",
                            "value":3.39
                        }
                    ]
                },
                "scene": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":1.15
                        },
                        {
                            "name":"义务教育语文",
                            "value":1.24
                        },
                        {
                            "name":"义务教育数学",
                            "value":3.79
                        },
                        {
                            "name":"义务教育英语",
                            "value":1.81
                        },
                        {
                            "name":"义务教育艺体",
                            "value":1.2
                        },
                        {
                            "name":"义务教育社会",
                            "value":1.47
                        },
                        {
                            "name":"义务教育理工",
                            "value":1.76
                        },
                        {
                            "name":"高中教育语文",
                            "value":5.47
                        },
                        {
                            "name":"高中教育数学",
                            "value":2.39
                        },
                        {
                            "name":"高中教育英语",
                            "value":1.46
                        },
                        {
                            "name":"高中教育理工",
                            "value":1.77
                        },
                        {
                            "name":"高中教育艺体",
                            "value":4.18
                        },
                        {
                            "name":"高中教育社会",
                            "value":2.16
                        }
                    ]
                }
            },
            "minMaxSocre": {
                "self": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "高中教育艺体", // 分数最低的学，相同分数的学都显示
                    "midMax": "全体学科", // 中位数最高的学
                    "midMin": "全体学科",  // 中位数最低的学
                    "chartData": [{"name":"学前教育","min":22.0,"median":30.0,"average":29.67,"max":30.0},{"name":"义务教育语文","min":22.0,"median":30.0,"average":29.63,"max":30.0},{"name":"义务教育数学","min":21.0,"median":30.0,"average":29.53,"max":30.0},{"name":"义务教育英语","min":6.0,"median":30.0,"average":29.72,"max":30.0},{"name":"义务教育社会","min":24.0,"median":30.0,"average":29.47,"max":30.0},{"name":"义务教育理工","min":23.0,"median":30.0,"average":29.39,"max":30.0},{"name":"义务教育艺体","min":22.0,"median":30.0,"average":29.73,"max":30.0},{"name":"高中教育语文","min":12.0,"median":30.0,"average":28.72,"max":30.0},{"name":"高中教育数学","min":18.0,"median":30.0,"average":28.97,"max":30.0},{"name":"高中教育英语","min":24.0,"median":30.0,"average":29.54,"max":30.0},{"name":"高中教育社会","min":23.0,"median":30.0,"average":29.06,"max":30.0},{"name":"高中教育理工","min":22.0,"median":30.0,"average":29.34,"max":30.0},{"name":"高中教育艺体","min":6.0,"median":30.0,"average":28.64,"max":30.0}]
                },
                "scene": {
                    "max": "义务教育理工", // 分数最高的学
                    "min": "高中教育理工", // 分数最低的学，相同分数的学都显示
                    "midMax": "学前教育, 义务教育语文, 义务教育数学, 义务教育社会, 义务教育理工, 高中教育语文, 高中教育数学, 高中教育英语, 高中教育社会",  // 中位数最高的学
                    "midMin": "义务教育英语, 义务教育艺体, 高中教育理工, 高中教育艺体",  // 中位数最低的学
                    "chartData": [{"name":"学前教育","min":15.0,"median":30.0,"average":28.22,"max":30.0},{"name":"义务教育语文","min":25.0,"median":30.0,"average":29.25,"max":30.0},{"name":"义务教育数学","min":20.0,"median":30.0,"average":29.3,"max":30.0},{"name":"义务教育英语","min":20.0,"median":25.0,"average":26.21,"max":30.0},{"name":"义务教育社会","min":20.0,"median":30.0,"average":27.97,"max":30.0},{"name":"义务教育理工","min":25.0,"median":30.0,"average":29.43,"max":30.0},{"name":"义务教育艺体","min":15.0,"median":25.0,"average":26.29,"max":30.0},{"name":"高中教育语文","min":20.0,"median":30.0,"average":28.99,"max":30.0},{"name":"高中教育数学","min":15.0,"median":30.0,"average":28.67,"max":30.0},{"name":"高中教育英语","min":20.0,"median":30.0,"average":27.56,"max":30.0},{"name":"高中教育社会","min":20.0,"median":30.0,"average":28.09,"max":30.0},{"name":"高中教育理工","min":20.0,"median":25.0,"average":24.93,"max":30.0},{"name":"高中教育艺体","min":15.0,"median":25.0,"average":25.83,"max":30.0}]
                }
            }
        },{
            "scoreRating": { //*** 教学实践维度得分率: 最低、最高、中位数、平均得分率
                "chartData": ["90.88",
                "95.55",
                "90.72",
                "89.92",
                "91.73",
                "93.32",
                "85.72",
                "85.49",
                "87.58",
                "92.03",
                "90.56",
                "88.51",
                "84.84",
                "82.68"]

            },
            "eachScoreDistribution": { //*** 职业态度维度得分分布情况
                "tableData": [
                    {
                        "name":"学前教育",
                        "excellent":"49.27(270人)",
                        "good":"16.61(91人)",
                        "pass":"23.36(128人)",
                        "fail":"10.77(59人)"
                    },
                    {
                        "name":"义务教育语文",
                        "excellent":"14.52(63人)",
                        "good":"21.89(95人)",
                        "pass":"26.04(113人)",
                        "fail":"37.56(163人)"
                    },
                    {
                        "name":"义务教育数学",
                        "excellent":"8.05(24人)",
                        "good":"21.81(65人)",
                        "pass":"27.18(81人)",
                        "fail":"42.95(128人)"
                    },
                    {
                        "name":"义务教育英语",
                        "excellent":"18.10(38人)",
                        "good":"21.90(46人)",
                        "pass":"26.19(55人)",
                        "fail":"33.81(71人)"
                    },
                    {
                        "name":"义务教育艺体",
                        "excellent":"27.87(80人)",
                        "good":"24.39(70人)",
                        "pass":"24.74(71人)",
                        "fail":"23.00(66人)"
                    },
                    {
                        "name":"义务教育社会",
                        "excellent":"2.50(4人)",
                        "good":"7.50(12人)",
                        "pass":"17.50(28人)",
                        "fail":"72.50(116人)"
                    },
                    {
                        "name":"义务教育理工",
                        "excellent":"0(0人)",
                        "good":"8.13(10人)",
                        "pass":"25.20(31人)",
                        "fail":"66.67(82人)"
                    },
                    {
                        "name":"高中教育语文",
                        "excellent":"4.35(3人)",
                        "good":"11.59(8人)",
                        "pass":"31.88(22人)",
                        "fail":"52.17(36人)"
                    },
                    {
                        "name":"高中教育数学",
                        "excellent":"25.00(16人)",
                        "good":"21.88(14人)",
                        "pass":"20.31(13人)",
                        "fail":"32.81(21人)"
                    },
                    {
                        "name":"高中教育英语",
                        "excellent":"12.82(10人)",
                        "good":"28.21(22人)",
                        "pass":"20.51(16人)",
                        "fail":"38.46(30人)"
                    },
                    {
                        "name":"高中教育理工",
                        "excellent":"5.19(7人)",
                        "good":"13.33(18人)",
                        "pass":"31.11(42人)",
                        "fail":"50.37(68人)"
                    },
                    {
                        "name":"高中教育艺体",
                        "excellent":"0(0人)",
                        "good":"7.14(3人)",
                        "pass":"19.05(8人)",
                        "fail":"73.81(31人)"
                    },
                    {
                        "name":"高中教育社会",
                        "excellent":"0(0人)",
                        "good":"3.92(4人)",
                        "pass":"14.71(15人)",
                        "fail":"81.37(83人)"
                    }
                ],
                "allChartData": [
                    {
                        "name":"优秀",
                        "value":515,
                        "proportion":99.57
                    },
                    {
                        "name":"良好",
                        "value":458,
                        "proportion":95.72
                    },
                    {
                        "name":"及格",
                        "value":623,
                        "proportion":91.8
                    },
                    {
                        "name":"待提升",
                        "value":954,
                        "proportion":83.27
                    }
                ],
                "childChartData": [
                    {
                        "name":"优秀",
                        "value":270,
                        "proportion":99.57
                    },
                    {
                        "name":"良好",
                        "value":91,
                        "proportion":95.63
                    },
                    {
                        "name":"及格",
                        "value":128,
                        "proportion":92.02
                    },
                    {
                        "name":"待提升",
                        "value":59,
                        "proportion":84.63
                    }
                ],
                "chnChartData": [
                    {
                        "name":"优秀",
                        "value":63,
                        "proportion":99.51
                    },
                    {
                        "name":"良好",
                        "value":95,
                        "proportion":95.76
                    },
                    {
                        "name":"及格",
                        "value":113,
                        "proportion":91.69
                    },
                    {
                        "name":"待提升",
                        "value":163,
                        "proportion":83.7
                    }
                ],
                "mathChartData": [
                    {
                        "name":"优秀",
                        "value":24,
                        "proportion":99.34
                    },
                    {
                        "name":"良好",
                        "value":65,
                        "proportion":95.71
                    },
                    {
                        "name":"及格",
                        "value":81,
                        "proportion":91.72
                    },
                    {
                        "name":"待提升",
                        "value":128,
                        "proportion":84.09
                    }
                ],
                "engChartData": [
                    {
                        "name":"优秀",
                        "value":38,
                        "proportion":99.58
                    },
                    {
                        "name":"良好",
                        "value":46,
                        "proportion":95.74
                    },
                    {
                        "name":"及格",
                        "value":55,
                        "proportion":91.92
                    },
                    {
                        "name":"待提升",
                        "value":71,
                        "proportion":84.79
                    }
                ],
                "socChartData": [
                    {
                        "name":"优秀",
                        "value":80,
                        "proportion":99.63
                    },
                    {
                        "name":"良好",
                        "value":70,
                        "proportion":95.75
                    },
                    {
                        "name":"及格",
                        "value":71,
                        "proportion":91.92
                    },
                    {
                        "name":"待提升",
                        "value":66,
                        "proportion":84.58
                    }
                ],
                "sciChartData": [
                    {
                        "name":"优秀",
                        "value":4,
                        "proportion":99.17
                    },
                    {
                        "name":"良好",
                        "value":12,
                        "proportion":95.69
                    },
                    {
                        "name":"及格",
                        "value":28,
                        "proportion":91.88
                    },
                    {
                        "name":"待提升",
                        "value":116,
                        "proportion":82.74
                    }
                ],
                "artChartData": [
                    {
                        "name":"优秀",
                        "value":3,
                        "proportion":99.17
                    },
                    {
                        "name":"良好",
                        "value":10,
                        "proportion":95.75
                    },
                    {
                        "name":"及格",
                        "value":31,
                        "proportion":91.53
                    },
                    {
                        "name":"待提升",
                        "value":82,
                        "proportion":81.95
                    }
                ],
                "highChnChartData": [
                    {
                        "name":"优秀",
                        "value":3,
                        "proportion":99.17
                    },
                    {
                        "name":"良好",
                        "value":8,
                        "proportion":95.83
                    },
                    {
                        "name":"及格",
                        "value":22,
                        "proportion":91.48
                    },
                    {
                        "name":"待提升",
                        "value":36,
                        "proportion":82.41
                    }
                ],
                "highMathChartData": [
                    {
                        "name":"优秀",
                        "value":16,
                        "proportion":99.79
                    },
                    {
                        "name":"良好",
                        "value":14,
                        "proportion":95.71
                    },
                    {
                        "name":"及格",
                        "value":13,
                        "proportion":91.73
                    },
                    {
                        "name":"待提升",
                        "value":21,
                        "proportion":83.85
                    }
                ], 
                "highEngChartData": [
                    {
                        "name":"优秀",
                        "value":10,
                        "proportion":99.83
                    },
                    {
                        "name":"良好",
                        "value":22,
                        "proportion":95.8
                    },
                    {
                        "name":"及格",
                        "value":16,
                        "proportion":91.35
                    },
                    {
                        "name":"待提升",
                        "value":30,
                        "proportion":83.19
                    }
                ], 
                "highSocChartData": [
                    {
                        "name":"优秀",
                        "value":7,
                        "proportion":100
                    },
                    {
                        "name":"良好",
                        "value":18,
                        "proportion":95.56
                    },
                    {
                        "name":"及格",
                        "value":42,
                        "proportion":91.79
                    },
                    {
                        "name":"待提升",
                        "value":68,
                        "proportion":83.43
                    }
                ], 
                "highSciChartData": [
                    {
                        "name":"优秀",
                        "value":3,
                        "proportion":95.83
                    },
                    {
                        "name":"良好",
                        "value":3,
                        "proportion":95.83
                    },
                    {
                        "name":"及格",
                        "value":8,
                        "proportion":91.98
                    },
                    {
                        "name":"待提升",
                        "value":31,
                        "proportion":81.94
                    }
                ], 
                "highArtChartData": [
                    {
                        "name":"优秀",
                        "value":4,
                        "proportion":95.63
                    },
                    {
                        "name":"良好",
                        "value":4,
                        "proportion":95.63
                    },
                    {
                        "name":"及格",
                        "value":15,
                        "proportion":91.44
                    },
                    {
                        "name":"待提升",
                        "value":83,
                        "proportion":80.47
                    }
                ], 
            },
            "averageScore": {
                "all": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":114
                        },
                        {
                            "name":"义务教育语文",
                            "value":108
                        },
                        {
                            "name":"义务教育数学",
                            "value":107
                        },
                        {
                            "name":"义务教育英语",
                            "value":110
                        },
                        {
                            "name":"义务教育艺体",
                            "value":111
                        },
                        {
                            "name":"义务教育社会",
                            "value":102
                        },
                        {
                            "name":"义务教育理工",
                            "value":102
                        },
                        {
                            "name":"高中教育语文",
                            "value":105
                        },
                        {
                            "name":"高中教育数学",
                            "value":110
                        },
                        {
                            "name":"高中教育英语",
                            "value":108
                        },
                        {
                            "name":"高中教育理工",
                            "value":106
                        },
                        {
                            "name":"高中教育艺体",
                            "value":101
                        },
                        {
                            "name":"高中教育社会",
                            "value":99
                        }
                    ]
                },
                "self": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":58
                        },
                        {
                            "name":"义务教育语文",
                            "value":52
                        },
                        {
                            "name":"义务教育数学",
                            "value":52
                        },
                        {
                            "name":"义务教育英语",
                            "value":53
                        },
                        {
                            "name":"义务教育艺体",
                            "value":55
                        },
                        {
                            "name":"义务教育社会",
                            "value":47
                        },
                        {
                            "name":"义务教育理工",
                            "value":46
                        },
                        {
                            "name":"高中教育语文",
                            "value":50
                        },
                        {
                            "name":"高中教育数学",
                            "value":55
                        },
                        {
                            "name":"高中教育英语",
                            "value":52
                        },
                        {
                            "name":"高中教育理工",
                            "value":49
                        },
                        {
                            "name":"高中教育艺体",
                            "value":46
                        },
                        {
                            "name":"高中教育社会",
                            "value":44
                        }
                    ]
                },
                "scene": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":56
                        },
                        {
                            "name":"义务教育语文",
                            "value":56
                        },
                        {
                            "name":"义务教育数学",
                            "value":55
                        },
                        {
                            "name":"义务教育英语",
                            "value":57
                        },
                        {
                            "name":"义务教育艺体",
                            "value":56
                        },
                        {
                            "name":"义务教育社会",
                            "value":55
                        },
                        {
                            "name":"义务教育理工",
                            "value":55
                        },
                        {
                            "name":"高中教育语文",
                            "value":54
                        },
                        {
                            "name":"高中教育数学",
                            "value":54
                        },
                        {
                            "name":"高中教育英语",
                            "value":56
                        },
                        {
                            "name":"高中教育理工",
                            "value":56
                        },
                        {
                            "name":"高中教育艺体",
                            "value":55
                        },
                        {
                            "name":"高中教育社会",
                            "value":54
                        }
                    ]
                }
            },
            "standardScore": { // 各个小的维度、标准差
                "self": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":4.89
                        },
                        {
                            "name":"义务教育语文",
                            "value":9.6
                        },
                        {
                            "name":"义务教育数学",
                            "value":9.02
                        },
                        {
                            "name":"义务教育英语",
                            "value":6.28
                        },
                        {
                            "name":"义务教育艺体",
                            "value":6.78
                        },
                        {
                            "name":"义务教育社会",
                            "value":7.09
                        },
                        {
                            "name":"义务教育理工",
                            "value":6.58
                        },
                        {
                            "name":"高中教育语文",
                            "value":6.78
                        },
                        {
                            "name":"高中教育数学",
                            "value":6.43
                        },
                        {
                            "name":"高中教育英语",
                            "value":5.83
                        },
                        {
                            "name":"高中教育理工",
                            "value":7.96
                        },
                        {
                            "name":"高中教育艺体",
                            "value":6.68
                        },
                        {
                            "name":"高中教育社会",
                            "value":8.79
                        }
                    ]
                },
                "scene": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":9.8
                        },
                        {
                            "name":"义务教育语文",
                            "value":6.41
                        },
                        {
                            "name":"义务教育数学",
                            "value":5.14
                        },
                        {
                            "name":"义务教育英语",
                            "value":8.99
                        },
                        {
                            "name":"义务教育艺体",
                            "value":5.83
                        },
                        {
                            "name":"义务教育社会",
                            "value":7.09
                        },
                        {
                            "name":"义务教育理工",
                            "value":6.59
                        },
                        {
                            "name":"高中教育语文",
                            "value":8.44
                        },
                        {
                            "name":"高中教育数学",
                            "value":8.09
                        },
                        {
                            "name":"高中教育英语",
                            "value":12.46
                        },
                        {
                            "name":"高中教育理工",
                            "value":5.97
                        },
                        {
                            "name":"高中教育艺体",
                            "value":7.14
                        },
                        {
                            "name":"高中教育社会",
                            "value":8.7
                        }
                    ]
                }
            },
            "minMaxSocre": {
                "self": {
                    "max": "义务教育英语", // 分数最高的学
                    "min": "高中教育语文", // 分数最低的学，相同分数的学都显示
                    "midMax": "学前教育, 义务教育英语, 义务教育艺体, 高中教育英语, 高中教育艺体",
                    "midMin": "高中教育语文", 
                    "chartData": [{"name":"学前教育","min":31.0,"median":60.0,"average":56.37,"max":60.0},{"name":"义务教育语文","min":39.0,"median":59.0,"average":56.13,"max":60.0},{"name":"义务教育数学","min":42.0,"median":58.0,"average":55.71,"max":60.0},{"name":"义务教育英语","min":41.0,"median":60.0,"average":57.01,"max":60.0},{"name":"义务教育社会","min":36.0,"median":57.5,"average":55.37,"max":60.0},{"name":"义务教育理工","min":41.0,"median":59.0,"average":55.8,"max":60.0},{"name":"义务教育艺体","min":39.0,"median":60.0,"average":56.86,"max":60.0},{"name":"高中教育语文","min":40.0,"median":55.0,"average":54.23,"max":60.0},{"name":"高中教育数学","min":36.0,"median":58.0,"average":54.66,"max":60.0},{"name":"高中教育英语","min":38.0,"median":60.0,"average":56.23,"max":60.0},{"name":"高中教育社会","min":35.0,"median":58.5,"average":54.95,"max":60.0},{"name":"高中教育理工","min":44.0,"median":59.0,"average":56.39,"max":60.0},{"name":"高中教育艺体","min":40.0,"median":60.0,"average":55.5,"max":60.0}]
                },
                "scene": {
                    "max": "学前教育", // 分数最高的学
                    "min": "高中教育社会", // 分数最低的学，相同分数的学都显示
                    "midMax": "学前教育",
                    "midMin": "义务教育理工, 高中教育社会, 高中教育艺体", 
                    "chartData": [{"name":"学前教育","min":35.0,"median":60.0,"average":58.28,"max":60.0},{"name":"义务教育语文","min":30.0,"median":55.0,"average":52.73,"max":60.0},{"name":"义务教育数学","min":30.0,"median":55.0,"average":52.2,"max":60.0},{"name":"义务教育英语","min":30.0,"median":55.0,"average":53.07,"max":60.0},{"name":"义务教育社会","min":15.0,"median":50.0,"average":47.5,"max":60.0},{"name":"义务教育理工","min":25.0,"median":45.0,"average":46.79,"max":55.0},{"name":"义务教育艺体","min":35.0,"median":55.0,"average":55.12,"max":60.0},{"name":"高中教育语文","min":30.0,"median":50.0,"average":50.87,"max":60.0},{"name":"高中教育数学","min":40.0,"median":55.0,"average":55.78,"max":60.0},{"name":"高中教育英语","min":40.0,"median":55.0,"average":52.44,"max":60.0},{"name":"高中教育社会","min":20.0,"median":45.0,"average":44.26,"max":55.0},{"name":"高中教育理工","min":25.0,"median":50.0,"average":49.81,"max":60.0},{"name":"高中教育艺体","min":35.0,"median":45.0,"average":46.31,"max":55.0}]
                }
            }
        },{
            "scoreRating": { //*** 综合育人维度得分率: 最低、最高、中位数、平均得分率
                "chartData": [ "90.94",
                "96.56",
                "88.82",
                "88.96",
                "90.20",
                "91.23",
                "91.07",
                "88.87",
                "88.60",
                "88.82",
                "89.80",
                "91.87",
                "87.38",
                "82.43"]
            },
            "eachScoreDistribution": { //*** 综合育人维度得分分布情况
                "tableData": [
                    {
                        "name":"学前教育",
                        "excellent":"59.67(327人)",
                        "good":"9.85(54人)",
                        "pass":"22.26(122人)",
                        "fail":"8.21(45人)"
                    },
                    {
                        "name":"义务教育语文",
                        "excellent":"4.38(19人)",
                        "good":"0.46(2人)",
                        "pass":"34.79(151人)",
                        "fail":"60.37(262人)"
                    },
                    {
                        "name":"义务教育数学",
                        "excellent":"6.71(20人)",
                        "good":"1.01(3人)",
                        "pass":"37.25(111人)",
                        "fail":"55.03(164人)"
                    },
                    {
                        "name":"义务教育英语",
                        "excellent":"7.62(16人)",
                        "good":"1.43(3人)",
                        "pass":"36.19(76人)",
                        "fail":"54.76(115人)"
                    },
                    {
                        "name":"义务教育艺体",
                        "excellent":"8.71(25人)",
                        "good":"1.05(3人)",
                        "pass":"51.22(147人)",
                        "fail":"39.02(112人)"
                    },
                    {
                        "name":"义务教育社会",
                        "excellent":"12.50(20人)",
                        "good":"0.63(1人)",
                        "pass":"48.75(78人)",
                        "fail":"38.13(61人)"
                    },
                    {
                        "name":"义务教育理工",
                        "excellent":"4.07(5人)",
                        "good":"0.81(1人)",
                        "pass":"34.15(42人)",
                        "fail":"60.98(75人)"
                    },
                    {
                        "name":"高中教育语文",
                        "excellent":"4.35(3人)",
                        "good":"8.70(6人)",
                        "pass":"39.13(27人)",
                        "fail":"47.83(33人)"
                    },
                    {
                        "name":"高中教育数学",
                        "excellent":"6.25(4人)",
                        "good":"1.56(1人)",
                        "pass":"46.88(30人)",
                        "fail":"45.31(29人)"
                    },
                    {
                        "name":"高中教育英语",
                        "excellent":"10.26(8人)",
                        "good":"1.28(1人)",
                        "pass":"35.90(28人)",
                        "fail":"52.56(41人)"
                    },
                    {
                        "name":"高中教育理工",
                        "excellent":"12.59(17人)",
                        "good":"3.70(5人)",
                        "pass":"54.07(73人)",
                        "fail":"29.63(40人)"
                    },
                    {
                        "name":"高中教育艺体",
                        "excellent":"4.76(2人)",
                        "good":"2.38(1人)",
                        "pass":"26.19(11人)",
                        "fail":"66.67(28人)"
                    },
                    {
                        "name":"高中教育社会",
                        "excellent":"0(0人)",
                        "good":"0(0人)",
                        "pass":"8.82(9人)",
                        "fail":"91.18(93人)"
                    }
                ],
                // 各、职业态度、value: 人  precent代表占比
                "allChartData": [
                    {
                        "name":"优秀",
                        "value":466,
                        "proportion":99.72
                    },
                    {
                        "name":"良好",
                        "value":81,
                        "proportion":96.02
                    },
                    {
                        "name":"及格",
                        "value":905,
                        "proportion":93.43
                    },
                    {
                        "name":"待提升",
                        "value":1098,
                        "proportion":84.78
                    }
                ],
                "childChartData": [
                    {
                        "name":"优秀",
                        "value":327,
                        "proportion":99.72
                    },
                    {
                        "name":"良好",
                        "value":54,
                        "proportion":96.03
                    },
                    {
                        "name":"及格",
                        "value":122,
                        "proportion":92.6
                    },
                    {
                        "name":"待提升",
                        "value":45,
                        "proportion":85.04
                    }
                ],
                "chnChartData": [
                    {
                        "name":"优秀",
                        "value":19,
                        "proportion":99.77
                    },
                    {
                        "name":"良好",
                        "value":2,
                        "proportion":95.56
                    },
                    {
                        "name":"及格",
                        "value":151,
                        "proportion":93.5
                    },
                    {
                        "name":"待提升",
                        "value":262,
                        "proportion":85.28
                    }
                ],
                "mathChartData": [
                    {
                        "name":"优秀",
                        "value":20,
                        "proportion":99.83
                    },
                    {
                        "name":"良好",
                        "value":3,
                        "proportion":96.3
                    },
                    {
                        "name":"及格",
                        "value":111,
                        "proportion":93.46
                    },
                    {
                        "name":"待提升",
                        "value":164,
                        "proportion":84.45
                    }
                ],
                "engChartData": [
                    {
                        "name":"优秀",
                        "value":16,
                        "proportion":99.93
                    },
                    {
                        "name":"良好",
                        "value":3,
                        "proportion":95.56
                    },
                    {
                        "name":"及格",
                        "value":76,
                        "proportion":93.65
                    },
                    {
                        "name":"待提升",
                        "value":115,
                        "proportion":86.42
                    }
                ],
                "socChartData": [
                    {
                        "name":"优秀",
                        "value":25,
                        "proportion":99.78
                    },
                    {
                        "name":"良好",
                        "value":3,
                        "proportion":96.3
                    },
                    {
                        "name":"及格",
                        "value":147,
                        "proportion":93.84
                    },
                    {
                        "name":"待提升",
                        "value":112,
                        "proportion":85.76
                    }
                ],
                "sciChartData": [
                    {
                        "name":"优秀",
                        "value":20,
                        "proportion":99.56
                    },
                    {
                        "name":"良好",
                        "value":1,
                        "proportion":96.67
                    },
                    {
                        "name":"及格",
                        "value":78,
                        "proportion":93.42
                    },
                    {
                        "name":"待提升",
                        "value":61,
                        "proportion":85.19
                    }
                ],
                "artChartData": [
                    {
                        "name":"优秀",
                        "value":5,
                        "proportion":99.33
                    },
                    {
                        "name":"良好",
                        "value":1,
                        "proportion":96.67
                    },
                    {
                        "name":"及格",
                        "value":42,
                        "proportion":93.73
                    },
                    {
                        "name":"待提升",
                        "value":75,
                        "proportion":85.35
                    }
                ],
                "highChnChartData": [
                    {
                        "name":"优秀",
                        "value":3,
                        "proportion":99.63
                    },
                    {
                        "name":"良好",
                        "value":6,
                        "proportion":96.11
                    },
                    {
                        "name":"及格",
                        "value":27,
                        "proportion":93.17
                    },
                    {
                        "name":"待提升",
                        "value":33,
                        "proportion":82.49
                    }
                ],
                "highMathChartData": [
                    {
                        "name":"优秀",
                        "value":4,
                        "proportion":99.72
                    },
                    {
                        "name":"良好",
                        "value":1,
                        "proportion":95.56
                    },
                    {
                        "name":"及格",
                        "value":30,
                        "proportion":93.85
                    },
                    {
                        "name":"待提升",
                        "value":29,
                        "proportion":81.88
                    }
                ], 
                "highEngChartData": [
                    {
                        "name":"优秀",
                        "value":8,
                        "proportion":99.86
                    },
                    {
                        "name":"良好",
                        "value":1,
                        "proportion":96.67
                    },
                    {
                        "name":"及格",
                        "value":28,
                        "proportion":93.49
                    },
                    {
                        "name":"待提升",
                        "value":41,
                        "proportion":85.15
                    }
                ], 
                "highSocChartData": [
                    {
                        "name":"优秀",
                        "value":17,
                        "proportion":99.61
                    },
                    {
                        "name":"良好",
                        "value":5,
                        "proportion":95.56
                    },
                    {
                        "name":"及格",
                        "value":73,
                        "proportion":93.41
                    },
                    {
                        "name":"待提升",
                        "value":40,
                        "proportion":85.31
                    }
                ], 
                "highSciChartData": [
                    {
                        "name":"优秀",
                        "value":2,
                        "proportion":100
                    },
                    {
                        "name":"良好",
                        "value":1,
                        "proportion":96.67
                    },
                    {
                        "name":"及格",
                        "value":11,
                        "proportion":92.22
                    },
                    {
                        "name":"待提升",
                        "value":28,
                        "proportion":84.25
                    }
                ], 
                "highArtChartData": [
                    {
                        "name":"优秀",
                        "value":2,
                        "proportion":100
                    },
                    {
                        "name":"良好",
                        "value":1,
                        "proportion":96.67
                    },
                    {
                        "name":"及格",
                        "value":9,
                        "proportion":93.58
                    },
                    {
                        "name":"待提升",
                        "value":93,
                        "proportion":81.35
                    }
                ], 
            },
            "averageScore": {
                "all": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":86
                        },
                        {
                            "name":"义务教育语文",
                            "value":79
                        },
                        {
                            "name":"义务教育数学",
                            "value":80
                        },
                        {
                            "name":"义务教育英语",
                            "value":81
                        },
                        {
                            "name":"义务教育艺体",
                            "value":82
                        },
                        {
                            "name":"义务教育社会",
                            "value":81
                        },
                        {
                            "name":"义务教育理工",
                            "value":79
                        },
                        {
                            "name":"高中教育语文",
                            "value":79
                        },
                        {
                            "name":"高中教育数学",
                            "value":79
                        },
                        {
                            "name":"高中教育英语",
                            "value":80
                        },
                        {
                            "name":"高中教育理工",
                            "value":82
                        },
                        {
                            "name":"高中教育艺体",
                            "value":78
                        },
                        {
                            "name":"高中教育社会",
                            "value":74
                        }
                    ]
                },
                "self": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":44
                        },
                        {
                            "name":"义务教育语文",
                            "value":37
                        },
                        {
                            "name":"义务教育数学",
                            "value":37
                        },
                        {
                            "name":"义务教育英语",
                            "value":37
                        },
                        {
                            "name":"义务教育艺体",
                            "value":39
                        },
                        {
                            "name":"义务教育社会",
                            "value":40
                        },
                        {
                            "name":"义务教育理工",
                            "value":37
                        },
                        {
                            "name":"高中教育语文",
                            "value":38
                        },
                        {
                            "name":"高中教育数学",
                            "value":38
                        },
                        {
                            "name":"高中教育英语",
                            "value":38
                        },
                        {
                            "name":"高中教育理工",
                            "value":39
                        },
                        {
                            "name":"高中教育艺体",
                            "value":36
                        },
                        {
                            "name":"高中教育社会",
                            "value":32
                        }
                    ]
                },
                "scene": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":42
                        },
                        {
                            "name":"义务教育语文",
                            "value":42
                        },
                        {
                            "name":"义务教育数学",
                            "value":42
                        },
                        {
                            "name":"义务教育英语",
                            "value":43
                        },
                        {
                            "name":"义务教育艺体",
                            "value":42
                        },
                        {
                            "name":"义务教育社会",
                            "value":41
                        },
                        {
                            "name":"义务教育理工",
                            "value":42
                        },
                        {
                            "name":"高中教育语文",
                            "value":41
                        },
                        {
                            "name":"高中教育数学",
                            "value":41
                        },
                        {
                            "name":"高中教育英语",
                            "value":42
                        },
                        {
                            "name":"高中教育理工",
                            "value":42
                        },
                        {
                            "name":"高中教育艺体",
                            "value":41
                        },
                        {
                            "name":"高中教育社会",
                            "value":41
                        }
                    ]
                }
            },
            "standardScore": { // 各个小的维度、标准差
                "self": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":2.28
                        },
                        {
                            "name":"义务教育语文",
                            "value":8.19
                        },
                        {
                            "name":"义务教育数学",
                            "value":5.36
                        },
                        {
                            "name":"义务教育英语",
                            "value":4.28
                        },
                        {
                            "name":"义务教育艺体",
                            "value":3.84
                        },
                        {
                            "name":"义务教育社会",
                            "value":5.73
                        },
                        {
                            "name":"义务教育理工",
                            "value":4.66
                        },
                        {
                            "name":"高中教育语文",
                            "value":5.21
                        },
                        {
                            "name":"高中教育数学",
                            "value":4.59
                        },
                        {
                            "name":"高中教育英语",
                            "value":5.4
                        },
                        {
                            "name":"高中教育理工",
                            "value":3.9
                        },
                        {
                            "name":"高中教育艺体",
                            "value":4.63
                        },
                        {
                            "name":"高中教育社会",
                            "value":4.95
                        }
                    ]
                },
                "scene": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":7.46
                        },
                        {
                            "name":"义务教育语文",
                            "value":3.87
                        },
                        {
                            "name":"义务教育数学",
                            "value":3.45
                        },
                        {
                            "name":"义务教育英语",
                            "value":5.98
                        },
                        {
                            "name":"义务教育艺体",
                            "value":3.94
                        },
                        {
                            "name":"义务教育社会",
                            "value":5.28
                        },
                        {
                            "name":"义务教育理工",
                            "value":4.87
                        },
                        {
                            "name":"高中教育语文",
                            "value":6.59
                        },
                        {
                            "name":"高中教育数学",
                            "value":5.97
                        },
                        {
                            "name":"高中教育英语",
                            "value":4.35
                        },
                        {
                            "name":"高中教育理工",
                            "value":3.95
                        },
                        {
                            "name":"高中教育艺体",
                            "value":4.67
                        },
                        {
                            "name":"高中教育社会",
                            "value":5.89
                        }
                    ]
                }
            },
            "minMaxSocre": {
                "self": {
                    "max": "义务教育英语", // 分数最高的学
                    "min": "高中教育数学", // 分数最低的学，相同分数的学都显示
                    "midMax": "学前教育, 义务教育语文, 义务教育数学, 义务教育英语, 义务教育艺体, 高中教育英语, 高中教育理工",
                    "midMin": "高中教育语文", 
                    "chartData": [{"name":"学前教育","min":27.0,"median":45.0,"average":42.58,"max":45.0},{"name":"义务教育语文","min":30.0,"median":45.0,"average":42.89,"max":45.0},{"name":"义务教育数学","min":34.0,"median":45.0,"average":42.63,"max":45.0},{"name":"义务教育英语","min":35.0,"median":45.0,"average":43.37,"max":45.0},{"name":"义务教育社会","min":29.0,"median":44.0,"average":41.65,"max":45.0},{"name":"义务教育理工","min":32.0,"median":44.0,"average":42.02,"max":45.0},{"name":"义务教育艺体","min":28.0,"median":45.0,"average":43.0,"max":45.0},{"name":"高中教育语文","min":32.0,"median":42.0,"average":41.26,"max":45.0},{"name":"高中教育数学","min":27.0,"median":44.0,"average":41.19,"max":45.0},{"name":"高中教育英语","min":29.0,"median":45.0,"average":42.42,"max":45.0},{"name":"高中教育社会","min":27.0,"median":44.5,"average":41.44,"max":45.0},{"name":"高中教育理工","min":34.0,"median":45.0,"average":42.76,"max":45.0},{"name":"高中教育艺体","min":36.0,"median":44.5,"average":41.98,"max":45.0}]
                },
                "scene": {
                    "max": "学前教育", // 分数最高的学
                    "min": "高中教育社会", // 分数最低的学，相同分数的学都显示
                    "midMax": "学前教育",
                    "midMin": "高中教育社会", 
                    "chartData": [{"name":"学前教育","min":30.0,"median":45.0,"average":44.32,"max":45.0},{"name":"义务教育语文","min":20.0,"median":35.0,"average":37.05,"max":45.0},{"name":"义务教育数学","min":10.0,"median":40.0,"average":37.43,"max":45.0},{"name":"义务教育英语","min":30.0,"median":40.0,"average":37.81,"max":45.0},{"name":"义务教育社会","min":25.0,"median":40.0,"average":40.31,"max":45.0},{"name":"义务教育理工","min":30.0,"median":40.0,"average":37.97,"max":45.0},{"name":"义务教育艺体","min":25.0,"median":40.0,"average":39.11,"max":45.0},{"name":"高中教育语文","min":25.0,"median":40.0,"average":38.48,"max":45.0},{"name":"高中教育数学","min":25.0,"median":40.0,"average":38.75,"max":45.0},{"name":"高中教育英语","min":25.0,"median":40.0,"average":38.4,"max":45.0},{"name":"高中教育社会","min":20.0,"median":30.0,"average":32.75,"max":40.0},{"name":"高中教育理工","min":20.0,"median":40.0,"average":39.93,"max":45.0},{"name":"高中教育艺体","min":30.0,"median":35.0,"average":36.67,"max":45.0}]
                }
            }
        },{
            "scoreRating": { //*** 自主发展维度得分率: 最低、最高、中位数、平均得分率
                "chartData": [ "88.67",
                "92.11",
                "86.00",
                "85.44",
                "90.15",
                "88.49",
                "91.23",
                "88.10",
                "90.34",
                "88.18",
                "88.08",
                "89.73",
                "85.71",
                "84.55"]
            },
            "eachScoreDistribution": { //*** 自主发展维度得分分布情况
                "tableData": [
                    {
                        "name":"学前教育",
                        "excellent":"13.69(75人)",
                        "good":"2.01(11人)",
                        "pass":"54.74(300人)",
                        "fail":"0(0人)"
                    },
                    {
                        "name":"义务教育语文",
                        "excellent":"1.15(5人)",
                        "good":"0(0人)",
                        "pass":"16.59(72人)",
                        "fail":"0(0人)"
                    },
                    {
                        "name":"义务教育数学",
                        "excellent":"0(0人)",
                        "good":"0.34(1人)",
                        "pass":"12.75(38人)",
                        "fail":"0(0人)"
                    },
                    {
                        "name":"义务教育英语",
                        "excellent":"8.10(17人)",
                        "good":"2.86(6人)",
                        "pass":"44.29(93人)",
                        "fail":"0(0人)"
                    },
                    {
                        "name":"义务教育艺体",
                        "excellent":"10.45(30人)",
                        "good":"0.35(1人)",
                        "pass":"31.01(89人)",
                        "fail":"0(0人)"
                    },
                    {
                        "name":"义务教育社会",
                        "excellent":"18.13(29人)",
                        "good":"1.88(3人)",
                        "pass":"41.25(66人)",
                        "fail":"0(0人)"
                    },
                    {
                        "name":"义务教育理工",
                        "excellent":"8.94(11人)",
                        "good":"0(0人)",
                        "pass":"26.02(32人)",
                        "fail":"0(0人)"
                    },
                    {
                        "name":"高中教育语文",
                        "excellent":"17.39(12人)",
                        "good":"5.80(4人)",
                        "pass":"30.43(21人)",
                        "fail":"0(0人)"
                    },
                    {
                        "name":"高中教育数学",
                        "excellent":"7.81(5人)",
                        "good":"0(0人)",
                        "pass":"42.19(27人)",
                        "fail":"0(0人)"
                    },
                    {
                        "name":"高中教育英语",
                        "excellent":"7.69(6人)",
                        "good":"1.28(1人)",
                        "pass":"30.77(24人)",
                        "fail":"0(0人)"
                    },
                    {
                        "name":"高中教育理工",
                        "excellent":"11.85(16人)",
                        "good":"0(0人)",
                        "pass":"37.78(51人)",
                        "fail":"0(0人)"
                    },
                    {
                        "name":"高中教育艺体",
                        "excellent":"0(0人)",
                        "good":"0(0人)",
                        "pass":"28.57(12人)",
                        "fail":"0(0人)"
                    },
                    {
                        "name":"高中教育社会",
                        "excellent":"0.98(1人)",
                        "good":"0(0人)",
                        "pass":"17.65(18人)",
                        "fail":"0(0人)"
                    }
                ],
                // 各、职业态度、value: 人  precent代表占比
                "allChartData": [
                    {
                        "name":"优秀",
                        "value":207,
                        "proportion":99.66
                    },
                    {
                        "name":"良好",
                        "value":27,
                        "proportion":95.88
                    },
                    {
                        "name":"及格",
                        "value":843,
                        "proportion":93.63
                    },
                    {
                        "name":"待提升",
                        "value":1473,
                        "proportion":84.15
                    }
                ],
                "childChartData": [
                    {
                        "name":"优秀",
                        "value":75,
                        "proportion":99.72
                    },
                    {
                        "name":"良好",
                        "value":11,
                        "proportion":95.96
                    },
                    {
                        "name":"及格",
                        "value":300,
                        "proportion":93.6
                    },
                    {
                        "name":"待提升",
                        "value":162,
                        "proportion":85.56
                    }
                ],
                "chnChartData": [
                    {
                        "name":"优秀",
                        "value":5,
                        "proportion":100
                    },
                    {
                        "name":"良好",
                        "value":5,
                        "proportion":100
                    },
                    {
                        "name":"及格",
                        "value":72,
                        "proportion":93.72
                    },
                    {
                        "name":"待提升",
                        "value":357,
                        "proportion":84.24
                    }
                ],
                "mathChartData": [
                    {
                        "name":"优秀",
                        "value":2,
                        "proportion":94.56
                    },
                    {
                        "name":"良好",
                        "value":1,
                        "proportion":95.56
                    },
                    {
                        "name":"及格",
                        "value":38,
                        "proportion":93.74
                    },
                    {
                        "name":"待提升",
                        "value":259,
                        "proportion":84.19
                    }
                ],
                "engChartData": [
                    {
                        "name":"优秀",
                        "value":17,
                        "proportion":99.54
                    },
                    {
                        "name":"良好",
                        "value":6,
                        "proportion":95.93
                    },
                    {
                        "name":"及格",
                        "value":93,
                        "proportion":93.38
                    },
                    {
                        "name":"待提升",
                        "value":94,
                        "proportion":84.88
                    }
                ],
                "socChartData": [
                    {
                        "name":"优秀",
                        "value":30,
                        "proportion":99.59
                    },
                    {
                        "name":"良好",
                        "value":1,
                        "proportion":96.67
                    },
                    {
                        "name":"及格",
                        "value":89,
                        "proportion":93.93
                    },
                    {
                        "name":"待提升",
                        "value":167,
                        "proportion":83.55
                    }
                ],
                "sciChartData": [
                    {
                        "name":"优秀",
                        "value":29,
                        "proportion":99.54
                    },
                    {
                        "name":"良好",
                        "value":3,
                        "proportion":95.93
                    },
                    {
                        "name":"及格",
                        "value":66,
                        "proportion":93.5
                    },
                    {
                        "name":"待提升",
                        "value":62,
                        "proportion":84.7
                    }
                ],
                "artChartData": [
                    {
                        "name":"优秀",
                        "value":11,
                        "proportion":99.49
                    },
                    {
                        "name":"良好",
                        "value":11,
                        "proportion":99.49
                    },
                    {
                        "name":"及格",
                        "value":32,
                        "proportion":94.03
                    },
                    {
                        "name":"待提升",
                        "value":80,
                        "proportion":84.17
                    }
                ],
                "highChnChartData": [
                    {
                        "name":"优秀",
                        "value":12,
                        "proportion":99.91
                    },
                    {
                        "name":"良好",
                        "value":4,
                        "proportion":95.56
                    },
                    {
                        "name":"及格",
                        "value":21,
                        "proportion":93.28
                    },
                    {
                        "name":"待提升",
                        "value":32,
                        "proportion":84.17
                    }
                ],
                "highMathChartData": [
                    {
                        "name":"优秀",
                        "value":5,
                        "proportion":99.56
                    },
                    {
                        "name":"良好",
                        "value":5,
                        "proportion":99.56
                    },
                    {
                        "name":"及格",
                        "value":27,
                        "proportion":93.42
                    },
                    {
                        "name":"待提升",
                        "value":32,
                        "proportion":81.98
                    }
                ], 
                "highEngChartData": [
                    {
                        "name":"优秀",
                        "value":6,
                        "proportion":99.81
                    },
                    {
                        "name":"良好",
                        "value":1,
                        "proportion":95.56
                    },
                    {
                        "name":"及格",
                        "value":24,
                        "proportion":93.89
                    },
                    {
                        "name":"待提升",
                        "value":47,
                        "proportion":83.45
                    }
                ], 
                "highSocChartData": [
                    {
                        "name":"优秀",
                        "value":16,
                        "proportion":99.58
                    },
                    {
                        "name":"良好",
                        "value":16,
                        "proportion":99.58
                    },
                    {
                        "name":"及格",
                        "value":51,
                        "proportion":93.51
                    },
                    {
                        "name":"待提升",
                        "value":68,
                        "proportion":84.58
                    }
                ], 
                "highSciChartData": [
                    {
                        "name":"及格",
                        "value":12,
                        "proportion":93.89
                    },
                    {
                        "name":"待提升",
                        "value":30,
                        "proportion":82.44
                    },
                    {
                        "name":"优秀",
                        "value":12,
                        "proportion":93.89
                    },
                    {
                        "name":"良好",
                        "value":30,
                        "proportion":82.44
                    }
                ], 
                "highArtChartData": [
                    {
                        "name":"优秀",
                        "value":1,
                        "proportion":100
                    },
                    {
                        "name":"良好",
                        "value":1,
                        "proportion":100
                    },
                    {
                        "name":"及格",
                        "value":18,
                        "proportion":93.7
                    },
                    {
                        "name":"待提升",
                        "value":83,
                        "proportion":82.38
                    }
                ], 
            },
            "averageScore": {
                "all": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":82
                        },
                        {
                            "name":"义务教育语文",
                            "value":77
                        },
                        {
                            "name":"义务教育数学",
                            "value":76
                        },
                        {
                            "name":"义务教育英语",
                            "value":81
                        },
                        {
                            "name":"义务教育艺体",
                            "value":79
                        },
                        {
                            "name":"义务教育社会",
                            "value":82
                        },
                        {
                            "name":"义务教育理工",
                            "value":79
                        },
                        {
                            "name":"高中教育语文",
                            "value":81
                        },
                        {
                            "name":"高中教育数学",
                            "value":79
                        },
                        {
                            "name":"高中教育英语",
                            "value":79
                        },
                        {
                            "name":"高中教育理工",
                            "value":80
                        },
                        {
                            "name":"高中教育艺体",
                            "value":77
                        },
                        {
                            "name":"高中教育社会",
                            "value":76
                        }
                    ]
                },
                "self": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":41
                        },
                        {
                            "name":"义务教育语文",
                            "value":35
                        },
                        {
                            "name":"义务教育数学",
                            "value":35
                        },
                        {
                            "name":"义务教育英语",
                            "value":39
                        },
                        {
                            "name":"义务教育艺体",
                            "value":37
                        },
                        {
                            "name":"义务教育社会",
                            "value":40
                        },
                        {
                            "name":"义务教育理工",
                            "value":38
                        },
                        {
                            "name":"高中教育语文",
                            "value":40
                        },
                        {
                            "name":"高中教育数学",
                            "value":39
                        },
                        {
                            "name":"高中教育英语",
                            "value":37
                        },
                        {
                            "name":"高中教育理工",
                            "value":38
                        },
                        {
                            "name":"高中教育艺体",
                            "value":35
                        },
                        {
                            "name":"高中教育社会",
                            "value":34
                        }
                    ]
                },
                "scene": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":41
                        },
                        {
                            "name":"义务教育语文",
                            "value":42
                        },
                        {
                            "name":"义务教育数学",
                            "value":41
                        },
                        {
                            "name":"义务教育英语",
                            "value":42
                        },
                        {
                            "name":"义务教育艺体",
                            "value":42
                        },
                        {
                            "name":"义务教育社会",
                            "value":41
                        },
                        {
                            "name":"义务教育理工",
                            "value":41
                        },
                        {
                            "name":"高中教育语文",
                            "value":40
                        },
                        {
                            "name":"高中教育数学",
                            "value":40
                        },
                        {
                            "name":"高中教育英语",
                            "value":41
                        },
                        {
                            "name":"高中教育理工",
                            "value":42
                        },
                        {
                            "name":"高中教育艺体",
                            "value":41
                        },
                        {
                            "name":"高中教育社会",
                            "value":41
                        }
                    ]
                }
            },
            "standardScore": { // 各个小的维度、标准差
                "self": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":2.68
                        },
                        {
                            "name":"义务教育语文",
                            "value":4.1
                        },
                        {
                            "name":"义务教育数学",
                            "value":3.24
                        },
                        {
                            "name":"义务教育英语",
                            "value":4.17
                        },
                        {
                            "name":"义务教育艺体",
                            "value":5.71
                        },
                        {
                            "name":"义务教育社会",
                            "value":3.4
                        },
                        {
                            "name":"义务教育理工",
                            "value":4.81
                        },
                        {
                            "name":"高中教育语文",
                            "value":6.31
                        },
                        {
                            "name":"高中教育数学",
                            "value":4.38
                        },
                        {
                            "name":"高中教育英语",
                            "value":4.9
                        },
                        {
                            "name":"高中教育理工",
                            "value":7.75
                        },
                        {
                            "name":"高中教育艺体",
                            "value":6.5
                        },
                        {
                            "name":"高中教育社会",
                            "value":5.02
                        }
                    ]
                },
                "scene": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "义务教育英语", // 分数最低的学，相同分数的学都显示
                    "chartData": [
                        {
                            "name":"学前教育",
                            "value":8
                        },
                        {
                            "name":"义务教育语文",
                            "value":4.88
                        },
                        {
                            "name":"义务教育数学",
                            "value":4.75
                        },
                        {
                            "name":"义务教育英语",
                            "value":7.19
                        },
                        {
                            "name":"义务教育艺体",
                            "value":4.47
                        },
                        {
                            "name":"义务教育社会",
                            "value":5.81
                        },
                        {
                            "name":"义务教育理工",
                            "value":6.88
                        },
                        {
                            "name":"高中教育语文",
                            "value":6.53
                        },
                        {
                            "name":"高中教育数学",
                            "value":6.68
                        },
                        {
                            "name":"高中教育英语",
                            "value":9.61
                        },
                        {
                            "name":"高中教育理工",
                            "value":4.61
                        },
                        {
                            "name":"高中教育艺体",
                            "value":5.4
                        },
                        {
                            "name":"高中教育社会",
                            "value":6.31
                        }
                    ]
                }
            },
            "minMaxSocre": {
                "self": {
                    "max": "义务教育艺体", // 分数最高的学
                    "min": "高中教育数学", // 分数最低的学，相同分数的学都显示
                    "midMax": "义务教育语文, 义务教育艺体, 高中教育英语, 高中教育艺体",
                    "midMin": "高中教育语文", 
                    "chartData": [{"name":"学前教育","min":25.0,"median":44.0,"average":41.89,"max":45.0},{"name":"义务教育语文","min":28.0,"median":45.0,"average":42.03,"max":45.0},{"name":"义务教育数学","min":27.0,"median":44.0,"average":41.65,"max":45.0},{"name":"义务教育英语","min":28.0,"median":44.0,"average":42.13,"max":45.0},{"name":"义务教育社会","min":28.0,"median":43.0,"average":41.23,"max":45.0},{"name":"义务教育理工","min":28.0,"median":44.0,"average":41.04,"max":45.0},{"name":"义务教育艺体","min":28.0,"median":45.0,"average":42.62,"max":45.0},{"name":"高中教育语文","min":29.0,"median":41.0,"average":40.65,"max":45.0},{"name":"高中教育数学","min":26.0,"median":42.0,"average":40.06,"max":45.0},{"name":"高中教育英语","min":26.0,"median":45.0,"average":41.38,"max":45.0},{"name":"高中教育社会","min":27.0,"median":44.5,"average":41.54,"max":45.0},{"name":"高中教育理工","min":32.0,"median":44.0,"average":42.13,"max":45.0},{"name":"高中教育艺体","min":30.0,"median":45.0,"average":41.55,"max":45.0}]
                },
                "scene": {
                    "max": "学前教育", // 分数最高的学
                    "min": "高中教育社会", // 分数最低的学，相同分数的学都显示
                    "midMax": "学前教育, 义务教育英语, 义务教育社会, 义务教育理工, 义务教育艺体, 高中教育语文, 高中教育数学, 高中教育英语, 高中教育理工",
                    "midMin": "义务教育语文, 义务教育数学, 高中教育社会, 高中教育艺体", 
                    "chartData": [{"name":"学前教育","min":30.0,"median":40.0,"average":41.0,"max":45.0},{"name":"义务教育语文","min":20.0,"median":35.0,"average":35.37,"max":45.0},{"name":"义务教育数学","min":25.0,"median":35.0,"average":35.25,"max":45.0},{"name":"义务教育英语","min":25.0,"median":40.0,"average":39.0,"max":45.0},{"name":"义务教育社会","min":25.0,"median":40.0,"average":40.88,"max":45.0},{"name":"义务教育理工","min":30.0,"median":40.0,"average":38.25,"max":45.0},{"name":"义务教育艺体","min":25.0,"median":40.0,"average":37.02,"max":45.0},{"name":"高中教育语文","min":30.0,"median":40.0,"average":40.65,"max":45.0},{"name":"高中教育数学","min":25.0,"median":40.0,"average":39.3,"max":45.0},{"name":"高中教育英语","min":30.0,"median":40.0,"average":37.88,"max":45.0},{"name":"高中教育社会","min":25.0,"median":35.0,"average":34.56,"max":45.0},{"name":"高中教育理工","min":15.0,"median":40.0,"average":38.63,"max":45.0},{"name":"高中教育艺体","min":25.0,"median":35.0,"average":35.6,"max":45.0}]
                }
            }
        }
    ]
}