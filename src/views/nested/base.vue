<template>
  <div class="container">
    <h2>一、调研背景</h2>
    <p>鉴于以上背景，XX委托XX于2023年8月开展了调研活动</p>
    <h2>二、调研目的</h2>
    <p>
      整体把握上海市浦东新区义务教育学校新进教师的教师专业素养状况，统计分析浦东新区新进教师的专业素养特点及其存在的问题，为进一步提升浦东新区教师专业素养，切实推进教师队伍建设提供有效支撑。
    </p>
    <h2>三、工作开展</h2>
    <p>
      本次调研是在XX领导下，由XX提供支持，上海教育软件发展有限公司提供平台和技术支持。
    </p>
    <h2>四、调研对象</h2>
    <p>
      本次调研对象覆盖上海市浦东新区新进教师XXX名，XXX学段，学校XX所，涵盖XXX学科，具体数据如下。
    </p>
    <el-table :data="researchTableData" border style="width: 50%">
      <el-table-column prop="period" label="学段" align="center" />
      <el-table-column prop="subject" label="学科" align="center" />
      <el-table-column prop="teachCount" label="教师人数" align="center" />
    </el-table>
    <h2>五、调研内容与工具</h2>
    <p>
      本次教师素养调研的内容涵盖“职业态度”、“教学实践”、“综合育人”和“自主发展”四部分，具体结构如下表所示。
    </p>
    <div>
      <p>幼儿园教师专业素养指标体系</p>
    </div>
    <el-table :data="contentTableData" border style="width: 80%" :span-method="objectSpanMethod" height="500">
      <el-table-column prop="first" width="120" label="一级" align="center" />
      <el-table-column prop="second" width="180" label="二级" align="center" />
      <el-table-column prop="third" label="三级" align="center" />
    </el-table>
    <div>
      <p>义务教育、高中含职校教师专业素养指标体系</p>
    </div>
    <el-table :data="contentTableData" border style="width: 80%" :span-method="objectSpanMethod" height="500">
      <el-table-column prop="first" width="120" label="一级" align="center" />
      <el-table-column prop="second" width="180" label="二级" align="center" />
      <el-table-column prop="third" label="三级" align="center" />
    </el-table>
    <p>
      本次教师专业素养调研采用计算机在线调研模式，分为自陈量表和情境问题两类，各36题。
      自陈量表主要是考察理论性知识，每道题目选项包含A非常不同意；B不同意；C基本同意；D比较同意；E非常同意。赋分为A=1分、B=2分、C=3分、D=4分、E=5分，每个题项比重一致，无加权。本部分得分为各题项相加。统计结果为不合格（107分及以下）、合格（108-135分）、良好（136-162分）和优秀（163-180）四个等第。
    </p>
    <p>
      情境问题主要是考察实践性知识，每道题只有一个最优答案。本部分记分规则为：选择最优答案计5分，其余答案计0分。每个题项比重一致，无加权。本部分得分为各题项相加。统计结果分为不合格（107分及以下）、合格（108-135分）、良好（136-162分）和优秀（163-180）四个等第。
    </p>

  </div>
</template>

<script>
import { ContentTableData, ResearchTableData } from '@/constant/base'
export default {
  name: '',
  data() {
    return {
      researchTableData: [],
      contentTableData: [],
      testArr1: [],
      testArr2: [],
      testPosition1: 0,
      testPosition2: 0
    }
  },
  created() {},
  mounted() {
    this.researchTableData = ResearchTableData
    this.contentTableData = ContentTableData
    this.rowspan(this.testArr1, this.testPosition1, 'first')
    this.rowspan(this.testArr2, this.testPosition2, 'second')
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        const _row = this.testArr1[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
      if (columnIndex === 1) {
        const _row = this.testArr2[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    },
    rowspan(spanArr, position, spanName) {
      this.contentTableData.forEach((item, index) => {
        if (index === 0) {
          spanArr.push(1)
          position = 0
        } else {
          if (
            this.contentTableData[index][spanName] ===
            this.contentTableData[index - 1][spanName]
          ) {
            spanArr[position] += 1
            spanArr.push(0)
          } else {
            spanArr.push(1)
            position = index
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.container {
  margin: 20px;
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2 {
  margin-top: 20px;
  display: inline-block;
  position: relative;
  color: #409eff;
}

h2::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  background-color: #409eff;
  bottom: -5px;
  left: 0;
}
p {
  margin-bottom: 10px;
}
</style>
