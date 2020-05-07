const setUser = ({commit},user) =>{
	commit('userStatus',user)
}
const setToken = ({commit},token) =>{
	commit('userStatus',token)
}
export default{
	setUser,
	setToken
}