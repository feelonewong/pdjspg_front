import {
  chart_label_arr,
  chart_obj_0,
  tableData_0,
  chart_obj_1, 
  tableData_1,
  chart_obj_2, 
  tableData_2,
  chart_obj_3, 
  tableData_3,
  chart_obj_4, 
  tableData_4,
  chart_obj_5, 
  tableData_5,
} from './modules/preEdu_data';
const xAxisLabel = chart_label_arr;
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
      { xDataLable: xAxisLabel, yData: chart_obj_0.average1, legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: chart_obj_0.median1, legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: chart_obj_0.standardDeviation1, legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: chart_obj_0.average2, legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: chart_obj_0.median2, legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: chart_obj_0.standardDeviation2, legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: tableData_0
  },
  {
    title: "2.1.2 学前教育与特殊教育各维度平均分",
    subTitle: "2.1.2.1学前教育与特殊教育学科专业理念与师德",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: chart_obj_1.average1, legend: legendObj["0"], xName: legendObj['0'] },
      { xDataLable: xAxisLabel, yData: chart_obj_1.median1, legend: legendObj["1"], xName: legendObj['1'] },
      { xDataLable: xAxisLabel, yData: chart_obj_1.standardDeviation1, legend: legendObj["2"], xName: legendObj['2'] },
      { xDataLable: xAxisLabel, yData: chart_obj_1.average2, legend: legendObj["3"], xName: legendObj['3'] },
      { xDataLable: xAxisLabel, yData: chart_obj_1.median2, legend: legendObj["4"], xName: legendObj['4'] },
      { xDataLable: xAxisLabel, yData: chart_obj_1.standardDeviation2, legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: tableData_1
  },
  {
    title: "2.1.2.2 学前教育与特殊教育学科保教知识与能力",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: chart_obj_2.average1, legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: chart_obj_2.median1, legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: chart_obj_2.standardDeviation1, legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: chart_obj_2.average2, legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: chart_obj_2.median2, legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: chart_obj_2.standardDeviation2, legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: tableData_2
  },
  {
    title: "2.1.2.3 学前教育与特殊教育学科综合育人",
    subTitle: "",

    chartDataList: [
      { xDataLable: xAxisLabel, yData: chart_obj_3.average1, legend: legendObj["0"], xName: legendObj['0'] },
      { xDataLable: xAxisLabel, yData: chart_obj_3.median1, legend: legendObj["1"], xName: legendObj['1'] },
      { xDataLable: xAxisLabel, yData: chart_obj_3.standardDeviation1, legend: legendObj["2"], xName: legendObj['2'] },
      { xDataLable: xAxisLabel, yData: chart_obj_3.average2, legend: legendObj["3"], xName: legendObj['3'] },
      { xDataLable: xAxisLabel, yData: chart_obj_3.median2, legend: legendObj["4"], xName: legendObj['4'] },
      { xDataLable: xAxisLabel, yData: chart_obj_3.standardDeviation2, legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: tableData_3
  },
  {
    title: "2.1.2.4 学前教育与特殊教育自主发展",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: chart_obj_4.average1, legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: chart_obj_4.median1, legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: chart_obj_4.standardDeviation1, legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: chart_obj_4.average2, legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: chart_obj_4.median2, legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: chart_obj_4.standardDeviation2, legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: tableData_4
  },
  {
    title: "2.1.3 学前教育与特殊教育整体及合格率",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: chart_obj_5.a, legend: ["自陈问题合格率"], xName: '自陈问题合格率' },
      { xDataLable: xAxisLabel, yData: chart_obj_5.b, legend: ["情境问题合格率"], xName: '情景问题合格率' },
    ],
    tableData: tableData_5
  },
];
