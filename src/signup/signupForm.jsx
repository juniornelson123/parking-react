import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import input from '../common/form/input' 
import { login } from '../auth/authActions'

class SignupForm extends Component{
	render(){
		const { handleSubmit, readOnly } = this.props

		return(
			<form role="form" onSubmit={handleSubmit}>
				<div className="box-body">
					<Field name="name" component={input} icon="face" placeholder="Nome..." readOnly={readOnly}/>
					<Field name="email" component={input} icon="email" placeholder="Email..." readOnly={readOnly}/>
					<Field name="password" component={input} icon="lock_outline" label="Senha" placeholder="Senha..." type="password" readOnly={readOnly}/>
				</div>
				<div className="box-footer">
					<button type="submit" className="btn btn-primary">Cadastrar</button>
				</div>
			</form>
		)
	}
}


const selector = formValueSelector('signupForm')
const mapStateToProps = (state) => ({
	user: selector(state, 'auth')
})

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({login}, dispatch)
}

SignupForm = reduxForm({form: 'signupForm', destroyOnUnmount: false})(SignupForm)
export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
