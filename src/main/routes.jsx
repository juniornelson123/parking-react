import React, {Component} from 'react'
import {HashRouter, Route, Switch, Redirect, hashHistory} from 'react-router-dom'

import Dashboard from '../dashboard/dashboard'
import NewParking from '../parking/newParking/newParking'
import Landpage from '../landpage/landpage'
import Signup from '../signup/signup'
import Signin from '../signin/signin'
import AuthRoute from './authRoute'

export default class Routes extends Component{
	
	render(){
		return(
			<HashRouter history={ hashHistory }>
				<Switch>
					<AuthRoute exact path='/home' component={Landpage} />
					<AuthRoute path='/dashboard' component={Dashboard} />
					<AuthRoute path="/sign_in" component={Signin} />
					<AuthRoute path="/sign_up" component={Signup} />
					<AuthRoute path="/novo/estacionamento" component={NewParking} />
					<Redirect from="*" to="/home" />
				</Switch>
			</HashRouter>
		)
	}
} 