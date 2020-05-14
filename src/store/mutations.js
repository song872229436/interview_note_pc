const userStatus = (state,flag) =>{
	// if(user){
	// 	state.currentUser = user
	// 	state.isLogin = true
	// }else if(user === null){
	// 	//登出的时候，清空localStorage里的东西
	// 	localStorage.setItem("userName",null)
	// 	localStorage.setItem("userToken","")
	// 	state.currentUser = null
	// 	state.isLogin = false
	// 	state.token = ""
	// }
	state.isLogin = flag
}
const userToken = (state,token) =>{
	state.token = token
}
export default{
	userStatus,
	userToken
}