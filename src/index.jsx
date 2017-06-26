import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import createHistory from 'history/createBrowserHistory'


const history = createHistory()

const middleware = routerMiddleware(history)



import App from './main/app'
import Messages from './common/msg/messages'

import reducers from './main/reducers'

const store =  applyMiddleware(middleware, multi, thunk, promise)(createStore)(reducers)
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>	
,document.getElementById("app"))