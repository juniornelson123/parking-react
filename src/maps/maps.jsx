import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {getCurrentLocation} from './mapsActions'
import {getParkings} from '../parking/parkingActions'

import GoogleMapReact from 'google-map-react';
import BoxInfo from './boxInfo'
import MapMarker from '../common/maps/mapMarker'

class Maps extends Component {
	constructor(props) {
		super(props);
		
		self = this
	}
	

	componentDidMount(){
		this.props.getCurrentLocation()
		this.props.getParkings()
	}	

	clickMap(center){
		console.log(center)
		
	}

	centerChange(center){
		console.log(center)
	}

	render(){

		const markers = this.props.parking.list.map((marker) =>{
			return(<MapMarker 
				key={marker.name}
		     	lat={marker.address.lat}
		      	lng={marker.address.lng}
				/>)
		}
			
		)

		return(
			<div style={{width: '100%', height: '500px',position:'relative'}}>

				 <GoogleMapReact
					bootstrapURLKeys={{key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",  language: ''}}
					defaultZoom={this.props.maps.zoom}
					center={this.props.maps.center}
					onClick={this.clickMap}
					onChange={this.centerChange}
					>
		   			
	   				{markers}	
		   		</GoogleMapReact>
		   		<BoxInfo />	
			</div>
		)
	}
}

const mapStateToProps = state => ({ maps: state.maps, parking: state.parking })
const mapDispatchToProps = dispatch => bindActionCreators({getCurrentLocation, getParkings}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Maps)