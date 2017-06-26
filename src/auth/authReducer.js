const userKey = "_estaciona_facil_user"
const INITIAL_VALUE = {
//	user: {name: 'junior', email: 'junior@gmail.com'}
	user: JSON.parse(localStorage.getItem(userKey)),
	validToken: false
}

export default (state = INITIAL_VALUE, action ) => {
	switch(action.type){
		case 'TOKEN_VALIDATED':
			if (action.payload) {
				return { ...state, validToken: true }
			}else{
				localStorage.removeItem(userKey)
				return { ...state, validToken: false, user: null}
			}
		case 'USER_FETCHED':
		console.log(action.payload)
			localStorage.setItem(userKey, JSON.stringify(action.payload))
			return { ...state, user: action.payload, validToken: true}	
		default:
			return state	
	}
}