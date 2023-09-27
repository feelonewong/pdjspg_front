<template>
  <div>
    <div class="tip">
      <h3>全区所有学科来说:</h3>
      <p>
        <span class="f600w">{{ cardInfo.name }}</span
        >{{ cardInfo.type }}得分率为{{ cardInfo.scoreRoting }},
        得分率最高的学科为: {{ cardInfo.max }}。最低的学位为:
        {{ cardInfo.min }}。
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cardInfo: Object,
    default: () => {},
  },
};
</script>
<style scoped>
.tip {
  padding: 8px 16px;
  width: 80%;
  background-color: #ecf8ff;
  border-radius: 4px;
  border-left: 5px solid #50bfff;
  margin: 20px 0;
  margin-left: auto;
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
