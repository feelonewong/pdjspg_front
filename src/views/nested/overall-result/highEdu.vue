<template>
  <div class="container">
    <el-tabs
      v-model="activeName"
      @tab-click="handleTabClick($event, activeName)"
      type="border-card"
    >
      <h2>四、高中(含职校)学段调研结果</h2><br>
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
} from "@/constant/highEduCHN";
import {
  MATH_EDU_MODULE
} from '@/constant/highEduMath'
import {
  ENG_EDU_MODULE
} from '@/constant/highEduEng'
import {
  SOC_EDU_MODULE
} from '@/constant/highEduSoc'
import {
  CHEM_EDU_MODULE
} from '@/constant/highEduChem'
import {
  ART_EDU_MODULE
} from '@/constant/highEduArt'

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
</style>
