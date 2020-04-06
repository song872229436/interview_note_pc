<template>
  <div class="home ">
    <!-- <img alt="Vue logo"
    src="../assets/logo.png">-->
    <el-carousel height="300px" trigger="click">
      <el-carousel-item :key="item" v-for="item in 4">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <main class="main">
      <!-- <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>-->
      <el-row :gutter="40" class="items-list">
        <el-col :span="12" class="item">
          <div class="title vertical-centering">
            <div class="title-name">我是标题</div>
            <div class="num">
              <img alt src />
              12321
            </div>
          </div>
          <div class="content">
            <p>给我给我给我购物国内外公文</p>
          </div>
          <div class="bottom vertical-centering">
            <div class="bottom-l">1231231231232</div>
            <div class="bottom-r">我是你打野</div>
          </div>
        </el-col>
        <el-col :span="12" class="item">
          <div class="title vertical-centering">
            <div class="title-name">我是标题</div>
            <div class="num">
              <img alt src />
              12321
            </div>
          </div>
          <div class="content">
            <p>给我给我给我购物国内外公文</p>
          </div>
          <div class="bottom vertical-centering">
            <div class="bottom-l">1231231231232</div>
            <div class="bottom-r">我是你打野</div>
          </div>
        </el-col>
      </el-row>
      <el-pagination class="page-box" :total="1000" background layout="prev, pager, next"></el-pagination>
    </main>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import Header from '@/components/default/Header.vue'

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
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .page-box {
    margin-top: 20px;
    .el-pager li {
      border: 1px solid #eeeeee ;
      background: #ffffff ;
    }
  }
  .home{
    .main{
        width: 1200px;
        margin:0 auto;
      }
  }
  .items-list {
    // display: flex;
    // flex-wrap: wrap;
    .item {
      // flex: 0 0 40%;
      // margin-left: 5%;
      margin-top: 20px;
      padding-bottom: 20px;
      // margin: 20px;
      .title {
        padding: 10px 0;
        justify-content: space-between;
        border-bottom: 1px solid #eeeeee;
        .title-name {
          display: inherit;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.5;
        }
      }
      .content {
        margin: 30px 0;
        text-align: left;
        p {
          margin: 0 0 8px;
          font-size: 13px;
          line-height: 24px;
          color: #999;
        }
      }
      .bottom {
        justify-content: space-between;
      }
    }
  }
</style>