<template>
	<div class="person-center">
		<personMenu/>
		<div class="person-center-view">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import personMenu from '@/components/personMenu.vue'
export default{
	name:"personCenter",
	components:{
		personMenu
	},
}
</script>

<style scoped lang="scss">
.person-center{
	display: flex;
	align-items: stretch;
	min-height: 100%;
	padding-top: 60px;
	box-sizing: border-box;
	.person-center-view{
		flex: 5;
		padding:28px 50px;
	}
}
</style>
