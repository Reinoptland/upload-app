import React, {PureComponent} from 'react'

class UploadForm extends PureComponent {
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
		this.props.onSubmit(this.state.contract,
							this.state.name,
							this.state.type,
							this.state.provider)
		
		
	}
	handleChange = (e) => {
		const {name,value} = e.target
		this.setState({
			[name]: value
		})
	}
	handleContractChange = (event) => {
		this.setState({
			contract: event.target.files[0]
		})
  	}	

	render() {
		return (
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
					<label htmlFor="name">Contract Name</label>
					<input type="text" name="name" id="name" onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="type">Contract Type</label>
					<input type="text" name="type" id="type" onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="provider">Contract Provider</label>
					<input type="text" name="provider" id="provider" onChange={ this.handleChange } />
				</div>

				<button type="submit">Submit</button>
			</form>
			
		)
	}
}

export default UploadForm 
