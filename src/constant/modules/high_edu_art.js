import { toSingleArr } from '../ObjArrayToSingleArr.js';

// 高中艺术学科-学科教学表格
export const art_tableData_0 = [
  {
    "villagesAndTowns": "北蔡镇",
    "numberOfPeople": 1,
    "average1": 163.0,
    "average2": 165.0,
    "median1": 163.0,
    "median2": 165.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "川沙新镇",
    "numberOfPeople": 1,
    "average1": 180.0,
    "average2": 140.0,
    "median1": 180.0,
    "median2": 140.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "大团镇",
    "numberOfPeople": 1,
    "average1": 180.0,
    "average2": 150.0,
    "median1": 180.0,
    "median2": 150.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "东明路街道",
    "numberOfPeople": 1,
    "average1": 144.0,
    "average2": 140.0,
    "median1": 144.0,
    "median2": 140.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "高行镇",
    "numberOfPeople": 1,
    "average1": 177.0,
    "average2": 160.0,
    "median1": 177.0,
    "median2": 160.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "沪东新村街道",
    "numberOfPeople": 2,
    "average1": 148.5,
    "average2": 150.0,
    "median1": 148.5,
    "median2": 150.0,
    "standardDeviation1": 6.36,
    "standardDeviation2": 7.07
  },
  {
    "villagesAndTowns": "花木街道",
    "numberOfPeople": 2,
    "average1": 165.5,
    "average2": 142.5,
    "median1": 165.5,
    "median2": 142.5,
    "standardDeviation1": 4.95,
    "standardDeviation2": 3.54
  },
  {
    "villagesAndTowns": "惠南镇",
    "numberOfPeople": 2,
    "average1": 150.0,
    "average2": 142.5,
    "median1": 150.0,
    "median2": 142.5,
    "standardDeviation1": 9.9,
    "standardDeviation2": 3.54
  },
  {
    "villagesAndTowns": "金杨新村街道",
    "numberOfPeople": 5,
    "average1": 176.0,
    "average2": 146.0,
    "median1": 180.0,
    "median2": 150.0,
    "standardDeviation1": 5.87,
    "standardDeviation2": 5.48
  },
  {
    "villagesAndTowns": "康桥镇",
    "numberOfPeople": 5,
    "average1": 180.0,
    "average2": 137.0,
    "median1": 180.0,
    "median2": 140.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 13.51
  },
  {
    "villagesAndTowns": "陆家嘴街道",
    "numberOfPeople": 2,
    "average1": 157.0,
    "average2": 145.0,
    "median1": 157.0,
    "median2": 145.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 7.07
  },
  {
    "villagesAndTowns": "南汇新城镇",
    "numberOfPeople": 2,
    "average1": 180.0,
    "average2": 140.0,
    "median1": 180.0,
    "median2": 140.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 14.14
  },
  {
    "villagesAndTowns": "南码头路街道",
    "numberOfPeople": 1,
    "average1": 159.0,
    "average2": 145.0,
    "median1": 159.0,
    "median2": 145.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "泥城镇",
    "numberOfPeople": 1,
    "average1": 180.0,
    "average2": 140.0,
    "median1": 180.0,
    "median2": 140.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "三林镇",
    "numberOfPeople": 4,
    "average1": 170.5,
    "average2": 137.5,
    "median1": 177.0,
    "median2": 142.5,
    "standardDeviation1": 15.26,
    "standardDeviation2": 19.36
  },
  {
    "villagesAndTowns": "洋泾街道",
    "numberOfPeople": 2,
    "average1": 143.0,
    "average2": 147.5,
    "median1": 143.0,
    "median2": 147.5,
    "standardDeviation1": 9.9,
    "standardDeviation2": 3.54
  },
  {
    "villagesAndTowns": "张江镇",
    "numberOfPeople": 3,
    "average1": 172.0,
    "average2": 148.33,
    "median1": 180.0,
    "median2": 145.0,
    "standardDeviation1": 13.86,
    "standardDeviation2": 5.77
  },
  {
    "villagesAndTowns": "周浦镇",
    "numberOfPeople": 1,
    "average1": 180.0,
    "average2": 145.0,
    "median1": 180.0,
    "median2": 145.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "未知街道",
    "numberOfPeople": 5,
    "average1": 162.6,
    "average2": 147.0,
    "median1": 170.0,
    "median2": 145.0,
    "standardDeviation1": 15.66,
    "standardDeviation2": 9.08
  }
]

  
// 高中艺术学科-学科教学chart图
export const art_chart_obj_0 = {
  average1: toSingleArr(art_tableData_0, 'average1'),
  median1: toSingleArr(art_tableData_0, 'median1'),
  standardDeviation1: toSingleArr(art_tableData_0, 'standardDeviation1'),
  average2: toSingleArr(art_tableData_0, 'average2'),
  median2: toSingleArr(art_tableData_0, 'median2'),
  standardDeviation2: toSingleArr(art_tableData_0, 'standardDeviation2'),
}


// 1.高中艺术学科-职业态度表格
export const art_tableData_1 = [
  {
    "villagesAndTowns": "北蔡镇",
    "numberOfPeople": 1,
    "average1": 30.0,
    "average2": 30.0,
    "median1": 30.0,
    "median2": 30.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "川沙新镇",
    "numberOfPeople": 1,
    "average1": 30.0,
    "average2": 25.0,
    "median1": 30.0,
    "median2": 25.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "大团镇",
    "numberOfPeople": 1,
    "average1": 30.0,
    "average2": 30.0,
    "median1": 30.0,
    "median2": 30.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "东明路街道",
    "numberOfPeople": 1,
    "average1": 24.0,
    "average2": 30.0,
    "median1": 24.0,
    "median2": 30.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "高行镇",
    "numberOfPeople": 1,
    "average1": 30.0,
    "average2": 25.0,
    "median1": 30.0,
    "median2": 25.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "沪东新村街道",
    "numberOfPeople": 2,
    "average1": 27.0,
    "average2": 27.5,
    "median1": 27.0,
    "median2": 27.5,
    "standardDeviation1": 4.24,
    "standardDeviation2": 3.54
  },
  {
    "villagesAndTowns": "花木街道",
    "numberOfPeople": 2,
    "average1": 29.5,
    "average2": 25.0,
    "median1": 29.5,
    "median2": 25.0,
    "standardDeviation1": 0.71,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "惠南镇",
    "numberOfPeople": 2,
    "average1": 27.5,
    "average2": 27.5,
    "median1": 27.5,
    "median2": 27.5,
    "standardDeviation1": 3.54,
    "standardDeviation2": 3.54
  },
  {
    "villagesAndTowns": "金杨新村街道",
    "numberOfPeople": 5,
    "average1": 30.0,
    "average2": 26.0,
    "median1": 30.0,
    "median2": 25.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 2.24
  },
  {
    "villagesAndTowns": "康桥镇",
    "numberOfPeople": 5,
    "average1": 30.0,
    "average2": 25.0,
    "median1": 30.0,
    "median2": 25.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "陆家嘴街道",
    "numberOfPeople": 2,
    "average1": 29.5,
    "average2": 25.0,
    "median1": 29.5,
    "median2": 25.0,
    "standardDeviation1": 0.71,
    "standardDeviation2": 7.07
  },
  {
    "villagesAndTowns": "南汇新城镇",
    "numberOfPeople": 2,
    "average1": 30.0,
    "average2": 22.5,
    "median1": 30.0,
    "median2": 22.5,
    "standardDeviation1": 0.0,
    "standardDeviation2": 3.54
  },
  {
    "villagesAndTowns": "南码头路街道",
    "numberOfPeople": 1,
    "average1": 30.0,
    "average2": 20.0,
    "median1": 30.0,
    "median2": 20.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "泥城镇",
    "numberOfPeople": 1,
    "average1": 30.0,
    "average2": 25.0,
    "median1": 30.0,
    "median2": 25.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "三林镇",
    "numberOfPeople": 4,
    "average1": 28.0,
    "average2": 26.25,
    "median1": 29.0,
    "median2": 27.5,
    "standardDeviation1": 2.83,
    "standardDeviation2": 4.79
  },
  {
    "villagesAndTowns": "洋泾街道",
    "numberOfPeople": 2,
    "average1": 30.0,
    "average2": 27.5,
    "median1": 30.0,
    "median2": 27.5,
    "standardDeviation1": 0.0,
    "standardDeviation2": 3.54
  },
  {
    "villagesAndTowns": "张江镇",
    "numberOfPeople": 3,
    "average1": 29.0,
    "average2": 26.67,
    "median1": 30.0,
    "median2": 25.0,
    "standardDeviation1": 1.73,
    "standardDeviation2": 2.89
  },
  {
    "villagesAndTowns": "周浦镇",
    "numberOfPeople": 1,
    "average1": 30.0,
    "average2": 30.0,
    "median1": 30.0,
    "median2": 30.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "未知街道",
    "numberOfPeople": 5,
    "average1": 24.6,
    "average2": 24.0,
    "median1": 30.0,
    "median2": 25.0,
    "standardDeviation1": 10.48,
    "standardDeviation2": 5.48
  }
]
  
// 1.高中艺术学科——职业态度chart图
export const art_chart_obj_1 = {
    average1: toSingleArr(art_tableData_1, 'average1'),
    median1: toSingleArr(art_tableData_1, 'median1'),
    standardDeviation1: toSingleArr(art_tableData_1, 'standardDeviation1'),
    average2: toSingleArr(art_tableData_1, 'average2'),
    median2: toSingleArr(art_tableData_1, 'median2'),
    standardDeviation2: toSingleArr(art_tableData_1, 'standardDeviation2'),
  }
// 2.高中艺术学科-保教知识与能力表格
export const art_tableData_2 =[
  {
    "villagesAndTowns": "北蔡镇",
    "numberOfPeople": 1,
    "average1": 55.0,
    "average2": 55.0,
    "median1": 55.0,
    "median2": 55.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "川沙新镇",
    "numberOfPeople": 1,
    "average1": 60.0,
    "average2": 40.0,
    "median1": 60.0,
    "median2": 40.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "大团镇",
    "numberOfPeople": 1,
    "average1": 60.0,
    "average2": 40.0,
    "median1": 60.0,
    "median2": 40.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "东明路街道",
    "numberOfPeople": 1,
    "average1": 48.0,
    "average2": 45.0,
    "median1": 48.0,
    "median2": 45.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "高行镇",
    "numberOfPeople": 1,
    "average1": 58.0,
    "average2": 55.0,
    "median1": 58.0,
    "median2": 55.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "沪东新村街道",
    "numberOfPeople": 2,
    "average1": 48.0,
    "average2": 50.0,
    "median1": 48.0,
    "median2": 50.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "花木街道",
    "numberOfPeople": 2,
    "average1": 56.5,
    "average2": 45.0,
    "median1": 56.5,
    "median2": 45.0,
    "standardDeviation1": 0.71,
    "standardDeviation2": 7.07
  },
  {
    "villagesAndTowns": "惠南镇",
    "numberOfPeople": 2,
    "average1": 48.5,
    "average2": 50.0,
    "median1": 48.5,
    "median2": 50.0,
    "standardDeviation1": 3.54,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "金杨新村街道",
    "numberOfPeople": 5,
    "average1": 58.0,
    "average2": 48.0,
    "median1": 60.0,
    "median2": 45.0,
    "standardDeviation1": 4.47,
    "standardDeviation2": 4.47
  },
  {
    "villagesAndTowns": "康桥镇",
    "numberOfPeople": 5,
    "average1": 60.0,
    "average2": 45.0,
    "median1": 60.0,
    "median2": 45.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 7.91
  },
  {
    "villagesAndTowns": "陆家嘴街道",
    "numberOfPeople": 2,
    "average1": 49.5,
    "average2": 45.0,
    "median1": 49.5,
    "median2": 45.0,
    "standardDeviation1": 2.12,
    "standardDeviation2": 7.07
  },
  {
    "villagesAndTowns": "南汇新城镇",
    "numberOfPeople": 2,
    "average1": 60.0,
    "average2": 47.5,
    "median1": 60.0,
    "median2": 47.5,
    "standardDeviation1": 0.0,
    "standardDeviation2": 3.54
  },
  {
    "villagesAndTowns": "南码头路街道",
    "numberOfPeople": 1,
    "average1": 50.0,
    "average2": 40.0,
    "median1": 50.0,
    "median2": 40.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "泥城镇",
    "numberOfPeople": 1,
    "average1": 60.0,
    "average2": 40.0,
    "median1": 60.0,
    "median2": 40.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "三林镇",
    "numberOfPeople": 4,
    "average1": 57.0,
    "average2": 42.5,
    "median1": 58.0,
    "median2": 42.5,
    "standardDeviation1": 3.83,
    "standardDeviation2": 6.45
  },
  {
    "villagesAndTowns": "洋泾街道",
    "numberOfPeople": 2,
    "average1": 44.0,
    "average2": 42.5,
    "median1": 44.0,
    "median2": 42.5,
    "standardDeviation1": 5.66,
    "standardDeviation2": 3.54
  },
  {
    "villagesAndTowns": "张江镇",
    "numberOfPeople": 3,
    "average1": 57.33,
    "average2": 51.67,
    "median1": 60.0,
    "median2": 55.0,
    "standardDeviation1": 4.62,
    "standardDeviation2": 5.77
  },
  {
    "villagesAndTowns": "周浦镇",
    "numberOfPeople": 1,
    "average1": 60.0,
    "average2": 45.0,
    "median1": 60.0,
    "median2": 45.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "未知街道",
    "numberOfPeople": 5,
    "average1": 55.4,
    "average2": 47.0,
    "median1": 60.0,
    "median2": 50.0,
    "standardDeviation1": 6.31,
    "standardDeviation2": 4.47
  }
]

  
  
// 2.高中艺术学科-保教知识与能力chart图
export const art_chart_obj_2 = {
  average1: toSingleArr(art_tableData_2, 'average1'),
  median1: toSingleArr(art_tableData_2, 'median1'),
  standardDeviation1: toSingleArr(art_tableData_2, 'standardDeviation1'),
  average2: toSingleArr(art_tableData_2, 'average2'),
  median2: toSingleArr(art_tableData_2, 'median2'),
  standardDeviation2: toSingleArr(art_tableData_2, 'standardDeviation2'),
}

// 3.高中艺术学科-综合育人表格
export const art_tableData_3 = [
  {
    "villagesAndTowns": "北蔡镇",
    "numberOfPeople": 1,
    "average1": 39.0,
    "average2": 45.0,
    "median1": 39.0,
    "median2": 45.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "川沙新镇",
    "numberOfPeople": 1,
    "average1": 45.0,
    "average2": 35.0,
    "median1": 45.0,
    "median2": 35.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "大团镇",
    "numberOfPeople": 1,
    "average1": 45.0,
    "average2": 40.0,
    "median1": 45.0,
    "median2": 40.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "东明路街道",
    "numberOfPeople": 1,
    "average1": 36.0,
    "average2": 35.0,
    "median1": 36.0,
    "median2": 35.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "高行镇",
    "numberOfPeople": 1,
    "average1": 44.0,
    "average2": 40.0,
    "median1": 44.0,
    "median2": 40.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "沪东新村街道",
    "numberOfPeople": 2,
    "average1": 37.0,
    "average2": 37.5,
    "median1": 37.0,
    "median2": 37.5,
    "standardDeviation1": 1.41,
    "standardDeviation2": 3.54
  },
  {
    "villagesAndTowns": "花木街道",
    "numberOfPeople": 2,
    "average1": 40.5,
    "average2": 40.0,
    "median1": 40.5,
    "median2": 40.0,
    "standardDeviation1": 2.12,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "惠南镇",
    "numberOfPeople": 2,
    "average1": 37.0,
    "average2": 32.5,
    "median1": 37.0,
    "median2": 32.5,
    "standardDeviation1": 0.0,
    "standardDeviation2": 3.54
  },
  {
    "villagesAndTowns": "金杨新村街道",
    "numberOfPeople": 5,
    "average1": 43.8,
    "average2": 38.0,
    "median1": 45.0,
    "median2": 35.0,
    "standardDeviation1": 1.64,
    "standardDeviation2": 4.47
  },
  {
    "villagesAndTowns": "康桥镇",
    "numberOfPeople": 5,
    "average1": 45.0,
    "average2": 34.0,
    "median1": 45.0,
    "median2": 35.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 4.18
  },
  {
    "villagesAndTowns": "陆家嘴街道",
    "numberOfPeople": 2,
    "average1": 39.0,
    "average2": 35.0,
    "median1": 39.0,
    "median2": 35.0,
    "standardDeviation1": 2.83,
    "standardDeviation2": 7.07
  },
  {
    "villagesAndTowns": "南汇新城镇",
    "numberOfPeople": 2,
    "average1": 45.0,
    "average2": 35.0,
    "median1": 45.0,
    "median2": 35.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "南码头路街道",
    "numberOfPeople": 1,
    "average1": 41.0,
    "average2": 40.0,
    "median1": 41.0,
    "median2": 40.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "泥城镇",
    "numberOfPeople": 1,
    "average1": 45.0,
    "average2": 35.0,
    "median1": 45.0,
    "median2": 35.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "三林镇",
    "numberOfPeople": 4,
    "average1": 42.75,
    "average2": 35.0,
    "median1": 45.0,
    "median2": 35.0,
    "standardDeviation1": 4.5,
    "standardDeviation2": 4.08
  },
  {
    "villagesAndTowns": "洋泾街道",
    "numberOfPeople": 2,
    "average1": 36.0,
    "average2": 37.5,
    "median1": 36.0,
    "median2": 37.5,
    "standardDeviation1": 0.0,
    "standardDeviation2": 3.54
  },
  {
    "villagesAndTowns": "张江镇",
    "numberOfPeople": 3,
    "average1": 43.0,
    "average2": 36.67,
    "median1": 45.0,
    "median2": 35.0,
    "standardDeviation1": 3.46,
    "standardDeviation2": 7.64
  },
  {
    "villagesAndTowns": "周浦镇",
    "numberOfPeople": 1,
    "average1": 45.0,
    "average2": 30.0,
    "median1": 45.0,
    "median2": 30.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "未知街道",
    "numberOfPeople": 5,
    "average1": 42.0,
    "average2": 39.0,
    "median1": 43.0,
    "median2": 40.0,
    "standardDeviation1": 3.74,
    "standardDeviation2": 4.18
  }
]
// 3.高中艺术学科-综合育人chart图
export const art_chart_obj_3 = {
  average1: toSingleArr(art_tableData_3, 'average1'),
  median1: toSingleArr(art_tableData_3, 'median1'),
  standardDeviation1: toSingleArr(art_tableData_3, 'standardDeviation1'),
  average2: toSingleArr(art_tableData_3, 'average2'),
  median2: toSingleArr(art_tableData_3, 'median2'),
  standardDeviation2: toSingleArr(art_tableData_3, 'standardDeviation2'),
}

// 4.高中艺术学科-自主发展表格
export const art_tableData_4 = 

[
  {
    "villagesAndTowns": "北蔡镇",
    "numberOfPeople": 1,
    "average1": 39.0,
    "average2": 35.0,
    "median1": 39.0,
    "median2": 35.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "川沙新镇",
    "numberOfPeople": 1,
    "average1": 45.0,
    "average2": 40.0,
    "median1": 45.0,
    "median2": 40.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "大团镇",
    "numberOfPeople": 1,
    "average1": 45.0,
    "average2": 40.0,
    "median1": 45.0,
    "median2": 40.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "东明路街道",
    "numberOfPeople": 1,
    "average1": 36.0,
    "average2": 30.0,
    "median1": 36.0,
    "median2": 30.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "高行镇",
    "numberOfPeople": 1,
    "average1": 45.0,
    "average2": 40.0,
    "median1": 45.0,
    "median2": 40.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "沪东新村街道",
    "numberOfPeople": 2,
    "average1": 36.5,
    "average2": 35.0,
    "median1": 36.5,
    "median2": 35.0,
    "standardDeviation1": 0.71,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "花木街道",
    "numberOfPeople": 2,
    "average1": 39.0,
    "average2": 32.5,
    "median1": 39.0,
    "median2": 32.5,
    "standardDeviation1": 2.83,
    "standardDeviation2": 3.54
  },
  {
    "villagesAndTowns": "惠南镇",
    "numberOfPeople": 2,
    "average1": 37.0,
    "average2": 32.5,
    "median1": 37.0,
    "median2": 32.5,
    "standardDeviation1": 2.83,
    "standardDeviation2": 3.54
  },
  {
    "villagesAndTowns": "金杨新村街道",
    "numberOfPeople": 5,
    "average1": 44.2,
    "average2": 34.0,
    "median1": 45.0,
    "median2": 35.0,
    "standardDeviation1": 1.79,
    "standardDeviation2": 2.24
  },
  {
    "villagesAndTowns": "康桥镇",
    "numberOfPeople": 5,
    "average1": 45.0,
    "average2": 33.0,
    "median1": 45.0,
    "median2": 35.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 5.7
  },
  {
    "villagesAndTowns": "陆家嘴街道",
    "numberOfPeople": 2,
    "average1": 39.0,
    "average2": 40.0,
    "median1": 39.0,
    "median2": 40.0,
    "standardDeviation1": 1.41,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "南汇新城镇",
    "numberOfPeople": 2,
    "average1": 45.0,
    "average2": 35.0,
    "median1": 45.0,
    "median2": 35.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 7.07
  },
  {
    "villagesAndTowns": "南码头路街道",
    "numberOfPeople": 1,
    "average1": 38.0,
    "average2": 45.0,
    "median1": 38.0,
    "median2": 45.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "泥城镇",
    "numberOfPeople": 1,
    "average1": 45.0,
    "average2": 40.0,
    "median1": 45.0,
    "median2": 40.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "三林镇",
    "numberOfPeople": 4,
    "average1": 42.75,
    "average2": 33.75,
    "median1": 45.0,
    "median2": 35.0,
    "standardDeviation1": 4.5,
    "standardDeviation2": 6.29
  },
  {
    "villagesAndTowns": "洋泾街道",
    "numberOfPeople": 2,
    "average1": 33.0,
    "average2": 40.0,
    "median1": 33.0,
    "median2": 40.0,
    "standardDeviation1": 4.24,
    "standardDeviation2": 7.07
  },
  {
    "villagesAndTowns": "张江镇",
    "numberOfPeople": 3,
    "average1": 42.67,
    "average2": 33.33,
    "median1": 45.0,
    "median2": 35.0,
    "standardDeviation1": 4.04,
    "standardDeviation2": 2.89
  },
  {
    "villagesAndTowns": "周浦镇",
    "numberOfPeople": 1,
    "average1": 45.0,
    "average2": 40.0,
    "median1": 45.0,
    "median2": 40.0,
    "standardDeviation1": 0.0,
    "standardDeviation2": 0.0
  },
  {
    "villagesAndTowns": "祝-未知街道",
    "numberOfPeople": 5,
    "average1": 40.6,
    "average2": 37.0,
    "median1": 40.0,
    "median2": 35.0,
    "standardDeviation1": 4.28,
    "standardDeviation2": 5.7
  }
]
  

// 4.高中艺术学科-自主发展chart图
export const art_chart_obj_4 = {
  average1: toSingleArr(art_tableData_4, 'average1'),
  median1: toSingleArr(art_tableData_4, 'median1'),
  standardDeviation1: toSingleArr(art_tableData_4, 'standardDeviation1'),
  average2: toSingleArr(art_tableData_4, 'average2'),
  median2: toSingleArr(art_tableData_4, 'median2'),
  standardDeviation2: toSingleArr(art_tableData_4, 'standardDeviation2'),
}

// 5.高中艺术学科-教学整体合格率
export const art_tableData_5 = [
  {
    "villagesAndTowns": "北蔡镇",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "川沙新镇",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "大团镇",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "东明路街道",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "高行镇",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "沪东新村街道",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "花木街道",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "惠南镇",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "金杨新村街道",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "康桥镇",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "陆家嘴街道",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "南汇新城镇",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "南码头路街道",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "泥城镇",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "三林镇",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "洋泾街道",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "张江镇",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "周浦镇",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  },
  {
    "villagesAndTowns": "未知街道",
    "selfReportedPassingRate": 100.0,
    "situationPassingRate": 100.0
  }
]

// 5.高中艺术学科-教学整体合格率chart
export const art_chart_obj_5 = {
  a: toSingleArr(art_tableData_5, 'selfReportedPassingRate'),
  b: toSingleArr(art_tableData_5, 'situationPassingRate')
}
export const chart_label_arr= toSingleArr(art_tableData_5, 'villagesAndTowns')