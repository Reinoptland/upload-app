import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions/admins'
import LoginForm from './LoginForm'
import {Redirect} from 'react-router-dom'

//styling
import '../../css/login.css'

class LoginPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}

	render() {
		if (this.props.currentAdmin) return (
			<Redirect to="/users" />
		)

		return (
			<div className="generalPage">
				<h1>Login</h1>

				<LoginForm onSubmit={this.handleSubmit} />

		{ this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }
		
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentAdmin: state.currentAdmin,
    	error: state.login.error
	}
}

export default connect(mapStateToProps, {login})(LoginPage)
