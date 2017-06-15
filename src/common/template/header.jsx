import React from 'react'
import './dependencies'
import { Link } from 'react-router-dom'
import Nav from '../../landpage/nav'

export default props => (
	<div>
    	<Nav />
                    
        <div className="wrapper" style={{marginTop: 60}}>
            <div className="header header-filter" style={{backgroundColor: '#fff'}}>
                		{props.children}
            </div>
        </div>
   </div> 
)
