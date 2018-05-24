import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from '../../actions/users'
import SignupForm from './SignupForm'
import {Redirect, Link} from 'react-router-dom'

//styling
import '../../css/signup.css'

class SignupPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.postSignup(data.email, data.password, data.privacy)
	}
	
	render() {
		const { signup } = this.props
		const realSignup = signup[0]
		if (realSignup) return (
			<Redirect to="/login" />
		)
		
		return (
			<div className="signup-Page">
				<div className="header-signup" >
				<h1>Aanmelden</h1>
				<p className="request-email">
                Wij vragen je aan te melden met het zelfde E-mail adres als op halloroos.nl <br/>
				Hierdoor kunnen wij je beter adviseren.
              </p>
				<SignupForm onSubmit={this.handleSubmit} />

				<p style={{color:'red'}}>{ this.props.signup.error }</p>

				<div className="logintext">
					<Link to={'/login'}>heb je al een account? <span className="linkStyle">Inloggen</span></Link>
				</div>
				</div>
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
