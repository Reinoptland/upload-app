import React, {PureComponent} from 'react'
import {upload} from '../../actions/upload'
import {connect} from 'react-redux'

//Styling
import '../../css/uploadForm.css'
import BottomNav from '../layout/BottomNav'

class UploadForm extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
			uploadStatus: 'New' 
		}
        
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
						this.state.type,
						this.state.provider,
						this.state.uploadStatus))
		console.log(this.state.type)
		document.getElementById("form").reset()
	}

	render() {
		return (
			<div>
			<form onSubmit={this.handleSubmit} encrypt="multipart/form-data" id="form" className="upload-form">
				
				<div className="contract-pic">
					<img src={this.state.imageSrc} alt='contract' className='contract-preview'/>
					<img src={'/icons/Addpic.svg'} alt='add-pic' className='add-icon' />
				</div>

				<div className="contract-field">

				<div className="contract-type">
					<p> Welk soort contract is het? </p>
					<select className="type"  name="type" id="type"
					onChange={ this.handleChange }>
						<option value="Aansprakelijkheidsverzekering">Aansprakelijkheidsverzekering</option>
  						<option value="AOV verzekering">AOV verzekering</option>
  						<option value="Autoverzekering">Autoverzekering</option>
  						<option value="Bootverzekering">Bootverzekering</option>
						<option value="Dierenverzekering">Dierenverzekering</option>
						<option value="Energie">Energie</option>
						<option value="Hypotheek">Hypotheek</option>
						<option value="Inboedelverzekering">Inboedelverzekering</option>
						<option value="Internet, tv & bellen">Internet, tv & bellen</option>
						<option value="Kranten & tijdschriften">Kranten & tijdschriften</option>
						<option value="Motorverzekering">Motorverzekering</option>
						<option value="Opstalverzekering">Opstalverzekering</option>
						<option value="OV">OV</option>
						<option value="Overlijdensrisicoverzekering">Overlijdensrisicoverzekering</option>
						<option value="Rechtsbijstandverzekering">Rechtsbijstandverzekering</option>
						<option value="Reisverzekering">Reisverzekering</option>
						<option value="Scooterverzekering">Scooterverzekering</option>
						<option value="Uitvaartverzekering">Uitvaartverzekering</option>
						<option value="Zorgverzekering">Zorgverzekering</option>
					</select>
				</div>

				<div className="contract-provider">
					<p>Bij wie heb je je contract afgesloten? </p>
					<input type="text" name="provider" id="provider" onChange={ this.handleChange } placeholder="Contract Provider"/>
				</div>

				</div>
			
				<button type="submit" className="submit-form">Voeg mijn contract toe</button>
			
			</form>	

			<BottomNav/>
				
			</div>
		)
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser
})

export default connect(mapStateToProps, {upload})(UploadForm) 
