import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {getCurrentLocation} from './mapsActions.js'

import GoogleMapReact from 'google-map-react';
import BoxInfo from './boxInfo'
import MapMarker from '../common/maps/mapMarker'

class Maps extends Component {
	constructor(props) {
	  super(props);
		
		self = this
	  this.state = {};
	}
	
	getLocation(){

		if (navigator.geolocation) {
	      navigator.geolocation.getCurrentPosition(function(position) {
	        var pos = {
	          lat: position.coords.latitude,
	          lng: position.coords.longitude
	        };

	        self.props.getCurrentLocation(pos)
	      }, function() {
	        console.log("erro ao obter dados")
	      });
	    } else {
	      // Browser doesn't support Geolocation
	        console.log("erro ao obter dados")
	    }
	}

	componentDidMount(){
		this.getLocation()

	}


	render(){

		const markers = this.props.maps.markers.map((marker) =>{
			return(<MapMarker 
				key={marker.marker.desc}
		     	lat={marker.marker.lat}
		      	lng={marker.marker.lng}
				/>)
		}
			
		)

		return(
			<div style={{width: '100%', height: '500px',position:'relative'}}>

				 <GoogleMapReact
					bootstrapURLKeys={{key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",  language: ''}}
					defaultZoom={this.props.maps.zoom}
					center={this.props.maps.center}
					>
		   			
	   				{markers}	
		   		</GoogleMapReact>
		   		<BoxInfo />	
			</div>
		)
	}
}

const mapStateToProps = state => ({ maps: state.maps })
const mapDispatchToProps = dispatch => bindActionCreators({getCurrentLocation}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Maps)