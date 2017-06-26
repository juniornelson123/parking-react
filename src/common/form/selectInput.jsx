import React from 'react'

export default props => (
	<div className={props.cols}>
		<div className="form-group label-floating">
			<label className="control-label">{props.label}</label>
			<select {...props.input}
			className="form-control"
			onChange={props.change}
			placeholder = {props.placeholder}
			readOnly = {props.readOnly}
			type={props.type}
			>
				{props.children}
			</select>
		</div>
    </div>
)