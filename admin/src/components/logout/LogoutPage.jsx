import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {logout} from '../../actions/admins'

class LogoutPage extends PureComponent {

	componentWillMount() {
		this.props.logout()
	}

	render() {
		if (!this.props.currentAdmin) return (
			<Redirect to="/" />
		)

		return (
			<div>
				<h1>Logging out...</h1>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	
	authenticated: state.currentAdmin!== null
})

export default connect(mapStateToProps, {logout})(LogoutPage)
