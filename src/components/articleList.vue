<template>
	<div class="article-content">
		<div class="article-content-left">
			<div class="article-content-text">{{list.content}}</div>
			<div>
				<span  class="article-content-date">{{list.date}}</span>
				<el-button type="text" v-if="!list.advertisement">去绑定广告</el-button>
				<span v-if="list.advertisement">已绑定广告</span>
			</div>
		</div>
		<div class="article-content-right">
			<div v-if="!list.release">
				<div class="article-content-draft">已保存为草稿</div>
				<el-button class="article-delete" type="text" @click="articleDelete(list.id)">删除</el-button>
			</div>
			<div class="article-content-income" v-if="list.release&&list.advertisement">广告收入：{{list.income}}</div>
			<div class="article-content-release" v-if="list.release">
				<el-button class="article-delete" type="text" @click="articleDelete(list.id)">删除</el-button>
				<el-button type="text">分享</el-button>
				<div class="article-content-hot">
					<el-button type="text" icon="el-icon-view">{{list.readPerson}}</el-button>
					<el-button type="text" icon="el-icon-chat-line-square">{{list.comment}}</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'ArticleList',
	props:{
		list:Object
	},
	data(){
		return{
			
		}
	},
	methods:{
		articleDelete(id){
			this.$emit('delete',id)
		}
	}
}
</script>

<style scoped lang="scss">
.article-list{
	.article-content{
		width: 100%;
		height: auto;
		background: rgba(0,0,0,0.05);
		margin: 5px 0px;
		padding: 10px 0;
		display: flex;
		align-items: center;
	}
	.article-content-left{
		flex:4;
		padding: 5px 15px;
		text-align: left;
		.article-content-date{
			font-size: 12px;
			margin-right: 12px;
		}
		span{
			display: inline-block;
			font-size: 14px;
			padding: 12px 0;
		}
	}
	.article-content-right{
		flex:1;
		.article-content-income{
			color:#E6A23C;
			font-size: 14px;
		}
		.article-delete{
			color: red;
		}
		.article-content-hot .el-button{
			color: #999;
		}
	}
	.page-box{
		margin: 24px 0;
	}
}
</style>
