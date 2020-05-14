// const setUser = ({commit},flag) =>{
// 	commit('userStatus',flag)
// }
const setToken = ({commit},token) =>{
	commit('userToken',token)
}
const userLogin = ({commit},flag) =>{
	commit('userStatus',flag)
}
export default{
	// setUser,
	setToken,
	userLogin
}