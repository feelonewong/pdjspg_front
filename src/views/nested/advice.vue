<template>
  <div>
    <el-card class="box-card">
      <template v-for="(item, index) in adviceList">
        <div :key="index">
          <h2>{{ item.title }}</h2><br />
          <div v-for="(child, index) in item.children" :key="index">
            <h2 class="second">{{child.title}}</h2><br />
            <el-card class="box-card text">
  <!-- {{ child.value }} -->
  <div v-html="child.value"></div>
</el-card>
          </div>
        </div>
      </template>

    </el-card>
  </div>
</template>
<script>
import { ADVICE_LIST } from '@/constant/advice'
export default {
  data() {
    return {
      adviceList: []
    }
  },

  mounted() {
    this.adviceList = ADVICE_LIST
  }
}
</script>
<style scoped>
h2 {
  margin-top: 20px;
  margin-left: 20px;
  display: inline-block;
  position: relative;
  color: #409eff;
}
h3 {
  margin-top: 20px;
  display: inline-block;
  font-size: 24px;

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
p {
  margin-bottom: 10px;
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

.text {
    font-size: 19px;
    line-height: 2em;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 100%;
  }
</style>
