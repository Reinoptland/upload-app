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
        if (!this.state.contract) 
            return alert('Please select a document!')
		this.props.onSubmit(this.state.contract,this.state.description)
		
		
	}
	handleChange = (e) => {
		this.setState({
			description: e.target.value
		})
	}
	handleContractChange = (event) => {
		this.setState({
			contract: event.target.files[0]
		})
  }

	render() {
		return (
			<div className="upload-page">
			<form onSubmit={this.handleSubmit} encrypt="multipart/form-data">
				<div>
					<label htmlFor="camera">Camera</label>
					<input type="file" name="camera" id="camera" onChange={ this.handleContractChange } />
				</div>
                <div>
					<label htmlFor="gallery">Gallery</label>
					<input type="file" name="gallery" id="gallery" onChange={ this.handleContractChange } />
				</div>

				<div>
					<label htmlFor="description">Description</label>
					<textarea name="description" id="description" onChange={ this.handleChange } />
				</div>

				<button type="submit">Submit</button>
			</form>
			<BottomNav/>
			</div>
		)
	}
}
