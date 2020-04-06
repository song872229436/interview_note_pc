<template>
  <div class="articleDetail mainPage">
    <main class="main">
     <el-row  :gutter="20" class="itemList">
      <el-col :span="18">
        <div class="tit">
            Java面试笔记（强烈推荐）
        </div>
        <div class="user-info">
            <a href="#" >
                <img class="img" src="https://upload.jianshu.io/users/upload_avatars/5376408/11599b5a-9447-4289-bee9-aa9952e9e90d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="">
            </a>
            <div class="user-right">
                <div class="user-tit vertical-centering">
                    <p>我是用户姓名</p>
                    <div class="btn"> <i></i>收藏</div>
                </div>
                <span>最后编辑于</span>
                <time>2018.08.19 18:21:35</time>
                <span>阅读量 123213</span>
            </div>
        </div>
        <article class="article">
             本文是我自己在秋招复习时的读书笔记，整理的知识点，也是为了防止忘记，尊重劳动成果，转载注明出处哦！如果你也喜欢，那就点个小心心，文末赞赏一杯豆奶吧，嘻嘻。 让我们共同成长吧……
        </article>
      </el-col>
      <el-col :span="6">
          <div class="user-info-right">
            <a href="#" >
                <img class="img" src="https://upload.jianshu.io/users/upload_avatars/5376408/11599b5a-9447-4289-bee9-aa9952e9e90d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="">
            </a>
            <div class="user-right">
                <div class="user-tit vertical-centering">
                    <p>我是用户姓名</p>
                    <div class="btn"> <i></i>收藏</div>
                </div>
                <span>gw各位欧冠叫我二哥改完我坑位个高嗡嗡我我刚问我</span>
            </div>
        </div>
        <el-image
            style="width: 100%; height: 100%"
            src="https://gss0.bdstatic.com/7051cy89RcgCncy6lo7D0j9wexYrbOWh7c50/xingzhijihua.png"
            fit="contain"></el-image>
        </el-col>
    </el-row>
    
    </main>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    components: {
      // Header
    },
    data: () => {
      return {
        process: process.env.NODE_ENV
      }
    },
    created() {
      console.log('看到我你就输了')
    }
  }
</script>
<style lang="scss" >
    .articleDetail{
        .tit{
            text-align: left;
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 15px;
        }
        .user-info {
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            font-size: 13px;
            .img{
                display: block;
                border-radius: 50%;
                border: 1px solid #eee;
                min-width: 48px;
                min-height: 48px;
                width: 48px;
                height: 48px;
            }
            .user-right{
                margin-left: 10px;
                .user-tit{
                    font-size: 16px;
                    margin-bottom: 4px;
                    p{
                        text-align: left;
                        color: #444444;
                    }
                    .btn{
                        margin-left: 10px;
                        color: #ec7259;
                    }
                }
                span{
                    color: #999999;
                    font-size: 13px;
                }
                time{
                     color: #999999;
                     display: inline;
                     font-size: 13px;
                     margin: 0 4px;
                }
            }
        }
        .user-info-right{
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            font-size: 13px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eeeeee;
            .img{
                display: block;
                border-radius: 50%;
                border: 1px solid #eee;
                min-width: 48px;
                min-height: 48px;
                width: 48px;
                height: 48px;
            }
            .user-right{
                margin-left: 10px;
                .user-tit{
                    font-size: 16px;
                    margin-bottom: 4px;
                    p{
                        text-align: left;
                        color: #444444;
                    }
                    .btn{
                        margin-left: 10px;
                        color: #ec7259;
                    }
                }
                span{
                    color: #999999;
                    font-size: 13px;
                    display: inline-block;
                    text-align: left;
                }
            }
        }
        .article{
            margin-bottom: 20px;
            word-break: break-word;
            font-weight: 400;
            line-height: 1.8;
            text-align: left;
        }
    }
</style>