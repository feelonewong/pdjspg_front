import {
  chart_label_arr,
  chn_chart_obj_0,
  chn_tableData_0,
  chn_chart_obj_1, 
  chn_tableData_1,
  chn_chart_obj_2, 
  chn_tableData_2,
  chn_chart_obj_3, 
  chn_tableData_3,
  chn_chart_obj_4, 
  chn_tableData_4,
  chn_chart_obj_5, 
  chn_tableData_5,
} from './modules/comp_edu_data';


const xAxisLabel = chart_label_arr;
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
      { xDataLable: xAxisLabel, yData: chn_chart_obj_0.average1, legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_0.median1, legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_0.standardDeviation1, legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_0.average2, legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_0.median2, legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_0.standardDeviation2, legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: chn_tableData_0,
  },
  {
    title: "3.1.2.1 义务教育语文学科职业态度",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: chn_chart_obj_1.average1, legend: legendObj["0"],xName: legendObj['0'] },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_1.median1, legend: legendObj["1"],xName: legendObj['1'] },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_1.standardDeviation1, legend: legendObj["2"],xName: legendObj['2'] },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_1.average2, legend: legendObj["3"],xName: legendObj['3'] },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_1.median2, legend: legendObj["4"],xName: legendObj['4'] },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_1.standardDeviation2, legend: legendObj["5"] ,xName: legendObj['5']},
    ],
    tableData: chn_tableData_1,
  },
  {
    title: "3.1.2.2 义务教育语文学科教学实践",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: chn_chart_obj_2.average1, legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_2.median1, legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_2.standardDeviation1, legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_2.average2, legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_2.median2, legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_2.standardDeviation2, legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: chn_tableData_2,
  },
  {
    title: "3.1.2.3 义务教育语文学科综合育人",
    subTitle: "",

    chartDataList: [
      { xDataLable: xAxisLabel, yData: chn_chart_obj_3.average1, legend: legendObj["0"], xName: legendObj['0'] },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_3.median1, legend: legendObj["1"], xName: legendObj['1'] },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_3.standardDeviation1, legend: legendObj["2"], xName: legendObj['2'] },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_3.average2, legend: legendObj["3"], xName: legendObj['3'] },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_3.median2, legend: legendObj["4"], xName: legendObj['4'] },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_3.standardDeviation2, legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: chn_tableData_3,
  },
  {
    title: "3.1.2.4 义务教育语文学科自主发展",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: chn_chart_obj_4.average1, legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_4.median1, legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_4.standardDeviation1, legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_4.average2, legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_4.median2, legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_4.standardDeviation2, legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: chn_tableData_4,
  },
  {
    title: "3.1.3 义务教育语文学科整体及格率",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: chn_chart_obj_5.a, legend: ["自陈问题合格率"], xName: '自陈问题合格率' },
      { xDataLable: xAxisLabel, yData: chn_chart_obj_5.b, legend: ["情景问题合格率"], xName:  '情景问题合格率'},
    ],
    tableData: chn_tableData_5,
  },
];


// 社会科 
export const SOC_EDU_MODULE = [
  {
    title: "3.1义务教育社会科",
    subTitle: "3.1.1义务教育社会科平均分、标准差和中位数",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["0"],xName: legendObj['0']  },
      { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["1"],xName: legendObj['1'] },
      { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["2"],xName: legendObj['2'] },
      { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["3"],xName: legendObj['3'] },
      { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["4"],xName: legendObj['4'] },
      { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["5"],xName: legendObj['5'] },
    ],
    tableData: [],
  },
  {
    title: "3.1.2.1 义务教育社会科学科职业态度",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["0"], xName:legendObj['0']   },
      { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["1"], xName:legendObj['1']   },
      { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["2"], xName:legendObj['2']   },
      { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["3"] , xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["4"], xName:legendObj['4']   },
      { xDataLable: xAxisLabel, yData: [10,20,30], legend: legendObj["5"] , xName: legendObj['5'] },
    ],
    tableData: [],
  },
  {
    title: "3.1.2.2 义务教育社会科学科教学实践",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [3,4,5,6], legend: legendObj["0"], xName: legendObj['0'] },
      { xDataLable: xAxisLabel, yData: [3,4,5,6], legend: legendObj["1"], xName: legendObj['1'] },
      { xDataLable: xAxisLabel, yData: [3,4,5,6], legend: legendObj["2"], xName: legendObj['2'] },
      { xDataLable: xAxisLabel, yData: [3,4,5,6], legend: legendObj["3"], xName: legendObj['3'] },
      { xDataLable: xAxisLabel, yData: [3,4,5,6], legend: legendObj["4"], xName: legendObj['4'] },
      { xDataLable: xAxisLabel, yData: [3,4,5,6], legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: [],
  },
  {
    title: "3.1.2.3 义务教育社会科学科综合育人",
    subTitle: "",

    chartDataList: [
      { xDataLable: xAxisLabel, yData: [1,2,3,40], legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: [1,2,3,40], legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: [1,2,3,40], legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: [1,2,3,40], legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: [1,2,3,40], legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: [1,2,3,40], legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: [],
  },
  {
    title: "3.1.2.4 义务教育社会科学科自主发展",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [1,2,40], legend: legendObj["0"],xName: legendObj['0'] },
      { xDataLable: xAxisLabel, yData: [1,2,40], legend: legendObj["1"],xName: legendObj['1'] },
      { xDataLable: xAxisLabel, yData: [1,2,40], legend: legendObj["2"],xName: legendObj['2'] },
      { xDataLable: xAxisLabel, yData: [1,2,40], legend: legendObj["3"],xName: legendObj['3'] },
      { xDataLable: xAxisLabel, yData: [1,2,40], legend: legendObj["4"],xName: legendObj['4'] },
      { xDataLable: xAxisLabel, yData: [1,2,40], legend: legendObj["5"],xName: legendObj['5'] },
    ],
    tableData: [],
  },
  {
    title: "3.1.3 义务教育社会科学科整体及格率",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [1,2,3,4,5], legend: ["自陈问题合格率"], xName: '自陈问题合格率' },
      { xDataLable: xAxisLabel, yData: [1,2,3,4,5], legend: ["情景问题合格率"], xName:  '情景问题合格率'},
    ],
    tableData: [],
  },
];
// 理工科
export const CHEM_EDU_MODULE = [
  {
    title: "3.1义务教育理工科",
    subTitle: "3.1.1义务教育理工科平均分、标准差和中位数",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [20,304,50 ], legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: [20,304,50 ], legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: [20,304,50 ], legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: [20,304,50 ], legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: [20,304,50 ], legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: [20,304,50 ], legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: [],
  },
  {
    title: "3.1.2.1 义务教育理工学科职业态度",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [2,3,40], legend: legendObj["0"], xName: legendObj['0'] },
      { xDataLable: xAxisLabel, yData: [2,3,40], legend: legendObj["1"], xName: legendObj['1'] },
      { xDataLable: xAxisLabel, yData: [2,3,40], legend: legendObj["2"], xName: legendObj['2'] },
      { xDataLable: xAxisLabel, yData: [2,3,40], legend: legendObj["3"], xName: legendObj['3'] },
      { xDataLable: xAxisLabel, yData: [2,3,40], legend: legendObj["4"], xName: legendObj['4'] },
      { xDataLable: xAxisLabel, yData: [2,3,40], legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: [],
  },
  {
    title: "3.1.2.2 义务教育理工学科教学实践",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: [],
  },
  {
    title: "3.1.2.3 义务教育理工学科综合育人",
    subTitle: "",

    chartDataList: [
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["0"], xName: legendObj['0'] },
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["1"], xName: legendObj['1'] },
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["2"], xName: legendObj['2'] },
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["3"], xName: legendObj['3'] },
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["4"], xName: legendObj['4'] },
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: [],
  },
  {
    title: "3.1.2.4 义务教育理工学科自主发展",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: [20,40,50], legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: [],
  },
  {
    title: "3.1.3 义务教育理工学科整体及格率",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [1,2,3], legend: ["自陈问题合格率"], xName: '自陈问题合格率' },
      { xDataLable: xAxisLabel, yData: [1,2,3], legend: ["情景问题合格率"], xName:  '情景问题合格率'},
    ],
    tableData: [],
  },
];
// 艺体科
export const ART_EDU_MODULE = [
  {
    title: "3.1义务教育艺体科",
    subTitle: "3.1.1义务教育艺体科平均分、标准差和中位数",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [1,1,2], legend: legendObj["0"], xName: legendObj['0'] },
      { xDataLable: xAxisLabel, yData: [1,1,2], legend: legendObj["1"], xName: legendObj['1'] },
      { xDataLable: xAxisLabel, yData: [1,1,2], legend: legendObj["2"], xName: legendObj['2'] },
      { xDataLable: xAxisLabel, yData: [1,1,2], legend: legendObj["3"], xName: legendObj['3'] },
      { xDataLable: xAxisLabel, yData: [1,1,2], legend: legendObj["4"], xName: legendObj['4'] },
      { xDataLable: xAxisLabel, yData: [1,1,2], legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: [],
  },
  {
    title: "3.1.2.1 义务教育艺体学科职业态度",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [20,30,40], legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: [20,30,40], legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: [20,30,40], legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: [20,30,40], legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: [20,30,40], legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: [20,30,40], legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: [],
  },
  {
    title: "3.1.2.2 义务教育艺体学科教学实践",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [20,30,50], legend: legendObj["0"], xName: legendObj['0'] },
      { xDataLable: xAxisLabel, yData: [20,30,50], legend: legendObj["1"], xName: legendObj['1'] },
      { xDataLable: xAxisLabel, yData: [20,30,50], legend: legendObj["2"], xName: legendObj['2'] },
      { xDataLable: xAxisLabel, yData: [20,30,50], legend: legendObj["3"], xName: legendObj['3'] },
      { xDataLable: xAxisLabel, yData: [20,30,50], legend: legendObj["4"], xName: legendObj['4'] },
      { xDataLable: xAxisLabel, yData: [20,30,50], legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: [],
  },
  {
    title: "3.1.2.3 义务教育艺体学科综合育人",
    subTitle: "",

    chartDataList: [
      { xDataLable: xAxisLabel, yData: [10,203,40], legend: legendObj["0"], xName:legendObj['0']  },
      { xDataLable: xAxisLabel, yData: [10,203,40], legend: legendObj["1"], xName:legendObj['1']  },
      { xDataLable: xAxisLabel, yData: [10,203,40], legend: legendObj["2"], xName:legendObj['2']  },
      { xDataLable: xAxisLabel, yData: [10,203,40], legend: legendObj["3"], xName:legendObj['3']  },
      { xDataLable: xAxisLabel, yData: [10,203,40], legend: legendObj["4"], xName:legendObj['4']  },
      { xDataLable: xAxisLabel, yData: [10,203,40], legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: [],
  },
  {
    title: "3.1.2.4 义务教育艺体学科自主发展",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [20,304,50], legend: legendObj["0"], xName: legendObj['0'] },
      { xDataLable: xAxisLabel, yData: [20,304,50], legend: legendObj["1"], xName: legendObj['1'] },
      { xDataLable: xAxisLabel, yData: [20,304,50], legend: legendObj["2"], xName: legendObj['2'] },
      { xDataLable: xAxisLabel, yData: [20,304,50], legend: legendObj["3"], xName: legendObj['3'] },
      { xDataLable: xAxisLabel, yData: [20,304,50], legend: legendObj["4"], xName: legendObj['4'] },
      { xDataLable: xAxisLabel, yData: [20,304,50], legend: legendObj["5"], xName: legendObj['5'] },
    ],
    tableData: [],
  },
  {
    title: "3.1.3 义务教育艺体学科整体及格率",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabel, yData: [1,2,3,4,5], legend: ["自陈问题合格率"], xName: '自陈问题合格率' },
      { xDataLable: xAxisLabel, yData: [6,7,8,9,10], legend: ["情景问题合格率"], xName:  '情景问题合格率'},
    ],
    tableData: [],
  },
];
