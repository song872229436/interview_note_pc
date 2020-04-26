<template>
	<router-link to="/personCenter">
		<div class="person-center-btn">
			<div class="person-center-btn-left">
					<el-avatar shape="square" :size="28" fit="fill" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
			</div>
			<div class="person-center-btn-mid">
				<div>EvenChen</div>
				<div>131天</div>
			</div>
			<div class="person-center-btn-right">
				个人中心
			</div>
		</div>
	</router-link>
</template>

<script>
export default{
	name:'personCenterBtn',
	methods: {
	},
}
</script>

<style scoped lang="scss">
.person-center-btn{
	width: 100%;
	display: flex;
	align-items: center;
	cursor: pointer;
	.person-center-btn-left{
		flex:1;
	}
	.person-center-btn-mid{
		flex:2;
		font-size: 12px;
		text-align: left;
		color: #6190E8;
		margin: 0px 5px 0px 3px;
	}
	.person-center-btn-right{
		flex: 3;
		font-size: 14px;
		font-weight: 700;
		color:#6190E8;
	}
}
</style>
