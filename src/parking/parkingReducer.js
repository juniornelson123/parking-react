const parkingKey = "_estaciona_facil_parking"

const INITIAL_VALUE = { list: [] , parking: JSON.parse(localStorage.getItem(parkingKey)), cities: [], states: [], image: ''}

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