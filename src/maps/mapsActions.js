
export function getCurrentLocation(){
	return dispatch => {

		if (navigator.geolocation) {
	      navigator.geolocation.getCurrentPosition(function(position) {
	        var pos = {
	          lat: position.coords.latitude,
	          lng: position.coords.longitude
	        };

			dispatch([{
				type: 'GET_CURRENT_LOCATION',
				payload: pos
			}])
	      }, function() {
	        console.log("erro ao obter dados")
	      });
	    } else {
	      // Browser doesn't support Geolocation
	        console.log("erro ao obter dados")
	    }
	}
}
