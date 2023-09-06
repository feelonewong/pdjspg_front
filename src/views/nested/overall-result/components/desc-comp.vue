<template>
  <div>
    <div class="tip">
      <h3>在自陈问题方面:</h3>
      <p>
        <span class="suc">{{ descInfo.self.average1 }}</span>平均分最高，<span class="err"
          >{{ descInfo.self.average2 }}</span
        >平均分最低，
      </p>
      <p>
        <span class="suc">{{ descInfo.self.standardDeviation1 }}</span>标准差最大，<span
          class="err"
          >{{ descInfo.self.standardDeviation2 }}</span
        >标准差最小；
      </p>
      <p>
        <span class="suc">{{ descInfo.self.median1 }}</span>中位数最高，<span
          class="err"
          >{{ descInfo.self.median2 }}</span
        >中位数最低；
      </p>
      <h3>在情景问题方面:</h3>
      <p>
        <span class="suc">{{ descInfo.situ.average1 }}</span>平均分最高，<span class="err"
          >{{ descInfo.situ.average2 }}</span
        >平均分最低，
      </p>
      <p>
        <span class="suc">{{ descInfo.situ.standardDeviation1 }}</span>标准差最大，<span
          class="err"
          >{{descInfo.situ.standardDeviation2}}</span
        >标准差最小；
      </p>
      <p>
        <span class="suc">{{ descInfo.situ.median1 }}</span>中位数最高，<span
          class="err"
          >{{ descInfo.situ.median2 }}</span
        >中位数最低；
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

</style>