import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../auth/authActions'

import If from '../common/operator/if'

class Nav extends Component{
   constructor(props) {
     super(props);
   
     this.state = {open: false};
   }
    open(){
        if (this.state.open) {
            $('#example-navbar-primary').removeClass('in')
            this.setState({...this.state, open: false})
        }else{
            this.setState({...this.state, open: true})
            
            $('#example-navbar-primary').addClass('in')
        }
    }
    render(){

        return(

            <nav className="navbar navbar-primary navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-primary" onClick={() => this.open()}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#pablo">Estaciona Facil</a>
                    </div>

                    <div className="collapse navbar-collapse" id="example-navbar-primary">
                        <ul className="nav navbar-nav navbar-right">
                            <If test={!this.props.user.user}>
                                <li>
                                    <Link to={`/sign_in`}>
                                       <i className="material-icons">explore</i>
                                        Entrar
                                    </Link>
                                </li>
                            </If>
                            <If test={!this.props.user.user}>
                                <li>
                                    <Link to={`/sign_up`}>
                                        <i className="material-icons">account_circle</i>
                                        Cadastrar
                                    </Link>
                                </li>
                            </If>
                            <If test={this.props.user.user}>
                                <li>
                                    <a href="" onClick={() => this.props.logout() }>
                                     <i className="material-icons">close</i>
                                        Logout
                                    </a>
                                </li>
                            </If>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
} 

const mapStateToProps = state => ({user: state.auth})
const mapDispatchToProps = dispatch => bindActionCreators({logout}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Nav)