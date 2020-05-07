import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'
// import * as mutations from './mutations'
// import * as actions from './actions'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
// const {getters}=require('./getters')
// const {mutations}=require('./mutations')
// const {actions}=require('./actions')

Vue.use(Vuex)

const state={
	token: '',
	currentUser:null,
	isLogin:false,
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store