import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../common/template/header'
import Content from '../common/template/content'
import Footer from '../common/template/footer'

import Form from './signupForm'
import { signup } from '../auth/authActions'

class Signup extends Component{
	render(){
		return(
			<div className="signup-page">
				<Header />
				<Content>

			    	<div className="section text-center section-landing">
						<div className="row">
							<div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
								<div className="card card-signup">
									<form className="form" method="" action="">
										<div className="header header-primary text-center">
											<h4>Cadastrar</h4>
											<div className="social-line">
												<a href="#pablo" className="btn btn-simple btn-just-icon">
													<i className="fa fa-facebook-square"></i>
												</a>
												<a href="#pablo" className="btn btn-simple btn-just-icon">
													<i className="fa fa-twitter"></i>
												</a>
												<a href="#pablo" className="btn btn-simple btn-just-icon">
													<i className="fa fa-google-plus"></i>
												</a>
											</div>
										</div>
										<div className="content">
											<Form onSubmit={this.props.signup} />
										</div>
									</form>
								</div>
							</div>
						
						</div>
					</div>
				</Content>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({signup}, dispatch)
export default connect(null, mapDispatchToProps)(Signup)