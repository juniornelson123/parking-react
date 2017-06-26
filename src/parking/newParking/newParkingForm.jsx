import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 

import { getStates, getCities } from '../parkingActions'

import registerInput from '../../common/form/registerInput'
import textAreaInput from '../../common/form/textAreaInput'
import selectInput from '../../common/form/selectInput'


class NewParkingForm extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  this.props.getStates()
	}
	render(){
		const states = this.props.states || []
		const cities = this.props.cities || []
		const getStates = states.map((state) =>
    		<option value={state.id} key={state.id}>{state.name}</option>
            
  		);

  		const getCities = cities.map((city) =>
    		<option value={city.id} key={city.id}>{city.name}</option>
            
  		);		
		
		const { handleSubmit, readOnly } = this.props

		return(
			<form onSubmit={handleSubmit}>
				<div className="row">	
			                                    
					<Field name="name" component={registerInput} label="Nome do estacionamento" cols="col-md-12" type="text" placeholder="" readOnly={readOnly}/>
				</div>
				<div className="row">	
			                                    
					<Field name="description" component={textAreaInput} label="Descrição do estacionamento" cols="col-md-12" type="text" placeholder="" readOnly={readOnly}/>
				</div>
				<div className="row">	
					<Field name="cep" component={registerInput} label="CEP" cols="col-md-6" type="text" placeholder="" readOnly={readOnly}/>
					<Field name="district" component={registerInput} label="Bairro" cols="col-md-6" type="text" placeholder="" readOnly={readOnly}/>
				</div>
				<div className="row">	
					<Field name="address" component={registerInput} label="Endereço" cols="col-md-12" type="text" placeholder="" readOnly={readOnly}/>	
				</div>
				<div className="row">	
					<Field name="complement" component={registerInput} label="Complemento" cols="col-md-8" type="text" placeholder="" readOnly={readOnly}/>
					<Field name="number" component={registerInput} label="Numero" cols="col-md-4" type="text" placeholder="" readOnly={readOnly}/>
				</div>
				<div className="row">	
					<Field name="state" change={this.props.getCities} component={selectInput} label="Estado" cols="col-md-6" type="text" placeholder="" readOnly={readOnly}>
						{ getStates }
					</Field>
					<Field name="city" component={selectInput} label="Cidade" cols="col-md-6" type="text" placeholder="" readOnly={false}>
						{ getCities }
					</Field>
				</div>
				<button type="submit" className="btn btn-primary pull-right">Salvar</button>
	            <div className="clearfix"></div>

			</form>
		)
	}
}

const mapStateToProps = state => ({cities: state.parking.cities, states: state.parking.states})
const mapDispatchToProps = dispatch => bindActionCreators({getStates, getCities}, dispatch)

NewParkingForm = reduxForm({form: 'newParkingForm', destroyOnUnmount: false})(NewParkingForm)
export default connect(mapStateToProps, mapDispatchToProps)(NewParkingForm)