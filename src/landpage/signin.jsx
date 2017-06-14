import React from 'react'

import Header from '../common/template/header'
import Content from '../common/template/content'

export default props => (
	<div className="signup-page">
		<Header>
			<div className="row">
					<div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
						<div className="card card-signup">
							<form className="form" method="" action="">
								<div className="header header-primary text-center">
									<h4>Sign in</h4>
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
								<p className="text-divider">Or Be ClassNameical</p>
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
										<input type="password" placeholder="Password..." className="form-control" />
									</div>
								</div>
								<div className="footer text-center">
									<a href="#pablo" className="btn btn-simple btn-primary btn-lg">Get Started</a>
								</div>
							</form>
						</div>
					</div>
				
				</div>
				<footer className="footer">
		        <div className="container">
		            <nav className="pull-left">
						<ul>
							<li>
								<a href="http://www.creative-tim.com">
									Creative Tim
								</a>
							</li>
							<li>
								<a href="http://presentation.creative-tim.com">
								   About Us
								</a>
							</li>
							<li>
								<a href="http://blog.creative-tim.com">
								   Blog
								</a>
							</li>
							<li>
								<a href="http://www.creative-tim.com/license">
									Licenses
								</a>
							</li>
						</ul>
		            </nav>
		            <div className="copyright pull-right">
		                &copy; 2016, made with <i className="fa fa-heart heart"></i> by <a href="http://www.creative-tim.com" target="_blank">Creative Tim</a>
		            </div>
		        </div>
		    </footer>
		</Header>
	</div>
)