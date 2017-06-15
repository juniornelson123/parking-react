import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login } from '../auth/authActions'

import input from '../common/form/input' 

class SigninForm extends Component{
	render(){
		const { handleSubmit, readOnly } = this.props

		return(
			<form role="form" onSubmit={handleSubmit}>
				<div className="box-body">
					<Field name="email" component={input} icon="email" type="email" placeholder="Email..." readOnly={readOnly}/>
					<Field name="password" component={input} type="password" icon="lock_outline" label="Senha" placeholder="Senha..." readOnly={readOnly}/>
				</div>
				<div className="box-footer">
					<button type="submit" className="btn btn-primary">Entrar</button>
				</div>
			</form>
		)
	}
}


const selector = formValueSelector('signinForm')
const mapStateToProps = (state) => ({
	user: selector(state, 'auth')
})

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({login}, dispatch)
}

SigninForm = reduxForm({form: 'signinForm', destroyOnUnmount: false})(SigninForm)
export default connect(mapStateToProps, mapDispatchToProps)(SigninForm)
