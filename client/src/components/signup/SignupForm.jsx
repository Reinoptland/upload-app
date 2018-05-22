import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'

//Styling
import '../../css/forms.css'
import '../../css/button.css'

export default class SignupForm extends PureComponent {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			confirmPassword: ''
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

	render() {
		const { email, password, confirmPassword, privacy } = this.state
		const isEnabled = email.length > 0 && password.length > 0 && confirmPassword.length > 0 && privacy === true

		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="email"><p>E-mail</p></label>
					<input type="email" name="email" id="email" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="password"><p>Wachtwoord</p></label>
					<input type="password" name="password" id="password" value={
						this.state.password || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="confirmPassword"><p>Bevestig wachtwoord</p></label>
					<input type="password" name="confirmPassword" id="confirmPassword" value={
						this.state.confirmPassword || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
				<input type="checkbox"
						value={`${this.state.privacy}` || ''}
						onChange={this.handleChange}
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

				<button className="customButton" disabled={!isEnabled} type="submit">Aanmelden</button>

			</form>
		)
	}
}
