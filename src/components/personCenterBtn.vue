<template>
	<div class="person-center-btn">
		<router-link to="/personCenter">
			<div class="person-center-btn-signIn">
				<el-avatar shape="square" :size="28" fit="fill" src="avatarUrl"></el-avatar>
			</div>
			<!-- <div class="person-center-btn-mid">
				<div>EvenChen</div>
			</div> -->
		</router-link>
		<div class="person-center-btn-signOut">
			<el-button type="text" @click="signOut">登出</el-button>
		</div>
	</div>
</template>

<script>
export default{
	name:'personCenterBtn',
	data(){
		return{
			avatarUrl:""
		}
	},
	created() {
		this.$http.get('http://39.97.223.153:8080/api/user/user',{
		}).then((response) => {
			this.avtaarUrl=response.data.data.avatarUrl
		}).catch((error) => {
			console.log(error)
		})
	},
	methods: {
		signOut(){
			this.$http.post('http://39.97.223.153:8080/api/auth/logout').then(() => {
				// console.log(response)
				localStorage.removeItem("Flag")
				localStorage.removeItem("userName")
				localStorage.removeItem("userToken")
				this.$store.dispatch("userLogin",false)
				//判断当前页面是不是首页，不是就跳转到首页
				if(this.$router.currentRoute.name!=="home"){
					this.$router.push({path:'/'})
				}
			}).catch((error) => {
				console.log(error)
			})
		}
	},
}
</script>

<style scoped lang="scss">
.person-center-btn{
	width: 100%;
	display: flex;
	align-items: center;
	cursor: pointer;
	.person-center-btn-signIn{
		flex:1;
	}
	.person-center-btn-signOut{
		flex: 1;
		margin-left: 14px;
	}
}
</style>
