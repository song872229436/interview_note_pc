<template>
	<div class="score">
		<h1>积分提现</h1>
		<el-divider></el-divider>
		<div class="score-main">
			<div class="score-info">
				<span class="score-info-text">积分总额：<span>102</span>msb</span>
				<span class="score-info-text">待入账积：<span>12</span>msb</span>
				<span class="score-info-text">可提现：<span>90</span>msb</span>
			</div>
			<div class="score-cash-out">
				<el-input v-model="scoreValue" size="small" placeholder="请输入提现金额" class="score-input"></el-input>
				<el-button type="danger" size="small">提现</el-button>
			</div>
		</div>
		<h4>提现记录</h4>
		<el-table
			class="score-tab"
			:data="tabData"
			stripe>
			<el-table-column
				prop="tabDate"
				label="时间"
				class="score-tab-col"></el-table-column>
			<el-table-column
				prop="tabCode"
				label="校验码"
				class="score-tab-col"></el-table-column>
			<el-table-column
				prop="tabMoney"
				label="金额(元)"
				class="score-tab-col"></el-table-column>
			<el-table-column
				prop="tabProgress"
				label="进度"
				class="score-tab-col">
					<template slot-scope="scope">
						<span :class="progressColor(scope.row.tabProgress)">{{scope.row.tabProgress}}</span>
					</template>
				</el-table-column>
			<el-table-column
				prop="tabPeople"
				label="处理人"
				class="score-tab-col"></el-table-column>
		</el-table>
	</div>
</template>

<script>
export default{
	name:'score',
	data(){
		return{
			scoreValue:'',
			tabData:[
				{
					tabDate:'2020.04.03',
					tabCode:'20200403',
					tabMoney:'65',
					tabProgress:'提现中...',
					tabPeople:'admin'
				},
				{
					tabDate:'2020.04.10',
					tabCode:'20200410',
					tabMoney:'89',
					tabProgress:'已完成',
					tabPeople:'admin'
				},
				{
					tabDate:'2020.04.14',
					tabCode:'20200414',
					tabMoney:'10',
					tabProgress:'已完成',
					tabPeople:'admin'
				},
				{
					tabDate:'2020.04.21',
					tabCode:'20200421',
					tabMoney:'27',
					tabProgress:'失败',
					tabPeople:'admin'
				}
			]
		}
	},
	methods:{
		filterTag(value, row) {
			return row.tag === value;
		},
		progressColor(progress){
			if(progress==="提现中..."){
				return 'waiting'
			}else if(progress==="已完成"){
				return 'success'
			}else if(progress==="失败"){
				return 'fail'
			}
		}
	}
}
</script>

<style scoped lang="scss">
.score{
	max-width: 1200px;
	text-align: left;
	>h1{
		font-size: 24px;
		font-weight: 400;
		display: inline-block;
		margin-right: 28px;
	}
	.score-info{
		span{
			line-height: 40px;
		}
		.score-info-text{
			margin-right: 40px;
			span{
				color: #E46798;
				margin-right:2px;
			}
		}
	}
	.score-cash-out{
		margin: 28px 0px;
		.score-input{
			width: 150px;
			margin-right:14px;
		}
	}
	.score-tab{
		.waiting{
			color: #E6A23C;
		}
		.success{
			color: #67C23A;
		}
		.fail{
			color: #F56C6C;
		}
	}
}
</style>
