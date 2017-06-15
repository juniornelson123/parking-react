import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/app'
import Messages from './common/msg/messages'

import reducers from './main/reducers'

const store =  applyMiddleware(multi, thunk, promise)(createStore)(reducers)
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>	
,document.getElementById("app"))