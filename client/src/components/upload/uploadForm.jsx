import React, {PureComponent} from 'react'
import BottomNav from '../layout/BottomNav'

//Styling


export default class UploadForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state ={
          camera:null,
          gallery:null,
          description:null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
      }

	handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.camera && !this.state.gallery) 
            return alert('Please select a document!')
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
			<div className="upload-page">
			<form onSubmit={this.handleSubmit} encrypt="multipart/form-data">
				<div>
					<label htmlFor="camera">Camera</label>
					<input type="file" name="camera" id="camera" value={
						this.state.camera || ''
					} onChange={ this.handleChange } />
				</div>
                <div>
					<label htmlFor="gallery">Gallery</label>
					<input type="file" name="gallery" id="gallery" value={
						this.state.gallery || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="description">Description</label>
					<textarea name="description" id="description" value={
						this.state.description || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Submit</button>
			</form>
			<BottomNav/>
			</div>
		)
	}
}
