<template>
	<div class="release">
		<div class="center">
			<div class="article-manage-header">
				<el-row>
					<el-col :span="12">
						<h2>编辑发布</h2>
					</el-col>
					<el-col :span="6" :offset="6" class="article-manage-header-btn">
						<router-link to="/articleManage">文章管理</router-link>
					</el-col>
				</el-row>
			</div>
			<div class="content">
				<div class="interviewer">
					<span class="release-text">面试官：</span>
					<el-input
						type="textarea"
						:rows="8"
						placeholder="请输入内容"
						v-model="interviewer"></el-input>
				</div>
				<div class="applicant">
					<span class="release-text">应聘者：</span>
					<el-card style="height: 380px;">
						<quill-editor v-model="content" ref="myQuillEditor" style="height: 300px;" :options="editorOption"></quill-editor>
					</el-card>
				</div>
				<div class="select-article-tag">
					<span>文章标签：</span>
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
					<el-input size="small" v-model="articleOtherTag" placeholder="输入其他标签"></el-input>
				</div>
				<div class="select-article-type">
					<span>选择分类：</span>
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
				</div>
				<div class="submit">
					<el-button>发布</el-button>
					<el-button>保存为草稿</el-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default{
	name:'release',
	components:{
		quillEditor
	},
	data(){
		return{
			typeOptions:[
				{value:'',label:'请选择'},
				{value:'前端',label:'前端'},
				{value:'Android',label:'Android'},
				{value:'IOS',label:'IOS'},
				{value:'后端',label:'后端'},
				{value:'Python',label:'Python'}
			],
			tagOptions:[
				{value:'基础题',label:'基础题'},
				{value:'进阶题',label:'进阶题'},
				{value:'高级题',label:'高级题'}
			],
			articleTag:'基础题',
			articleOtherTag:'',
			articleType:'',
			content:null,
			editorOption:{},
			interviewer:''
		}
	},
	methods:{
		
	}
}
</script>

<style scoped lang="scss">
.release{
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
		.content{
			text-align: left;
			.release-text{
				display: inline-block;
				line-height: 40px;
			}
			.interviewer{
				margin-bottom: 24px;
			}
			.applicant{
				
			}
			.select-article-tag,.select-article-type{
				padding: 12px 0;
				text-align: left;
				>span{
					line-height: 40px;
				}
			}
			.select-article-tag{
				.el-input{
					width: 200px;
				}
			}
			.type-select{
				margin-right: 12px;
			}
			.submit{
				margin: 12px;
			}
		}
	}
}
</style>
