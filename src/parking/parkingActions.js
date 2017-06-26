import { toastr } from 'react-redux-toastr'

import { push } from 'react-router-redux'

import axios from 'axios'
import consts from '../consts'

export function getParkings(){

	return dispatch => {
		axios.get(`${consts.API_URL}/parkings`)
			.then(resp => {
				dispatch([
					{type: 'GET_PARKING', payload: resp}
				
				])
			})

	}
}

export function saveParking(values){
	var image = localStorage.getItem('imageParking')
	console.log(image)
	const userKey = "_estaciona_facil_user"
	const user = JSON.parse(localStorage.getItem(userKey))
	console.log(user)
	var parking = {name: values.name, description: values.description, user_id: user.id}
	var images = {image: image}
	var address = {cep: values.cep, city_id: values.city, complement: values.complement,
				number: values.number, district: values.district, address: values.address}
	
	return dispatch => {
		axios.post(`${consts.API_URL}/parkings`, {parking: parking, address: address, images: images}, {headers: {'access-token': user.token}})
			.then(resp => {
					toastr.success("Cadastro efetuado com sucesso"),
				dispatch([
					push('/#/dashboard')

				])
			})
			.catch(erros => {
				console.log(erros)
				toastr.error("Erro ao efetuar cadastro")
					
			})
	}
}

export function getStates(){
	return dispatch => {

		axios.get(`${consts.API_URL}/states`)
			.then(resp => {
				dispatch([
					{type: 'GET_STATES',payload: resp}
					])
			})

	}
}

export function getCities(event){
	console.log(event.target.value)
	var request = axios.get(`${consts.API_URL}/cities/${event.target.value}`)
	return {
		type: 'GET_CITIES',
		payload: request
	}	
}