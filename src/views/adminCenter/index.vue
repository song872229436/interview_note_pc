<template>
	<div class="admin-center">
		<adminMenu/>
		<div class="admin-center-view">
			<!-- <router-view></router-view> -->
			管理员页面
		</div>
	</div>
</template>

<script>
import adminMenu from '@/components/adminMenu.vue'
export default{
	name:"adminCenter",
	components:{
		adminMenu
	},
}
</script>

<style scoped lang="scss">
.admin-center{
	display: flex;
	align-items: stretch;
	min-height: 100%;
	padding-top: 60px;
	box-sizing: border-box;
	.admin-center-view{
		flex: 5;
		padding:28px 50px;
	}
}
</style>