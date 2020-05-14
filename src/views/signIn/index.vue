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
        <el-form label-position="top" ref="form" :model="loginForm" size="mini">
          <el-form-item label="邮箱or手机:">
            <el-input v-model="loginForm.emailOrPhone" size="small"></el-input>
          </el-form-item>
          <el-form-item label="密码:">
            <el-input v-model="loginForm.password" size="small"></el-input>
          </el-form-item>
          <el-form-item>
            <router-link :to="{ name: 'forgePsw' }" class="forget">忘记密码?</router-link>
          </el-form-item>
          <el-form-item class="signBtn">
            <el-button type="primary" @click="submitForm" size="small">登录</el-button>
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
		loginForm: {
			emailOrPhone: '',
			password: '',
			signOnPlatform:'qq'
		},
		// isLogin:false
    }
  },
  created() {
    console.log('看到我你就输了2')
	if(this.$store.getters.isLogin){
		return this.$router.go(-1)
	}
  },
  methods: {
    submitForm() {
		this.$http.post('http://39.97.223.153:8080/api/auth/login', {
			emailOrPhone: this.loginForm.emailOrPhone,
			password:this.loginForm.password,
			signOnPlatform:this.loginForm.signOnPlatform,
        }).then((response) => {
			console.log(response)
			if (response.data.code === 200) {
				this.$message.success({
					message: '登录成功',
					showClose: true,
				})
				//将用户名和token放入localStorage
				localStorage.setItem('userName', response.data.data.user.email)
				localStorage.setItem('userToken', response.data.data.token)
				localStorage.setItem('Flag', "isLogin")
				//将用户名放入vuex
				// this.$store.dispatch('setUser', response.data.data.user.email)
				this.$store.dispatch('setToken', response.data.data.token)
				this.$store.dispatch("userLogin",true)
				//打印login状态
				// console.log(this.$store.state.isLogin)
				this.$router.push({path:'/'})
			} else {
				this.$message.error({
					message: '登录失败',
					showClose: true,
				})
			}
        }).catch((error) => {
			console.log(error)
        })
    },
  },
}
</script>

<style lang="scss">
.sign-in-container {
	.el-form-item {
		.el-input{
			.el-input__inner{
				background: rgba(255,255,255,0.4);
			}
		}
	}
}
</style>
<style lang="scss" scoped>
// @import 'index.scss';
.sign{
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url('../../assets/img/1.jpg');
  background-size: 100% 100%;
  .logo {
    margin-left: 50px;
  }
  .main {
	background: rgba(255,255,255,0.3);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 350px;
    height: auto;
    padding: 28px;
    // border: 1px solid #f9f9f9;
    .title {
		margin-bottom: 28px;
		text-align: center;
		.normal-title {
			a{
				font-size: 12px;
				color: #333333;
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
			.el-input{
				.el-input__inner{
					background: rgba(255,255,255,0.5);
				}
			}
		}
		.forget {
			float: right;
			color: red;
		}
		.signBtn {
			text-align: center;
			.el-button{
				width: 100%;
			}
		}
    }
  }
}
</style>
