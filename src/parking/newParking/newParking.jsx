import React, { Component } from 'react'

import Header from '../../common/template/headerDashboard'
import Content from '../../common/template/contentDashboard'
import Form from './newParkingForm'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { saveParking } from '../parkingActions'


class NewParking extends Component{
	
	constructor(props) {
	  super(props);
	
	}
	
	render(){

		return(
			<div className="wrapper">
				<Content>

					<div className="content">
			            <div className="container-fluid">
			                <Form onSubmit={this.props.saveParking}/>			                          
			            </div>
			        </div>
				</Content>	
			</div>
		)
	}
}

const mapStateToProps = state => ({parking: state.parking})
const mapDispatchToProps = dispatch => bindActionCreators({saveParking}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NewParking)