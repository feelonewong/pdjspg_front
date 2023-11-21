<template>
  <div class="container">
    <h2>五、人口学信息调查结果</h2>
    <template v-for="(item, index) in personList">
      <section :key="index">
        <h2>{{ item.title }}</h2>
        <div class="section-wrap">
          <div>
            <DescComp :descInfo="item.desc" v-if="index !==6"></DescComp>
          </div>
          <p style="font-size: 19px;">柱状图 总分与各维度分对比情况</p>
          <div>
            <PersonChart :chartData="item.chart"></PersonChart>
          </div>
          <template v-if="index === 6">
            <el-table border :data="item.tableData" style="width: 80%;margin: 0 auto;">
              <el-table-column align="center" prop="selection" label="选项"></el-table-column>
              <el-table-column align="center" prop="count" label="次数"></el-table-column>
            </el-table>
          </template>
        </div>
      </section>
    </template>
  </div>
</template>
<script>
import {Person_List } from "@/constant/personData"
import PersonChart from '@/views/nested/overall-result/components/person-chart.vue'
import DescComp from '@/views/nested/overall-result/components/person-desc.vue'
export default {
  components: {
    PersonChart,
    DescComp
  },
  data(){
    return{
      personList: []
    }
  },
  mounted(){
    this.personList = Person_List
  }
}
</script>
<style lang="scss" scoped>
h2 {
  margin-top: 20px;
  margin-left: 20px;
  display: inline-block;
  position: relative;
  color: #409eff;
}
h3 {
  margin-top: 20px;
  display: inline;
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
.section-wrap {
  padding: 10px 20px;
}
.container {
  margin-bottom: 50px;
}

.container {
  ::v-deep {
    tr {
      font-size: 18px;
    }
}
}
</style>
