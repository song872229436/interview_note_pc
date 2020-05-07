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
				<router-link :to="{name:'signIn'}">登录</router-link>
				<b>·</b>
				<router-link :to="{name:'signUp'}" class="active">注册</router-link>
			</div>
		</h4>
		<div class="sign-in-container">
			<el-form 
				label-position="right"
				label-width="50px"
				ref="form"
				:model="registerForm"
				size="mini">
				<el-form-item label="账号:">
					<el-input v-model="userName" size="small"></el-input>
				</el-form-item>
				<el-form-item label="密码:">
					<el-input v-model="userPassword" size="small"></el-input>
				</el-form-item>
				<el-form-item>
					<el-checkbox v-model="checked" class="checkbox">已阅读《用户协议》</el-checkbox>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm" size="small" class="signBtn">注册</el-button>
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
        registerForm:{},
		userName:'',
		userPassword:'',
		checked:''
      }
    },
    created() {
      console.log('看到我你就输了')
    },
	methods:{
		submitForm(){
			console.log('注册成功')
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
	.logo{
		margin-left: 50px;
	}
	.main{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		min-width: 350px;
		height: auto;
		padding: 28px;
		border: 1px solid #999999;
		.title{
			margin-bottom: 28px;
			.normal-title{
				a{
					font-size: 12px;
					color: #999999;
					padding: 10px;
					margin: 5px;
					font-weight: 400;
				}
				a:hover{
					border-bottom: 2px solid #ea6f5a;
				}
				.active{
					font-weight: 700;
					color: #ea6f5a;
					border-bottom: 2px solid #ea6f5a;
				}
			}
		}
		.sign-in-container{
			padding-top: 14px;
			max-width: 350px;
			.el-form-item{
				margin-bottom: 14px;
			}
			.checkbox{
				float: left;
			}
			.signBtn{
				margin-left: -25px;
			}
		}
	}
}
</style>