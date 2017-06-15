import React from 'react'

export default props => (
	<div className="input-group">
		<span className="input-group-addon">
			<i className="material-icons">{props.icon}</i>
		</span>
		<input {...props.input}
			className="form-control"
			placeholder = {props.placeholder}
			readOnly = {props.readOnly}
			type={props.type}
			/>
	</div>
	
)