import React, {PureComponent} from 'react'

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

		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="email"><p>Email</p></label>
					<input type="email" name="email" id="email" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="password"><p>Password</p></label>
					<input type="password" name="password" id="password" value={
						this.state.password || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="confirmPassword"><p>Confirm password</p></label>
					<input type="password" name="confirmPassword" id="confirmPassword" value={
						this.state.confirmPassword || ''
					} onChange={ this.handleChange } />
				</div>

				{
					this.state.password &&
					this.state.confirmPassword &&
					this.state.password !== this.state.confirmPassword &&
					<p style={{color:'red'}}>The passwords do not match!</p>
				}

				<button className="customButton" type="submit">Aanmelden</button>

			</form>
		)
	}
}
