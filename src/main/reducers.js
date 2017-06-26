import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import mapsReducer from '../maps/mapsReducer'
import authReducer from '../auth/authReducer'
import parkingReducer from '../parking/parkingReducer'

const rootReducers = combineReducers({
	form: formReducer,
	toastr: toastrReducer,
	maps: mapsReducer,
	auth: authReducer,
	parking: parkingReducer
}) 

export default rootReducers