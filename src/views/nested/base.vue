<template>
  <div class="container">
    <h2>一、调研背景</h2>
    <p><span style="margin-left: 2em;">党的十八大以来,</span>习近平总书记高度重视教师工作，在不同场合多次强调教师工作的重要意义。2018年5月，习近平在北京大学师生座谈会上指出：“社会主义教育要培养社会主义建设者和接班人”“人才培养，关键在教师”；2021年4月，习近平在清华大学考察时强调：“要坚持把立德树人作为根本任务”“为党育人、为国育才”。
    </p>
    <p>
      <span style="margin-left: 2em;">浦东新区在国家</span> 和上海市相关政策背景和要求下，编制了《浦东新区教育发展“十四五”规划》。其中“十一”条指出“健全教师专业发展的支持体系”，
      提升教师培训实效。关键任务包含：“2.实施精准培训满足差异化需求”，
      根据教师专业水平，开展差异化精准培训，形成服务见习教师、青年教师、成熟型教师、优秀教师和专家型教师的层次化专业支持体系。
    </p>
    <p>
      <span style="margin-left: 2em;"></span> 同时，为提升见习教师师德修养，协助其迅速完成角色转变与岗位适应、补充所需基本知识与技能、加强教育教学实操能力，根据《浦东新区教师教育三年行动计划（2023-2025年）》（浦教人〔2023〕5号）“见习教师UGS（大学-政府-学校）分类岗前培训”的要求，浦东新区对2023学年见习教师进行暑期岗前培训。
    </p>
    <h2>二、调研目的</h2>
      <p><span style="font-weight: 600;">（1）把握见习教师专业胜任力发展情况</span></p> 
      <p>
        <span style="margin-left: 2em;"></span>通过对浦东新区2023年见习教师进行调查，整体把握2023年见习教师专业胜任力的发展情况，并在学科、学段、街道（社区）等维度上进行分析，全面、深度地呈现2023年见习教师专业胜任力发展情况，形成浦东区见习教师专业胜任力发展数据集。
      </p>  
      <p><span style="font-weight: 600;">（2）洞悉见习教师后续培训重点方向</span></p> 
      <p>
        <span style="margin-left: 2em;"></span>在分析浦东新区2023年见习教师专业胜任力发展情况的基础上，分析2023年见习教师专业胜任力发展存在的不足和问题，并提出见习教师后续培训的基本方向、主要任务和关键路径，为浦东新区探索基于证据的见习教师培训提供数据基础和参考建议，升区教师专业发展培训的针对性、科学性和实效性。
      </p>
    <h2>三、工作开展</h2>
    <p>
      本次调研在浦东区教育局领导下，在浦东区教育发展研究院指导下，由上海师范大学团队设计调研问卷、上海教育软件发展有限公司提供技术支持。调研结果分析由上海师范大学团队完成。
    </p>
    <h2>四、调研对象</h2>
    <p>
      本次调研对象覆盖上海市浦东新区新进教师 <span class="f-color">2545</span>名，包括<span class="f-color"> 幼儿园、小学、初中、高中、职校 </span>学段，学校<span class="f-color">428</span>所，涵盖<span class="f-color">61</span>学段学科，具体数据如下表。本次调研共计回收有效问卷 <span class="f-color">2537 </span>份。
    </p>
    <el-table
      :data="researchTableData"
      show-summary
      :summary-method="getSummaries"
      border
      style="width: 50%"
      :span-method="objectSpanMethod3"
      height="500"
    >
      <el-table-column prop="period" label="学段" align="center" />
      <el-table-column prop="subject" label="学科" align="center" />
      <el-table-column prop="teachCount" label="教师人数" align="center" />
    </el-table>
    <h2>五、调研内容与工具</h2>
    <p>
      本次教师素养调研的内容涵盖“职业态度”、“教学实践”、“综合育人”和“自主发展”四部分，具体结构如下表所示:
    </p>
    <div>
      <p>幼儿园教师专业素养指标体系</p>
    </div>
    <el-table
      :data="contentTableData2"
      border
      style="width: 80%"
      :span-method="objectSpanMethod2"
      height="500"
    >
      <el-table-column prop="first" width="120" label="一级" align="center" />
      <el-table-column prop="second" width="180" label="二级" align="center" />
      <el-table-column prop="third" label="三级" align="center" />
    </el-table>
    <div>
      <p>义务教育、高中含职校教师专业素养指标体系</p>
    </div>
    <el-table
      :data="contentTableData"
      border
      style="width: 80%"
      :span-method="objectSpanMethod"
      height="500"
    >
      <el-table-column prop="first" width="120" label="一级" align="center" />
      <el-table-column prop="second" width="180" label="二级" align="center" />
      <el-table-column prop="third" label="三级" align="center" />
    </el-table>
    <p>
      
    本次教师专业素养调研采用计算机在线调研模式，分为自陈量表和情境问题两类，各36题，共计72道题目。 
自陈问题主要是考察理论性知识，每道题目选项包含A非常不同意；B不同意；C基本同意；D比较同意；E非常同意。赋分为A=1分、B=2分、C=3分、D=4分、E=5分，每个题项比重一致，无加权。本部分得分为各题项相加。统计结果为待提升（161分及以下）、合格（162-172分）、良好（173-175分）和优秀（176-180）四个等第。
    </p>
    <p>
情境问题主要是考察实践性知识，每道题只有一个最优答案。本部分记分规则为：选择最优答案计5分，其余答案计0分。每个题项比重一致，无加权。本部分得分为各题项相加。统计结果分为待提升（161分及以下）、合格（162-172分）、良好（173-175分）和优秀（176-180）四个等第。
      
    </p>


  </div>
</template>

<script>
import {
  ContentTableData,
  ResearchTableData,
  ContentTableData2,
} from "@/constant/base";
export default {
  name: "",
  data() {
    return {
      researchTableData: [],
      contentTableData: [],
      contentTableData2: [],
      testArr1: [],
      testArr2: [],
      testArr3: [],
      testArr4: [],
      testArr5: [],
      testPosition1: 0,
      testPosition2: 0,
      testPosition3: 0,
      testPosition4: 0,
      testPosition5: 0,
    };
  },
  created() {},
  mounted() {
    this.researchTableData = ResearchTableData;
    this.contentTableData = ContentTableData;
    this.contentTableData2 = ContentTableData2;
    this.rowspan(this.testArr1, this.testPosition1, "first");
    this.rowspan(this.testArr2, this.testPosition2, "second");
    this.commonRowSpan(
      this.testArr3,
      this.testPosition3,
      "first",
      this.contentTableData2
    );
    this.commonRowSpan(
      this.testArr4,
      this.testPosition4,
      "second",
      this.contentTableData2
    );
    this.commonRowSpan(
      this.testArr5,
      this.testPosition5,
      "period",
      this.researchTableData
    );
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        const _row = this.testArr1[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col,
        };
      }
      if (columnIndex === 1) {
        const _row = this.testArr2[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col,
        };
      }
    },
    objectSpanMethod2({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        const _row = this.testArr3[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col,
        };
      }
      if (columnIndex === 1) {
        const _row = this.testArr4[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col,
        };
      }
    },
    objectSpanMethod3({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        const _row = this.testArr5[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col,
        };
      }
    },
    rowspan(spanArr, position, spanName) {
      this.contentTableData.forEach((item, index) => {
        if (index === 0) {
          spanArr.push(1);
          position = 0;
        } else {
          if (
            this.contentTableData[index][spanName] ===
            this.contentTableData[index - 1][spanName]
          ) {
            spanArr[position] += 1;
            spanArr.push(0);
          } else {
            spanArr.push(1);
            position = index;
          }
        }
      });
    },
    getSummaries(params) {
      const { columns, data } = params;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总计";
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        if (!values.every((value) => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index] = "";
        }
      });
      return sums;
    },
    commonRowSpan(spanArr, position, spanName, navtiveArr) {
      navtiveArr.forEach((item, index) => {
        if (index === 0) {
          spanArr.push(1);
          position = 0;
        } else {
          if (navtiveArr[index][spanName] === navtiveArr[index - 1][spanName]) {
            spanArr[position] += 1;
            spanArr.push(0);
          } else {
            spanArr.push(1);
            position = index;
          }
        }
      });
    },
  },
};
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
.f-color {
  color: #409eff;
}
</style>
