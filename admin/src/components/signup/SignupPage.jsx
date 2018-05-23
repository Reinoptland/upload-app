import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from '../../actions/admins'
import SignupForm from './SignupForm'
import {Redirect} from 'react-router-dom'
import '../../css/signup.css'

class SignupPage extends PureComponent {

	handleSubmit = (data) => {

		this.props.postSignup(data.email, data.password, data.privacy)
	}

	render() {

		if (this.props.signup.success) return (
			<Redirect to="/" />
		)

		return (
			<div className="generalPage">
				<h1>Aanmelden</h1>

				<SignupForm onSubmit={this.handleSubmit} />

				<p style={{color:'red'}}>{ this.props.signup.error }</p>

			</div>
		)
	}
}

const mapStateToProps = function (state) {
	
	return {
		signup: state.signup
	}
}

export default connect(mapStateToProps, {postSignup: signup})(SignupPage)
