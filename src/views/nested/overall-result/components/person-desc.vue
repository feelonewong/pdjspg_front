<template>
  <div>
    <div class="tip">
      <h3>对于浦东新区来说:</h3>
      <p v-for="item in descInfo.factionList">
      <span class="f600w">{{ item.name }}</span>总分平均分为{{ item.average }}, 标准差为{{ item.standardDeviation }}。
      </p>
      <!-- <p>
        <span class="suc">{{ descInfo.self.median1 }}</span>中位数最高，<span
          class="err"
          >{{ descInfo.self.median2 }}</span
        >中位数最低；
      </p> -->
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
<style scoped>
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

</style>