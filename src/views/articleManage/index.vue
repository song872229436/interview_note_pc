<template>
	<div class="article-manage">
		<div class="center">
			<div class="article-manage-header">
				<el-row>
					<el-col :span="12">
						<h2>文章管理</h2>
					</el-col>
					<el-col :span="6" :offset="6" class="article-manage-header-btn">
						<!-- <el-button type="text" to="/release">编辑发布</el-button> -->
						<router-link to="/release">编辑发布</router-link>
					</el-col>
				</el-row>
			</div>
			<!-- 筛选器 -->
			<el-row type="flex" align="middle" class="article-manage-control">
				<el-col :span="6">
					<span class="article-manage-control-text">筛选：</span>
					<el-select
						v-model="year"
						placeholder="年"
						size="small"
						class="date-select">
						<el-option
							v-for="item in yearOptions"
							:key="item.value"
							:label="item.label"
							:value="item.value"
							></el-option>
					</el-select><span class="article-manage-control-text">年</span>
					<el-select
						v-model="mouth"
						placeholder="月"
						size="small"
						class="date-select">
						<el-option
							v-for="item in mouthOptions"
							:key="item.value"
							:label="item.label"
							:value="item.value"
							></el-option>
					</el-select><span class="article-manage-control-text">月</span>
				</el-col>
				<el-col :span="5">
					<el-select
						v-model="articleType"
						placeholder="文章类型"
						size="small"
						class="type-select">
						<el-option
							v-for="item in typeOptions"
							:key="item.value"
							:label="item.label"
							:value="item.value"
							></el-option>
					</el-select>
				</el-col>
				<el-col :span="5">
					<el-select
						v-model="articleTag"
						placeholder="文章标签"
						size="small"
						class="type-select">
						<el-option
							v-for="item in tagOptions"
							:key="item.value"
							:label="item.label"
							:value="item.value"
							></el-option>
					</el-select>
				</el-col>
				<el-col :span="8">
					<el-input 
						v-model="keyWord"
						placeholder="请输入关键词"
						class="keyword"
						size="small"></el-input>
					<el-button size="small" type="danger">搜索</el-button>
				</el-col>
			</el-row>
			<div class="article-list">
				<ArticleList v-for="item in articles" :list="item" :key="item.id" @delete="articleDelete"></ArticleList>
				<el-pagination class="page-box" :total="1000" background layout="prev, pager, next"></el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
import ArticleList from '../../components/articleList.vue'
export default{
	name:'articleManage',
	components:{
		ArticleList
	},
	data(){
		return{
			yearOptions:[
				{
					value:'2020',
					label:'2020'
				},
				{
					value:'2021',
					label:'2021'
				},
				{
					value:'2022',
					label:'2022'
				},
				{
					value:'2023',
					label:'2023'
				},
				{
					value:'2024',
					label:'2024'
				},
				{
					value:'2025',
					label:'2025'
				},
				{
					value:'2026',
					label:'2026'
				}
			],
			mouthOptions:[
				{value:'1',label:'1'},
				{value:'2',label:'2'},
				{value:'3',label:'3'},
				{value:'4',label:'4'},
				{value:'5',label:'5'},
				{value:'6',label:'6'},
				{value:'7',label:'7'},
				{value:'8',label:'8'},
				{value:'9',label:'9'},
				{value:'10',label:'10'},
				{value:'11',label:'11'},
				{value:'12',label:'12'}
			],
			typeOptions:[
				{value:'前端',label:'前端'},
				{value:'Android',label:'Android'},
				{value:'IOS',label:'IOS'},
				{value:'后端',label:'后端'},
				{value:'Python',label:'Python'}
			],
			tagOptions:[
				{value:'基础',label:'基础'},
				{value:'进阶',label:'进阶'},
				{value:'高级',label:'高级'}
			],
			articles:[
				{
					id:1,
					content:"Activity作为Android四大组件，基本每一个APP都会有它的存在，Activity作为用户与系统交互的中介，深入了解Activity，对与开发高质量应用程序自然是很有帮助的",
					date:'2020年4月16日 12:31:12',
					readPerson:16,
					comment:0,
					advertisement:false,
					release:false,
					income:29.9
				},
				{
					id:2,
					content:"Activity作为Android四大组件，基本每一个APP都会有它的存在，Activity作为用户与系统交互的中介，深入了解Activity，对与开发高质量应用程序自然是很有帮助的",
					date:'2020年4月16日 12:31:12',
					readPerson:16,
					comment:0,
					advertisement:false,
					release:false,
					income:29.9
				},
				{
					id:3,
					content:"Activity作为Android四大组件，基本每一个APP都会有它的存在，Activity作为用户与系统交互的中介，深入了解Activity，对与开发高质量应用程序自然是很有帮助的",
					date:'2020年4月16日 12:31:12',
					readPerson:16,
					comment:0,
					advertisement:false,
					release:true,
					income:29.9
				},
				{
					id:4,
					content:"Activity作为Android四大组件，基本每一个APP都会有它的存在，Activity作为用户与系统交互的中介，深入了解Activity，对与开发高质量应用程序自然是很有帮助的",
					date:'2020年4月16日 12:31:12',
					readPerson:16,
					comment:0,
					advertisement:true,
					release:true,
					income:29.9
				},
				{
					id:5,
					content:"Activity作为Android四大组件，基本每一个APP都会有它的存在，Activity作为用户与系统交互的中介，深入了解Activity，对与开发高质量应用程序自然是很有帮助的",
					date:'2020年4月16日 12:31:12',
					readPerson:16,
					comment:0,
					advertisement:true,
					release:true,
					income:29.9
				},
				{
					id:6,
					content:"Activity作为Android四大组件，基本每一个APP都会有它的存在，Activity作为用户与系统交互的中介，深入了解Activity，对与开发高质量应用程序自然是很有帮助的",
					date:'2020年4月16日 12:31:12',
					readPerson:16,
					comment:0,
					advertisement:true,
					release:true,
					income:29.9
				},
				{
					id:7,
					content:"Activity作为Android四大组件，基本每一个APP都会有它的存在，Activity作为用户与系统交互的中介，深入了解Activity，对与开发高质量应用程序自然是很有帮助的",
					date:'2020年4月16日 12:31:12',
					readPerson:16,
					comment:0,
					advertisement:true,
					release:true,
					income:29.9
				}
			],
			year:'',
			mouth:'',
			articleType:'',
			articleTag:'',
			keyWord:''
		}
	},
	computed:{
	},
	methods:{
		articleDelete(id){
			for(let i=0;i<this.articles.length;i++){
				if(this.articles[i].id===id){
					this.articles.splice(i,1)
				}
			}
		}
	}
}
</script>

<style scoped lang="scss">
.article-manage{
	padding-top: 60px;
	.center{
		width: 1200px;
		min-width: 990px;
		margin: 0 auto;
		.article-manage-header{
			width: 100%;
			height: 80px;
			// background: rgba(0,0,0,0.05);
			h2{
				line-height: 80px;
				text-align: right;
			}
			.article-manage-header-btn{
				text-align: right;
				a{
					line-height: 80px;
					text-align: right;
					color: #6190E8;
				}
			}
		}
		.article-manage-control{
			width: 100%;
			height: 60px;
			margin:5px 0px;
			background: rgba(0,0,0,0.05);
			font-size: 14px;
			.article-manage-control-text{
				vertical-align: middle;
				margin-left: 5px;
			}
			.date-select{
				width: 80px;
				margin-left: 10px;
			}
			.keyword{
				width: 60%;
				margin-right: 10px;
			}
		}
	}
}
</style>
