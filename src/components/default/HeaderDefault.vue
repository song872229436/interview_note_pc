<template>
  <div class="header">
    <div class="centre">
      <div class="vertical-centering">
        <div class="logo">
          <img alt="面试笔记" src="../../assets/img/logo.png" />
        </div>
        <div class="nav-list" id="navList">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <div class="navigation" id="navbox">
          <nav>
            <ul>
              <li class="active">
                <a href>前端</a>
              </li>
              <li>
                <a href>后端</a>
              </li>
              <li>
                <a href>IOS</a>
              </li>
              <li>
                <a href>Android</a>
              </li>
              <li>
                <a href>Python</a>
              </li>
              <!-- <li>
                <a href="#">|</a>
              </li>-->
            </ul>
          </nav>
        </div>
      </div>
      <div class="right-box vertical-centering">
         <div class="search">
            <el-autocomplete
              :fetch-suggestions="querySearch"
              @select="handleSelect"
              placeholder="搜索想寻找的面试精要"
              popper-class="my-autocomplete"
              v-model="state"
            >
              <i @click="handleIconClick" class="el-icon-edit el-input__icon" slot="suffix"></i>
              <template slot-scope="{ item }">
                <div class="name">{{ item.value }}</div>
                <span class="addr">{{ item.address }}</span>
              </template>
            </el-autocomplete>
          </div>
          <div class="right-other vertical-centering">
            <a class="send" href>发题挣钱+</a>
            <a href>开发工具</a>
          </div>
          <div class="right-user">
			<!-- 未登录 -->
			<div v-show="!isLogin">
				<router-link to="/signIn">登录</router-link>
				<el-divider direction="vertical"></el-divider>
				<router-link to="/signUp">注册</router-link>
			</div>
           
			
			<!-- 已登录 -->
			<!-- <a href="">个人中心</a> -->
			<div v-show="isLogin">
				<personCenterBtn></personCenterBtn>
			</div>
			
          </div>
      </div>
      
     
    </div>
  </div>
</template>

<script>
  import { Autocomplete } from 'element-ui'
  import personCenterBtn from '../personCenterBtn.vue'
  export default {
	components:{
		personCenterBtn
	},
    data() {
      return {
        restaurants: [],
        state: '',
      }
    },
	computed:{
		isLogin(){
			return this.$store.getters.isLogin
		}
	},
    methods: {
      querySearch(queryString, cb) {
        const restaurants = this.restaurants
        const results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
        // 调用 callback 返回建议列表的数据
        cb(results)
      },
      createFilter(queryString) {
        return restaurant => {
          return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        }
      },
      loadAll() {
        return [
          { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
          { value: 'Hot honey 首尔炸鸡（仙霞路）', address: '上海市长宁区淞虹路661号' },
          { value: '新旺角茶餐厅', address: '上海市普陀区真北路988号创邑金沙谷6号楼113' }
        ]
      },
      handleSelect(item) {
        console.log(item)
      },
      handleIconClick(ev) {
        console.log(ev)
      }
    },
    mounted() {
      this.restaurants = this.loadAll()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // @import '@/assets/scss/index.scss';
  /* 头部整体 */
  .header {
    height: 60px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    position: fixed;
    z-index: 100;
    .centre {
      overflow: hidden;
      width: 1200px;
      min-width: 990px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      // min-width: 1200px;
      // max-width: 1300px;
      z-index: 100;
      .logo {
        float: left;
      }
      .right-box {
        width: 47%;
        justify-content: space-between;
      }
    }
    .right-other {
      display: flex;
      align-items: center;
      .send {
        font-size: 24px;
        color: #6190e8;
        margin-right: 10px;
      }
    }
    .right-user {
      // width: 120px;
      a {
        margin: 10px 0;
      }
    }
  }
  /* 页面实体区域 */
  /* 页面logo */
  .logo {
    img {
      display: block;
      // padding: 30px 60px;
      overflow: hidden;
      margin-top: -10px;
      height: 60px;
    }
  }
  .nav-list {
    margin-top: 26px;
    margin-right: 2px;
    float: right;
    padding: 6px;
  }

  .line {
    margin: 2px 0;
    display: block;
    width: 12px;
    height: 2px;
    background-color: #6190e8;
  }
  /* nav栏 */
  nav {
    float: left;
    ul {
      li {
        float: left;
        height: 100%;
        line-height: 60px;
        text-align: center;
        font-size: 16px;
        // margin: 0 10px;
        position: relative;
        &.active {
          &::before {
            content: ' ';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 3px;
            width: 100%;
            background-color: #6190e8;
          }
        }
        a {
          display: block;
          height: 100%;
          padding: 0 15px;
          color: #333;
          font-size: 16px;
        }
      }
    }
  }
  /* 导航列表上的3条蓝色线条类 */
  .nav-list {
    display: none;
  }

  /* 像素大于1024px时改变 */
  @media (max-width: 1024px) {
    /* 中心区域自适应满屏 */
    .centre {
      width: 100%;
    }
    /* 显示导航列表按钮 */
    .nav-list {
      display: block;
    }
    /* 隐藏手机端nav栏需点击打开 */
    .navigation {
      /* 高度设0溢出隐藏实现 */
      overflow: hidden;
      height: 0;
      position: absolute;
      margin-top: 60px;
      transition: height 0.5s;
    }
    .navigationheight {
      height: 210px;
    }
    nav {
      float: none;
      padding: 0;
    }
    nav ul li {
      float: none;
      margin-bottom: 15px;
      height: 30px;
      line-height: 30px;
    }
    nav ul li.active::before {
      content: ' ';
      height: 100%;
      width: 2px;
      background-color: #6190e8;
    }
  }
  .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;

      .name {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .addr {
        font-size: 12px;
        color: #b4b4b4;
      }

      .highlighted .addr {
        color: #ddd;
      }
    }
  }
</style>
