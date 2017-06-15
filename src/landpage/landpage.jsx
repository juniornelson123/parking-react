import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import React,{Component} from 'react'

import cristian from '../../public/img/christian.jpg'
import avatar from '../../public/img/avatar.jpg'
import kendall from '../../public/img/kendall.jpg'

import Header from '../common/template/header'
import Content from '../common/template/content'
import Footer from '../common/template/footer'
import Maps from '../maps/maps'



class Landpage extends Component{

	constructor(props) {
	  super(props);
	
	  this.state =  {center: {lat: 59.95, lng: 30.33}, zoom: 11};
	}
	

 	render(){
	 	return(
			<div className="landing-page">
				<Header >
					<div className="wrapper" style={{marginTop: 60}}>
	        		    <div className="header header-filter" style={{backgroundColor: '#fff'}}>
	        				<Maps center={this.state.center} zoom={this.state.zoom}/>
					 	</div>	  
					 </div>	  
				</Header>
				
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = state => ({  })
export default Landpage
