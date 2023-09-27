// 义务教育JSON数据
export const data = {
    "allResult": {
        "allScoreRating": { //***整体得分率(分数/对应的总分)
            "chartData": [
                {"name": "义务教务语文学科", "value":"20"},
                {"name": "义务教务数学学科", "value":"30"},
                {"name": "义务教务英语学科", "value":"40"},
                {"name": "义务教务社会学科", "value":"50"},
                {"name": "义务教务理工学科", "value":"20"},
                {"name": "义务教务艺体学科", "value":"20"},
            ]
        },
        "scoreDistribution": { // 义务教育学段所有老师总体分布情况
            "chartData": [
                { "value": 20.33, "name": "优秀", precent: "40%" },
                { "value": 19.25, "name": "良好", precent: "38%" },
                { "value": 30.33, "name": "及格", precent: "32%" },
                { "value": 30.22, "name": "不及格", precent: "30%" },
            ]
        },
        "subjectScoreDistribution":{  // 6个学科 各个学科的老师占比
            "chnChartData": [
                {name: '优秀', value: '200', precent: '20%'},
                {name: '良好', value: '120', precent: '20%'},
                {name: '及格', value: '30', precent: '20%'},
                {name: '不及格', value: '400', precent: '20%'}
            ],
            "mathChartData": [
                {name: '优秀', value: '200', precent: '20%'},
                {name: '良好', value: '120', precent: '20%'},
                {name: '及格', value: '30', precent: '20%'},
                {name: '不及格', value: '400', precent: '20%'}
            ],
            "engChartData": [
                {name: '优秀', value: '200', precent: '20%'},
                {name: '良好', value: '120', precent: '20%'},
                {name: '及格', value: '30', precent: '20%'},
                {name: '不及格', value: '400', precent: '20%'}
            ],
            "socChartData": [
                {name: '优秀', value: '200', precent: '20%'},
                {name: '良好', value: '120', precent: '20%'},
                {name: '及格', value: '30', precent: '20%'},
                {name: '不及格', value: '400', precent: '20%'}
            ],
            "sciChartData": [
                {name: '优秀', value: '200', precent: '20%'},
                {name: '良好', value: '120', precent: '20%'},
                {name: '及格', value: '30', precent: '20%'},
                {name: '不及格', value: '400', precent: '20%'}
            ],
            "artChartData": [
                {name: '优秀', value: '200', precent: '20%'},
                {name: '良好', value: '120', precent: '20%'},
                {name: '及格', value: '30', precent: '20%'},
                {name: '不及格', value: '400', precent: '20%'}
            ],
        },
        "minMaxScore": { //***义务教育学段平均分、自陈问题、情景问题平均分
            "all": {
                // 如有多个学科分数相同请用,隔开
                "max": "义务教育语文学科",
                "min": "义务教育数学学科,义务教育英语学科",
                "chartData": [
                    {"name": "义务教务语文学科", "value":"20"},
                    {"name": "义务教务数学学科", "value":"30"},
                    {"name": "义务教务英语学科", "value":"40"},
                    {"name": "义务教务社会学科", "value":"50"},
                    {"name": "义务教务理工学科", "value":"20"},
                    {"name": "义务教务艺体学科", "value":"20"}
                ]
            },
            "self": {
                "max": "义务教育语文学科,义务教育艺体学科",
                "min": "义务教育数学学科",
                "chartData": [
                    {"name": "义务教务语文学科", "value":"20"},
                    {"name": "义务教务数学学科", "value":"30"},
                    {"name": "义务教务英语学科", "value":"40"},
                    {"name": "义务教务社会学科", "value":"50"},
                    {"name": "义务教务理工学科", "value":"20"},
                    {"name": "义务教务艺体学科", "value":"20"}
                ]
            },
            "scene": {
                "max": "义务教育语文学科",
                "min": "义务教育数学学科",
                "chartData": [
                    {"name": "义务教务语文学科", "value":"20"},
                    {"name": "义务教务数学学科", "value":"30"},
                    {"name": "义务教务英语学科", "value":"40"},
                    {"name": "义务教务社会学科", "value":"50"},
                    {"name": "义务教务理工学科", "value":"20"},
                    {"name": "义务教务艺体学科", "value":"20"}
                ]
            },
        },
        "standradScore": { // 义务教育、各学科、标准差、最大值的学科、最小值的学科
            "self":{ // 义务教育、自陈问题标准差
                "max": "义务教育语文学科,义务教育数学学科",
                "min": "义务教育英语学科",
                "chartData": [
                    {"name":"义务教育语文学科", "value": "100"},
                    {"name":"义务教育数学学科", "value": "20"},
                    {"name":"义务教育英语学科", "value": "32"},
                    {"name":"义务教育社会学科", "value": "40"},
                    {"name":"义务教育理工学科", "value": "10"},
                    {"name":"义务教育艺体学科", "value": "40"},
                ]
            },
            "scene":{ // 义务教育、情景问题标准差、最大值的学科、最小值的学科
                "max": "义务教育语文学科,义务教育数学学科",
                "min": "义务教育英语学科",
                "chartData": [
                    {"name":"义务教育语文学科", "value": "60"},
                    {"name":"义务教育数学学科", "value": "23"},
                    {"name":"义务教育英语学科", "value": "44"},
                    {"name":"义务教育社会学科", "value": "30"},
                    {"name":"义务教育理工学科", "value": "40"},
                    {"name":"义务教育艺体学科", "value": "10"},
                ]
            },
        },
        "midMaxMinSceneAndSelf":{ // 义务教育、各学科、中位数、最大数、最小数
            // midMax: 中位数最大的学科、midMin中位数最小的学科 min: 最小分学科 max: 最大分学科
            "self": {
                "midMax": "义务教育语文,义务教育数学",
                "midMin": "义务教育英语,义务教育艺体",
                "min": "义务教育英语",
                "max": "义务教育艺体",
                "chartData": [
                    { "name": "义务教育语文", "min": 20.37, "median": 40, "average": 12, "max": 30,},
                    { "name": "义务教育数学", "min": 30.37, "median": 40, "average": 12, "max": 30,},
                    { "name": "义务教育英语", "min": 40.37, "median": 40, "average": 12, "max": 30,},
                    { "name": "义务教育社会", "min": 10.37, "median": 40, "average": 12, "max": 30,},
                    { "name": "义务教育理工", "min": 10.37, "median": 40, "average": 12, "max": 30,},
                    { "name": "义务教育艺体", "min": 10.37, "median": 40, "average": 12, "max": 30,},
                ]
            },
            // midMax: 中位数最大的学科、midMin中位数最小的学科 min: 最小分学科 max: 最大分学科
            "scene": {
                "midMax": "义务教育语文,义务教育数学",
                "midMin": "义务教育英语,义务教育艺体",
                "min": "义务教育数学",
                "max": "义务教育英语",
                "chartData": [
                    { "name": "义务教育语文", "min": 20.37, "median": 40, "average": 12, "max": 30,},
                    { "name": "义务教育数学", "min": 30.37, "median": 40, "average": 12, "max": 30,},
                    { "name": "义务教育英语", "min": 40.37, "median": 40, "average": 12, "max": 30,},
                    { "name": "义务教育社会", "min": 10.37, "median": 40, "average": 12, "max": 30,},
                    { "name": "义务教育理工", "min": 10.37, "median": 40, "average": 12, "max": 30,},
                    { "name": "义务教育艺体", "min": 10.37, "median": 40, "average": 12, "max": 30,},
                ]
            },
        },
        "dimensionRating": { //***义务教育学段各维度得分率
                "chnChartData": [ // 义务教育、语文、各维度得分率
                    {name: '整体得分率', value: '24.32'},
                    {name: '职业态度', value: '34.33'},
                    {name: '教学实践', value: '42.44'},
                    {name: '综合育人', value: '24.55'},
                    {name: '自主发展', value: '62.55'}
                ],
                "mathChartData":  [ // 义务教育、数学、各维度得分率
                {name: '整体得分率', value: '44.33'},
                {name: '职业态度', value: '34.22'},
                {name: '教学实践', value: '42.11'},
                {name: '综合育人', value: '24.23'},
                {name: '自主发展', value: '62.43'}
            ],
            "engChartData":  [ // 义务教育、英语、各维度得分率
                {name: '整体得分率', value: '44'},
                {name: '职业态度', value: '34'},
                {name: '教学时间', value: '42'},
                {name: '综合育人', value: '24'},
                {name: '自主发展', value: '62'}
            ],
            "socChartData":  [ // 义务教育、社会、各维度得分率
                {name: '整体得分率', value: '44'},
                {name: '职业态度', value: '34'},
                {name: '教学实践', value: '42'},
                {name: '综合育人', value: '24'},
                {name: '自主发展', value: '62'}
            ],
            "sciChartData":  [ // 义务教育、理工、各维度得分率
                {name: '整体得分率', value: '44'},
                {name: '职业态度', value: '34'},
                {name: '教学实践', value: '42'},
                {name: '综合育人', value: '24'},
                {name: '自主发展', value: '62'}
            ],
            "artChartData":  [ // 义务教育、艺体、各维度得分率
                {name: '整体得分率', value: '44'},
                {name: '职业态度', value: '34'},
                {name: '教学实践', value: '42'},
                {name: '综合育人', value: '24'},
                {name: '自主发展', value: '62'}
                ],
            "tableData": [
                {"name": '义务教育语文科', "all":"80", "attitude": '30',"practice": '40',"comprehensive": '20',"development": '40',},
                {"name": '义务教育数学科', "all":"80", "attitude": '30',"practice": '40',"comprehensive": '20',"development": '40',},
                {"name": '义务教育英语科', "all":"80", "attitude": '30',"practice": '40',"comprehensive": '20',"development": '40',},
                {"name": '义务教育社会科', "all":"80", "attitude": '30',"practice": '40',"comprehensive": '20',"development": '40',},
                {"name": '义务教育理工科', "all":"80", "attitude": '30',"practice": '40',"comprehensive": '20',"development": '40',},
                {"name": '义务教育艺体科', "all":"80", "attitude": '30',"practice": '40',"comprehensive": '20',"development": '40',},
            
            ]
        },
        "eachScoreDistribution": { //*** 各维度得分分布情况
            // 各学科、各维度、得分分布情况
            "chn": {
                "attitude": { // 教学态度 标准: 58 57 54 54
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
                            name: '不及格', value: '50', precent: '70%',
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
                            name: '不及格', value: '60', precent: '71%',
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
                            name: '不及格', value: '51', precent: '74%',
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
                            name: '不及格', value: '55', precent: '70%',
                        }
                    ]
                }

            },
            "math": {
                "attitude": { // 教学态度 标准: 58 57 54 54
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
                            name: '不及格', value: '50', precent: '70%',
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
                            name: '不及格', value: '60', precent: '71%',
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
                            name: '不及格', value: '51', precent: '74%',
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
                            name: '不及格', value: '55', precent: '70%',
                        }
                    ]
                }
            },
            "eng": {
                "attitude": { // 教学态度 标准: 58 57 54 54
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
                            name: '不及格', value: '50', precent: '70%',
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
                            name: '不及格', value: '60', precent: '71%',
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
                            name: '不及格', value: '51', precent: '74%',
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
                            name: '不及格', value: '55', precent: '70%',
                        }
                    ]
                }
            },
            "soc": {
                "attitude": { // 教学态度 标准: 58 57 54 54
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
                            name: '不及格', value: '50', precent: '70%',
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
                            name: '不及格', value: '60', precent: '71%',
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
                            name: '不及格', value: '51', precent: '74%',
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
                            name: '不及格', value: '55', precent: '70%',
                        }
                    ]
                }
            },
            "sci": {
                "attitude": { // 教学态度 标准: 58 57 54 54
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
                            name: '不及格', value: '50', precent: '70%',
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
                            name: '不及格', value: '60', precent: '71%',
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
                            name: '不及格', value: '51', precent: '74%',
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
                            name: '不及格', value: '55', precent: '70%',
                        }
                    ]
                }
            },
            "art": {
                "attitude": { // 教学态度 标准: 58 57 54 54
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
                            name: '不及格', value: '50', precent: '70%',
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
                            name: '不及格', value: '60', precent: '71%',
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
                            name: '不及格', value: '51', precent: '74%',
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
                            name: '不及格', value: '55', precent: '70%',
                        }
                    ]
                }
            },
            
        }
    },
    "modules": [
        {
            "scoreRating": { //*** 职业态度维度得分率: 最低、最高、中位数、平均得分率
                "chartData": [{
                    "name": "职业态度维度",
                    "min": 10.37,
                    "median": 10,
                    "average": 12,
                    "max": 30,
                  },]
            },
            "eachScoreDistribution": { //*** 职业态度维度得分分布情况
                "tableData": [
                    {
                        "name": "职业态度",
                        "excellent": "20%(200人)",
                        "good": "30%(300人)",
                        "pass": "40%(400人)",
                        "fail": "50%(500人)",
                    }
                ],
                "chartData": [
                    {"name": '优秀', "value": '20',  "precent": '40%',},
                    {"name": '良好', "value": '30',  "precent": '50%',},
                    {"name": '及格', "value": '40',  "precent": '60%',},
                    {"name": '不及格'," value": '50', "precent": '70%',}
                ]
            },
            "averageScore": {
                "all": {
                    "chartData": [{"name": "职业态度平均分", "value": "100"}]
                },
                "selfAndSecene": {
                    "chartData": [
                        {"name": "自陈问题", "value": "20"},
                        {"name": "情景问题", "value": "20"},
                    ]
                }
            },
            "standardScore": {
                "chartData": [
                    {"name":"自陈问题标准差", "value":"200"},
                    {"name":"情景问题标准差", "value":"100"},
                ]
            },
            "minMaxSocre": {
                "chartData": [{
                    "name": "职业态度分数",
                    "min": 10.37,
                    "median": 10,
                    "average": 12,
                    "max": 30,
                  },]
            }
        },{
            "scoreRating": { //*** 教学实践维度得分率: 最低、最高、中位数、平均得分率
                "chartData": [{
                    "name": "教学实践维度",
                    "min": 10.37,
                    "median": 10,
                    "average": 12,
                    "max": 30,
                  }]
            },
            "eachScoreDistribution": { //*** 职业态度维度得分分布情况
                "tableData": [
                    {
                        "name": "教学实践",
                        "excellent": "20%(200人)",
                        "good": "40%(300人)",
                        "pass": "40%(400人)",
                        "fail": "50%(500人)",
                    }
                ],
                "chartData": [
                    {"name": '优秀', "value": '20',  "precent": '40%',},
                    {"name": '良好', "value": '30',  "precent": '50%',},
                    {"name": '及格', "value": '40',  "precent": '60%',},
                    {"name": '不及格'," value": '50', "precent": '70%',}
                ]
            },
            "averageScore": {
                "all": {
                    "chartData": [{"name": "教学实践平均分", "value": "100"}]
                },
                "selfAndSecene": {
                    "chartData": [
                        {"name": "自陈问题", "value": "20"},
                        {"name": "情景问题", "value": "20"},
                    ]
                }
            },
            "standardScore": {
                "chartData": [
                    {"name":"自陈问题标准差", "value":"200"},
                    {"name":"情景问题标准差", "value":"100"},
                ]
            },
            "minMaxSocre": {
                "chartData": [{
                    "name": "教学实践分数",
                    "min": 10.37,
                    "median": 10,
                    "average": 12,
                    "max": 30,
                  },]
            }
        },{
            "scoreRating": { //*** 综合育人维度得分率: 最低、最高、中位数、平均得分率
                "chartData": [{
                    "name": "综合育人维度",
                    "min": 10.37,
                    "median": 10,
                    "average": 12,
                    "max": 30,
                  }]
            },
            "eachScoreDistribution": { //*** 综合育人维度得分分布情况
                "tableData": [
                    {
                        "name": "综合育人",
                        "excellent": "20%(200人)",
                        "good": "30%(300人)",
                        "pass": "40%(400人)",
                        "fail": "50%(500人)",
                    }
                ],
                "chartData": [
                    {"name": '优秀', "value": '20',  "precent": '40%',},
                    {"name": '良好', "value": '30',  "precent": '50%',},
                    {"name": '及格', "value": '40',  "precent": '60%',},
                    {"name": '不及格'," value": '50', "precent": '70%',}
                ]
            },
            "averageScore": {
                "all": {
                    "chartData": [{"name": "综合育人平均分", "value": "100"}]
                },
                "selfAndSecene": {
                    "chartData": [
                        {"name": "自陈问题", "value": "20"},
                        {"name": "情景问题", "value": "20"},
                    ]
                }
            },
            "standardScore": {
                "chartData": [
                    {"name":"自陈问题标准差", "value":"200"},
                    {"name":"情景问题标准差", "value":"100"},
                ]
            },
            "minMaxSocre": {
                "chartData": [{
                    "name": "综合育人分数",
                    "min": 10.37,
                    "median": 10,
                    "average": 12,
                    "max": 30,
                  },]
            }
        },{
            "scoreRating": { //*** 自主发展维度得分率: 最低、最高、中位数、平均得分率
                "chartData": [{
                    "name": "自主发展维度",
                    "min": 20.37,
                    "median": 40,
                    "average": 32,
                    "max": 60,
                  }]
            },
            "eachScoreDistribution": { //*** 自主发展维度得分分布情况
                "tableData": [
                    {
                        "name": "自主发展",
                        "excellent": "20%(200人)",
                        "good": "30%(300人)",
                        "pass": "40%(400人)",
                        "fail": "50%(500人)",
                    }
                ],
                "chartData": [
                    {"name": '优秀', "value": '20',  "precent": '40%',},
                    {"name": '良好', "value": '30',  "precent": '50%',},
                    {"name": '及格', "value": '40',  "precent": '60%',},
                    {"name": '不及格'," value": '50', "precent": '70%',}
                ]
            },
            "averageScore": {
                "all": {
                    "chartData": [{"name": "自主发展平均分", "value": "100"}]
                },
                "selfAndSecene": {
                    "chartData": [
                        {"name": "自陈问题", "value": "20"},
                        {"name": "情景问题", "value": "20"},
                    ]
                }
            },
            "standardScore": {
                "chartData": [
                    {"name":"自陈问题标准差", "value":"200"},
                    {"name":"情景问题标准差", "value":"100"},
                ]
            },
            "minMaxSocre": {
                "chartData": [{
                    "name": "自主发展分数",
                    "min": 10.37,
                    "median": 10,
                    "average": 12,
                    "max": 30,
                  },]
            }
        }
    ]
}