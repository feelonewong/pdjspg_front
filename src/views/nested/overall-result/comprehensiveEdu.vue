<template>
  <div class="container">

    <el-tabs
      v-model="activeName"
      @tab-click="handleTabClick($event, activeName)"
      type="border-card"
    >
      <h2>三、义务教育学段调研结果</h2><br>
      <el-tab-pane label="语文" name="first">
        <CompEduModule :moduleData="chnEduModule"></CompEduModule>
      </el-tab-pane>
      <el-tab-pane label="数学" name="second">
        <CompEduModule :moduleData="mathEduModule"></CompEduModule>
      </el-tab-pane>
      <el-tab-pane label="英语" name="third">
        <CompEduModule :moduleData="engEduModule"></CompEduModule>
      </el-tab-pane>
      <el-tab-pane label="社会科" name="fourth">
        <CompEduModule :moduleData="socEduModule"></CompEduModule>
      </el-tab-pane>
      <el-tab-pane label="理工科" name="fiveth">
        <CompEduModule :moduleData="chemEduModule"></CompEduModule>
      </el-tab-pane>
      <el-tab-pane label="艺体科" name="sixth">
        <CompEduModule :moduleData="artEduModule"></CompEduModule>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import CompEduModule from "@/views/nested/overall-result/modules/compEduModule.vue";
import {
  CHN_EDU_MODULE,
} from "@/constant/compEduCHN";
import {
  MATH_EDU_MODULE,
} from '@/constant/compEduMath'
import {
  ENG_EDU_MODULE,
} from '@/constant/compEduEng'
import {
  SOC_EDU_MODULE
} from '@/constant/compEduSoc'
import {
  CHEM_EDU_MODULE
} from '@/constant/compEduChem'
import {
  ART_EDU_MODULE
} from '@/constant/compEduArt'
export default {
  components: {
    CompEduModule,
  },
  data() {
    return {
      chnEduModule: null,
      engEduModule: null,
      mathEduModule: null,
      socEduModule: null,
      chemEduModule: null,
      artEduModule: null,
      activeName: "first",
    };
  },
  mounted() {
    this.chnEduModule = CHN_EDU_MODULE;
  },
  methods: {
    handleTabClick(tab, val) {
      if (val === "first") {
        this.$nextTick(() => {
          this.chnEduModule = CHN_EDU_MODULE;
        });
      } else if (val === "second") {
        this.$nextTick(() => {
          this.mathEduModule = MATH_EDU_MODULE;
        });
      } else if (val === "third") {
        this.$nextTick(() => {
          this.engEduModule = ENG_EDU_MODULE;
        });
      } else if (val === "fourth") {
        this.$nextTick(() => {
          this.socEduModule = SOC_EDU_MODULE;
        });
      } else if (val === "fiveth") {
        this.$nextTick(() => {
          this.chemEduModule = CHEM_EDU_MODULE;
        });
      } else if (val === "sixth") {
        this.$nextTick(() => {
          this.artEduModule = ART_EDU_MODULE;
        });
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 10px;
}
h2 {
  margin-top: 10px;
  margin-left: 20px;
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
</style>
