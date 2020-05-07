<template>
  <div class="sign">
    <div class="logo">
      <a href="/">
        <img alt="Logo" src="../../assets/img/logo.png" />
      </a>
    </div>
    <div class="main">
      <h4 class="title">
        <div class="normal-title">
          <router-link :to="{ name: 'signIn' }" class="active">登录</router-link>
          <b>·</b>
          <router-link :to="{ name: 'signUp' }">注册</router-link>
        </div>
      </h4>
      <div class="sign-in-container">
        <el-form label-position="right" label-width="50px" ref="form" :model="loginForm" size="mini">
          <el-form-item label="账号:">
            <el-input v-model="userName" size="small"></el-input>
          </el-form-item>
          <el-form-item label="密码:">
            <el-input v-model="userPassword" size="small"></el-input>
          </el-form-item>
          <el-form-item>
            <router-link :to="{ name: 'forgePsw' }" class="forget">忘记密码?</router-link>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm" size="small" class="signBtn">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signIn',
  components: {},
  data: () => {
    return {
      userName: '',
      userPassword: '',
      loginForm: {},
    }
  },
  created() {
    console.log('看到我你就输了2')
  },
  methods: {
    submitForm() {
      this.$http
        .post('/signIn', {
          username: this.loginForm.userName,
          password: this.loginForm.userPassword,
        })
        .then((response) => {
          console.log(response)
          if (response.status == 200) {
            this.$message.success({
              message: '登录成功',
              showClose: true,
            })
            //将用户名和token放入sessionStorage
            sessionStorage.setItem('userName', response.data.data.username)
            sessionStorage.setItem('userToken', response.data.data.token)
            //将用户名放入vuex
            this.$store.dispatch('setUser', response.data.data.username)
            this.$store.dispatch('setToken', response.data.data.token)
            //打印login状态
            console.log(this.$store.state.isLogin)
            // this.$router.push({path:'/'})
          } else {
            this.$message.success({
              message: '登录失败',
              showClose: true,
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
// @import 'index.scss';
.sign {
  width: 100%;
  height: 100%;
  position: relative;
  .logo {
    margin-left: 50px;
  }
  .main {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 350px;
    height: auto;
    padding: 28px;
    border: 1px solid #999999;
    .title {
      margin-bottom: 28px;
      .normal-title {
        a {
          font-size: 12px;
          color: #999999;
          padding: 10px;
          margin: 5px;
          font-weight: 400;
        }
        a:hover {
          border-bottom: 2px solid #ea6f5a;
        }
        .active {
          font-weight: 700;
          color: #ea6f5a;
          border-bottom: 2px solid #ea6f5a;
        }
      }
    }
    .sign-in-container {
      padding-top: 14px;
      max-width: 350px;
      .el-form-item {
        margin-bottom: 14px;
      }
      .forget {
        float: right;
        color: #6190e8;
      }
      .signBtn {
        margin-left: -25px;
      }
    }
  }
}
</style>
