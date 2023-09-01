const xAxisLabel = [
    "北蔡镇",
    "曹路镇",
    "川沙新镇",
    "大团镇",
    "东明路街道",
    "高东镇",
    "高桥镇",
    "航头镇",
    "合庆镇",
    "沪东新村街道",
    "花木街道",
    "惠南镇",
    "金桥经开区",
    "金桥镇",
    "金杨新村街道",
    "康桥镇",
    "老港镇",
    "陆家嘴街道",
    "南汇新城镇",
    "南码头路街道",
    "泥城镇",
    "浦兴路街道",
    "三林镇",
    "上钢新村街道",
    "书院镇",
    "唐镇",
    "塘桥街道",
    "万祥镇",
    "潍坊新村街道",
    "新场镇",
    "宣桥镇",
    "洋泾街道",
    "张江镇",
    "上海自贸区",
    "周家渡街道",
    "周浦镇",
    "祝桥镇",
    "直属单位",
  ];
  const legendObj = {
    0: ["自陈问题平均分"],
    1: ["自陈问题中位数"],
    2: ["自陈问题标准差"],
    3: ["情景问题平均分"],
    4: ["情景问题中位数"],
    5: ["情景问题标准差"],
  };
// 语文
  export const CHN_EDU_MODULE = [
    {
      title: "4.1高中(含职校)语文",
      subTitle: "4.1.1高中(含职校)语文平均分、标准差和中位数",
      chartDataList: [
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["0"], xName: legendObj["0"] },
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["1"], xName: legendObj["1"] },
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["2"], xName: legendObj["2"] },
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["3"], xName: legendObj["3"] },
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["4"], xName: legendObj["4"] },
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["5"], xName: legendObj["5"] },
      ],
      tbleData: []
    },
    {
      title: "4.1.2.1 高中(含职校)语文学科职业态度",
      chartDataList: [
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5], legend: legendObj["0"], xName: legendObj[0] },
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5], legend: legendObj["1"], xName: legendObj[1] },
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5], legend: legendObj["2"], xName: legendObj[2] },
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5], legend: legendObj["3"], xName: legendObj[3] },
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5], legend: legendObj["4"], xName: legendObj[4] },
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5], legend: legendObj["5"], xName: legendObj[5] },
      ],
      tableData: []
    },
    {
      title: "4.1.2.2 高中(含职校)语文学科教学实践",
      subTitle: "",
      chartDataList: [
        { xDataLable: xAxisLabel, yData: [20,40,80,70], legend: legendObj["0"], xName: legendObj[0] },
        { xDataLable: xAxisLabel, yData: [20,40,80,70], legend: legendObj["1"], xName: legendObj[1] },
        { xDataLable: xAxisLabel, yData: [20,40,80,70], legend: legendObj["2"], xName: legendObj[2] },
        { xDataLable: xAxisLabel, yData: [20,40,80,70], legend: legendObj["3"], xName: legendObj[3] },
        { xDataLable: xAxisLabel, yData: [20,40,80,70], legend: legendObj["4"], xName: legendObj[4] },
        { xDataLable: xAxisLabel, yData: [20,40,80,70], legend: legendObj["5"], xName: legendObj[5]  },
      ],
      tableData: []
    },
    {
      title: "4.1.2.3 高中(含职校)语文学科综合育人",
      subTitle: "",
  
      chartDataList: [
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6,7,8,9], legend: legendObj["0"],xName: legendObj[0] },
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6,7,8,9], legend: legendObj["1"], xName: legendObj[1] },
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6,7,8,9], legend: legendObj["2"], xName: legendObj[2] },
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6,7,8,9], legend: legendObj["3"], xName: legendObj[3] },
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6,7,8,9], legend: legendObj["4"], xName: legendObj[4] },
        { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6,7,8,9], legend: legendObj["5"], xName: legendObj[5] },
      ],
      tableData: []
    },
    {
      title: "4.1.2.4 高中(含职校)语文学科自主发展",
      subTitle: "",
      chartDataList: [
        { xDataLable: xAxisLabel, yData: [1], legend: legendObj["0"], xName: legendObj[0] },
        { xDataLable: xAxisLabel, yData: [2], legend: legendObj["1"], xName: legendObj[1] },
        { xDataLable: xAxisLabel, yData: [3], legend: legendObj["2"], xName: legendObj[2] },
        { xDataLable: xAxisLabel, yData: [4], legend: legendObj["3"], xName: legendObj[3] },
        { xDataLable: xAxisLabel, yData: [5], legend: legendObj["4"], xName: legendObj[4] },
        { xDataLable: xAxisLabel, yData: [6], legend: legendObj["5"], xName: legendObj[5] },
      ],
      tableData: []
    },
    {
      title: "4.1.3 高中(含职校)语文学科整体及格率",
      subTitle: "",
      chartDataList: [
        { xDataLable: xAxisLabel, yData: [1], legend: ["自陈问题合格率"], xName:  "自陈问题合格率"},
        { xDataLable: xAxisLabel, yData: [2], legend: ["情境问题合格率"], xName: "情境问题合格率"},
      ],
      tableData: []
    },
  ];
  
    // 数学
    export const MATH_EDU_MODULE = [
        {
            title: "4.1高中(含职校)数学",
            subTitle: "4.1.1高中(含职校)数学平均分、标准差和中位数",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [1,2,3,45,6], legend: legendObj["0"], xName: legendObj[0] },
              { xDataLable: xAxisLabel, yData: [1,2,3,45,6], legend: legendObj["1"], xName: legendObj[1] },
              { xDataLable: xAxisLabel, yData: [1,2,3,45,6], legend: legendObj["2"] , xName: legendObj[2]},
              { xDataLable: xAxisLabel, yData: [1,2,3,45,6], legend: legendObj["3"], xName: legendObj[3] },
              { xDataLable: xAxisLabel, yData: [1,2,3,45,6], legend: legendObj["4"], xName: legendObj[4] },
              { xDataLable: xAxisLabel, yData: [1,2,3,45,6], legend: legendObj["5"], xName: legendObj[5] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.1 高中(含职校)数学学科职业态度",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["0"], xName: legendObj[0] },
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["1"], xName: legendObj[1] },
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["2"], xName: legendObj[2] },
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["3"], xName: legendObj[3] },
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["4"], xName: legendObj[4] },
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["5"], xName: legendObj[5] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.2 高中(含职校)数学学科教学实践",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [1,2,3], legend: legendObj["0"], xName: legendObj[0] },
              { xDataLable: xAxisLabel, yData: [1,2,3], legend: legendObj["1"], xName: legendObj[1] },
              { xDataLable: xAxisLabel, yData: [1,2,3], legend: legendObj["2"], xName: legendObj[2] },
              { xDataLable: xAxisLabel, yData: [1,2,3], legend: legendObj["3"], xName: legendObj[3] },
              { xDataLable: xAxisLabel, yData: [1,2,3], legend: legendObj["4"], xName: legendObj[4] },
              { xDataLable: xAxisLabel, yData: [1,2,3], legend: legendObj["5"], xName: legendObj[5] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.3 高中(含职校)数学科综合育人",
            subTitle: "",
        
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [3,5,1], legend: legendObj["0"], xName: legendObj[0] },
              { xDataLable: xAxisLabel, yData: [3,5,1], legend: legendObj["1"], xName: legendObj[1] },
              { xDataLable: xAxisLabel, yData: [3,5,1], legend: legendObj["2"], xName: legendObj[2] },
              { xDataLable: xAxisLabel, yData: [3,5,1], legend: legendObj["3"], xName: legendObj[3] },
              { xDataLable: xAxisLabel, yData: [3,5,1], legend: legendObj["4"], xName: legendObj[4] },
              { xDataLable: xAxisLabel, yData: [3,5,1], legend: legendObj["5"], xName: legendObj[5] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.4 高中(含职校)数学科自主发展",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [9,10,20], legend: legendObj["0"], xName: legendObj[0] },
              { xDataLable: xAxisLabel, yData: [9,10,20], legend: legendObj["1"], xName: legendObj[1] },
              { xDataLable: xAxisLabel, yData: [9,10,20], legend: legendObj["2"], xName: legendObj[2] },
              { xDataLable: xAxisLabel, yData: [9,10,20], legend: legendObj["3"], xName: legendObj[3] },
              { xDataLable: xAxisLabel, yData: [9,10,20], legend: legendObj["4"], xName: legendObj[4] },
              { xDataLable: xAxisLabel, yData: [9,10,20], legend: legendObj["5"], xName: legendObj[5] },
            ],
            tableData: []
          },
          {
            title: "4.1.3 高中(含职校)数学科整体及格率",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [1,2,3,4,5], legend: ["自陈问题合格率"], xName: '自陈问题合格率' },
              { xDataLable: xAxisLabel, yData: [6,7,9], legend: ["情景问题合格率"], xName: '情景问题合格率' },
            ],
            tableData: []
          },
    ]
    // 英语
    export const ENG_EDU_MODULE = [
        {
            title: "4.1高中(含职校)英语",
            subTitle: "4.1.1高中(含职校)英语平均分、标准差和中位数",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [1,8,9,13], legend: legendObj["0"], xName:legendObj['0']  },
              { xDataLable: xAxisLabel, yData: [1,8,9,13], legend: legendObj["1"], xName:legendObj['1']  },
              { xDataLable: xAxisLabel, yData: [1,8,9,13], legend: legendObj["2"], xName:legendObj['2']  },
              { xDataLable: xAxisLabel, yData: [1,8,9,13], legend: legendObj["3"], xName:legendObj['3']  },
              { xDataLable: xAxisLabel, yData: [1,8,9,13], legend: legendObj["4"], xName:legendObj['4']  },
              { xDataLable: xAxisLabel, yData: [1,8,9,13], legend: legendObj["5"], xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.1 高中(含职校)英语学科职业态度",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [10,9,20], legend: legendObj["0"], xName:legendObj['0']  },
              { xDataLable: xAxisLabel, yData: [10,9,20], legend: legendObj["1"], xName:legendObj['1']  },
              { xDataLable: xAxisLabel, yData: [10,9,20], legend: legendObj["2"], xName:legendObj['2']  },
              { xDataLable: xAxisLabel, yData: [10,9,20], legend: legendObj["3"], xName:legendObj['3']  },
              { xDataLable: xAxisLabel, yData: [10,9,20], legend: legendObj["4"], xName:legendObj['4']  },
              { xDataLable: xAxisLabel, yData: [10,9,20], legend: legendObj["5"], xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.2 高中(含职校)英语学科教学实践",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [1,3,4,5], legend: legendObj["0"], xName:legendObj['0']  },
              { xDataLable: xAxisLabel, yData: [1,3,4,5], legend: legendObj["1"], xName:legendObj['1']  },
              { xDataLable: xAxisLabel, yData: [1,3,4,5], legend: legendObj["2"], xName:legendObj['2']  },
              { xDataLable: xAxisLabel, yData: [20,9,21], legend: legendObj["3"] , xName:legendObj['3'] },
              { xDataLable: xAxisLabel, yData: [1,3,4,5], legend: legendObj["4"], xName:legendObj['4']  },
              { xDataLable: xAxisLabel, yData: [1,3,4,5], legend: legendObj["5"], xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.3 高中(含职校)英语学科综合育人",
            subTitle: "",
        
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [10,20,50], legend: legendObj["0"], xName:legendObj['0']  },
              { xDataLable: xAxisLabel, yData: [10,20,50], legend: legendObj["1"], xName:legendObj['1']  },
              { xDataLable: xAxisLabel, yData: [10,20,50], legend: legendObj["2"], xName:legendObj['2']  },
              { xDataLable: xAxisLabel, yData: [10,20,50], legend: legendObj["3"], xName:legendObj['3']  },
              { xDataLable: xAxisLabel, yData: [10,20,50], legend: legendObj["4"], xName:legendObj['4']  },
              { xDataLable: xAxisLabel, yData: [10,20,50], legend: legendObj["5"], xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.4 高中(含职校)英语学科自主发展",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["0"], xName: legendObj['0'] },
              { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["1"], xName: legendObj['1'] },
              { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["2"], xName: legendObj['2'] },
              { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["3"], xName: legendObj['3'] },
              { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["4"], xName: legendObj['4'] },
              { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["5"], xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.3 高中(含职校)英语学科整体及格率",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: ["自陈问题合格率"], xName: "自陈问题合格率" },
              { xDataLable: xAxisLabel, yData: [], legend: ["情境问题合格率"], xName: "情境问题合格率" },
            ],
            tableData: []
          },
    ]
    // 社会科
    export const SOC_EDU_MODULE = [
        {
            title: "4.1高中(含职校)社会科",
            subTitle: "4.1.1高中(含职校)社会科平均分、标准差和中位数",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [9,20,50], legend: legendObj["0"], xName: legendObj['0'] },
              { xDataLable: xAxisLabel, yData: [9,20,50], legend: legendObj["1"], xName: legendObj['1'] },
              { xDataLable: xAxisLabel, yData: [9,20,50], legend: legendObj["2"], xName: legendObj['2'] },
              { xDataLable: xAxisLabel, yData: [9,20,50], legend: legendObj["3"], xName: legendObj['3'] },
              { xDataLable: xAxisLabel, yData: [9,20,50], legend: legendObj["4"], xName: legendObj['4'] },
              { xDataLable: xAxisLabel, yData: [9,20,50], legend: legendObj["5"], xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.1 高中(含职校)社会科学科职业态度",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [3,20,50], legend: legendObj["0"], xName: legendObj['0'] },
              { xDataLable: xAxisLabel, yData: [3,20,50], legend: legendObj["1"], xName: legendObj['1'] },
              { xDataLable: xAxisLabel, yData: [3,20,50], legend: legendObj["2"], xName: legendObj['2'] },
              { xDataLable: xAxisLabel, yData: [3,20,50], legend: legendObj["3"], xName: legendObj['3'] },
              { xDataLable: xAxisLabel, yData: [3,20,50], legend: legendObj["4"] , xName: legendObj['4']},
              { xDataLable: xAxisLabel, yData: [3,20,50], legend: legendObj["5"], xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.2 高中(含职校)社会科学科教学实践",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [9,20,40,10], legend: legendObj["0"], xName: legendObj['0'] },
              { xDataLable: xAxisLabel, yData: [9,20,40,10], legend: legendObj["1"], xName: legendObj['1'] },
              { xDataLable: xAxisLabel, yData: [9,20,40,10], legend: legendObj["2"], xName: legendObj['2'] },
              { xDataLable: xAxisLabel, yData: [9,20,40,10], legend: legendObj["3"], xName: legendObj['3'] },
              { xDataLable: xAxisLabel, yData: [9,20,40,10], legend: legendObj["4"], xName: legendObj['4'] },
              { xDataLable: xAxisLabel, yData: [9,20,40,10], legend: legendObj["5"], xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.3 高中(含职校)社会科学科综合育人",
            subTitle: "",
        
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [9,20,40], legend: legendObj["0"], xName:legendObj['0']  },
              { xDataLable: xAxisLabel, yData: [9,20,40], legend: legendObj["1"], xName:legendObj['1']  },
              { xDataLable: xAxisLabel, yData: [9,20,40], legend: legendObj["2"], xName:legendObj['2']  },
              { xDataLable: xAxisLabel, yData: [9,20,40], legend: legendObj["3"], xName:legendObj['3']  },
              { xDataLable: xAxisLabel, yData: [9,20,40], legend: legendObj["4"], xName:legendObj['4']  },
              { xDataLable: xAxisLabel, yData: [9,20,40], legend: legendObj["5"], xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.4 高中(含职校)社会科学科自主发展",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["0"],xName: legendObj['0'] },
              { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["1"],xName: legendObj['1'] },
              { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["2"],xName: legendObj['2'] },
              { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["3"],xName: legendObj['3'] },
              { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["4"],xName: legendObj['4'] },
              { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["5"],xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.3 高中(含职校)社会科学科整体及格率",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: ["自陈问题合格率"], xName: "自陈问题合格率" },
              { xDataLable: xAxisLabel, yData: [], legend: ["情境问题合格率"], xName: "情境问题合格率" },
            ],
            tableData: []
          },
    ]
    // 理工科
    export const CHEM_EDU_MODULE = [
        {
            title: "4.1高中(含职校)理工科",
            subTitle: "4.1.1高中(含职校)理工科平均分、标准差和中位数",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [20,30,50], legend: legendObj["0"], xName:legendObj['0']  },
              { xDataLable: xAxisLabel, yData: [20,30,50], legend: legendObj["1"], xName:legendObj['1']  },
              { xDataLable: xAxisLabel, yData: [20,30,50], legend: legendObj["2"], xName:legendObj['2']  },
              { xDataLable: xAxisLabel, yData: [20,30,50], legend: legendObj["3"], xName:legendObj['3']  },
              { xDataLable: xAxisLabel, yData: [20,30,50], legend: legendObj["4"], xName:legendObj['4']  },
              { xDataLable: xAxisLabel, yData: [20,30,50], legend: legendObj["5"], xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.1 高中(含职校)理工学科职业态度",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["0"], xName: legendObj['0'] },
              { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["1"], xName: legendObj['1'] },
              { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["2"], xName: legendObj['2'] },
              { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["3"], xName: legendObj['3'] },
              { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["4"], xName: legendObj['4'] },
              { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["5"], xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.2 高中(含职校)理工学科教学实践",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["0"], xName:legendObj['0']  },
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["1"], xName:legendObj['1']  },
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["2"], xName:legendObj['2']  },
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["3"], xName:legendObj['3']  },
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["4"], xName:legendObj['4']  },
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["5"], xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.3 高中(含职校)理工学科综合育人",
            subTitle: "",
        
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [3,4,5,67,8], legend: legendObj["0"],xName: legendObj['0'] },
              { xDataLable: xAxisLabel, yData: [3,4,5,67,8], legend: legendObj["1"],xName: legendObj['1'] },
              { xDataLable: xAxisLabel, yData: [3,4,5,67,8], legend: legendObj["2"],xName: legendObj['2'] },
              { xDataLable: xAxisLabel, yData: [3,4,5,67,8], legend: legendObj["3"],xName: legendObj['3'] },
              { xDataLable: xAxisLabel, yData: [3,4,5,67,8], legend: legendObj["4"],xName: legendObj['4'] },
              { xDataLable: xAxisLabel, yData: [3,4,5,67,8], legend: legendObj["5"],xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.4 高中(含职校)理工学科自主发展",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [1], legend: legendObj["0"], xName:legendObj['0']  },
              { xDataLable: xAxisLabel, yData: [1], legend: legendObj["1"], xName:legendObj['1']  },
              { xDataLable: xAxisLabel, yData: [1], legend: legendObj["2"], xName:legendObj['2']  },
              { xDataLable: xAxisLabel, yData: [1], legend: legendObj["3"] , xName:legendObj['3'] },
              { xDataLable: xAxisLabel, yData: [1], legend: legendObj["4"], xName:legendObj['4']  },
              { xDataLable: xAxisLabel, yData: [1], legend: legendObj["5"], xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.3 高中(含职校)理工学科整体及格率",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: ["自陈问题合格率"], xName: "自陈问题合格率" },
              { xDataLable: xAxisLabel, yData: [], legend: ["情境问题合格率"], xName: "情境问题合格率" },
            ],
            tableData: []
          },
    ]
    // 艺体科
    export const ART_EDU_MODULE = [
        {
            title: "4.1高中(含职校)艺体科",
            subTitle: "4.1.1高中(含职校)艺体科平均分、标准差和中位数",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["0"], xName: legendObj['0'] },
              { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["1"], xName: legendObj['1'] },
              { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["2"], xName: legendObj['2'] },
              { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["3"], xName: legendObj['3'] },
              { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["4"], xName: legendObj['4'] },
              { xDataLable: xAxisLabel, yData: [1,2,3,4,5,6], legend: legendObj["5"], xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.1 高中(含职校)艺体学科职业态度",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [20,40,50,60], legend: legendObj["0"],  xName:legendObj['0']  },
              { xDataLable: xAxisLabel, yData: [20,40,50,60], legend: legendObj["1"],  xName:legendObj['1']  },
              { xDataLable: xAxisLabel, yData: [20,40,50,60], legend: legendObj["2"],  xName:legendObj['2']  },
              { xDataLable: xAxisLabel, yData: [20,40,50,60], legend: legendObj["3"],  xName:legendObj['3']  },
              { xDataLable: xAxisLabel, yData: [20,40,50,60], legend: legendObj["4"],  xName:legendObj['4']  },
              { xDataLable: xAxisLabel, yData: [20,40,50,60], legend: legendObj["5"],  xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.2 高中(含职校)艺体学科教学实践",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [20,30,40], legend: legendObj["0"], xName: legendObj['0'] },
              { xDataLable: xAxisLabel, yData: [20,30,40], legend: legendObj["1"], xName: legendObj['1'] },
              { xDataLable: xAxisLabel, yData: [20,30,40], legend: legendObj["2"], xName: legendObj['2'] },
              { xDataLable: xAxisLabel, yData: [20,30,40], legend: legendObj["3"], xName: legendObj['3'] },
              { xDataLable: xAxisLabel, yData: [20,30,40], legend: legendObj["4"], xName: legendObj['4'] },
              { xDataLable: xAxisLabel, yData: [20,30,40], legend: legendObj["5"], xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.3 高中(含职校)艺体学科综合育人",
            subTitle: "",
        
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["0"], xName:legendObj['0']  },
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["1"], xName:legendObj['1']  },
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["2"], xName:legendObj['2']  },
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["3"], xName:legendObj['3']  },
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["4"], xName:legendObj['4']  },
              { xDataLable: xAxisLabel, yData: [8,9,10], legend: legendObj["5"], xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.2.4 高中(含职校)艺体学科自主发展",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["0"], xName: legendObj['0'] },
              { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["1"], xName: legendObj['1'] },
              { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["2"], xName: legendObj['2'] },
              { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["3"], xName: legendObj['3'] },
              { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["4"], xName: legendObj['4'] },
              { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["5"], xName: legendObj['5'] },
            ],
            tableData: []
          },
          {
            title: "4.1.3 高中(含职校)艺体学科整体及格率",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [1,2,3,4], legend: ["自陈问题合格率"], xName: "自陈问题合格率" },
              { xDataLable: xAxisLabel, yData: [5,6,7,8], legend: ["情境问题合格率"], xName: "情境问题合格率" },
            ],
            tableData: []
          },
    ]

