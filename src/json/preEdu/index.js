export const data = {
    "allResult": {
        "allScoreRating": { //***整体得分率(分数/对应的总分)
            "chartData": [{
                "name": "学前教育学科",
                "min": 10.37,
                "median": 10,
                "average": 12,
                "max": 30,
              },]
        },
        "scoreDistribution": { // 学前教育学段总体分布情况
            "chartData": [
                { "value": 20.33, "name": "优秀", precent: "40%" },
                { "value": 19.25, "name": "良好", precent: "38%" },
                { "value": 30.33, "name": "及格", precent: "32%" },
                { "value": 30.22, "name": "不及格", precent: "30%" },
            ]
        },
        "minMaxScore": { //***学前教育学段最高分、最低分、平均分、中位数、标准差
            "all": {
                "chartData": [{
                    "name": "学前教育学科",
                    "min": 60,
                    "median": 80,
                    "average": 90,
                    "max": 100,
                }]
            },
            "self": {
                "chartData": [{
                    "name": "自陈问题",
                    "min": 60,
                    "median": 80,
                    "average": 90,
                    "max": 100,
                }]
            },
            "secene": {
                "chartData": [{
                    "name": "情景问题",
                    "min": 60,
                    "median": 80,
                    "average": 90,
                    "max": 100,
                }]
            },
        },
        "standradScore": {
            "chartData": [
            { "value": 40, "name": "自陈问题" },
            { "value": 38, "name": "情景问题" },
        ]
        },
        "dimensionRating": { //***学前教育学段各维度得分率
            "chartData": [
                {"name": '整体', "value": '80'},
                {"name": '职业态度', "value": '30'},
                {"name": '教学实践', "value": '40'},
                {"name": '综合育人', "value": '20'},
                {"name": '自主发展', "value": '40'},
            ],
            "tableData": [
                {"name": '学前教育', "all":"80", "attitude": '30',"practice": '40',"comprehensive": '20',"development": '40',},
            ]
        },
        "eachScoreDistribution": { //*** 各维度得分分布情况
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