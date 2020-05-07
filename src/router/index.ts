import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import(/* webpackChunkName:"home" */ '@/views/Home.vue')
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/signIn',
    name: 'signIn',
    meta: {
      hideHeader: true
    },
    component: () => import(/* webpackChunkName: "signIn" */ '@/views/signIn/index.vue')
  },
  {
    path: '/signUp',
    name: 'signUp',
    meta: {
      hideHeader: true
    },
    component: () => import(/* webpackChunkName: "signUp" */ '@/views/signUp/index.vue')
  },
  {
    path: '/forgePsw',
    name: 'forgePsw',
    meta: {
      hideHeader: true
    },
    component: () => import(/* webpackChunkName: "forgePsw" */ '@/views/forgePsw/index.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue')
  },
  {
    path: '/articleList',
    name: 'articleList',
    component: () => import(/* webpackChunkName: "articleList" */ '@/views/articleList/index.vue')
  },
  {
    path: '/articleDetail',
    name: 'articleDetail',
    component: () => import(/* webpackChunkName: "articleDetail" */ '@/views/articleDetail/index.vue')
  },
  {
	path: '/articleManage',
	name: 'articleManage',
	component: () => import(/* webpackChunkName: "articleManage" */ '@/views/articleManage/index.vue')
  },
  {
  	path: '/release',
  	name: 'release',
  	component: () => import(/* webpackChunkName: "release" */ '@/views/release/index.vue')
  },
  {
  	path: '/personCenter',
  	name: 'personCenter',
	redirect: '/personCenter/personInfo',
  	component: () => import(/* webpackChunkName: "personCenter" */ '@/views/personCenter/index.vue'),
	children:[
		{
			path: 'personInfo',
			name: 'personInfo',
			component: () => import(/* webpackChunkName: "personInfo" */ '@/views/personCenter/personInfo/index.vue'),
		},
		{
			path: 'adRevenue',
			name: 'adRevenue',
			component: () => import(/* webpackChunkName: "adRevenue" */ '@/views/personCenter/adRevenue/index.vue'),
		},
		{
			path: 'adManage',
			name: 'adManage',
			component: () => import(/* webpackChunkName: "adManage" */ '@/views/personCenter/adManage/index.vue'),
		},
		{
			path: 'score',
			name: 'score',
			component: () => import(/* webpackChunkName: "score" */ '@/views/personCenter/score/index.vue'),
		}
	]
  }
]

const router = new VueRouter({
  routes
})

export default router
