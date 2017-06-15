import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class AuthRoute extends Component {
  render(){
  		console.log(this.props.user.user)
	  if (this.props.user.user) {
	  	if(this.props.path == '/sign_in' || this.props.path == '/sign_up'){
  			return <Redirect to="/home" />

	  	}
  		return <Route path={this.props.path} component={this.props.component} />;
	  } else {
		if(this.props.path == '/sign_in' || this.props.path == '/sign_up'){
  			return <Route path={this.props.path} component={this.props.component} />
  		}  		
	    return <Redirect to="/sign_in" />

	  }
  }
};


const mapStateToProps = state => ({user: state.auth})
export default connect(mapStateToProps)(AuthRoute)