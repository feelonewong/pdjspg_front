<template>
  <div class="container">
    <h2>一、全区调研结果</h2>
    <br />
    <template v-for="(item, idx) in resultData">
      <div :key="idx">
        <h2>{{ item.title }}</h2>
        <br />
        <h2 class="second">{{ item.subTitle }}</h2>
        <br />
        <template v-if="idx === 0">
          <div>
            <CommonEcharts :chartData="item.chartDataList[0]"></CommonEcharts>
          </div>
          <div style="margin-top: 20px">
            <ResultEcharts :chartData="item.otherCharData[0]"></ResultEcharts>
          </div>
          <div class="table-wrap">
            <ResultTable
              :TableData="item.tableData"
              style="width: 80%; display: flex; justify-self: center"
            ></ResultTable>
          </div>
          <p>{{ item.desc }}</p>
        </template>
        <template v-else-if="idx === 1">
          <template v-for="(child, childIdx) in item.children">
            <section :key="childIdx">
              <div
                v-for="(lastChild, lastIndex) in child.chartDataList"
                :key="lastIndex"
              >
                <CommonEcharts :chartData="lastChild"></CommonEcharts>
              </div>
              <div class="table-wrap">
                <ResultTable
                  :TableData="child.tableData"
                  style="width: 80%; display: flex; justify-self: center"
                ></ResultTable>
              </div>
              <div style="padding: 0 30px">
                <p>{{ child.desc }}</p>
              </div>
            </section>
          </template>
        </template>
        <template v-else>
          <template v-for="(child, childIdx) in item.chartDataList">
            <section :key="childIdx">
              <CommonEcharts :chartData="child"></CommonEcharts>
            </section>
          </template>
          <div class="table-wrap">
            <ResultTable
              :TableData="item.tableData"
              style="width: 80%; display: flex; justify-self: center"
            ></ResultTable>
          </div>
          <p>{{ item.desc }}</p>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import CommonEcharts from "@/views/nested/overall-result/components/common-echarts.vue";
import CommonTable from "@/views/nested/overall-result/components/common-table.vue";
import ResultEcharts from "@/views/nested/overall-result/components/result-echarts.vue";
import ResultTable from "@/views/nested/overall-result/components/result-table.vue";
import { RESULT_DATA } from "@/constant/result";
export default {
  components: {
    CommonEcharts,
    CommonTable,
    ResultTable,
    ResultEcharts,
  },
  data() {
    return {
      chartData: {},
      resultData: [],
      tableData: [],
    };
  },
  mounted() {
    this.resultData = RESULT_DATA;
  },
};
</script>
<style scoped>
.container {
  padding: 15px;
}
h2 {
  margin-top: 10px;
  margin-left: 20px;
  display: inline-block;
  position: relative;
  color: #409eff;
}
h3 {
  margin-top: 20px;
  display: inline-block;
  position: relative;
  color: #409eff;
}
h3,
h2::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  background-color: #409eff;
  bottom: -5px;
  left: 0;
}
.second {
  font-size: 20px;
  font-weight: 400;
}
.table-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
