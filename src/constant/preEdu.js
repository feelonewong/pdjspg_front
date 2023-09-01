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
export const PRE_EDU_INFO = [
  {
    title: "2.1学前教育与特殊教育",
    subTitle: "2.1.1学前教育与特殊教育学科平均分、标准差和中位数",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [20,304,50], legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: [20,304,50], legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: [20,304,50], legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: [20,304,50], legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: [20,304,50], legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: [20,304,50], legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: []
  },
  {
    title: "2.1.2 学前教育与特殊教育各维度平均分",
    subTitle: "2.1.2.1学前教育与特殊教育学科职业态度",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [2,30,20], legend: legendObj["0"], xName: legendObj['0'] },
      { xDataLable: xAxisLabel, yData: [2,30,20], legend: legendObj["1"], xName: legendObj['1'] },
      { xDataLable: xAxisLabel, yData: [2,30,20], legend: legendObj["2"], xName: legendObj['2'] },
      { xDataLable: xAxisLabel, yData: [2,30,20], legend: legendObj["3"], xName: legendObj['3'] },
      { xDataLable: xAxisLabel, yData: [2,30,20], legend: legendObj["4"], xName: legendObj['4'] },
      { xDataLable: xAxisLabel, yData: [2,30,20], legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: []
  },
  {
    title: "2.1.2.2 学前教育与特殊教育学科教学实践",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [30,40,50], legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: [30,40,50], legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: [30,40,50], legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: [30,40,50], legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: [30,40,50], legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: [30,40,50], legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: []
  },
  {
    title: "2.1.2.3 学前教育与特殊教育学科综合育人",
    subTitle: "",

    chartDataList: [
      { xDataLable: xAxisLabel, yData: [3,40,50], legend: legendObj["0"], xName: legendObj['0'] },
      { xDataLable: xAxisLabel, yData: [3,40,50], legend: legendObj["1"], xName: legendObj['1'] },
      { xDataLable: xAxisLabel, yData: [3,40,50], legend: legendObj["2"], xName: legendObj['2'] },
      { xDataLable: xAxisLabel, yData: [3,40,50], legend: legendObj["3"], xName: legendObj['3'] },
      { xDataLable: xAxisLabel, yData: [3,40,50], legend: legendObj["4"], xName: legendObj['4'] },
      { xDataLable: xAxisLabel, yData: [3,40,50], legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: []
  },
  {
    title: "2.1.2.4 学前教育与特殊教育自主发展",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [20,40,100], legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: [20,40,100], legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: [20,40,100], legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: [20,40,100], legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: [20,40,100], legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: [20,40,100], legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: []
  },
  {
    title: "2.1.3 学前教育与特殊教育自主发展",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [1,2,3,4,5], legend: ["自陈问题合格率"], xName: '自陈问题合格率' },
      { xDataLable: xAxisLabel, yData: [1,2,3,4,5], legend: ["情境问题合格率"], xName: '情景问题合格率' },
    ],
    tableData: []
  },
];
