import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'
import { redirect } from 'react-router-dom';

export function login(values){
	return submit({user: values}, `${consts.API_URL}/sign_in`)
}

export function signup(values){
	return submit({user: values}, `${consts.API_URL}/sign_up`)
}

function submit(values, url){
 return dispatch => {
 	axios.post(url, values)
 		.then(resp => {
 			
 			dispatch([
 				{type: 'USER_FETCHED', payload: resp.data}
 			])
 		})
 		.catch(e => {
 			toastr.error("Usuario ou senha invalidos", e)
 		})
 }
}

export function logout(){
	return { type: 'TOKEN_VALIDATED', payload: false } 
}

export function validateToken(token){
	return dispatch => {
		if (token) {
			axios.post(`${consts.OAPI_URL}/validateToken`, { token})
				.then(resp => {
					dispatch([
						{type: 'TOKEN_VALIDATED', payload: resp.data.valid}
					])
				})
				.catch(e => dispatch({type: 'TOKEN_VALIDATED', payload: false}))
		}else{
			return { type: 'TOKEN_VALIDATED', payload: false}
		}
	}
}