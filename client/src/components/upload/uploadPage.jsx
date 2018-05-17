import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {upload} from '../../actions/upload'
// import UploadForm from './uploadForm'
import AddIcons from './addicons'
import {Redirect} from 'react-router-dom'
import BottomNav from '../layout/BottomNav'
import { Link } from 'react-router-dom'

//Styling
import '../../css/uploadPage.css'

class UploadPage extends PureComponent {

	handleSubmit = (contract,name,type,provider) => {
		console.log("user",this.props.currentUser.userId)
		this.props.upload(this.props.currentUser.userId,contract,name,type,provider)
// 		var reader  = new FileReader();

//   reader.onloadend = function () {
//     console.log(reader.result); //this is an ArrayBuffer
//   }
//   console.log('ARRAYBUFFER:',reader.readAsArrayBuffer(file))
		// this.props.upload(file, data.description)
	}

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

				{/* <UploadForm onSubmit={this.handleSubmit} /> */}

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
