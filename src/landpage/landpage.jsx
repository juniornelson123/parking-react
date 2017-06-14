import React from 'react'

import cristian from '../../public/img/christian.jpg'
import avatar from '../../public/img/avatar.jpg'
import kendall from '../../public/img/kendall.jpg'

import Header from '../common/template/header'
import Content from '../common/template/content'

export default props => (
	<div className="landing-page">
		<Header >
			<div className="col-md-6">
				<h1 className="title">Write the best title for your page.</h1>
                <h4>Every landing page needs a small description after the big bold title, thats why we added this text here. Add here all the information that can make you or your product create the first impression.</h4>
                <br />
               
			</div>
		</Header>
		<Content>
			<div className="section text-center section-landing">
	            <div className="row">
	                <div className="col-md-8 col-md-offset-2">
	                    <h2 className="title">Lets talk product</h2>
	                    <h5 className="description">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldnt scroll to get here. Add a button if you want the user to see more.</h5>
	                </div>
	            </div>

				<div className="features">
					<div className="row">
	                    <div className="col-md-4">
							<div className="info">
								<div className="icon icon-primary">
									<i className="material-icons">chat</i>
								</div>
								<h4 className="info-title">First Feature</h4>
								<p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
							</div>
	                    </div>
	                    <div className="col-md-4">
							<div className="info">
								<div className="icon icon-success">
									<i className="material-icons">verified_user</i>
								</div>
								<h4 className="info-title">Second Feature</h4>
								<p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
							</div>
	                    </div>
	                    <div className="col-md-4">
							<div className="info">
								<div className="icon icon-danger">
									<i className="material-icons">fingerprint</i>
								</div>
								<h4 className="info-title">Third Feature</h4>
								<p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
							</div>
	                    </div>
	                </div>
				</div>
	        </div>

	    	<div className="section text-center">
	            <h2 className="title">Here is our team</h2>

				<div className="team">
					<div className="row">
						<div className="col-md-4">
		                    <div className="team-player">
		                        <img src={avatar} alt="Thumbnail Image" className="img-raised img-circle" />
		                        <h4 className="title">Gigi Hadid <br />
									<small className="text-muted">Model</small>
								</h4>
		                        <p className="description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some <a href="#">links</a> for people to be able to follow them outside the site.</p>
								<a href="#pablo" className="btn btn-simple btn-just-icon"><i className="fa fa-twitter"></i></a>
								<a href="#pablo" className="btn btn-simple btn-just-icon"><i className="fa fa-instagram"></i></a>
								<a href="#pablo" className="btn btn-simple btn-just-icon btn-default"><i className="fa fa-facebook-square"></i></a>
		                    </div>
		                </div>
		                <div className="col-md-4">
		                    <div className="team-player">
		                        <img src={cristian} alt="Thumbnail Image" className="img-raised img-circle" />
		                        <h4 className="title">Christian Louboutin<br />
									<small className="text-muted">Designer</small>
								</h4>
		                        <p className="description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some <a href="#">links</a> for people to be able to follow them outside the site.</p>
								<a href="#pablo" className="btn btn-simple btn-just-icon"><i className="fa fa-twitter"></i></a>
								<a href="#pablo" className="btn btn-simple btn-just-icon"><i className="fa fa-linkedin"></i></a>
		                    </div>
		                </div>
		                <div className="col-md-4">
		                    <div className="team-player">
		                        <img src={kendall} alt="Thumbnail Image" className="img-raised img-circle" />
		                        <h4 className="title">Kendall Jenner<br />
									<small className="text-muted">Model</small>
								</h4>
		                        <p>You can write here details about one of your team members. You can give more details about what they do. Feel free to add some <a href="#">links</a> for people to be able to follow them outside the site.</p>
								<a href="#pablo" className="btn btn-simple btn-just-icon"><i className="fa fa-google-plus"></i></a>
								<a href="#pablo" className="btn btn-simple btn-just-icon"><i className="fa fa-youtube-play"></i></a>
								<a href="#pablo" className="btn btn-simple btn-just-icon btn-default"><i className="fa fa-twitter"></i></a>
		                    </div>
		                </div>
					</div>
				</div>

	        </div>


	    	<div className="section landing-section">
	            <div className="row">
	                <div className="col-md-8 col-md-offset-2">
	                    <h2 className="text-center title">Work with us</h2>
						<h4 className="text-center description">Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.</h4>
	                    <form className="contact-form">
	                        <div className="row">
	                            <div className="col-md-6">
									<div className="form-group label-floating">
										<label className="control-label">Your Name</label>
										<input type="email" className="form-control"/>
									</div>
	                            </div>
	                            <div className="col-md-6">
									<div className="form-group label-floating">
										<label className="control-label">Your Email</label>
										<input type="email" className="form-control"/>
									</div>
	                            </div>
	                        </div>

							<div className="form-group label-floating">
								<label className="control-label">Your Messge</label>
								<textarea className="form-control" rows="4"></textarea>
							</div>

	                        <div className="row">
	                            <div className="col-md-4 col-md-offset-4 text-center">
	                                <button className="btn btn-primary btn-raised">
										Send Message
									</button>
	                            </div>
	                        </div>
	                    </form>
	                </div>
	            </div>

	        </div>
		</Content>
	</div>
)