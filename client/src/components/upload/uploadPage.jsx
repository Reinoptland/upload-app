import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {upload} from '../../actions/upload'
import UploadForm from './uploadForm'
import {Redirect} from 'react-router-dom'

class UploadPage extends PureComponent {
	handleSubmit = (contract) => {
		
		this.props.upload(this.props.currentUser.id,contract)
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
			<div>
				<h1>Upload</h1>

				<UploadForm onSubmit={this.handleSubmit} />

       
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
