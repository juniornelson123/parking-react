import React, { Component } from 'react'
import Sidebar from './sidebar'
import Header from './headerDashboard'
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
			<div className="sidebar-wrapper">
				<Sidebar />
				<div className="main-panel">
					<Header />				
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default HeaderDashboard