import React, {Component} from 'react'

class BoxInfo extends Component{
	render(){
		return(
			<div className="col-md-4 col-sm-4 col-xs-6" style={{ position: 'absolute',top:0,left:0}}>
		      <div className="card card-signup">
					<form className="form" method="" action="">
						<div className="header header-primary text-center">
							<h4>Estacionamento</h4>
						
						</div>
						<p className="text-divider">--</p>
						<div className="content">
							<div className="input-group">
									<span className="input-group-addon">
										<i className="material-icons">face</i>Informações
									</span>
									
								</div>

								<div className="input-group">
									<span className="input-group-addon">
										<i className="material-icons">email</i>Informações
									</span>
									
								</div>

								<div className="input-group">
									<span className="input-group-addon">
										<i className="material-icons">lock_outline</i>Informações
									</span>
									
								</div>


						</div>
						<div className="footer text-center">
							<a href="#pablo" className="btn btn-simple btn-primary btn-lg">Detalhes</a>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default BoxInfo