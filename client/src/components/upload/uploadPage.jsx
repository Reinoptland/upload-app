import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import AddIcons from './addicons'
import {Redirect} from 'react-router-dom'
import BottomNav from '../layout/BottomNav'
import { Link } from 'react-router-dom'

//Styling
import '../../css/uploadPage.css'

class UploadPage extends PureComponent {


	render() {
		if (!this.props.currentUser) return (
			<Redirect to="/" />
		)

		return (
			<div className='upload-page'>
				<div className='header'>
					<h1> Voeg uw contract toe </h1>
					<p> Maak een foto of upload een document </p> 
				</div>
				<AddIcons/>
				<div className='bottom-link'>
					<p><Link to={'/HowTo'}>Lees hier tips over foto's maken en waar je document aan moet voldoen</Link></p>
				</div>
		
				<BottomNav/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.currentUser,
})

export default connect(mapStateToProps)(UploadPage)
