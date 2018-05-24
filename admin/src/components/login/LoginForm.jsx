import React, {PureComponent} from 'react'

//Styling
import '../../css/forms.css'
import '../../css/button.css'

export default class LoginForm extends PureComponent {

	constructor() {

		super()

		this.state = {
			email: '',
			password: ''
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

	render() {

		return (
			<form onSubmit={this.handleSubmit}>

				<div>
					<label className="formLabel" htmlFor="email"><p>Email</p></label>
					<input type="email" name="email" id="email" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label className="formLabel" htmlFor="password"><p>Wachtwoord</p></label>
					<input type="password" name="password" id="password" value={
						this.state.password || ''
					} onChange={ this.handleChange } />
				</div>

				<button className="customButton" type="submit">Inloggen</button>
				
			</form>
		)
	}
}