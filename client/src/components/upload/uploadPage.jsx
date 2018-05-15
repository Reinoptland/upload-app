import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {upload} from '../../actions/upload'
import UploadForm from './uploadForm'
import {Redirect} from 'react-router-dom'

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
			<div>
				<h1>Upload</h1>

				<UploadForm onSubmit={this.handleSubmit} />

        { this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }
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
