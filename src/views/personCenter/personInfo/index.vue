<template>
	<div class="person-info">
		<h1>个人资料</h1>
		<el-divider></el-divider>
		<div class="person-info-main">
			<div class="person-info-left">
				<el-upload
					class="avatar-uploader"
					action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload">
						<img v-if="userinfo.avatarUrl" :src="userinfo.avatarUrl" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</div>
			<div class="person-info-right">
				<div class="person-info-id">
					<span>ID:{{userinfo.id}}</span>
				</div>
				<div class="person-info-hot">
					<span>{{userinfo.nickName}}</span>
					<!-- <span>粉丝：12</span> -->
				</div>
				<div class="person-info-adrevenue">
					<span>收入：2020元</span>
				</div>
			</div>
		</div>
		<el-divider></el-divider>
		<div class="person-info-form">
			<el-form label-position="right" label-width="80px" :model="userinfo">
				<el-form-item label="昵称:">
					<el-input v-model="userinfo.nickName"></el-input>
				</el-form-item>
				<el-form-item label="性别:">
					<el-input v-model="userinfo.sex"></el-input>
				</el-form-item>
				<el-form-item label="手机号:">
					<el-input v-model="userinfo.phone"></el-input>
				</el-form-item>
				<el-form-item label="邮箱:">
					<el-input v-model="userinfo.email"></el-input>
				</el-form-item>
				<el-form-item label="提现账号:">
					<el-input v-model="userinfo.cashAccount"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm">保存</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default{
	name:'personInfo',
	data(){
		return{
			userinfo:{}
		}
	},
	created(){
		// 初始化
		this.$http.get('http://39.97.223.153:8080/api/user/user',{
		}).then((response) => {
			this.userinfo=response.data.data
		}).catch((error) => {
			console.log(error)
		})
	},
	methods:{
		// 提交表单
		submitForm(){
			this.$http.post('http://39.97.223.153:8080/api/user/user',{
				// id:this.userinfo.id,
				// avatarUrl:this.userinfo.avatarUrl,
				// presentation:this.userinfo.presentation,
				nickName: this.userinfo.nickName,
				phone: this.userinfo.phone,
				cashAccount: this.userinfo.cashAccount,
			}).then((response) => {
				console.log(response)
			}).catch((error) => {
				console.log(error)
			})
		},
		// 头像上传成功回调
		handleAvatarSuccess(res, file) {
			// this.imageUrl = URL.createObjectURL(file.raw);
			this.$http.post('http://39.97.223.153:8080/api/user/user',{
				avatarUrl:URL.createObjectURL(file.raw)
			}).then((response) => {
				console.log(response.data.data.avatarUrl)
			}).catch((error) => {
				console.log(error)
			})
		},
		// 头像上传前
		beforeAvatarUpload(file) {
			const isJPG = file.type === 'image/jpeg';
			const isLt2M = file.size / 1024 / 1024 < 2;
	
			if (!isJPG) {
				this.$message.error('上传头像图片只能是 JPG 格式!');
			}
			if (!isLt2M) {
				this.$message.error('上传头像图片大小不能超过 2MB!');
			}
			return isJPG && isLt2M;
		}
	}
}
</script>

<style scoped lang="scss">
.person-info{
	max-width: 1200px;
	text-align: left;
	>h1{
		font-size: 24px;
		font-weight: 400;
		display: inline-block;
		margin-right: 28px;
	}
	.person-info-main{
		display: flex;
		align-items: flex-start;
		.person-info-left{
			flex:1;
			margin: 14px;
			.avatar-uploader{
				width: 100px;
				height: 100px;
				border: 1px dashed #d9d9d9;
				border-radius: 6px;
				cursor: pointer;
				position: relative;
				// overflow: hidden;
				.avatar-uploader-icon{
					font-size: 28px;
					color: #8c939d;
					width: 100px;
					height: 100px;
					line-height: 100px;
					text-align: center;
				}
				.avatar{
					width: 102px;
					height: 102px;
					display: block;
					margin: -1px 0px 0px -1px;
					// border-radius: 50%;
				}
			}
		}
		.person-info-right{
			flex: 11;
			>div{
				span{
					line-height: 38px;
				}
			}
			.person-info-id span{
				color: #999999;
			}
			.person-info-hot span{
				margin-right:28px;
			}
			.person-info-adrevenue span{
				color:#E46798;
			}
		}
	}
	.person-info-form{
		width: 30%;
		margin-left: 10%;
	}
}
</style>
