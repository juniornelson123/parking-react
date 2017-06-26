import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../auth/authActions'

import If from '../common/operator/if'

class Nav extends Component{
   constructor(props) {
     super(props);
    
    this.state = {open: false, sub_menu: false, parking: false};
    $('html').removeClass('nav-open')

   }

   componentWillMount(){
        if (this.props.user.user) {
            if (this.props.user.user.parking) {
                this.setState({...this.state, parking: this.props.user.user.parking})
            }  
        }

   }

   sub_menu(){
        if (this.state.sub_menu) {
            $('#menu-sub').removeClass('open')
            this.setState({...this.state, sub_menu: false})
        }else{
            this.setState({...this.state, sub_menu: true})
            
            $('#menu-sub').addClass('open')
        }
   }

    open(){
        if (this.state.open) {
            $('#example-navbar-primary').removeClass('in')
            $('#example-navbar-primary').addClass('navbar-collapse')
            this.setState({...this.state, open: false})
        }else{
            this.setState({...this.state, open: true})
            $('#example-navbar-primary').removeClass('navbar-collapse')
            
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
                            <If test={this.props.user.user}>
                                <li className="dropdown" id="menu-sub">
                                    <If test={this.props.parking}>
                                            <a onClick={() => this.sub_menu()} className="dropdown-toggle" data-toggle="dropdown">
                                                <p>Meu Estacionamento</p>
                                            </a>
                                    </If>
                                    <If test={this.props.parking}>
                                        <ul className="dropdown-menu">
                                            <li><Link to={`/dashboard`}>Meu estacionamento</Link></li>
                                            
                                        </ul>
                                    </If>
                                    <If test={!this.props.parking}>
                                        <Link to="/novo/estacionamento" className="dropdown-toggle" data-toggle="dropdown">
                                            <p>Novo Estacionamento</p>
                                        </Link>
                                     
                                    </If>
                                </li>
                                
                            </If>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
} 

const mapStateToProps = state => ({user: state.auth, parking: state.parking})
const mapDispatchToProps = dispatch => bindActionCreators({logout}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Nav)