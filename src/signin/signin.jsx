import React from 'react'

import Header from '../common/template/header'
import Content from '../common/template/content'
import Footer from '../common/template/footer'

export default props => (
	<div className="landing-page">
		<Header>

				
		</Header>
		<Content>

	    	<div className="section text-center section-landing">
				<div className="row">
					<div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
						<div className="card card-signup">
							<form className="form" method="" action="">
								<div className="header header-primary text-center">
									<h4>Entrar</h4>
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

									<div className="input-group">
										<span className="input-group-addon">
											<i className="material-icons">email</i>
										</span>
										<input type="text" className="form-control" placeholder="Email..."/>
									</div>

									<div className="input-group">
										<span className="input-group-addon">
											<i className="material-icons">lock_outline</i>
										</span>
										<input type="password" placeholder="Senha..." className="form-control" />
									</div>
								</div>
								<div className="footer text-center">
									<a href="#pablo" className="btn btn-simple btn-primary btn-lg">Entrar</a>
								</div>
							</form>
						</div>
					</div>
				</div>	
			</div>	

		</Content>
		

	</div>
)