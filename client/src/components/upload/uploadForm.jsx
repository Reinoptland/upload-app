import React, {PureComponent} from 'react'

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
		
		console.log(this.state)
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.files[0]
		})
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit} encrypt="multipart/form-data">
				<div>
					<label htmlFor="camera">Camera</label>
					<input type="file" name="camera" id="camera" onChange={ this.handleChange } />
				</div>
                <div>
					<label htmlFor="gallery">Gallery</label>
					<input type="file" name="gallery" id="gallery" onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="description">Description</label>
					<textarea name="description" id="description" onChange={ this.handleChange } />
				</div>

				<button type="submit">Submit</button>
			</form>
			
			
		)
	}
}
