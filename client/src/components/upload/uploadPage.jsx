import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {upload} from '../../actions/upload'
import UploadForm from './uploadForm'
import {Redirect} from 'react-router-dom'
import BottomNav from '../layout/BottomNav'

//Styling
import '../../css/uploadForm.css'

class UploadPage extends PureComponent {
	handleSubmit = (data) => {
        const file = (data.camera)?data.camera:data.gallery
		this.props.upload(file, data.description)
	}

	render() {
		if (!this.props.currentUser) return (
			<Redirect to="/" />
		)

		return (
			<div className='upload-page'>
				<div className='header'>
					<h3> Voeg uw contract toe </h3>
					<img src='../../../icons/line.svg' alt="underline"/> 
					<p> Maak een foto of upload een document </p> 
				</div>
				<div className='icons'>
					<img src='../../../icons/camIcon.svg' alt='camera'/>
					<img src='../../../icons/fileUploadIcon.svg' alt='camera'/>
				</div>
				<div>
					<p>Lees hier tips over foto's makenen waar je document aan moet voldoen</p>
				</div>

				<UploadForm onSubmit={this.handleSubmit} />

		{ this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }
		
			<BottomNav/>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
    	error: state.upload.error
	}
}

export default connect(mapStateToProps, {upload})(UploadPage)
