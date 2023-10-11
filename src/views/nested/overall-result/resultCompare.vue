<template>
  <div class="container">
    <h2>五、结果比较</h2><br>
    <h2 class="second">5.1 总体得分校际差异</h2> <br>
    <el-input class="input-area" v-model="allValue" type="textarea"  :rows="10" placeholder="" />
    <br>
    <h2 class="second">5.2 各维度得分校际差异</h2><br>
    <el-input class="input-area" v-model="everyValue" type="textarea" :rows="10" placeholder="" />

  </div>
</template>
<script>
export default {
  data() {
    return {
      allValue: '',
      everyValue: ''
    }
  }
}
</script>
<style lang="scss" scoped>
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
.input-area {
  width: 80%; 
  margin-left: 10%;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 50px;
}
</style>
