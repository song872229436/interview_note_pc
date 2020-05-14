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
				重置密码
			</div>
		</h4>
		<div class="sign-in-container">
			<el-form label-position="top" ref="form" :model="resetForm" size="mini">
				<el-form-item label="注册的邮箱:">
					<el-input v-model="resetForm.emailOrPhone" size="small"></el-input>
				</el-form-item>
				<el-form-item label="邮箱验证码:" class="email-code">
					<el-input v-model="resetForm.code" size="small"></el-input>
					<el-button size="small">发送验证码</el-button>
				</el-form-item>
				<el-form-item label="请输入新密码:">
					<el-input v-model="resetForm.password" size="small"></el-input>
				</el-form-item>
				<el-form-item label="请再次输入新密码:">
					<el-input v-model="resetForm.passwords" size="small"></el-input>
				</el-form-item>
				<el-form-item class="signBtn">
					<el-button type="primary" @click="resetPassword" size="small">重置密码</el-button>
				</el-form-item>
				<el-form-item class="return">
					<router-link :to="{name:'signUp'}">
						<i class="el-icon-d-arrow-left">返回登录注册</i>
					</router-link>
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
        resetForm:{}
      }
    },
    created() {
      console.log('看到我你就输了')
    },
	methods:{
		resetPassword(){
			console.log("reset")
		}
	}
  }
</script>

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
	.title {
		margin-bottom: 28px;
		text-align: center;
	}
	.sign-in-container {
		padding-top: 14px;
		max-width: 350px;
			.el-form-item{
				margin-bottom: 14px;
			}
			.email-code{
				.el-input{
					width: 70%;
				}
				.el-button{
					width: 30%;
				}
			}
			.signBtn{
				text-align: center;
				margin-left: -25px;
			}
			.return{
				text-align: right;
				a{
					color: black;
				}
				i::before{
					padding-right: 3px;
				}
			}
		}
	}
}
</style>