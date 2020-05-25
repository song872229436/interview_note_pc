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
			<el-form label-position="top" ref="form" :rules="rules" :model="resetForm" size="mini">
				<el-form-item label="注册的邮箱:" prop="email">
					<el-input v-model="resetForm.email" size="small"></el-input>
				</el-form-item>
				<el-form-item label="邮箱验证码:" class="email-code" prop="code">
					<el-input v-model="resetForm.code" size="small"></el-input>
					<el-button size="small" @click="sendCode">发送验证码</el-button>
				</el-form-item>
				<el-form-item label="请输入新密码:" prop="password">
					<el-input type="password" v-model="resetForm.password" size="small"></el-input>
				</el-form-item>
				<el-form-item label="请再次输入新密码:" prop="surepassword">
					<el-input type="password" v-model="resetForm.surepassword" size="small"></el-input>
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
    data() {
		const validatePass2 = (rule, value, callback) => {
			if (value !== this.resetForm.password) {
				callback(new Error('两次输入密码不一致!'));
            } else {
				callback();
            }
		};
		return {
        resetForm:{email:'1457435543@qq.com'},
			rules:{
				email:[
					{ required:true, message:'请输入注册邮箱', trigger:'blur' },
				],
				code:[
					{ required:true, message:'请输入邮箱验证码', trigger:'blur' },
				],
				password:[
					{ required:true, message:'请输入新密码', trigger:'blur' },
					{ min:6, max:16, message:'长度在6到16个字符', trigger:'blur' }
				],
				surepassword:[
					{ validator:validatePass2, required:true, message:'请再次输入新密码', trigger:'blur' },
					{ min:6, max:16, message:'长度在6到16个字符', trigger:'blur' }
				]
			}
		}
    },
    created() {
      console.log('看到我你就输了')
    },
	methods:{
		resetPassword(){
			console.log("reset")
		},
		sendCode(){
			this.$http.post('http://39.97.223.153:8080/api/user/email/{'+this.resetForm.email+'}', {
				email:this.resetForm.email
			}).then((response) => {
				console.log(response)
			}).catch((error) => {
				console.log(error)
			})
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