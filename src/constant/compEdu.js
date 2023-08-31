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
      title: "3.1义务教育语文",
      subTitle: "3.1.1义务教育语文平均分、标准差和中位数",
      chartDataList: [
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
      ],
      tableData: []
    },
    {
      title: "3.1.2.1 义务教育语文学科职业态度",
      chartDataList: [
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
      ],
      tableData: []
    },
    {
      title: "3.1.2.2 义务教育语文学科教学实践",
      subTitle: "",
      chartDataList: [
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
      ],
      tableData: []
    },
    {
      title: "3.1.2.3 义务教育语文学科综合育人",
      subTitle: "",
  
      chartDataList: [
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
      ],
      tableData: []
    },
    {
      title: "3.1.2.4 义务教育语文学科自主发展",
      subTitle: "",
      chartDataList: [
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
        { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
      ],
      tableData: []
    },
    {
      title: "3.1.3 义务教育语文学科整体及格率",
      subTitle: "",
      chartDataList: [
        { xDataLable: xAxisLabel, yData: [], legend: ["自陈问题合格率"] },
        { xDataLable: xAxisLabel, yData: [], legend: ["情境问题合格率"] },
      ],
      tableData: []
    },
  ];
  
    // 数学
    export const MATH_EDU_MODULE = [
        {
            title: "3.1义务教育数学",
            subTitle: "3.1.1义务教育数学平均分、标准差和中位数",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.1 义务教育数学学科职业态度",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.2 义务教育数学学科教学实践",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.3 义务教育数学科综合育人",
            subTitle: "",
        
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.4 义务教育数学科自主发展",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.3 义务教育数学科整体及格率",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: ["自陈问题合格率"] },
              { xDataLable: xAxisLabel, yData: [], legend: ["情境问题合格率"] },
            ],
            tableData: []
          },
    ]
    // 英语
    export const ENG_EDU_MODULE = [
        {
            title: "3.1义务教育英语",
            subTitle: "3.1.1义务教育英语平均分、标准差和中位数",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.1 义务教育英语学科职业态度",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.2 义务教育英语学科教学实践",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.3 义务教育英语学科综合育人",
            subTitle: "",
        
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.4 义务教育英语学科自主发展",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.3 义务教育英语学科整体及格率",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: ["自陈问题合格率"] },
              { xDataLable: xAxisLabel, yData: [], legend: ["情境问题合格率"] },
            ],
            tableData: []
          },
    ]
    // 社会科
    export const SOC_EDU_MODULE = [
        {
            title: "3.1义务教育社会科",
            subTitle: "3.1.1义务教育社会科平均分、标准差和中位数",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.1 义务教育社会科学科职业态度",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.2 义务教育社会科学科教学实践",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.3 义务教育社会科学科综合育人",
            subTitle: "",
        
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.4 义务教育社会科学科自主发展",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.3 义务教育社会科学科整体及格率",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: ["自陈问题合格率"] },
              { xDataLable: xAxisLabel, yData: [], legend: ["情境问题合格率"] },
            ],
            tableData: []
          },
    ]
    // 理工科
    export const CHEM_EDU_MODULE = [
        {
            title: "3.1义务教育理工科",
            subTitle: "3.1.1义务教育理工科平均分、标准差和中位数",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.1 义务教育理工学科职业态度",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.2 义务教育理工学科教学实践",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.3 义务教育理工学科综合育人",
            subTitle: "",
        
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.4 义务教育理工学科自主发展",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.3 义务教育理工学科整体及格率",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: ["自陈问题合格率"] },
              { xDataLable: xAxisLabel, yData: [], legend: ["情境问题合格率"] },
            ],
            tableData: []
          },
    ]
    // 艺体科
    export const ART_EDU_MODULE = [
        {
            title: "3.1义务教育艺体科",
            subTitle: "3.1.1义务教育艺体科平均分、标准差和中位数",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.1 义务教育艺体学科职业态度",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.2 义务教育艺体学科教学实践",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.3 义务教育艺体学科综合育人",
            subTitle: "",
        
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.2.4 义务教育艺体学科自主发展",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["0"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["1"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["2"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["3"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["4"] },
              { xDataLable: xAxisLabel, yData: [], legend: legendObj["5"] },
            ],
            tableData: []
          },
          {
            title: "3.1.3 义务教育艺体学科整体及格率",
            subTitle: "",
            chartDataList: [
              { xDataLable: xAxisLabel, yData: [], legend: ["自陈问题合格率"] },
              { xDataLable: xAxisLabel, yData: [], legend: ["情境问题合格率"] },
            ],
            tableData: []
          },
    ]


