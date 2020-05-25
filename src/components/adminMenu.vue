<template>
	<div class="person-menu">
		<el-menu 
			:default-active="$route.path"
			router
			background-color="#f1f1f1"
			text-color="#606266">
			<el-menu-item index="">
				<span slot="title">文章审核</span>
			</el-menu-item>
			<el-menu-item index="">
				<span slot="title">广告审核</span>
			</el-menu-item>
			<el-menu-item index="">
				<span slot="title">首页广告</span>
			</el-menu-item>
			<el-menu-item index="">
				<span slot="title">详情广告</span>
			</el-menu-item>
			<el-menu-item index="">
				<span slot="title">提现核销</span>
			</el-menu-item>
			<el-menu-item index="">
				<span slot="title">流量统计</span>
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
		.el-menu-item{
			text-align: center;
		}
	}
}
</style>
