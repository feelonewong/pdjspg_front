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
                data: [326.07, 57.5, 108.22, 81.01, 79.34]
    
            }
          ]
      },
      desc: {
        factionList: [
            {name: '师范专业', average: '331.38', standardDeviation: '18.09'},
            {name: '非师范专业', average: '326.07', standardDeviation: '17.58'},
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
            {name: '任教学科为学前的教师', average: '342.35', standardDeviation: '14.0'}
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
