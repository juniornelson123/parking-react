import React from 'react'

export default props => (
	<div className={props.cols}>
		<div className="form-group label-floating">
			<label className="control-label">{props.label}</label>
			<input {...props.input}
			className="form-control"
			placeholder = {props.placeholder}
			readOnly = {props.readOnly}
			type={props.type}
			/>
		</div>
    </div>
)