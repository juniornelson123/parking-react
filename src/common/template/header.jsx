import React from 'react'
import './dependencies'
import { Link } from 'react-router-dom'

export default props => (
	<div>
    	<nav className="navbar navbar-transparent navbar-absolute">
        	<div className="container">
            	<div className="navbar-header">
            		<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example">
                		<span className="sr-only">Toggle navigation</span>
    		            <span className="icon-bar"></span>
    		            <span className="icon-bar"></span>
    		            <span className="icon-bar"></span>
            		</button>
                    <Link className="navbar-brand" to={`/home/`}>EstacionaFacil</Link>
                </div>

                <div className="collapse navbar-collapse" id="navigation-example">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to={`/sign_in`}>
                                <i className="fa fa-sign-in"></i>Entrar
                            </Link>
                            

        				</li>

                        <li>
                            <Link to={`/sign_up`}>
                                <i className="fa fa-user-plus"></i>Cadastrar
                            </Link>
                        </li>
            		</ul>
            	</div>
        	</div>
        </nav>	
        <div className="wrapper">
            <div className="header header-filter" style={{backgroundColor: 'red'}}>
                <div className="container">
                	<div className="row">
    					{props.children}
                    </div>
                </div>
            </div>
        </div>
   </div> 
)
