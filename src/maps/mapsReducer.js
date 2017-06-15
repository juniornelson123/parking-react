const INITIAL_VALUE = {center: {lat: -5.1097131, lng: -42.7618182}, zoom: 15, markers: [{marker: {lat: -5.1097131, lng: -42.7618182, desc: "estacionamento1"}}, {marker: {lat: -5.107826, lng: -42.7625721, desc: "estacionamento2"}}]}
// {marker: {lat: -5.1097131, lng: -43.7618182,, desc: "estacionamento2"}}
export default (state = INITIAL_VALUE, action) => {
	switch(action.type){
		case 'GET_CURRENT_LOCATION':
			return {...state, center: action.payload}
		default:
			return state
	}
}
