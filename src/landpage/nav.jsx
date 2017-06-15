import React from 'react'
import { Link } from 'react-router-dom'

import If from '../common/operator/if'

const value = false
export default props => (

    <nav className="navbar navbar-primary navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-primary">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#pablo">Estaciona Facil</a>
            </div>

            <div className="collapse navbar-collapse" id="example-navbar-primary">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to={`/sign_in`}>
                           <i className="material-icons">explore</i>
                            Entrar
                        </Link>
                    </li>
                    <If test={value}>
                        <li>
                            <Link to={`/sign_up`}>
                                <i className="material-icons">account_circle</i>
                                Cadastrar
                            </Link>
                        </li>
                    </If>
                </ul>
            </div>
        </div>
    </nav>
)