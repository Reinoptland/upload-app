import React, {PureComponent} from 'react'

//Styling
import '../../css/forms.css'
import '../../css/button.css'

function validate(email, password) {
	// true means invalid, so our conditions got reversed
	return {
	  email: email.length === 0,
	  password: password.length === 0,
	}
  }

export default class LoginForm extends PureComponent {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',

			touched: {
				email: false,
				password: false,
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
      [name]: value
    })
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    })
  }

	render() {
		const errors = validate(this.state.email, this.state.password)
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
					<input className={shouldMarkError('email') ? "error" : ""} onBlur={this.handleBlur('email')} 
					type="email" name="email" id="email" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="password"><p>Wachtwoord</p></label>
					<input className={shouldMarkError('password') ? "error" : ""} onBlur={this.handleBlur('password')} 
					type="password" name="password" id="password" value={
						this.state.password || ''
					} onChange={ this.handleChange } />
				</div>

				<button className="customButton" disabled={isDisabled} type="submit">Inloggen</button>
			</form>
		)
	}
}