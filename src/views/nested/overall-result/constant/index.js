const tableConfig = [
    {
        label: '学科/登记',
        prop: 'name',
    },
    {
        label: '优秀',
        prop: 'excellent',
    },
    {
        label: '良好',
        prop: 'good',
    },
    {
        label: '及格',
        prop: 'pass',
    },
    {
        label: '不及格',
        prop: 'fail',
    },
]
export const NewFourModuleResult =  [
    {
        title: '1.2.2 职业态度',
        subTitle: '全区职业态度得分率与得分分布情况',
        secondTitle: '1.2.2全区职业态度平均分、中位数及标准差',
        scoreChartData: {
            "scoreRateDistribution":[
                "95.83",
                "20.73",
                "16.70",
                "11.46",
                "7.68",
                "10.51",
                "6.01",
                "4.73",
                "2.60",
                "2.41",
                "2.91",
                "4.79",
                "1.50",
                "3.81"
            ],
        },
        
        card: {
            title: '全区职业态度得分率',
            scoreRoting: '111',
            max: 'ssss',
            min: '333333',
            type: '职业态度'
        },
        pieChart: {
            "0": [{name: '优秀',}],
            "1": [{name: '优秀',}],
            "2": [{name: '优秀',}],
            "3": [{name: '优秀',}],
            "4": [{name: '优秀',}]
        },
        tableInfo: {
            data: [],
            config: tableConfig
        }
    },
    {
        title: '1.2.3 教学实践',
        subTitle: '全区教学实践得分率与得分分布情况',
        secondTitle: '1.2.2全区教学实践平均分、中位数及标准差',
        card: {
            title: '全区职业态度得分率',
            scoreRoting: '111',
            max: 'ssss',
            min: '333333',
            type: '教学实践'
        },
        tableInfo: {
            data: [],
            config: tableConfig
        }
    },
    {
        title: '1.2.2 综合育人',
        subTitle: '1.2.4.1 全区综合育人得分率与得分分布情况',
        secondTitle: '1.2.4.2全区综合育人平均分、中位数及标准差',
        card: {
            title: '全区职业态度得分率',
            scoreRoting: '111',
            max: 'ssss',
            min: '333333',
            type: '综合育人'
        },
        tableInfo: {
            data: [],
            config: tableConfig
        }
    },
    {
        title: '1.2.2 自主发展',
        subTitle: '1.2.5.1 全区自主发展得分率与得分分布情况',
        secondTitle: '1.2.5.2 全区自主发展平均分、中位数及标准差',
        card: {
            title: '全区职业态度得分率',
            scoreRoting: '111',
            max: 'ssss',
            min: '333333',
            type: '自主发展'
        },
        tableInfo: {
            data: [],
            config: tableConfig
        }
    }
]

export const RadarOptions =  [
    { name: "学前教育教师", max: 100 },
    { name: "义务教育语文科教师", max: 100 },
    { name: "义务教育数学科教师", max: 100 },
    { name: "义务教育英语科教师", max: 100 },
    { name: "义务教育社会科教师", max: 100 },
    { name: "义务教育理工科教师", max: 100 },
    { name: "义务教育艺体科教师", max: 100 },
    { name: "高中教育语文科教师", max: 100 },
    { name: "高中教育数学科教师", max: 100 },
    { name: "高中教育英语科教师", max: 100 },
    { name: "高中教育社会科教师", max: 100 },
    { name: "高中教育理工科教师", max: 100 },
    { name: "高中教育艺体科教师", max: 100 },
]