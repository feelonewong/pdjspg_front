import { toSingleArr } from '@/constant/ObjArrayToSingleArr.js';

// 1.2 整体及格率表格
const tableData_zthgl = [
  {
    "villagesAndTowns": "幼儿园教师",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0,
    "numberOfPeople": 548
  },
  {
    "villagesAndTowns": "义务教育语文教师",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0,
    "numberOfPeople": 434
  },
  {
    "villagesAndTowns": "义务教育数学教师",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 99.66,
    "numberOfPeople": 298
  },
  {
    "villagesAndTowns": "义务教育英语教师",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0,
    "numberOfPeople": 210
  },
  {
    "villagesAndTowns": "义务教育社会科教师",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 99.38,
    "numberOfPeople": 160
  },
  {
    "villagesAndTowns": "义务教育理工科教师",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0,
    "numberOfPeople": 123
  },
  {
    "villagesAndTowns": "义务教育艺体科教师",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0,
    "numberOfPeople": 287
  },
  {
    "villagesAndTowns": "高中教育（含职业院校）语文教师",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0,
    "numberOfPeople": 69
  },
  {
    "villagesAndTowns": "高中学段（含职校）数学教师",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0,
    "numberOfPeople": 64
  },
  {
    "villagesAndTowns": "高中学段（含职校） 英语教师",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0,
    "numberOfPeople": 78
  },
  {
    "villagesAndTowns": "高中学段（含职校）社会科教师",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 99.02,
    "numberOfPeople": 102
  },
  {
    "villagesAndTowns": "高中学段（含职校）理工科教师",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 99.26,
    "numberOfPeople": 135
  },
  {
    "villagesAndTowns": "高中学段（含职校）艺体科教师",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0,
    "numberOfPeople": 42
  }
]
const tableData_zthgl_chart = {
  a: toSingleArr(tableData_zthgl, 'selfReportedPassingRate'),
  b: toSingleArr(tableData_zthgl, 'situationPassingRate'),
}
// 1.1.2.4 自主发展表格
const tableData_zzfz = [
  {
    "villagesAndTowns": "幼儿园教师",
    "numberOfPeople": 548,
    "average1": 41.89,
    "average2": 41.0,
    "median1": 44.0,
    "median2": 40.0,
    "standardDeviation1": 4.06,
    "standardDeviation2": 2.49
  },
  {
    "villagesAndTowns": "义务教育语文教师",
    "numberOfPeople": 434,
    "average1": 42.03,
    "average2": 35.37,
    "median1": 45.0,
    "median2": 35.0,
    "standardDeviation1": 3.87,
    "standardDeviation2": 4.09
  },
  {
    "villagesAndTowns": "义务教育数学教师",
    "numberOfPeople": 298,
    "average1": 41.65,
    "average2": 35.25,
    "median1": 44.0,
    "median2": 35.0,
    "standardDeviation1": 4.14,
    "standardDeviation2": 3.23
  },
  {
    "villagesAndTowns": "义务教育英语教师",
    "numberOfPeople": 210,
    "average1": 42.13,
    "average2": 39.0,
    "median1": 44.0,
    "median2": 40.0,
    "standardDeviation1": 3.76,
    "standardDeviation2": 4.06
  },
  {
    "villagesAndTowns": "义务教育社会科教师",
    "numberOfPeople": 160,
    "average1": 41.23,
    "average2": 40.88,
    "median1": 43.0,
    "median2": 40.0,
    "standardDeviation1": 4.43,
    "standardDeviation2": 3.3
  },
  {
    "villagesAndTowns": "义务教育理工科教师",
    "numberOfPeople": 123,
    "average1": 41.04,
    "average2": 38.25,
    "median1": 44.0,
    "median2": 40.0,
    "standardDeviation1": 4.71,
    "standardDeviation2": 3.56
  },
  {
    "villagesAndTowns": "义务教育艺体科教师",
    "numberOfPeople": 287,
    "average1": 42.62,
    "average2": 37.02,
    "median1": 45.0,
    "median2": 40.0,
    "standardDeviation1": 3.79,
    "standardDeviation2": 5.35
  },
  {
    "villagesAndTowns": "高中教育（含职业院校）语文教师",
    "numberOfPeople": 69,
    "average1": 40.65,
    "average2": 40.65,
    "median1": 41.0,
    "median2": 40.0,
    "standardDeviation1": 4.62,
    "standardDeviation2": 4.61
  },
  {
    "villagesAndTowns": "高中学段（含职校）数学教师",
    "numberOfPeople": 64,
    "average1": 40.06,
    "average2": 39.3,
    "median1": 42.0,
    "median2": 40.0,
    "standardDeviation1": 5.44,
    "standardDeviation2": 4.35
  },
  {
    "villagesAndTowns": "高中学段（含职校） 英语教师",
    "numberOfPeople": 78,
    "average1": 41.38,
    "average2": 37.88,
    "median1": 45.0,
    "median2": 40.0,
    "standardDeviation1": 4.74,
    "standardDeviation2": 3.99
  },
  {
    "villagesAndTowns": "高中学段（含职校）社会科教师",
    "numberOfPeople": 102,
    "average1": 41.54,
    "average2": 34.56,
    "median1": 44.5,
    "median2": 35.0,
    "standardDeviation1": 4.41,
    "standardDeviation2": 5.03
  },
  {
    "villagesAndTowns": "高中学段（含职校）理工科教师",
    "numberOfPeople": 135,
    "average1": 42.13,
    "average2": 38.63,
    "median1": 44.0,
    "median2": 40.0,
    "standardDeviation1": 3.61,
    "standardDeviation2": 4.42
  },
  {
    "villagesAndTowns": "高中学段（含职校）艺体科教师",
    "numberOfPeople": 42,
    "average1": 41.55,
    "average2": 35.6,
    "median1": 45.0,
    "median2": 35.0,
    "standardDeviation1": 4.2,
    "standardDeviation2": 4.84
  }
]
const tabbleData_zzfz_chart = {
  "average1": toSingleArr(tableData_zzfz, 'average1'),
  "average2": toSingleArr(tableData_zzfz, 'average2'),
  "median1": toSingleArr(tableData_zzfz, 'median1'),
  "median2": toSingleArr(tableData_zzfz, 'median2'),
  "standardDeviation1": toSingleArr(tableData_zzfz, 'standardDeviation1'),
  "standardDeviation2": toSingleArr(tableData_zzfz, 'standardDeviation2'),
}
// 1.1.2.3 综合育人
const tableData_zhyr = [
  {
    "villagesAndTowns": "幼儿园教师",
    "numberOfPeople": 548,
    "average1": 42.58,
    "average2": 44.32,
    "median1": 45.0,
    "median2": 45.0,
    "standardDeviation1": 3.51,
    "standardDeviation2": 2.18
  },
  {
    "villagesAndTowns": "义务教育语文教师",
    "numberOfPeople": 434,
    "average1": 42.89,
    "average2": 37.05,
    "median1": 45.0,
    "median2": 35.0,
    "standardDeviation1": 3.25,
    "standardDeviation2": 4.17
  },
  {
    "villagesAndTowns": "义务教育数学教师",
    "numberOfPeople": 298,
    "average1": 42.63,
    "average2": 37.43,
    "median1": 45.0,
    "median2": 40.0,
    "standardDeviation1": 3.17,
    "standardDeviation2": 4.79
  },
  {
    "villagesAndTowns": "义务教育英语教师",
    "numberOfPeople": 210,
    "average1": 43.37,
    "average2": 37.81,
    "median1": 45.0,
    "median2": 40.0,
    "standardDeviation1": 2.64,
    "standardDeviation2": 3.69
  },
  {
    "villagesAndTowns": "义务教育社会科教师",
    "numberOfPeople": 160,
    "average1": 41.65,
    "average2": 40.31,
    "median1": 44.0,
    "median2": 40.0,
    "standardDeviation1": 4.1,
    "standardDeviation2": 3.3
  },
  {
    "villagesAndTowns": "义务教育理工科教师",
    "numberOfPeople": 123,
    "average1": 42.02,
    "average2": 37.97,
    "median1": 44.0,
    "median2": 40.0,
    "standardDeviation1": 3.84,
    "standardDeviation2": 3.61
  },
  {
    "villagesAndTowns": "义务教育艺体科教师",
    "numberOfPeople": 287,
    "average1": 43.0,
    "average2": 39.11,
    "median1": 45.0,
    "median2": 40.0,
    "standardDeviation1": 3.4,
    "standardDeviation2": 3.74
  },
  {
    "villagesAndTowns": "高中教育（含职业院校）语文教师",
    "numberOfPeople": 69,
    "average1": 41.26,
    "average2": 38.48,
    "median1": 42.0,
    "median2": 40.0,
    "standardDeviation1": 4.01,
    "standardDeviation2": 5.02
  },
  {
    "villagesAndTowns": "高中学段（含职校）数学教师",
    "numberOfPeople": 64,
    "average1": 41.19,
    "average2": 38.75,
    "median1": 44.0,
    "median2": 40.0,
    "standardDeviation1": 4.64,
    "standardDeviation2": 4.45
  },
  {
    "villagesAndTowns": "高中学段（含职校） 英语教师",
    "numberOfPeople": 78,
    "average1": 42.42,
    "average2": 38.4,
    "median1": 45.0,
    "median2": 40.0,
    "standardDeviation1": 3.64,
    "standardDeviation2": 4.23
  },
  {
    "villagesAndTowns": "高中学段（含职校）社会科教师",
    "numberOfPeople": 102,
    "average1": 41.44,
    "average2": 32.75,
    "median1": 44.5,
    "median2": 30.0,
    "standardDeviation1": 4.8,
    "standardDeviation2": 4.43
  },
  {
    "villagesAndTowns": "高中学段（含职校）理工科教师",
    "numberOfPeople": 135,
    "average1": 42.76,
    "average2": 39.93,
    "median1": 45.0,
    "median2": 40.0,
    "standardDeviation1": 3.27,
    "standardDeviation2": 3.91
  },
  {
    "villagesAndTowns": "高中学段（含职校）艺体科教师",
    "numberOfPeople": 42,
    "average1": 41.98,
    "average2": 36.67,
    "median1": 44.5,
    "median2": 35.0,
    "standardDeviation1": 3.6,
    "standardDeviation2": 4.37
  }
]
const tabbleData_zhyr_chart = {
  "average1": toSingleArr(tableData_zhyr, 'average1'),
  "average2": toSingleArr(tableData_zhyr, 'average2'),
  "median1": toSingleArr(tableData_zhyr, 'median1'),
  "median2": toSingleArr(tableData_zhyr, 'median2'),
  "standardDeviation1": toSingleArr(tableData_zhyr, 'standardDeviation1'),
  "standardDeviation2": toSingleArr(tableData_zhyr, 'standardDeviation2'),
}
// 1.1.2.2 教学实践
const tableData_jxsj = [
  {
    "villagesAndTowns": "幼儿园教师",
    "numberOfPeople": 548,
    "average1": 56.37,
    "average2": 58.28,
    "median1": 60.0,
    "median2": 60.0,
    "standardDeviation1": 5.11,
    "standardDeviation2": 3.62
  },
  {
    "villagesAndTowns": "义务教育语文教师",
    "numberOfPeople": 434,
    "average1": 56.13,
    "average2": 52.73,
    "median1": 59.0,
    "median2": 55.0,
    "standardDeviation1": 5.11,
    "standardDeviation2": 5.69
  },
  {
    "villagesAndTowns": "义务教育数学教师",
    "numberOfPeople": 298,
    "average1": 55.71,
    "average2": 52.2,
    "median1": 58.0,
    "median2": 55.0,
    "standardDeviation1": 4.99,
    "standardDeviation2": 5.44
  },
  {
    "villagesAndTowns": "义务教育英语教师",
    "numberOfPeople": 210,
    "average1": 57.01,
    "average2": 53.07,
    "median1": 60.0,
    "median2": 55.0,
    "standardDeviation1": 4.08,
    "standardDeviation2": 5.99
  },
  {
    "villagesAndTowns": "义务教育社会科教师",
    "numberOfPeople": 160,
    "average1": 55.37,
    "average2": 47.5,
    "median1": 57.5,
    "median2": 50.0,
    "standardDeviation1": 5.38,
    "standardDeviation2": 6.66
  },
  {
    "villagesAndTowns": "义务教育理工科教师",
    "numberOfPeople": 123,
    "average1": 55.8,
    "average2": 46.79,
    "median1": 59.0,
    "median2": 45.0,
    "standardDeviation1": 5.4,
    "standardDeviation2": 5.77
  },
  {
    "villagesAndTowns": "义务教育艺体科教师",
    "numberOfPeople": 287,
    "average1": 56.86,
    "average2": 55.12,
    "median1": 60.0,
    "median2": 55.0,
    "standardDeviation1": 4.92,
    "standardDeviation2": 4.72
  },
  {
    "villagesAndTowns": "高中教育（含职业院校）语文教师",
    "numberOfPeople": 69,
    "average1": 54.23,
    "average2": 50.87,
    "median1": 55.0,
    "median2": 50.0,
    "standardDeviation1": 5.73,
    "standardDeviation2": 5.42
  },
  {
    "villagesAndTowns": "高中学段（含职校）数学教师",
    "numberOfPeople": 64,
    "average1": 54.66,
    "average2": 55.78,
    "median1": 58.0,
    "median2": 55.0,
    "standardDeviation1": 6.12,
    "standardDeviation2": 4.9
  },
  {
    "villagesAndTowns": "高中学段（含职校） 英语教师",
    "numberOfPeople": 78,
    "average1": 56.23,
    "average2": 52.44,
    "median1": 60.0,
    "median2": 55.0,
    "standardDeviation1": 5.44,
    "standardDeviation2": 5.33
  },
  {
    "villagesAndTowns": "高中学段（含职校）社会科教师",
    "numberOfPeople": 102,
    "average1": 54.95,
    "average2": 44.26,
    "median1": 58.5,
    "median2": 45.0,
    "standardDeviation1": 6.38,
    "standardDeviation2": 6.69
  },
  {
    "villagesAndTowns": "高中学段（含职校）理工科教师",
    "numberOfPeople": 135,
    "average1": 56.39,
    "average2": 49.81,
    "median1": 59.0,
    "median2": 50.0,
    "standardDeviation1": 4.77,
    "standardDeviation2": 6.06
  },
  {
    "villagesAndTowns": "高中学段（含职校）艺体科教师",
    "numberOfPeople": 42,
    "average1": 55.5,
    "average2": 46.31,
    "median1": 60.0,
    "median2": 45.0,
    "standardDeviation1": 5.61,
    "standardDeviation2": 5.64
  }
]
const tabbleData_jxsj_chart = {
  "average1": toSingleArr(tableData_jxsj, 'average1'),
  "average2": toSingleArr(tableData_jxsj, 'average2'),
  "median1": toSingleArr(tableData_jxsj, 'median1'),
  "median2": toSingleArr(tableData_jxsj, 'median2'),
  "standardDeviation1": toSingleArr(tableData_jxsj, 'standardDeviation1'),
  "standardDeviation2": toSingleArr(tableData_jxsj, 'standardDeviation2'),
}
// 1.1.1 整体平均分、标准差与中位数表格
const tableData_ztpjf = [
  {
    "villagesAndTowns": "幼儿园教师",
    "numberOfPeople": 548,
    "average1": 170.51,
    "average2": 171.83,
    "median1": 177.0,
    "median2": 175.0,
    "standardDeviation1": 12.41,
    "standardDeviation2": 6.7
  },
  {
    "villagesAndTowns": "义务教育语文教师",
    "numberOfPeople": 434,
    "average1": 170.68,
    "average2": 154.4,
    "median1": 177.0,
    "median2": 155.0,
    "standardDeviation1": 12.08,
    "standardDeviation2": 9.14
  },
  {
    "villagesAndTowns": "义务教育数学教师",
    "numberOfPeople": 298,
    "average1": 169.52,
    "average2": 154.18,
    "median1": 176.0,
    "median2": 155.0,
    "standardDeviation1": 12.39,
    "standardDeviation2": 8.75
  },
  {
    "villagesAndTowns": "义务教育英语教师",
    "numberOfPeople": 210,
    "average1": 172.23,
    "average2": 156.1,
    "median1": 177.5,
    "median2": 155.0,
    "standardDeviation1": 10.23,
    "standardDeviation2": 9.31
  },
  {
    "villagesAndTowns": "义务教育社会科教师",
    "numberOfPeople": 160,
    "average1": 167.72,
    "average2": 156.66,
    "median1": 172.5,
    "median2": 160.0,
    "standardDeviation1": 13.75,
    "standardDeviation2": 9.76
  },
  {
    "villagesAndTowns": "义务教育理工科教师",
    "numberOfPeople": 123,
    "average1": 168.24,
    "average2": 152.44,
    "median1": 176.0,
    "median2": 155.0,
    "standardDeviation1": 14.12,
    "standardDeviation2": 7.72
  },
  {
    "villagesAndTowns": "义务教育艺体科教师",
    "numberOfPeople": 287,
    "average1": 172.2,
    "average2": 157.54,
    "median1": 180.0,
    "median2": 160.0,
    "standardDeviation1": 12.04,
    "standardDeviation2": 9.06
  },
  {
    "villagesAndTowns": "高中教育（含职业院校）语文教师",
    "numberOfPeople": 69,
    "average1": 164.87,
    "average2": 158.99,
    "median1": 167.0,
    "median2": 160.0,
    "standardDeviation1": 15.05,
    "standardDeviation2": 9.57
  },
  {
    "villagesAndTowns": "高中学段（含职校）数学教师",
    "numberOfPeople": 64,
    "average1": 164.88,
    "average2": 162.5,
    "median1": 173.0,
    "median2": 165.0,
    "standardDeviation1": 17.13,
    "standardDeviation2": 9.39
  },
  {
    "villagesAndTowns": "高中学段（含职校） 英语教师",
    "numberOfPeople": 78,
    "average1": 169.58,
    "average2": 156.28,
    "median1": 179.0,
    "median2": 155.0,
    "standardDeviation1": 14.08,
    "standardDeviation2": 9.58
  },
  {
    "villagesAndTowns": "高中学段（含职校）社会科教师",
    "numberOfPeople": 102,
    "average1": 166.99,
    "average2": 139.66,
    "median1": 177.5,
    "median2": 140.0,
    "standardDeviation1": 16.24,
    "standardDeviation2": 12.09
  },
  {
    "villagesAndTowns": "高中学段（含职校）理工科教师",
    "numberOfPeople": 135,
    "average1": 170.61,
    "average2": 153.3,
    "median1": 176.0,
    "median2": 155.0,
    "standardDeviation1": 11.97,
    "standardDeviation2": 10.79
  },
  {
    "villagesAndTowns": "高中学段（含职校）艺体科教师",
    "numberOfPeople": 42,
    "average1": 167.67,
    "average2": 144.4,
    "median1": 173.5,
    "median2": 145.0,
    "standardDeviation1": 14.19,
    "standardDeviation2": 10.07
  }
]
const tableData_ztpjf_chart = {
  "average1": toSingleArr(tableData_ztpjf, 'average1'),
  "average2": toSingleArr(tableData_ztpjf, 'average2'),
  "median1": toSingleArr(tableData_ztpjf, 'median1'),
  "median2": toSingleArr(tableData_ztpjf, 'median2'),
  "standardDeviation1": toSingleArr(tableData_ztpjf, 'standardDeviation1'),
  "standardDeviation2": toSingleArr(tableData_ztpjf, 'standardDeviation2'),
}
// 1.1.2.1 职业态度1
const tableData_zytd1 = [
  {
    "villagesAndTowns": "幼儿园教师",
    "numberOfPeople": 548,
    "average1": 29.67,
    "average2": 28.22,
    "median1": 30.0,
    "median2": 30.0,
    "standardDeviation1": 1.11,
    "standardDeviation2": 2.6
  },
  {
    "villagesAndTowns": "义务教育语文教师",
    "numberOfPeople": 434,
    "average1": 29.63,
    "average2": 29.25,
    "median1": 30.0,
    "median2": 30.0,
    "standardDeviation1": 1.19,
    "standardDeviation2": 1.79
  },
  {
    "villagesAndTowns": "义务教育数学教师",
    "numberOfPeople": 298,
    "average1": 29.53,
    "average2": 29.3,
    "median1": 30.0,
    "median2": 30.0,
    "standardDeviation1": 1.38,
    "standardDeviation2": 1.88
  },
  {
    "villagesAndTowns": "义务教育英语教师",
    "numberOfPeople": 210,
    "average1": 29.72,
    "average2": 26.21,
    "median1": 30.0,
    "median2": 25.0,
    "standardDeviation1": 1.79,
    "standardDeviation2": 3.03
  },
  {
    "villagesAndTowns": "义务教育社会科教师",
    "numberOfPeople": 160,
    "average1": 29.47,
    "average2": 27.97,
    "median1": 30.0,
    "median2": 30.0,
    "standardDeviation1": 1.37,
    "standardDeviation2": 2.88
  },
  {
    "villagesAndTowns": "义务教育理工科教师",
    "numberOfPeople": 123,
    "average1": 29.39,
    "average2": 29.43,
    "median1": 30.0,
    "median2": 30.0,
    "standardDeviation1": 1.66,
    "standardDeviation2": 1.59
  },
  {
    "villagesAndTowns": "义务教育艺体科教师",
    "numberOfPeople": 287,
    "average1": 29.73,
    "average2": 26.29,
    "median1": 30.0,
    "median2": 25.0,
    "standardDeviation1": 1.17,
    "standardDeviation2": 3.33
  },
  {
    "villagesAndTowns": "高中教育（含职业院校）语文教师",
    "numberOfPeople": 69,
    "average1": 28.72,
    "average2": 28.99,
    "median1": 30.0,
    "median2": 30.0,
    "standardDeviation1": 2.79,
    "standardDeviation2": 2.2
  },
  {
    "villagesAndTowns": "高中学段（含职校）数学教师",
    "numberOfPeople": 64,
    "average1": 28.97,
    "average2": 28.67,
    "median1": 30.0,
    "median2": 30.0,
    "standardDeviation1": 2.17,
    "standardDeviation2": 2.85
  },
  {
    "villagesAndTowns": "高中学段（含职校） 英语教师",
    "numberOfPeople": 78,
    "average1": 29.54,
    "average2": 27.56,
    "median1": 30.0,
    "median2": 30.0,
    "standardDeviation1": 1.39,
    "standardDeviation2": 2.88
  },
  {
    "villagesAndTowns": "高中学段（含职校）社会科教师",
    "numberOfPeople": 102,
    "average1": 29.06,
    "average2": 28.09,
    "median1": 30.0,
    "median2": 30.0,
    "standardDeviation1": 1.95,
    "standardDeviation2": 2.82
  },
  {
    "villagesAndTowns": "高中学段（含职校）理工科教师",
    "numberOfPeople": 135,
    "average1": 29.34,
    "average2": 24.93,
    "median1": 30.0,
    "median2": 25.0,
    "standardDeviation1": 1.65,
    "standardDeviation2": 1.06
  },
  {
    "villagesAndTowns": "高中学段（含职校）艺体科教师",
    "numberOfPeople": 42,
    "average1": 28.64,
    "average2": 25.83,
    "median1": 30.0,
    "median2": 25.0,
    "standardDeviation1": 4.0,
    "standardDeviation2": 3.48
  }
];
const zytd1_chart = {
  "average1": toSingleArr(tableData_zytd1, 'average1'),
  "average2": toSingleArr(tableData_zytd1, 'average2'),
  "median1": toSingleArr(tableData_zytd1, 'median1'),
  "median2": toSingleArr(tableData_zytd1, 'median2'),
  "standardDeviation1": toSingleArr(tableData_zytd1, 'standardDeviation1'),
  "standardDeviation2": toSingleArr(tableData_zytd1, 'standardDeviation2'),
}
// 1.1.2.1 职业态度2
const tableData_zytd2 = [
  {
    "villagesAndTowns": "幼儿园教师",
    "numberOfPeople": 548,
    "average1": 14.87,
    "average2": 13.35,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 0.6,
    "standardDeviation2": 2.39
  },
  {
    "villagesAndTowns": "义务教育语文教师",
    "numberOfPeople": 434,
    "average1": 14.84,
    "average2": 14.97,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 0.6,
    "standardDeviation2": 0.41
  },
  {
    "villagesAndTowns": "义务教育数学教师",
    "numberOfPeople": 298,
    "average1": 14.8,
    "average2": 14.92,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 0.76,
    "standardDeviation2": 0.64
  },
  {
    "villagesAndTowns": "义务教育英语教师",
    "numberOfPeople": 210,
    "average1": 14.86,
    "average2": 15.0,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 0.93,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "义务教育社会科教师",
    "numberOfPeople": 160,
    "average1": 14.72,
    "average2": 14.84,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 0.77,
    "standardDeviation2": 1.04
  },
  {
    "villagesAndTowns": "义务教育理工科教师",
    "numberOfPeople": 123,
    "average1": 14.71,
    "average2": 15.0,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 0.86,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "义务教育艺体科教师",
    "numberOfPeople": 287,
    "average1": 14.86,
    "average2": 14.63,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 0.8,
    "standardDeviation2": 1.43
  },
  {
    "villagesAndTowns": "高中教育（含职业院校）语文教师",
    "numberOfPeople": 69,
    "average1": 14.35,
    "average2": 14.86,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 1.71,
    "standardDeviation2": 0.84
  },
  {
    "villagesAndTowns": "高中学段（含职校）数学教师",
    "numberOfPeople": 64,
    "average1": 14.47,
    "average2": 14.77,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 1.17,
    "standardDeviation2": 1.07
  },
  {
    "villagesAndTowns": "高中学段（含职校） 英语教师",
    "numberOfPeople": 78,
    "average1": 14.74,
    "average2": 14.94,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 0.73,
    "standardDeviation2": 0.57
  },
  {
    "villagesAndTowns": "高中学段（含职校）社会科教师",
    "numberOfPeople": 102,
    "average1": 14.58,
    "average2": 14.71,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 0.96,
    "standardDeviation2": 1.38
  },
  {
    "villagesAndTowns": "高中学段（含职校）理工科教师",
    "numberOfPeople": 135,
    "average1": 14.67,
    "average2": 14.89,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 0.9,
    "standardDeviation2": 0.74
  },
  {
    "villagesAndTowns": "高中学段（含职校）艺体科教师",
    "numberOfPeople": 42,
    "average1": 14.4,
    "average2": 14.4,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 1.99,
    "standardDeviation2": 1.98
  }
]

const zytd2_chart = {
  "average1": toSingleArr(tableData_zytd2, 'average1'),
  "average2": toSingleArr(tableData_zytd2, 'average2'),
  "median1": toSingleArr(tableData_zytd2, 'median1'),
  "median2": toSingleArr(tableData_zytd2, 'median2'),
  "standardDeviation1": toSingleArr(tableData_zytd2, 'standardDeviation1'),
  "standardDeviation2": toSingleArr(tableData_zytd2, 'standardDeviation2'),
}
// 1.1.2.1 职业态度3
const tableData_zytd3 = [
  {
    "villagesAndTowns": "幼儿园教师",
    "numberOfPeople": 548,
    "average1": 14.8,
    "average2": 14.87,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 0.65,
    "standardDeviation2": 0.9
  },
  {
    "villagesAndTowns": "义务教育语文教师",
    "numberOfPeople": 434,
    "average1": 14.79,
    "average2": 14.29,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 0.66,
    "standardDeviation2": 1.75
  },
  {
    "villagesAndTowns": "义务教育数学教师",
    "numberOfPeople": 298,
    "average1": 14.73,
    "average2": 14.38,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 0.75,
    "standardDeviation2": 1.7
  },
  {
    "villagesAndTowns": "义务教育英语教师",
    "numberOfPeople": 210,
    "average1": 14.87,
    "average2": 11.21,
    "median1": 15.0,
    "median2": 10.0,
    "standardDeviation1": 0.9,
    "standardDeviation2": 3.03
  },
  {
    "villagesAndTowns": "义务教育社会科教师",
    "numberOfPeople": 160,
    "average1": 14.74,
    "average2": 13.12,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 0.71,
    "standardDeviation2": 2.73
  },
  {
    "villagesAndTowns": "义务教育理工科教师",
    "numberOfPeople": 123,
    "average1": 14.68,
    "average2": 14.43,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 0.86,
    "standardDeviation2": 1.59
  },
  {
    "villagesAndTowns": "义务教育艺体科教师",
    "numberOfPeople": 287,
    "average1": 14.87,
    "average2": 11.66,
    "median1": 15.0,
    "median2": 10.0,
    "standardDeviation1": 0.57,
    "standardDeviation2": 2.92
  },
  {
    "villagesAndTowns": "高中教育（含职业院校）语文教师",
    "numberOfPeople": 69,
    "average1": 14.38,
    "average2": 14.13,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 1.19,
    "standardDeviation2": 1.91
  },
  {
    "villagesAndTowns": "高中学段（含职校）数学教师",
    "numberOfPeople": 64,
    "average1": 14.5,
    "average2": 13.91,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 1.11,
    "standardDeviation2": 2.43
  },
  {
    "villagesAndTowns": "高中学段（含职校） 英语教师",
    "numberOfPeople": 78,
    "average1": 14.79,
    "average2": 12.63,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 0.71,
    "standardDeviation2": 2.87
  },
  {
    "villagesAndTowns": "高中学段（含职校）社会科教师",
    "numberOfPeople": 102,
    "average1": 14.48,
    "average2": 13.38,
    "median1": 15.0,
    "median2": 15.0,
    "standardDeviation1": 1.05,
    "standardDeviation2": 2.55
  },
  {
    "villagesAndTowns": "高中学段（含职校）理工科教师",
    "numberOfPeople": 135,
    "average1": 14.67,
    "average2": 10.04,
    "median1": 15.0,
    "median2": 10.0,
    "standardDeviation1": 0.87,
    "standardDeviation2": 0.75
  },
  {
    "villagesAndTowns": "高中学段（含职校）艺体科教师",
    "numberOfPeople": 42,
    "average1": 14.24,
    "average2": 11.43,
    "median1": 15.0,
    "median2": 10.0,
    "standardDeviation1": 2.08,
    "standardDeviation2": 2.77
  }
]
const zytd3_chart = {
  "average1": toSingleArr(tableData_zytd3, 'average1'),
  "average2": toSingleArr(tableData_zytd3, 'average2'),
  "median1": toSingleArr(tableData_zytd3, 'median1'),
  "median2": toSingleArr(tableData_zytd3, 'median2'),
  "standardDeviation1": toSingleArr(tableData_zytd3, 'standardDeviation1'),
  "standardDeviation2": toSingleArr(tableData_zytd3, 'standardDeviation2'),
}
const xAxisLabelAddr = ["幼儿园教师", "义务教育语文", "义务教育数学", "义务教育英语", "义务教育社会科", "义务教育理工科","义务教育艺体科", "高中教育语文", "高中教育数学",  "高中教育英语","高中教育社会科", "高中教育理工科", "高中教育艺体科"];
const xAxisLabelAll = ["自陈问题合格率", "情景问题合格率"];
const legendObj = {
  0: "自陈问题平均分",
  1: "自陈问题中位数",
  2: "自陈问题标准差",
  3: "情景问题平均分",
  4: "情景问题中位数",
  5: "情景问题标准差",
};
const legendObj_ztpjf = [
  "幼儿园",
  "义务教育语文",
  "义务教育数学",
  "义务教育英语",
  "义务教育社会科",
  "义务教育理工科",
  "义务教育艺体科",
  "高中教育语文",
  "高中教育数学",
  '高中教育英语',
  "高中教育社会科",
  "高中教育理工科",
  "高中教育艺体科",
];
export const RESULT_DATA = [
  {
    title: "1.1 全区平均分、标准差与中位数",
    subTitle: "1.1.1 整体平均分、标准差与中位数",
    desc: {
      "self": {
        "average1": "幼儿园教师",
        "median1": "幼儿园教师",
        "standardDeviation1": "高中学段（含职校）数学教师",
        "average2": "高中学段（含职校）社会科教师",
        "median2": "高中学段（含职校）社会科教师",
        "standardDeviation2": "幼儿园教师"
      },
      "situ": {
        "average1": "幼儿园教师",
        "median1": "幼儿园教师",
        "standardDeviation1": "高中学段（含职校）数学教师",
        "average2": "高中学段（含职校）社会科教师",
        "median2": "高中学段（含职校）社会科教师",
        "standardDeviation2": "幼儿园教师"
      }
    },
    chartDataList: [
      { xDataLable: legendObj_ztpjf, yData: [
        342.35,
        325.08,
        323.7,
        328.33,
        324.38,
        320.68,
        329.75,
        323.86,
        327.38,
        325.86,
        306.65,
        323.91,
        312.07], legend: ["总分"], xName: '总分' },
    ],
    otherCharData: [
      {
        xDataLable: legendObj_ztpjf,
        yData1: tableData_ztpjf_chart.average1,
        yData2: tableData_ztpjf_chart.median1,
        yData3: tableData_ztpjf_chart.average2,
        yData4: tableData_ztpjf_chart.median2,
        yData5: tableData_ztpjf_chart.standardDeviation1,
        yData6: tableData_ztpjf_chart.standardDeviation2,
        legend: [
          "自陈问题平均分",
          "自陈问题中位数",
          "情景问题平均分",
          "情景问题中位数",
          "自陈问题标准差",
          '情景问题标准差'
        ],
        xName1: "自陈问题平均分",
        xName2: "自陈问题中位数",
        xName3: "情景问题平均分",
        xName4: "情景问题中位数",
        xName5: "标准差",
      },
    ],
    tableData: tableData_ztpjf,
  },
  {
    title: "1.1.2 各维度平均分、标准差与中位数",
    subTitle: "1.1.2.1 职业态度",
    children: [
      {
        chartDataList: [
          { xDataLable: xAxisLabelAddr, yData: zytd1_chart.average1, 
            legend: legendObj["0"], xName:legendObj['0']  },
          { xDataLable: xAxisLabelAddr, yData: zytd1_chart.median1, legend: legendObj["1"], xName:legendObj['1']  },
          { xDataLable: xAxisLabelAddr, yData: zytd1_chart.standardDeviation1, legend: legendObj["2"], xName:legendObj['2']  },
          { xDataLable: xAxisLabelAddr, yData: zytd1_chart.average2, legend: legendObj["3"], xName:legendObj['3']  },
          { xDataLable: xAxisLabelAddr, yData: zytd1_chart.median2, legend: legendObj["4"], xName:legendObj['4']  },
          { xDataLable: xAxisLabelAddr, yData: zytd1_chart.standardDeviation2, legend: legendObj["5"], xName: legendObj['5'] },
        ],
        tableData: tableData_zytd1,
        subTitle: '在职业态度一级维度下，师德师风二级维度结果如下:',
        desc: {
          "self": {
            "average1": "义务教育艺体科教师",
            "median1": "幼儿园教师, 义务教育语文教师, 义务教育数学教师, 义务教育英语教师, 义务教育社会科教师, 义务教育理工科教师, 义务教育艺体科教师, 高中教育（含职业院校）语文教师, 高中学段（含职校）数学教师, 高中学段（含职校） 英语教师, 高中学段（含职校）社会科教师, 高中学段（含职校）理工科教师, 高中学段（含职校）艺体科教师",
            "standardDeviation1": "高中学段（含职校）艺体科教师",
            "average2": "高中学段（含职校）艺体科教师",
            "median2": "幼儿园教师, 义务教育语文教师, 义务教育数学教师, 义务教育英语教师, 义务教育社会科教师, 义务教育理工科教师, 义务教育艺体科教师, 高中教育（含职业院校）语文教师, 高中学段（含职校）数学教师, 高中学段（含职校） 英语教师, 高中学段（含职校）社会科教师, 高中学段（含职校）理工科教师, 高中学段（含职校）艺体科教师",
            "standardDeviation2": "幼儿园教师"
          },
          "situ": {
            "average1": "义务教育理工科教师",
            "median1": "幼儿园教师, 义务教育语文教师, 义务教育数学教师, 义务教育社会科教师, 义务教育理工科教师, 高中教育（含职业院校）语文教师, 高中学段（含职校）数学教师, 高中学段（含职校） 英语教师, 高中学段（含职校）社会科教师",
            "standardDeviation1": "高中学段（含职校）艺体科教师",
            "average2": "高中学段（含职校）理工科教师",
            "median2": "义务教育英语教师, 义务教育艺体科教师, 高中学段（含职校）理工科教师, 高中学段（含职校）艺体科教师",
            "standardDeviation2": "高中学段（含职校）理工科教师"
          }
        },
      },
      {
        chartDataList: [
          { xDataLable: xAxisLabelAddr, yData: zytd2_chart.average1, legend: legendObj["0"], xName:legendObj['0']  },
          { xDataLable: xAxisLabelAddr, yData: zytd2_chart.median1, legend: legendObj["1"], xName:legendObj['1']  },
          { xDataLable: xAxisLabelAddr, yData: zytd2_chart.standardDeviation1, legend: legendObj["2"], xName:legendObj['2']  },
          { xDataLable: xAxisLabelAddr, yData: zytd2_chart.average2, legend: legendObj["3"], xName:legendObj['3']  },
          { xDataLable: xAxisLabelAddr, yData: zytd2_chart.median2, legend: legendObj["4"], xName:legendObj['4']  },
          { xDataLable: xAxisLabelAddr, yData: zytd2_chart.standardDeviation2, legend: legendObj["5"], xName: legendObj['5'] },
        ],
        subTitle: '在职业态度一级维度下，教育理念二级维度结果如下:',
        tableData: tableData_zytd2,
        desc: {
          "self": {
            "average1": "幼儿园教师",
            "median1": "幼儿园教师, 义务教育语文教师, 义务教育数学教师, 义务教育英语教师, 义务教育社会科教师, 义务教育理工科教师, 义务教育艺体科教师, 高中教育（含职业院校）语文教师, 高中学段（含职校）数学教师, 高中学段（含职校） 英语教师, 高中学段（含职校）社会科教师, 高中学段（含职校）理工科教师, 高中学段（含职校）艺体科教师",
            "standardDeviation1": "高中学段（含职校）艺体科教师",
            "average2": "高中教育（含职业院校）语文教师",
            "median2": "幼儿园教师, 义务教育语文教师, 义务教育数学教师, 义务教育英语教师, 义务教育社会科教师, 义务教育理工科教师, 义务教育艺体科教师, 高中教育（含职业院校）语文教师, 高中学段（含职校）数学教师, 高中学段（含职校） 英语教师, 高中学段（含职校）社会科教师, 高中学段（含职校）理工科教师, 高中学段（含职校）艺体科教师",
            "standardDeviation2": "幼儿园教师, 义务教育语文教师"
          },
          "situ": {
            "average1": "义务教育英语教师, 义务教育理工科教师",
            "median1": "幼儿园教师, 义务教育语文教师, 义务教育数学教师, 义务教育英语教师, 义务教育社会科教师, 义务教育理工科教师, 义务教育艺体科教师, 高中教育（含职业院校）语文教师, 高中学段（含职校）数学教师, 高中学段（含职校） 英语教师, 高中学段（含职校）社会科教师, 高中学段（含职校）理工科教师, 高中学段（含职校）艺体科教师",
            "standardDeviation1": "幼儿园教师",
            "average2": "幼儿园教师",
            "median2": "幼儿园教师, 义务教育语文教师, 义务教育数学教师, 义务教育英语教师, 义务教育社会科教师, 义务教育理工科教师, 义务教育艺体科教师, 高中教育（含职业院校）语文教师, 高中学段（含职校）数学教师, 高中学段（含职校） 英语教师, 高中学段（含职校）社会科教师, 高中学段（含职校）理工科教师, 高中学段（含职校）艺体科教师",
            "standardDeviation2": "义务教育英语教师, 义务教育理工科教师"
          }
        },
      },
      {
        chartDataList: [
          { xDataLable: xAxisLabelAddr, yData: zytd3_chart.average1, legend: legendObj["0"], xName:legendObj['0']  },
          { xDataLable: xAxisLabelAddr, yData: zytd3_chart.median1, legend: legendObj["1"], xName:legendObj['1']  },
          { xDataLable: xAxisLabelAddr, yData: zytd3_chart.standardDeviation1, legend: legendObj["2"] , xName:legendObj['2'] },
          { xDataLable: xAxisLabelAddr, yData: zytd3_chart.average2, legend: legendObj["3"] , xName:legendObj['3'] },
          { xDataLable: xAxisLabelAddr, yData: zytd3_chart.median2, legend: legendObj["4"] , xName:legendObj['4'] },
          { xDataLable: xAxisLabelAddr, yData: zytd3_chart.standardDeviation2, legend: legendObj["5"] , xName: legendObj['5']},
        ],
        tableData: tableData_zytd3,
        desc: {
          "self": {
            "average1": "义务教育英语教师, 义务教育艺体科教师",
            "median1": "幼儿园教师, 义务教育语文教师, 义务教育数学教师, 义务教育英语教师, 义务教育社会科教师, 义务教育理工科教师, 义务教育艺体科教师, 高中教育（含职业院校）语文教师, 高中学段（含职校）数学教师, 高中学段（含职校） 英语教师, 高中学段（含职校）社会科教师, 高中学段（含职校）理工科教师, 高中学段（含职校）艺体科教师",
            "standardDeviation1": "高中学段（含职校）艺体科教师",
            "average2": "高中学段（含职校）艺体科教师",
            "median2": "幼儿园教师, 义务教育语文教师, 义务教育数学教师, 义务教育英语教师, 义务教育社会科教师, 义务教育理工科教师, 义务教育艺体科教师, 高中教育（含职业院校）语文教师, 高中学段（含职校）数学教师, 高中学段（含职校） 英语教师, 高中学段（含职校）社会科教师, 高中学段（含职校）理工科教师, 高中学段（含职校）艺体科教师",
            "standardDeviation2": "义务教育艺体科教师"
          },
          "situ": {
            "average1": "幼儿园教师",
            "median1": "幼儿园教师, 义务教育语文教师, 义务教育数学教师, 义务教育社会科教师, 义务教育理工科教师, 高中教育（含职业院校）语文教师, 高中学段（含职校）数学教师, 高中学段（含职校） 英语教师, 高中学段（含职校）社会科教师",
            "standardDeviation1": "义务教育英语教师",
            "average2": "高中学段（含职校）理工科教师",
            "median2": "义务教育英语教师, 义务教育艺体科教师, 高中学段（含职校）理工科教师, 高中学段（含职校）艺体科教师",
            "standardDeviation2": "高中学段（含职校）理工科教师"
          }
        },
      },
    ],
  },
  {
    title: "1.1.2.2 教学实践",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabelAddr, yData: tabbleData_jxsj_chart.average1, legend: [legendObj["0"]], xName: legendObj["0"] },
      { xDataLable: xAxisLabelAddr, yData: tabbleData_jxsj_chart.median1, legend: [legendObj["1"]], xName: legendObj["1"] },
      { xDataLable: xAxisLabelAddr, yData: tabbleData_jxsj_chart.standardDeviation1, legend: [legendObj["2"]], xName: legendObj["2"] },
      { xDataLable: xAxisLabelAddr, yData: tabbleData_jxsj_chart.average2, legend: [legendObj["3"]], xName: legendObj["3"] },
      { xDataLable: xAxisLabelAddr, yData: tabbleData_jxsj_chart.median2, legend: [legendObj["4"]], xName: legendObj["4"] },
      { xDataLable: xAxisLabelAddr, yData: tabbleData_jxsj_chart.standardDeviation2, legend: [legendObj["5"]], xName: legendObj["5"] },
    ],
    tableData: tableData_jxsj,
    desc: {
      "self": {
        "average1": "义务教育英语教师",
        "median1": "幼儿园教师, 义务教育英语教师, 义务教育艺体科教师, 高中学段（含职校） 英语教师, 高中学段（含职校）艺体科教师",
        "standardDeviation1": "高中学段（含职校）社会科教师",
        "average2": "高中教育（含职业院校）语文教师",
        "median2": "高中教育（含职业院校）语文教师",
        "standardDeviation2": "义务教育英语教师"
      },
      "situ": {
        "average1": "幼儿园教师",
        "median1": "幼儿园教师",
        "standardDeviation1": "高中学段（含职校）社会科教师",
        "average2": "高中学段（含职校）社会科教师",
        "median2": "义务教育理工科教师, 高中学段（含职校）社会科教师, 高中学段（含职校）艺体科教师",
        "standardDeviation2": "幼儿园教师"
      }
    }
  },
  {
    title: "1.1.2.3 综合育人",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabelAddr, yData: tabbleData_zhyr_chart.average1, legend: [legendObj["0"]], xName: legendObj["0"] },
      { xDataLable: xAxisLabelAddr, yData: tabbleData_zhyr_chart.median1, legend: [legendObj["1"]], xName: legendObj["1"] },
      { xDataLable: xAxisLabelAddr, yData: tabbleData_zhyr_chart.standardDeviation1, legend: [legendObj["2"]], xName: legendObj["2"] },
      { xDataLable: xAxisLabelAddr, yData: tabbleData_zhyr_chart.average2, legend: [legendObj["3"]], xName: legendObj["3"] },
      { xDataLable: xAxisLabelAddr, yData: tabbleData_zhyr_chart.median2, legend: [legendObj["4"]], xName: legendObj["4"] },
      { xDataLable: xAxisLabelAddr, yData: tabbleData_zhyr_chart.standardDeviation2, legend: [legendObj["5"]], xName: legendObj["5"] },
    ],
    tableData: tableData_zhyr,
    desc: {
      "self": {
        "average1": "义务教育英语教师",
        "median1": "幼儿园教师, 义务教育语文教师, 义务教育数学教师, 义务教育英语教师, 义务教育艺体科教师, 高中学段（含职校） 英语教师, 高中学段（含职校）理工科教师",
        "standardDeviation1": "高中学段（含职校）社会科教师",
        "average2": "高中学段（含职校）数学教师",
        "median2": "高中教育（含职业院校）语文教师",
        "standardDeviation2": "义务教育英语教师"
      },
      "situ": {
        "average1": "幼儿园教师",
        "median1": "幼儿园教师",
        "standardDeviation1": "高中教育（含职业院校）语文教师",
        "average2": "高中学段（含职校）社会科教师",
        "median2": "高中学段（含职校）社会科教师",
        "standardDeviation2": "幼儿园教师"
      }
    },
  },
  {
    title: "1.1.2.4 自主发展",
    subTitle: "",
    desc: {
      "self": {
        "average1": "义务教育艺体科教师",
        "median1": "义务教育语文教师, 义务教育艺体科教师, 高中学段（含职校） 英语教师, 高中学段（含职校）艺体科教师",
        "standardDeviation1": "高中学段（含职校）数学教师",
        "average2": "高中学段（含职校）数学教师",
        "median2": "高中教育（含职业院校）语文教师",
        "standardDeviation2": "高中学段（含职校）理工科教师"
      },
      "situ": {
        "average1": "幼儿园教师",
        "median1": "幼儿园教师, 义务教育英语教师, 义务教育社会科教师, 义务教育理工科教师, 义务教育艺体科教师, 高中教育（含职业院校）语文教师, 高中学段（含职校）数学教师, 高中学段（含职校） 英语教师, 高中学段（含职校）理工科教师",
        "standardDeviation1": "义务教育艺体科教师",
        "average2": "高中学段（含职校）社会科教师",
        "median2": "义务教育语文教师, 义务教育数学教师, 高中学段（含职校）社会科教师, 高中学段（含职校）艺体科教师",
        "standardDeviation2": "幼儿园教师"
      }
    },
    chartDataList: [
      { xDataLable: xAxisLabelAddr, yData: tabbleData_zzfz_chart.average1, legend: [legendObj["0"]], xName: legendObj["0"] },
      { xDataLable: xAxisLabelAddr, yData: tabbleData_zzfz_chart.median1, legend: [legendObj["1"]],   xName: legendObj["1"]},
      { xDataLable: xAxisLabelAddr, yData: tabbleData_zzfz_chart.standardDeviation1, legend: [legendObj["2"]],  xName: legendObj["2"] },
      { xDataLable: xAxisLabelAddr, yData: tabbleData_zzfz_chart.average2, legend: [legendObj["3"]],  xName: legendObj["3"] },
      { xDataLable: xAxisLabelAddr, yData: tabbleData_zzfz_chart.median2, legend: [legendObj["4"]],  xName: legendObj["4"] },
      { xDataLable: xAxisLabelAddr, yData: tabbleData_zzfz_chart.standardDeviation2, legend: [legendObj["5"]],  xName: legendObj["5"] },
    ],
    tableData: tableData_zzfz,
  },
  {
    title: "1.2 整体及格率",
    subTitle: "",
    chartDataList: [
      { xDataLable: xAxisLabelAddr, yData: tableData_zthgl_chart.a, legend: ["合格率"], xName: "合格率" },
      { xDataLable: xAxisLabelAddr, yData: tableData_zthgl_chart.b, legend: ["合格率"], xName: "合格率" }
  
    ],
    tableData: tableData_zthgl,
  },
];
