
export function getCurrentLocation(location){
	return{
		type: 'GET_CURRENT_LOCATION',
		payload: location
	}
}
