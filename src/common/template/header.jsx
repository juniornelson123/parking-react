import React from 'react'
import './dependencies'
import Nav from '../../landpage/nav'

export default props => (
	<div>
    	<Nav />
                    
        {props.children}
        
   </div> 
)
