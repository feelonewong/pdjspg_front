<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <template v-if="device !== 'mobile'">
        <!-- <search id="header-search" class="right-menu-item" /> -->

        <!-- <error-log class="errLog-container right-menu-item hover-effect" /> -->
        <screenfull id="screenfull" class="right-menu-item hover-effect" />

        <el-tooltip content="Global Size" effect="dark" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip>
      </template>

      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <el-button  size="medium" plain  style="padding: 10px;">
          更多<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <!-- <router-link to="/">
            <el-dropdown-item>Dashboard</el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a> -->
          <el-dropdown-item>
            <span style="display: block" @click="handleDownloadPrint">
              下载PDF报告（打印版）
            </span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span style="display: block" @click="handleDownloadPic">
              下载PDF报告（分图版）
            </span>
          </el-dropdown-item>
          <el-dropdown-item
            divided
            @click.native="logout"
            style="text-align: center"
          >
            <span style="display: block">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
import ErrorLog from "@/components/ErrorLog";
import Screenfull from "@/components/Screenfull";
import SizeSelect from "@/components/SizeSelect";
import Search from "@/components/HeaderSearch";
import FileSaver from "file-saver";
export default {
  components: {
    Breadcrumb,
    Hamburger,
    Search,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar", "device"]),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      
       this.$confirm('是否退出当前系统?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          await this.$store.dispatch("user/logout");
          this.$router.push(`/login?redirect=${this.$route.fullPath}`);
          this.$message({
            type: 'success',
            message: '已退出!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });          
        });
    },
    handleDownloadPic(){
      let fileName = "浦东新区见习教师专业胜任力调查报告.pdf";
      let filePath =
        "https://seslms-open-ai-study-net.oss-cn-shanghai.aliyuncs.com/pdpx-open-ai-study-net/bg/%E6%B5%A6%E4%B8%9C%E6%96%B0%E5%8C%BA%E8%A7%81%E4%B9%A0%E6%95%99%E5%B8%88%E4%B8%93%E4%B8%9A%E8%83%9C%E4%BB%BB%E5%8A%9B%E8%B0%83%E6%9F%A5%E6%8A%A5%E5%91%8A1.pdf";
      var oReq = new XMLHttpRequest();
      var URL = filePath; // URL 为URL地址
      oReq.open("GET", URL, true);
      oReq.responseType = "blob";
      oReq.onload = function () {
        var file = new Blob([oReq.response], {
          type: "blob",
        });
        FileSaver.saveAs(file, fileName); // that.name为文件名
      };
      oReq.send();

    },
    handleDownloadPrint(){
      let fileName = "浦东新区见习教师专业胜任力调查报告.pdf";
      let filePath =
        "https://seslms-open-ai-study-net.oss-cn-shanghai.aliyuncs.com/pdpx-open-ai-study-net/bg/%E6%B5%A6%E4%B8%9C%E6%96%B0%E5%8C%BA%E8%A7%81%E4%B9%A0%E6%95%99%E5%B8%88%E4%B8%93%E4%B8%9A%E8%83%9C%E4%BB%BB%E5%8A%9B%E8%B0%83%E6%9F%A5%E6%8A%A5%E5%91%8A2.pdf";
      var oReq = new XMLHttpRequest();
      var URL = filePath; // URL 为URL地址
      oReq.open("GET", URL, true);
      oReq.responseType = "blob";
      oReq.onload = function () {
        var file = new Blob([oReq.response], {
          type: "blob",
        });
        FileSaver.saveAs(file, fileName); // that.name为文件名
      };
      oReq.send();
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 0px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
