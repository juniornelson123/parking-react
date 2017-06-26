import React, { Component } from 'react'
import Dropzone from 'react-dropzone';

import DropzoneComponent from 'react-dropzone-component';

import Header from '../../common/template/headerDashboard'
import Content from '../../common/template/contentDashboard'
import Form from './newParkingForm'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { saveParking } from '../parkingActions'

var componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/uploadHandler'
};
var djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif"
        };
class NewParking extends Component{
	
	constructor(props) {
	  super(props);
	
	  this.state = {image: ''};
	}
	onImageDrop(input){
		console.log(input)
		this.setState({...this.state,image: input[0].preview})
	}
	render(){

		return(
			<div className="wrapper">
				<Content>
				 	<DropzoneComponent config={componentConfig}
                       eventHandlers={this.onImageDrop}
                       djsConfig={djsConfig} />

					<div className="content">
			            <div className="container-fluid">
			                <div className="row">
			                    <div className="col-md-8">
			                        <div className="card">
			                            <div className="header header-primary text-center" data-background-color="purple">
			                                <h4 className="">Cadastrar Estacionamento</h4>
										</div>
			                            <div className="content">
			                                <Form onSubmit={this.props.saveParking}/>
			                            </div>
			                        </div>
			                    </div>
								<div className="col-md-4">
		    						<div className="card">
		    							<div className="header header-primary text-center">
		    								<h4>Fotos</h4>
		    							</div>

		    							<div className="content">
				   							<img src={this.state.image} width="300"/>
		    								
		    								
		    							</div>
		    						</div>
				    			</div>
			                </div>
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