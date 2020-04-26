<template>
	<div class="person-menu">
		<el-menu 
			:default-active="$route.path"
			router
			background-color="#f1f1f1"
			text-color="#606266">
			<el-menu-item index="/personCenter/personInfo">
				<span slot="title">个人信息</span>
			</el-menu-item>
			<el-menu-item index="/personCenter/adRevenue">
				<span slot="title">广告收入</span>
			</el-menu-item>
			<el-menu-item index="/personCenter/adManage">
				<span slot="title">广告管理</span>
			</el-menu-item>
			<el-menu-item index="/personCenter/score">
				<span slot="title">积分提现</span>
			</el-menu-item>
			<el-menu-item index="/articleManage">
				<span slot="title">文章管理</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
// import bus from '../bus.js'
export default{
	name:'personMenu',
	data(){
		return{
			
		}
	},
	created() {
		// bus.$on('drawerHandle', () => {
		// 	this.drawer = !this.drawer
		// })
	}
}
</script>

<style scoped lang="scss">
.person-menu{
	flex: 1;
	border-right: 1px solid #999;
	.el-menu{
		height: 100%;
	}
}
</style>
