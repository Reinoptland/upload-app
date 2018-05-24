import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions/users'
import LoginForm from './LoginForm'
import {Redirect} from 'react-router-dom'
import { Link } from 'react-router-dom'


//styling
import '../../css/login.css'

class LoginPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}

	render() {
		if (this.props.currentUser) return (
			<Redirect to="/home" />
		)

		return (
			<div className="login-Page">
				<div className="header-login" >
				<h1>Inloggen</h1>
				<p>
                Welkom terug
              </p>
				<LoginForm onSubmit={this.handleSubmit} />

		{ this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }
			
				<div className="signuptext">
					<Link to={'/signup'}>nog geen account? <span className="linkStyle">Inschrijven</span></Link>
				</div>
			</div>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
    	error: state.login.error
	}
}

export default connect(mapStateToProps, {login})(LoginPage)
