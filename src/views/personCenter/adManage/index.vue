<template>
	<div class="ad-manage">
		<h1>广告橱窗</h1>
		<el-divider></el-divider>
		<div class="ad-manage-main">
			<!-- 新增广告 -->
			<div class="ad-add">
				<h4>新增广告：</h4>
				<div class="ad-info">
					<div class="ad-info-left">
						<span>广告图片</span>
						<el-upload
							class="avatar-uploader"
							action="https://jsonplaceholder.typicode.com/posts/"
							:show-file-list="false"
							:on-success="handleAvatarSuccess"
							:before-upload="beforeAvatarUpload">
								<img v-if="imageUrl" :src="imageUrl" class="avatar">
								<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</div>
					<div class="ad-info-right">
						<el-form label-width="150px">
							<el-form-item label="广告标题:">
								<el-input v-model="addTitle" placeholder="请输入标题"></el-input>
							</el-form-item>
							<el-form-item label="广告链接:">
								<el-input v-model="addLink" placeholder="请输入链接"></el-input>
							</el-form-item>
						</el-form>
					</div>
				</div>
				<div class="ad-info-btn">
					<el-button type="danger" size="small" @click="addAd">添加</el-button>
				</div>
				<el-divider></el-divider>
			</div>
			<!-- 遍历广告列表 -->
			<div class="ads" v-for="(item,index) in adsData" :key="index">
				<div class="ad-info">
					<div class="ad-info-left">
						<span>广告图片</span>
						<el-upload
							class="avatar-uploader"
							action="https://jsonplaceholder.typicode.com/posts/"
							:show-file-list="false"
							:on-success="handleAvatarSuccess"
							:before-upload="beforeAvatarUpload">
								<img v-if="item.imgSrc" :src="item.imgSrc" class="avatar">
								<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</div>
					<div class="ad-info-right">
						<el-form label-position="right" label-width="80px">
							<el-form-item label="标题:">
								<el-input v-model="item.adTitle" placeholder="请输入标题"></el-input>
							</el-form-item>
							<el-form-item label="链接:">
								<el-input v-model="item.adLink" placeholder="请输入链接"></el-input>
							</el-form-item>
						</el-form>
					</div>
				</div>
				<div class="ad-info-btn">
					<el-button type="primary" size="small" @click="adSave(index)">保存</el-button>
					<el-button type="warning" size="small" @click="adDel(index)">删除</el-button>
				</div>
				<el-divider></el-divider>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'adManage',
	data(){
		return{
			imageUrl:'',
			addTitle:'',
			addLink:'',
			adsData:[
				{
					imgSrc:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3593446461,3335288407&fm=26&gp=0.jpg',
					adTitle:'广告二',
					adLink:'https://www.baidu.com'
				},
				{
					imgSrc:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3593446461,3335288407&fm=26&gp=0.jpg',
					adTitle:'广告一',
					adLink:'https://www.baidu.com'
				}
			]
		}
	},
	methods: {
		// 新增广告
		addAd(){
			const newAd={imgSrc:this.imageUrl,adTitle:this.addTitle,adLink:this.addLink}
			this.adsData.unshift(newAd)
			this.imageUrl=""
			this.addTitle=""
			this.addLink=""
		},
		// 修改保存广告
		adSave(index){
			const saveAd={imgSrc:this.adsData[index].imgSrc,adTitle:this.adsData[index].adTitle,adLink:this.adsData[index].adLink}
			this.adsData.splice(index,1,saveAd)
		},
		//删除广告
		adDel(index){
			this.adsData.splice(index, 1)
		},
		// 图片上传成功
		handleAvatarSuccess(res, file) {
			this.imageUrl = URL.createObjectURL(file.raw);
		},
		// 图片上传前的规则
		beforeAvatarUpload(file) {
			const isJPG = file.type === 'image/jpeg';
			const isLt2M = file.size / 1024 / 1024 < 2;
		
			if (!isJPG) {
				this.$message.error('上传图片只能是 JPG 格式!');
			}
			if (!isLt2M) {
				this.$message.error('上传图片大小不能超过 2MB!');
			}
			return isJPG && isLt2M;
		}
	}
}
</script>

<style scoped lang="scss">
.ad-manage{
	max-width: 1200px;
	text-align: left;
	>h1{
		font-size: 24px;
		font-weight: 400;
		display: inline-block;
		margin-right: 28px;
	}
	.ad-manage-main{
		.ad-add,.ads{
			.ad-info{
				display: flex;
				width: 100%;
				margin: 14px 0px;
				align-items: center;
				.ad-info-left{
					flex: auto;
					>span{
						display: inline-block;
						margin: 0px 28px;
					}
					.avatar-uploader{
						display: inline-block;
						width: 300px;
						height: 180px;
						border: 1px solid #d9d9d9;
						border-radius: 6px;
						cursor: pointer;
						position: relative;
						vertical-align: middle;
						// overflow: hidden;
						.avatar-uploader-icon{
							font-size: 28px;
							color: #8c939d;
							width: 300px;
							height: 180px;
							line-height: 180px;
							text-align: center;
						}
						.avatar{
							width: 300px;
							height: 180px;
							display: block;
							// border-radius: 50%;
						}
					}
				}
				.ad-info-right{
					flex: auto;
				}
			}
			.ad-info-btn{
				width: 100%;
				text-align: center;
			}
		}
	}
}
</style>
