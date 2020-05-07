<template>
	<div class="ad-revenue">
		<h1>广告收入</h1>
		<span>广告收入以面试币(msb)为单位，10msb=1块钱，msb币主要来源于博主文章详情页的广告收入，msb不仅可以直接提现，后续还会陆续推出更多兑换商品。</span>
		<el-divider></el-divider>
		<div class="echarts">
			<el-date-picker
				v-model="dateSelect"
				type="date"
				placeholder="选择日期"
				size="small"></el-date-picker>
			<el-input v-model="dateInput" placeholder="2020.03" size="small" class="date-input"></el-input>
			<div style="width:100%;height:400px;margin-top: 28px;" ref="chart"></div>
		</div>
		<el-table
			class="ad-revenue-tab"
			:data="tabData"
			stripe>
			<el-table-column
				prop="tabDate"
				label="日期"
				class="ad-revenue-tab-col"></el-table-column>
			<el-table-column
				prop="tabMsb"
				label="金额msb"
				class="ad-revenue-tab-col"></el-table-column>
		</el-table>
	</div>
</template>

<script>
const echarts = require('echarts');
export default{
	name:'adRevenue',
	data(){
		return{
			dateSelect:'',
			dateInput:'',
			tabData:[
				{
					tabDate:'2020-04-03',
					tabMsb:'65'
				},
				{
					tabDate:'2020-04-10',
					tabMsb:'89'
				},
				{
					tabDate:'2020-04-14',
					tabMsb:'10'
				},
				{
					tabDate:'2020-04-21',
					tabMsb:'27'
				}
			]
		}
	},
	methods: {
		initCharts () {
			const myChart = echarts.init(this.$refs.chart);
			// 绘制图表
			myChart.setOption({
				title: { text: '收入趋势' },
				tooltip: {},
				xAxis: {
					data: ["1月","2月","3月","4月","5月","6月"]
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'line',
					smooth: true,
					data: [625, 152, 451, 1120, 5, 850]
				}]
			});
		}
	},
	mounted () {
		this.initCharts();
	}
}
</script>

<style scoped lang="scss">
.ad-revenue{
	max-width: 1200px;
	text-align: left;
	>h1{
		font-size: 24px;
		font-weight: 400;
		display: inline-block;
		margin-right: 28px;
	}
	>span{
		color: #999999;
		font-size: 12px;
	}
	.echarts{
		.date-input{
			width: auto;
			margin-left: 28px;
		}
	}
	.ad-revenue-tab{
		width: 70%;
		margin: 28px 0px;
		.ad-revenue-tab-col{
			width: 50%;
		}
	}
}
</style>
