const xLabelList = [
    "总分平均分",
    "职业态度平均分",
    "教学实践平均分",
    "综合育人平均分",
    "自主发展平均分",
]
const legendList1 = ['男', '女']
const legendList2 = ['专科','本科', '学术型硕士研究生','专业型硕士研究生', '博士研究生']
const legendList3 = ['师范专业', '非师范专业']
const legendList5 = ['语文', '数学', '英语', '社会科','理工科','艺体科','学前教育']
const legendList6 = ['完整学期或学年', '短于一个学期', '校外结构实习', '无实习经历']
const legendList7 = ['仅拿到教师资格证，并未深入学习', '职业感悟与师德修养', '课堂设计与实施', '班级工作与育德体验','教学研究与专业发展']

export const Person_List = [
  {
    title: "6.1教师性别差异情况",
    chart: {
      xDataLable: xLabelList,
      legend: legendList1,
      series: [
        {
            name: legendList1[0],
            type: 'bar',
            data: [325.82,56.92,108.71,81.07,79.12]
        },
        {
            name: legendList1[1],
            type: 'bar',
            data: [328.67,57.61,109.13,81.99,79.94]

        }
      ]
    },
    desc: {
        factionList: [
            {name: '女教师', average: '328.67', standardDeviation: '17.85'},
            {name: '男教师', average: '325.82', standardDeviation: '18.42'}
        ],
        typeList: [
            {tag: '总分平均分', type1: '女教师', type2: '男教师' },
            {tag: '职业态度', type1: '女教师', type2: '男教师' },
            {tag: '教学实践', type1: '女教师', type2: '男教师' },
            {tag: '综合育人', type1: '女教师', type2: '男教师'},
            {tag: '自主发展', type1: '女教师', type2: '男教师'}
        ],
        averageList: [
            {tag: '女性教师', num0: '328.67 ± 17.85', num1: '57.61 ± 3.18', num2: '109.13 ± 8.63', num3: '81.99 ± 5.97', num4: '79.94 ± 5.97' },
            {tag: '男性教师', num0: '325.82 ± 18.42', num1: '56.92 ± 3.7', num2: '108.71 ± 8.63', num3: '81.07 ± 5.69', num4: '79.12 ± 6.79' },
        ]
    }
  },
  {
      title: "6.2 教师最高学历（或学位）情况",
      chart: {
        xDataLable: xLabelList,
        legend: legendList2,
        series: [
          {
              name: legendList2[0],
              type: 'bar',
              data: [ 324.5, 57.67,106.0,82.0,78.83]
          },
          {
              name: legendList2[1],
              type: 'bar',
              data: [330.65,57.77,110.4,82.52,79.96]
  
          },
          {
            name: legendList2[2],
            type: 'bar',
            data: [322.92,57.11,105.92,80.26,79.63]

        },
        {
            name: legendList2[3],
            type: 'bar',
            data: [323.28,56.72,106.68,80.65,79.23]

        },
        {
            name: legendList2[4],
            type: 'bar',
            data: [321.38,55.5,107.25,78.5, 80.12]

        }
        ]
      },
      desc: {
        factionList: [
            {name: '专科教师', average: '324.5', standardDeviation: '18.94'},
            {name: '本科教师', average: '330.65', standardDeviation: '17.24'},
            {name: '学术型硕士研究生', average: '322.92', standardDeviation: '17.85'},
            {name: '专业型硕士研究生', average: '323.28', standardDeviation: '19.23'},
            {name: '博士研究生', average: '321.38', standardDeviation: '14.59'}
        ],
        typeList: [
            {tag: '总分平均分', type1: '最高学历本科教师', type2: '最高学历博士研究生教师' },
            {tag: '职业态度', type1: '最高学历本科教师', type2: '最高学历博士研究生教师' },
            {tag: '教学实践', type1: '最高学历本科教师', type2: '最高学历学术型硕士研究生教师' },
            {tag: '综合育人', type1: '最高学历本科教师', type2: '最高学历博士研究生教师'},
            {tag: '自主发展', type1: '最高学历博士研究生教师', type2: '最高学历专科教师'}
        ],
        averageList: [
            {tag: '最高学历专科教师', num0: '324.5 ± 18.94', num1: '56.92 ± 2.58', num2: '108.71 ± 8.25', num3: '81.07 ± 6.87', num4: '79.12 ± 7.88' },
            {tag: '最高学历本科教师', num0: '330.65 ± 17.24', num1: '57.61 ± 3.08', num2: '109.13 ± 8.07', num3: '81.99 ± 5.77', num4: '79.94 ± 6.0' },
            {tag: '最高学历学术型硕士研究生教师', num0: '322.92 ± 17.85', num1: '57.61 ± 3.28', num2: '109.13 ± 8.74', num3: '81.99 ± 6.15', num4: '79.94 ± 6.26' },
            {tag: '最高学历专业型硕士研究生教师', num0: '323.28 ± 19.23', num1: '57.61 ± 4.01', num2: '109.13 ± 9.54', num3: '81.99 ± 5.91', num4: '79.94 ± 6.48' },
            {tag: '最高学历博士研究生教师', num0: '321.38 ± 14.59', num1: '57.61 ± 3.46', num2: '109.13 ± 7.81', num3: '81.99 ± 3.46', num4: '79.94 ± 4.61' },
        ]
      }
  },
  {
      title: "6.3 第一学历差异情况",
      chart: {
        xDataLable: xLabelList,
        legend: legendList3,
        series: [
            {
                name: legendList3[0],
                type: 'bar',
                data: [329.22, 57.43, 109.28, 82.32, 80.18]
            },
            {
                name: legendList3[1],
                type: 'bar',
                data: [327.51, 57.54, 108.9, 81.52, 79.55]
    
            }
          ]
      },
      desc: {
        factionList: [
            {name: '师范专业', average: '329.22', standardDeviation: '18.24'},
            {name: '非师范专业', average: '327.51', standardDeviation: '17.75'},
        ],
        typeList: [
            {tag: '总分平均分', type1: '第一学历为师范专业的教师', type2: '第一学历为非师范专业的教师' },
            {tag: '职业态度', type1: '第一学历为非师范专业的教师', type2: '第一学历为师范专业的教师' },
            {tag: '教学实践', type1: '第一学历为师范专业的教师', type2: '第一学历为非师范专业的教师' },
            {tag: '综合育人', type1: '第一学历为师范专业的教师', type2: '第一学历为非师范专业的教师'},
            {tag: '自主发展', type1: '第一学历为师范专业的教师', type2: '第一学历为非师范专业的教师'}
        ],
        averageList: [
            {tag: '第一学历为师范专业的教师', num0: '329.22 ± 18.24', num1: '57.43 ± 3.38', num2: '109.28 ± 8.72', num3: '82.32 ± 5.99', num4: '80.18 ± 6.11' },
            {tag: '第一学历为非师范专业的教师', num0: '327.51 ± 17.75', num1: '57.54 ± 3.21', num2: '108.9 ± 8.56', num3: '81.52 ± 5.88', num4: '79.55 ± 6.11' },
        ]
      }
  },
  {
      title: "6.4 最后学历差异情况",
      chart: {
        xDataLable: xLabelList,
        legend: legendList3,
        series: [
            {
                name: legendList3[0],
                type: 'bar',
                data: [331.38, 57.5, 110.31, 83.08, 80.49]

            },
            {
                name: legendList3[1],
                type: 'bar',
                data: [326.07, 57.3, 108.22, 81.01, 79.34]
    
            }
          ]
      },
      desc: {
        factionList: [
            {name: '师范专业', average: '331.38', standardDeviation: '18.09'},
            {name: '非师范专业', average: '326.07', standardDeviation: '17.58'},
        ],
        typeList: [
            {tag: '总分平均分', type1: '最后学历为师范专业的教师', type2: '最后学历为非师范专业的教师' },
            {tag: '职业态度', type1: '最后学历为师范专业的教师', type2: '最后学历为非师范专业的教师' },
            {tag: '教学实践', type1: '最后学历为师范专业的教师', type2: '最后学历为非师范专业的教师' },
            {tag: '综合育人', type1: '最后学历为师范专业的教师', type2: '最后学历为非师范专业的教师'},
            {tag: '自主发展', type1: '最后学历为师范专业的教师', type2: '最后学历为非师范专业的教师'}
        ],
        averageList: [
            {tag: '最后学历为师范专业的教师', num0: '331.38 ± 18.09', num1: '57.5 ± 3.34', num2: '110.31 ± 8.52', num3: '83.08 ± 5.99', num4: '80.49 ± 5.96' },
            {tag: '最后学历为非师范专业的教师', num0: '326.07 ± 17.58', num1: '57.5 ± 3.24', num2: '108.22 ± 8.6', num3: '81.01 ± 5.75', num4: '79.34 ± 6.18' },
        ]
      }
  },
  {
      title: "6.5 任教学科情况",
      chart: {
        xDataLable: xLabelList,
        legend: legendList5,
        series: [
            {
                name: legendList5[0],
                type: 'bar',
                data: [324.91, 58.72, 108.34, 79.91, 77.93]
            },
            {
                name: legendList5[1],
                type: 'bar',
                data: [324.35, 58.62, 108.36, 80.04, 77.33]
    
            },
            {
                name: legendList5[2],
                type: 'bar',
                data: [327.66, 56.25, 109.7, 81.08, 80.63]
    
            },
            {
                name: legendList5[3],
                type: 'bar',
                data: [317.47, 57.32, 101.45, 78.94, 79.77]
    
            },
            {
                name: legendList5[4],
                type: 'bar',
                data: [322.37, 56.44, 104.48, 81.4, 80.06]    
            },
            {
                name: legendList5[5],
                type: 'bar',
                data: [327.49, 55.82, 110.68, 81.67, 79.32]
            },
            {
                name: legendList5[6],
                type: 'bar',
                data: [342.35, 57.89, 114.66, 86.91, 82.9]    
            }
          ]
      },
     desc: {
        factionList: [
            
            {name: '任教学科为语文的教师', average: '324.91', standardDeviation: '15.85'},
            {name: '任教学科为数学的教师', average: '324.35', standardDeviation: '16.5'},
            {name: '任教学科为英语的教师', average: '327.66', standardDeviation: '15.38'},
            {name: '任教社会科的教师', average: '317.47', standardDeviation: '19.11'},
            {name: '任教理工科的教师', average: '322.37', standardDeviation: '16.76'},
            {name: '任教艺体科的教师', average: '327.49', standardDeviation: '17.13'},
            {name: '任教学科为学前教育的教师', average: '342.35', standardDeviation: '14.0'}
        ],
        typeList: [
            {tag: '总分平均分', type1: '任教学科为学前的教师', type2: '任教社会科的教师' },
            {tag: '职业态度', type1: '任教学科为语文的教师', type2: '任教艺体科的教师' },
            {tag: '教学实践', type1: '任教学科为学前教育的教师', type2: '任教艺体科的教师' },
            {tag: '综合育人', type1: '任教学科为学前教育的教师', type2: '任教社会科的教师'},
            {tag: '自主发展', type1: '任教学科为学前教育的教师', type2: '任教学科为数学的教师'}
        ],
        averageList: [
            {tag: '任教学科为语文的教师', num0: '324.91 ± 15.85', num1: '58.72 ± 2.59', num2: '108.34 ± 8.21', num3: '79.91 ± 5.28', num4: '77.93 ± 5.76' },
            {tag: '任教学科为数学的教师', num0: '324.35 ± 16.5', num1: '58.62 ± 2.83', num2: '108.36 ± 7.62', num3: '80.04 ± 5.97', num4: '77.33 ± 5.7' },
            {tag: '任教学科为英语的教师', num0: '327.66 ± 15.38', num1: '56.25 ± 3.36', num2: '109.7 ± 7.71', num3: '81.08 ± 4.89', num4: '80.63 ± 5.82' },
            {tag: '任教社会科的教师', num0: '317.47 ± 19.11', num1: '57.32 ± 3.21', num2: '101.45 ± 8.63', num3: '78.94 ± 6.61', num4: '79.77 ± 6.4' },
            {tag: '任教理工科的教师', num0: '322.37 ± 16.76', num1: '56.44 ± 3.2', num2: '104.48 ± 8.33', num3: '81.4 ± 5.15', num4: '80.06 ± 6.15' },
            {tag: '任教艺体科的教师', num0: '327.49 ± 17.13', num1: '55.82 ± 4.03', num2: '110.68 ± 7.95', num3: '81.67 ± 5.07', num4: '79.32 ± 6.86' },
            {tag: '任教学科为学前教育的教师', num0: '342.35 ± 14.0', num1: '57.89 ± 2.8', num2: '114.66 ± 6.15', num3: '86.91 ± 4.24', num4: '82.9 ± 4.67' },
        ]
     }
  },
  {
      title: "6.6 教育教学实习情况",
      chart: {
        xDataLable: xLabelList,
        legend: legendList6,
        series: [
            {
                name: legendList6[0],
                type: 'bar',
                data: [329.17, 57.59, 109.54, 82.12, 79.92]
            },
            {
                name: legendList6[1],
                type: 'bar',
                data: [325.48, 57.29, 107.73, 80.96, 79.49]
            },
            {
                name: legendList6[2],
                type: 'bar',
                data: [327.26, 57.49, 108.6, 81.35, 79.83]
            },
            {
                name: legendList6[3],
                type: 'bar',
                data: [324.91, 56.96, 107.35, 81.46, 79.15]
            }
          ]
      },
      desc: {
        factionList: [
            {name: '实习时间完整学期或学年的教师', average: '329.17', standardDeviation: '17.93'},
            {name: '实习时间短于一个学期的教师', average: '325.48', standardDeviation: '17.46'},
            {name: '曾在校外机构实习过的教师', average: '327.26', standardDeviation: '17.06'},
            {name: '没有实习过的教师', average: '324.91', standardDeviation: '19.92'}
        ],
        typeList: [
            {tag: '总分平均分', type1: '实习时间完整学期或学年的教师', type2: '没有实习过的教师' },
            {tag: '职业态度', type1: '实习时间完整学期或学年的教师', type2: '没有实习过的教师' },
            {tag: '教学实践', type1: '实习时间完整学期或学年的教师', type2: '没有实习过的教师' },
            {tag: '综合育人', type1: '实习时间完整学期或学年的教师', type2: '实习时间短于一个学期的教师'},
            {tag: '自主发展', type1: '实习时间完整学期或学年的教师', type2: '没有实习过的教师'}
        ],
        averageList: [
            {tag: '实习时间完整学期或学年的教师', num0: '329.17 ± 17.93', num1: '57.59 ± 3.26', num2: '109.54 ± 8.71', num3: '82.12 ± 5.97', num4: '79.92 ± 6.04' },
            {tag: '实习时间短于一个学期的教师', num0: '325.48 ± 17.46', num1: '57.29 ± 3.42', num2: '107.73 ± 8.38', num3: '80.96 ± 5.69', num4: '79.49 ± 6.05' },
            {tag: '曾在校外机构实习过的教师', num0: '327.26 ± 17.06', num1: '57.49 ± 2.85', num2: '108.6 ± 7.29', num3: '81.35 ± 5.86', num4: '79.83 ± 6.98' },
            {tag: '没有实习过的教师', num0: '324.91 ± 19.92', num1: '56.96 ± 3.36', num2: '107.35 ± 8.76', num3: '81.46 ± 5.17', num4: '79.15 ± 6.78' },
        ]
     }
  },
  {
      title: "6.7 是否曾经接受或自学过师范类课程？学过哪些板块的课程？（多选）",
      chart: {
        xDataLable: legendList7,
        legend: ['次数'],
        series: [
            {
                name: ['次数'],
                type: 'bar',
                data: [725, 1703, 1701, 1204, 1232]
            }
          ]
      },
      tableData: [
        { selection: '仅拿到教师资格证，并未深入学习', count: '725' },
        { selection: '职业感悟与师德修养', count: '1703' },
        { selection: '课堂设计与实施', count: '1701' },
        { selection: '班级工作与育德体验', count: '1204' },
        { selection: '教学研究与专业发展', count: '1232' }
      ]
  },
];
