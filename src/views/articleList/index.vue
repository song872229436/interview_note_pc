<template>
  <div class="articleList mainPage">
    <main class="main">
     <el-row  :gutter="20" class="itemList">
      <el-col :span="18">
        <el-card shadow="hover">
          <div class="box vertical-centering">
            <div class="box-left">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2004185588,1761930389&fm=26&gp=0.jpg" class="image">
            </div>
            <div class="box-right">
                <div class="box-tit">
                   <router-link :to="{name:'articleDetail',params: { userId: 1111}}">面试官：Vue 的生命周期之间到底做了什么事清？（源码详解）</router-link>
                </div>
                <div class="box-con">相信大家对 Vue 有哪些生命周期早就已经烂熟于心，但是对于这些生命周期的前后分别做了哪些事情，可能还有些不熟悉。

本篇文章就从一个完整的流程开始，详细讲解各个生命周期之间发生了什么事情。

注意本文不涉及 keep-alive 的场景和错误处理的场景。</div>
                <time class="box-bot">2020年04月04日</time>
            </div>
          </div>
        </el-card>
        <el-card shadow="hover">
          <div class="box vertical-centering">
            <div class="box-left">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2950780896,1926873007&fm=26&gp=0.jpg" class="image">
            </div>
            <div class="box-right">
                <div class="box-tit">豪横！程序员搭建技术博客，就只需一个GitHub账号</div>
                <div class="box-con">作为程序员拥有一个属于自己的个人技术博客，绝对是百利无一害的事，不仅方便出门装b，面试时亮出博客地址也会让面试官对你的好感度倍增。经常能在很多大佬的技术文章的文末，看到这样一句话： “欢迎大家访问我的博客”，每每看到这都会觉得好酷，同样是搞技术为啥人家那么优秀。而自己想要建一个博客，要么怕花钱，要么怕过程太麻烦，最后就不了了之。
应粉丝要求，今天手把手，嘴对嘴（放心吧，我才不稀罕亲你）的教大家搭建一个属于自己的技术博客，只要你有个github地址就行！还等啥呢？骚年，开整吧！
。</div>
                <time class="box-bot">2020年04月04日   阅读 514</time>
            </div>
          </div>
        </el-card>
        <el-card shadow="hover">
          <div class="box vertical-centering">
            <div class="box-left">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586023937441&di=235ea5499c7f1bbbbcaac8871381d8fa&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D1020703883%2C3757659355%26fm%3D214%26gp%3D0.jpg" class="image">
            </div>
            <div class="box-right">
                <div class="box-tit">Elk环境篇 --- 本地快速搭建你的ElasticSearch及Kibana</div>
                <div class="box-con">ELK是三个软件产品的首字母缩写，Elasticsearch，Logstash 和 Kibana。这三款软件都是开源软件，通常是配合使用，而且又先后归于 Elastic.co 公司名下，故被简称为 ELK 协议栈

左边我们部署了多台服务器，然后我们通过logstash来采集数据，采集完成我们发送到ES集群中存起来，然后通过Kibana去展示到我们的浏览器中，就是这么一个简单的套路
</div>
                <time class="box-bot">2020年04月04日   阅读 256</time>
            </div>
          </div>
        </el-card>
        <el-card shadow="hover">
          <div class="box vertical-centering">
            <div class="box-left">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586024054262&di=39525eedb3295b9ef94c95b812fd516a&imgtype=0&src=http%3A%2F%2F10.url.cn%2Fqqcourse_logo_ng%2FajNVdqHZLLBDy65iay2YnHEzXmrUrT0bIB2scato7bvf8RzazVWsZiaV50j8sSFoTUkv9FUhI95pU%2F600.jpg" class="image">
            </div>
            <div class="box-right">
                <div class="box-tit">VUE 3.0 学习探索入门系列 - Vue3.x 令人期待的新特性（7）</div>
                <div class="box-con">在前面的文章中我们也聊了许多 Vue3.x 相比 Vue2.x 有哪些变化，也介绍了一些它的特点，今天就重点介绍下它新增的这些特性。

本文主要参考：vueschool.io/articles/vu…
</div>
                <time class="box-bot">2020年04月04日   阅读 448</time>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
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
  .itemList{
    margin-top: 20px;
    .el-card{
      &:first-child{
            margin-top: 0;
          }
      border: none;
      border-bottom: 1px solid #EBEEF5;
      margin-top: 20px;
    }
    .box{
      height: 120px;
      .box-left{
        width: 200px;
        height: 120px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .box-right{
        height: 100%;
         width: calc(100% - 220px);
        margin-left: 20px;
        .box-tit{
          &:hover{
            text-decoration: underline;
          }
          text-align: left;
          font-size: 18px;
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .box-con{
          color: #666666;
          margin-top: 10px;
          font-size: 14px;
          display:block;
          overflow: hidden;
          text-align: left;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;  //控制显示几行
          -webkit-box-orient: vertical;   //webbox方向
        }
        .box-bot{
          margin-top: 6px;
           color: #999;
           font-size: 12px;
           float: left;
        }
      }
    }
  }
</style>