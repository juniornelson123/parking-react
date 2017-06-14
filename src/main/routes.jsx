import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'

import Landpage from '../landpage/landpage'
import Signup from '../landpage/signup'
import Signin from '../landpage/signin'

export default props => (
	<HashRouter>
		<Switch>
			<Route path="/home" component={Landpage} />
			<Route path="/sign_in" component={Signin} />
			<Route path="/sign_up" component={Signup} />
			<Redirect from="*" to="/home" />
		</Switch>
	</HashRouter>
)