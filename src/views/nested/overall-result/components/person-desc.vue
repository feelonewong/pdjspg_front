<template>
  <div>
    <div class="tip">
      <h3>对于浦东新区来说:</h3>
      <p v-for="item in descInfo.factionList" class="fz19">
      <span class="f600w">{{ item.name }}</span>总分平均分为{{ item.average }}, 标准差为{{ item.standardDeviation }}。
      </p>
      <p class="fz19" v-for="item in descInfo.typeList">
      在<span class="f600w">{{ item.tag }}</span>维度, <span class="f600w">{{ item.type1 }}</span>总分显著高于{{ item.type2 }}总分
      </p>
      <el-alert
        title="M ± SD"
        type="success"
        style="width: 50%;"
        closable="false"
        description="表示为平均数±标准差"
        :closable="false"
        show-icon>
      </el-alert>
      <p v-for="item in descInfo.averageList" class="fz19">
      <span>{{ item.tag }}</span>总分(M ± SD)：{{ item.num0 }} <span style="margin-right: 1em;"></span> 职业态度(M ± SD)：{{ item.num1 }}<span style="margin-right: 1em;"></span> 教学实践(M ± SD)：{{ item.num2 }}<span style="margin-right: 1em;"></span> 综合育人(M ± SD)：{{ item.num3 }}<span style="margin-right: 1em;"></span> 自主发展(M ± SD)：{{ item.num4 }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        descInfo: Object,
        default: ()=> {}
    }
}
</script>
<style scoped lang="scss">
 .tip {
    padding: 8px 16px;
    width: 80%;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    margin: 20px 0;
    margin-left:  auto;
    margin-right: auto;
}
 p {
    font-size: 16px;
    color: #5e6d82;
    line-height: 1.5em;
}

.suc {
  color: #409eff;
}
.err {
  color: #f56c6c;
}
.f600w {
  font-weight: 600;
}
.fz19 {
  font-size: 19px;
}

</style>