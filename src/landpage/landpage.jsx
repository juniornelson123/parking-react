
import React,{Component} from 'react'

import cristian from '../../public/img/christian.jpg'
import avatar from '../../public/img/avatar.jpg'
import kendall from '../../public/img/kendall.jpg'

import Header from '../common/template/header'
import Content from '../common/template/content'
import Footer from '../common/template/footer'

import BoxInfo from './boxInfo'
import GoogleMapReact from 'google-map-react';

class Landpage extends Component{

	constructor(props) {
	  super(props);
	
	  this.state = {center: {lat: 59.95, lng: 30.33}, zoom: 11};
	}

 render(){
 	return(
		<div className="landing-page">
			<Header >
				<div className="wrapper" style={{marginTop: 60}}>
        		    <div className="header header-filter" style={{backgroundColor: '#fff'}}>
        
						<div style={{width: '100%', height: '500px',position:'relative'}}>
		  
							 <GoogleMapReact
								bootstrapURLKeys={{key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",  language: ''}}
								defaultCenter={this.state.center}
								defaultZoom={this.state.zoom}

						      />

		               		<BoxInfo />	
				 		</div>
				 	</div>	  
				 </div>	  
			</Header>
			
			<Footer />
		</div>
		)
	}
}

export default Landpage
