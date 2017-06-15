import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import mapsReducer from '../maps/mapsReducer'
import authReducer from '../auth/authReducer'

const rootReducers = combineReducers({
	form: formReducer,
	toastr: toastrReducer,
	maps: mapsReducer,
	auth: authReducer
}) 

export default rootReducers