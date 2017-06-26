import React, { Component } from 'react'
import Sidebar from './sidebar'
import { Link } from 'react-router-dom'
class HeaderDashboard extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {open: false};

	}

	_openNav(){
		console.log("clicko")
		if (this.state.open) {
			
			this.setState({...this.state, open: false})
	  		$('html').removeClass('nav-open')


		}else{
			var sidebar_wrapper = $('.sidebar-wrapper');
	  		var navbar = $('nav').find('.navbar-collapse').first().clone(true);

            var nav_content = '';
            var mobile_menu_content = '';

            navbar.children('ul').each(function(){

                var content_buff = $(this).html();
                nav_content = nav_content + content_buff;
            });

            nav_content = "<ul className='nav nav-mobile-menu'>" + nav_content + "</ul>";

     
            var navbar_form = $('nav').find('.navbar-form').clone(true);

            var sidebar_nav = sidebar_wrapper.find(' > .nav');

            nav_content = $(nav_content);
            nav_content.insertBefore(sidebar_nav);
            navbar_form.insertBefore(nav_content);

	  		$('html').addClass('nav-open')
			this.setState({...this.state, open: true})
			
		}
	}


	render(){
		return(
				
			<nav className="navbar navbar-primary navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" onClick={() => this._openNav()} data-toggle="collapse">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">Estaciona Facil</a>
					</div>
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link to={`/home`}  className="dropdown-toggle"  data-toggle="dropdown">
									<i className="material-icons">home</i>
									<p className="hidden-lg hidden-md">Home</p>
								</Link>
							</li>
						</ul>

					</div>
				</div>
			</nav>
	
		)
	}
}

export default HeaderDashboard