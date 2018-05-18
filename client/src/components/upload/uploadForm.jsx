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
			<form onSubmit={this.handleSubmit} encrypt="multipart/form-data" className="upload-form">
				
				<div className="contract-pic">
					<img src={this.state.imageSrc} alt='contract' />
					<img src={this.state.imageSrc} alt='contract' />
				</div>

				<div className="contract-field">

				<div className="contract-type">
					<p> Welk soort contract is het? </p>
					<input type="text" name="type" id="type" onChange={ this.handleChange } placeholder="Contract Type" />
				</div>

				<div className="contract-provider">
					<p>Bij wie heb je je contract afgesloten? </p>
					<input type="text" name="provider" id="provider" onChange={ this.handleChange } placeholder="Contract Provider"/>
				</div>

				<div className="contract-price">
					<p> Hoeveel kost je dit ongeveer per maand? </p>
					<input type="text" name="name" id="name" onChange={ this.handleChange } />
				</div>
				</div>
			
			{ this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }

				<button type="submit" className="submit-form">Voeg mijn contract toe</button>
			</form>	
		)
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
	error: state.upload.error
})

export default connect(mapStateToProps, {upload})(UploadForm) 
