import {
  chart_label_arr,
  soc_chart_obj_0,
  soc_tableData_0,
  soc_chart_obj_1, 
  soc_tableData_1,
  soc_chart_obj_2, 
  soc_tableData_2,
  soc_chart_obj_3, 
  soc_tableData_3,
  soc_chart_obj_4, 
  soc_tableData_4,
  soc_chart_obj_5, 
  soc_tableData_5,
} from './modules/high_edu_soc';


const xAxisLabel = chart_label_arr;
const legendObj = {
  0: ["自陈问题平均分"],
  1: ["自陈问题中位数"],
  2: ["自陈问题标准差"],
  3: ["情景问题平均分"],
  4: ["情景问题中位数"],
  5: ["情景问题标准差"],
};
// 社会科
export const SOC_EDU_MODULE = [
  {
    title: "4.1高中(含职校)社会科",
    subTitle: "4.1.1高中(含职校)社会科学科平均分、标准差和中位数",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: soc_chart_obj_0.average1, legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_0.median1, legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_0.standardDeviation1, legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_0.average2, legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_0.median2, legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_0.standardDeviation2, legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: soc_tableData_0,
  },
  {
    title: "4.1.2 高中(含职校)社会科学科职业态度",
    subTitle: "4.1.2.1 高中(含职校)社会科学科职业态度",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: soc_chart_obj_1.average1, legend: legendObj["0"],xName: legendObj['0'] },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_1.median1, legend: legendObj["1"],xName: legendObj['1'] },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_1.standardDeviation1, legend: legendObj["2"],xName: legendObj['2'] },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_1.average2, legend: legendObj["3"],xName: legendObj['3'] },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_1.median2, legend: legendObj["4"],xName: legendObj['4'] },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_1.standardDeviation2, legend: legendObj["5"] ,xName: legendObj['5']},
    ],
    tableData: soc_tableData_1,
  },
  {
    title: "4.1.2.2 高中(含职校)社会科学科教学实践",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: soc_chart_obj_2.average1, legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_2.median1, legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_2.standardDeviation1, legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_2.average2, legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_2.median2, legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_2.standardDeviation2, legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: soc_tableData_2,
  },
  {
    title: "4.1.2.3 高中(含职校)社会科学科综合育人",
    subTitle: "",

    chartDataList: [
      { xDataLable: xAxisLabel, yData: soc_chart_obj_3.average1, legend: legendObj["0"], xName: legendObj['0'] },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_3.median1, legend: legendObj["1"], xName: legendObj['1'] },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_3.standardDeviation1, legend: legendObj["2"], xName: legendObj['2'] },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_3.average2, legend: legendObj["3"], xName: legendObj['3'] },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_3.median2, legend: legendObj["4"], xName: legendObj['4'] },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_3.standardDeviation2, legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: soc_tableData_3,
  },
  {
    title: "4.1.2.4 高中(含职校)社会科学科自主发展",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: soc_chart_obj_4.average1, legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_4.median1, legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_4.standardDeviation1, legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_4.average2, legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_4.median2, legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_4.standardDeviation2, legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: soc_tableData_4,
  },
  {
    title: "4.1.3 高中(含职校)社会科学科整体及格率",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: soc_chart_obj_5.a, legend: ["自陈问题合格率"], xName: '自陈问题合格率' },
      { xDataLable: xAxisLabel, yData: soc_chart_obj_5.b, legend: ["情景问题合格率"], xName:  '情景问题合格率'},
    ],
    tableData: soc_tableData_5,
  },
];


