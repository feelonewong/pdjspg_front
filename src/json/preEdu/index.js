export const data = {
    "allResult": {
      "allScoreRating": {
        "chartData": [
          {
            "name": "学前教育",
            "min": 80.56,
            "median": 95.83,
            "average": 95.1,
            "max": 100.0
          }
        ]
      },
      "scoreDistribution": {
        "chartData": [
          {
            "name": "优秀",
            "value": 153,
            "precent": "27.92"
          },
          {
            "name": "良好",
            "value": 153,
            "precent": "27.92"
          },
          {
            "name": "及格",
            "value": 176,
            "precent": "32.12"
          },
          {
            "name": "待提升",
            "value": 66,
            "precent": "12.04"
          }
        ]
      },
      "minMaxScore": {
        "all": {
          "chartData": [
            {
              "name": "学前教育",
              "min": 290.0,
              "median": 345.0,
              "average": 342.35,
              "max": 360.0
            }
          ]
        },
        "self": {
          "chartData": [
            {
              "name": "自陈问题",
              "min": 116.0,
              "median": 177.0,
              "average": 170.51,
              "max": 180.0
            }
          ]
        },
        "secene": {
          "chartData": [
            {
              "name": "情景问题",
              "min": 115.0,
              "median": 175.0,
              "average": 171.83,
              "max": 180.0
            }
          ]
        }
      },
      "standradScore": {
              "chartData": [
              { "value": 12.41, "name": "自陈问题" },
              { "value": 6.7, "name": "情景问题" },
          ]
      },
      "dimensionRating": { //***学前教育学段各维度得分率
              "chartData": [
                  {"name": '整体', "value": '95.10'},
                  {"name": '职业态度', "value": '96.48'},
                  {"name": '教学实践', "value": '95.55'},
                  {"name": '综合育人', "value": '96.57'},
                  {"name": '自主发展', "value": '92.11'},
              ],
              "tableData": [
                  {"name": '学前教育', "all":'95.10%', "attitude": '96.48%',"practice": '95.55%',"comprehensive": '96.57%',"development": '92.11%',},
              ]
      },
      "eachScoreDistribution": { //*** 各维度得分分布情况
              "attitude": { // 职业态度 标准: 58 57 54 54
                  "chartData": [
                    {
                      "name": "优秀",
                      "value": '344',
                      "precent": "62.77"
                    },
                    {
                      "name": "良好",
                      "value": '4',
                      "precent": "0.73"
                    },
                    {
                      "name": "及格",
                      "value": '181',
                      "precent": "33.03"
                    },
                    {
                      "name": "待提升",
                      "value": '19',
                      "precent": "3.47"
                    }
                  ]
              },
              "practice": { // 教学实践 标准: 116 114 108 108
                  "chartData": [
                    {
                      "name": "优秀",
                      "value": '270',
                      "precent": "49.27"
                    },
                    {
                      "name": "良好",
                      "value": '91',
                      "precent": "16.61"
                    },
                    {
                      "name": "及格",
                      "value": '128',
                      "precent": "23.36"
                    },
                    {
                      "name": "待提升",
                      "value": '59',
                      "precent": "10.77"
                    }
                  ]
              },
              "comprehensive": { // 教学实践 标准:88 86 81 81
                  "chartData": [
                    {
                      "name": "优秀",
                      "value": '327',
                      "precent": "59.67"
                    },
                    {
                      "name": "良好",
                      "value": '54',
                      "precent": "9.85"
                    },
                    {
                      "name": "及格",
                      "value": '122',
                      "precent": "22.26"
                    },
                    {
                      "name": "待提升",
                      "value": '45',
                      "precent": "8.21"
                    }
                  ]
              },
              "development": { // 自主发展 标准:88 86 81 81
                  "chartData": [
                    {
                      "name": "优秀",
                      "value": '75',
                      "precent": "13.69"
                    },
                    {
                      "name": "良好",
                      "value": '11',
                      "precent": "2.01"
                    },
                    {
                      "name": "及格",
                      "value": '300',
                      "precent": "54.74"
                    },
                    {
                      "name": "待提升",
                      "value": '162',
                      "precent": "29.56"
                    }
                  ]
              }
          },
    },
      "modules": [
          {
              "scoreRating": { //*** 职业态度维度得分率: 最低、最高、中位数、平均得分率
                  "chartData": [{
                      "name": "职业态度维度",
                      "min": 75,
                      "median": 100,
                      "average": 96.48,
                      "max": 100,
                    },]
              },
              "eachScoreDistribution": { //*** 职业态度维度得分分布情况
                  "tableData": [
                      {
                          "name": "职业态度",
                          "excellent": "62.77%(344人)",
                          "good": "0.73%(4人)",
                          "pass": "33.03%(181人)",
                          "fail": "3.47%(19人)",
                      }
                  ],
                  "chartData": [
                    {
                        "name":"优秀",
                        "value":344,
                        "proportion":"62.77"
                    },
                    {
                        "name":"良好",
                        "value":4,
                        "proportion":"0.73"
                    },
                    {
                        "name":"及格",
                        "value":181,
                        "proportion":"33.03"
                    },
                    {
                        "name":"待提升",
                        "value":19,
                        "proportion":"3.47"
                    }
                ]
              },
              "averageScore": {
                  "all": {
                      "chartData": [{"name": "职业态度平均分", "value": "57.89"}]
                  },
                  "selfAndSecene": {
                      "chartData": [
                          {"name": "自陈问题", "value": "29.67"},
                          {"name": "情景问题", "value": "28.22"},
                      ]
                  }
              },
              "standardScore": {
                  "chartData": [
                      {"name":"自陈问题标准差", "value":"1.11"},
                      {"name":"情景问题标准差", "value":"2.6"},
                  ]
              },
              "minMaxSocre": {
                  "chartData": [{
                      "name": "职业态度分数",
                      "min": 45.00,
                      "median": 60.0,
                      "average": 57.89,
                      "max": 60.00,
                    },]
              }
          },{
              "scoreRating": { //*** 教学实践维度得分率: 最低、最高、中位数、平均得分率
                  "chartData": [{
                      "name": "教学实践维度",
                      "min": 70.83,
                      "median": 95.83,
                      "average": 95.55,
                      "max": 100.0,
                    }]
              },
              "eachScoreDistribution": { //*** 职业态度维度得分分布情况
                  "tableData": [
                      {
                          "name": "教学实践",
                          "excellent": "49.27%(270人)",
                          "good": "16.61%(91人)",
                          "pass": "23.36%(128人)",
                          "fail": "10.77%(59人)",
                      }
                  ],
                  "chartData": [
                      

                      {
                        "name":"优秀",
                        "value":270,
                        "proportion":"49.27"
                    },
                    {
                        "name":"良好",
                        "value":91,
                        "proportion":"16.61"
                    },
                    {
                        "name":"及格",
                        "value":128,
                        "proportion":"23.36"
                    },
                    {
                        "name":"待提升",
                        "value":59,
                        "proportion":"10.77"
                    }
                  ]
                  
              },
              "averageScore": {
                  "all": {
                      "chartData": [{"name": "教学实践平均分", "value": "114.66"}]
                  },
                  "selfAndSecene": {
                      "chartData": [
                          {"name": "自陈问题", "value": "56.37"},
                          {"name": "情景问题", "value": "58.28"},
                      ]
                  }
              },
              "standardScore": {
                  "chartData": [
                      {"name":"自陈问题标准差", "value":"5.11"},
                      {"name":"情景问题标准差", "value":"3.62"},
                  ]
              },
              "minMaxSocre": {
                  "chartData": [{
                      "name": "教学实践分数",
                      "min": 85.00,
                      "median": 115.0,
                      "average": 114.66,
                      "max": 120.00,
                    },]
              }
          },{
              "scoreRating": { //*** 综合育人维度得分率: 最低、最高、中位数、平均得分率
                  "chartData": [{
                      "name": "综合育人维度",
                      "min": 74.44,
                      "median": 98.88,
                      "average": 96.56,
                      "max": 100.0,
                    }]
              },
              "eachScoreDistribution": { //*** 综合育人维度得分分布情况
                  "tableData": [
                      {
                          "name": "综合育人",
                          "excellent": "59.67%(327人)",
                          "good": "9.85%(54人)",
                          "pass": "22.26%(122人)",
                          "fail": "8.21%(45人)",
                      }
                  ],
                  "chartData": [
                    {
                      "name":"优秀",
                      "value":327,
                      "proportion":"49.27"
                  },
                  {
                      "name":"良好",
                      "value":54,
                      "proportion":"16.61"
                  },
                  {
                      "name":"及格",
                      "value":122,
                      "proportion":"23.36"
                  },
                  {
                      "name":"待提升",
                      "value":45,
                      "proportion":"10.77"
                  }
                  ]
              },
              "averageScore": {
                  "all": {
                      "chartData": [{"name": "综合育人平均分", "value": "86.91"}]
                  },
                  "selfAndSecene": {
                      "chartData": [
                          {"name": "自陈问题", "value": "42.58"},
                          {"name": "情景问题", "value": "44.32"},
                      ]
                  }
              },
              "standardScore": {
                  "chartData": [
                      {"name":"自陈问题标准差", "value":"3.51"},
                      {"name":"情景问题标准差", "value":"2.18"},
                  ]
              },
              "minMaxSocre": {
                  "chartData": [{
                      "name": "综合育人分数",
                      "min": 67.00,
                      "median": 89.0,
                      "average": 86.91,
                      "max": 90.00,
                    },]
              }
          },{
              "scoreRating": { //*** 自主发展维度得分率: 最低、最高、中位数、平均得分率
                  "chartData": [{
                      "name": "自主发展维度",
                      "min": 72.22,
                      "median": 94.44,
                      "average": 92.11,
                      "max": 100.0,
                    }]
              },
              "eachScoreDistribution": { //*** 自主发展维度得分分布情况
                  "tableData": [
                      {
                          "name": "自主发展",
                          "excellent": "13.69%(75人)",
                          "good": "2.01%(11人)",
                          "pass": "54.74%(300人)",
                          "fail": "29.56%(162人)",
                      }
                  ],
                  "chartData": [
                      {
                        "name":"优秀",
                        "value":75,
                        "proportion":"49.27"
                    },
                    {
                        "name":"良好",
                        "value":11,
                        "proportion":"16.61"
                    },
                    {
                        "name":"及格",
                        "value":300,
                        "proportion":"23.36"
                    },
                    {
                        "name":"待提升",
                        "value":162,
                        "proportion":"10.77"
                    }
                  ]
              },
              "averageScore": {
                  "all": {
                      "chartData": [{"name": "自主发展平均分", "value": "82.9"}]
                  },
                  "selfAndSecene": {
                      "chartData": [
                          {"name": "自陈问题", "value": "41.89"},
                          {"name": "情景问题", "value": "41.0"},
                      ]
                  }
              },
              "standardScore": {
                  "chartData": [
                      {"name":"自陈问题标准差", "value":"4.06"},
                      {"name":"情景问题标准差", "value":"2.49"},
                  ]
              },
              "minMaxSocre": {
                  "chartData": [{
                      "name": "自主发展分数",
                      "min": 65.00,
                      "median": 85.0,
                      "average": 82.9,
                      "max": 90.00,
                    },]
              }
          }
      ]
  }