<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="login-wrapper">
        <div class="title-container">
          <h3 class="title">2023年</h3>
          <h3 class="title last-title">上海市浦东新区见习教师专业胜任力调查报告</h3>
        </div> 
        <div class="form-item-line">
          <el-form-item prop="password" style=" width: 300px; height: 42px;">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="请输入密码"
              name="password"
              tabindex="2"
              size="small"
              autocomplete="on"
              @keyup.native="checkCapslock"
              @blur="capsTooltip = false"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon
                :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
              />
            </span>
          </el-form-item>
          <el-form-item class="right-btn">
            <!-- <el-button
          :loading="loading"
          type="primary"
          >登录</el-button
        > -->
        <img src="../../assets/login-btn.png" 
        
        @click="handleLogin"
        
        alt="" style="width: 35px; margin-top: 10px;">
        
          </el-form-item>
        
        </div>   
          
      </div>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
import SocialSign from "./components/SocialSignin";

export default {
  name: "Login",
  components: { SocialSign },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("密码不能为空"));
      } else if (value.length < 4) {
        callback(new Error("密码不能少于4位数"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "admin",
        password: "",
      },
      imgSrc: '@/assets/login-btn.png',
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true,
    },
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === "") {
      this.$refs.username.focus();
    } else if (this.loginForm.password === "") {
      this.$refs.password.focus();
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock(e) {
      const { key } = e;
      this.capsTooltip = key && key.length === 1 && key >= "A" && key <= "Z";
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          if (this.loginForm.password !== "pdpx") {
            this.$message.error("当前密码不正确!");
            return false;
          } else {
            this.$message.success("登录成功!");
          }
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({
                path: this.redirect || "/",
                query: this.otherQuery,
              });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    },
  },
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #000;
$cursor: #000;



/* reset element-ui css */
.login-container {
  display: flex;
  padding-top: 10%;
  .el-input {
    display: inline-block;
    height: 32px;
    width: 55%;
    input {
      // background: transparent;
      border: 0px;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 32px;
      caret-color: $cursor;
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    // background: rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 5px;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;


.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  background-size: cover;
  background-image: url('../../assets/bg-5.jpg');
  // background-image: url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80);
  overflow: hidden;

  .login-form {
    position: relative;
    // width: 520px;
    width: 750px;
    max-width: 100%;
    padding: 0px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .form-item-line {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 32px;
      margin: 0px auto 20px auto;
      text-align: center;
      font-weight: bold;
      color: #fff;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
  .login-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

  }
  .right-btn{
    margin-left: 20px;
    background-color: transparent;
    border: 1px solid #3984be;
  }
  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
