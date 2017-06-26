import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../auth/authActions'

class Sidebar extends Component{
	render(){
		return(
			<div className="sidebar" data-color="purple" data-image="../assets/img/sidebar-1.jpg">
					
					<div className="logo">
						<Link to={`home`} className="simple-text">
							Estaciona Facil
						</Link>
					</div>

			    	<div className="sidebar-wrapper">
			            <ul className="nav">
			                <li className="active">
			                    <a href="dashboard.html">
			                        <i className="material-icons">dashboard</i>
			                        <p>Dashboard</p>
			                    </a>
			                </li>
			                
							<li className="active-pro">
			                    <a href="" onClick={() => this.props.logout()}>
			                        <i className="material-icons">close</i>
			                        <p>Logout</p>
			                    </a>
			                </li>
			            </ul>
			    	</div>
			    </div>
		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({logout}, dispatch)
export default connect(null, mapDispatchToProps)(Sidebar)

