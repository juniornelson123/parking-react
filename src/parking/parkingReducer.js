const INITIAL_VALUE = { list: [] , parking: {}, cities: [], states: []}

export default (state = INITIAL_VALUE, action ) => {
	switch(action.type){
		case 'GET_PARKING':
			return {...state, list: action.payload.data}
		case 'GET_STATES':
			return {...state, states: action.payload.data}
		case 'GET_CITIES':
			return {...state, cities: action.payload.data}
		default:
			return state	
	}
}