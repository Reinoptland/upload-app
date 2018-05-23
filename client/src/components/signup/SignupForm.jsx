import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'

//Styling
import '../../css/forms.css'
import '../../css/button.css'

function validate(email, password, confirmPassword, privacy) {
	// true means invalid, so our conditions got reversed
	let checkerbox = ''
	if (privacy === true){
		checkerbox = false
	} else {
		checkerbox = true
	}


	return {
	  email: email.length === 0,
	  password: password.length === 0,
	  confirmPassword: confirmPassword.length === 0,
	  privacy: checkerbox
	}
  }

export default class SignupForm extends PureComponent {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			confirmPassword: '',
			privacy: '',

			touched: {
				email: false,
				password: false,
				confirmPassword: false,
				privacy: false
			  }
		}
		
	}

handleSubmit = (e) => {
	e.preventDefault()
	this.props.onSubmit(this.state)
}

handleChange = (event) => {
const {name, value} = event.target

this.setState({
	[name]: value,
	privacy: event.target.checked
})
}

handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    })
  }

	render() {
		
		const errors = validate(this.state.email, this.state.password, this.state.confirmPassword, this.state.privacy)
		const isDisabled = Object.keys(errors).some(x => errors[x])
		
		
		const shouldMarkError = (field) => {
			const hasError = errors[field]
			const shouldShow = this.state.touched[field]
	  		return hasError ? shouldShow : false
		  }

		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="email"><p>E-mail</p></label>
					<input className={shouldMarkError('email') ? "error" : ""} onBlur={this.handleBlur('email')} type="email" name="email" id="email" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="password"><p>Wachtwoord</p></label>
					<input className={shouldMarkError('password') ? "error" : ""} onBlur={this.handleBlur('password')}
					type="password" name="password" id="password" value={this.state.password || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="confirmPassword"><p>Bevestig wachtwoord</p></label>
					<input className={shouldMarkError('confirmPassword') ? "error" : ""} onBlur={this.handleBlur('confirmPassword')} type="password" name="confirmPassword" id="confirmPassword" value={
						this.state.confirmPassword || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
				<input type="checkbox"
						value={`${this.state.privacy}` || ''}
						onChange={this.handleChange}
						onBlur={this.handleBlur('privacy')}
						name="privacy"
						id="privacy"
					/> 
				<p>Ik ga akkoord met het <Link to={'/Privacy'}>privacy beleid van Roos</Link></p>
					
				</div>

				{
					this.state.password &&
					this.state.confirmPassword &&
					this.state.password !== this.state.confirmPassword &&
					<p style={{color:'red'}}>De wachtwoorden zijn niet hetzelfde</p>
				}

				<button className="customButton" disabled={isDisabled} type="submit">Aanmelden</button>

			</form>
		)
	}
}
