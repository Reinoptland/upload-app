import React, {PureComponent} from 'react'
import {upload} from '../../actions/upload'
import {connect} from 'react-redux'

//Styling
import '../../css/uploadForm.css'

class UploadForm extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
        
		const myFileReader = new FileReader()
		myFileReader.onload = (e) => {
            this.setState({ 
                imageSrc: myFileReader.result, 
            }); 
		}
		myFileReader.readAsDataURL(this.props.contract)
	
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange = (e) => {
		const {name,value} = e.target
		this.setState({
			[name]: value
		})
	}
	  
	handleSubmit = (e) => {
		e.preventDefault(
			
		this.props.upload(this.props.currentUser.userId,
						this.props.contract,
						this.state.name,
						this.state.type,
						this.state.provider))
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} encrypt="multipart/form-data">
				
				<div className='contract-pic'>
					<img src={this.state.imageSrc} alt='contract' />
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
			
			{ this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }

				<button type="submit" >Submit</button>
			</form>	
		)
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
	error: state.upload.error
})

export default connect(mapStateToProps, {upload})(UploadForm) 
