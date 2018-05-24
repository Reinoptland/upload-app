import React, {PureComponent} from 'react'
import {upload, uploading} from '../../actions/upload'
import {connect} from 'react-redux'
import ReactGA from 'react-ga';
import UploadAnim from './uploadAnim'

//Styling
import '../../css/uploadForm.css'
import BottomNav from '../layout/BottomNav'

class UploadForm extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {

			uploadStatus: 'nieuw',
			contracten: [this.props.contract]

		}
        
		const myFileReader = new FileReader()
		myFileReader.onload = (e) => {
            this.setState({ 
				imageSrc1: myFileReader.result, 
            }); 
		}
		
		if (this.state.contracten.length === 1) {
			
			myFileReader.readAsDataURL(this.state.contracten[0])
		} 
	
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleImageChange = (event) => {
		if (this.state.contracten.length < 3) {
			this.state.contracten.push( event.target.files[0])
		} 
		
		if (this.state.contracten.length > 1 && this.state.contracten.length < 3) {
			
			const myFileReader2 = new FileReader()
				myFileReader2.onload = (e) => {
					this.setState({ 
						imageSrc2: myFileReader2.result, 
					}); 
				}
			myFileReader2.readAsDataURL(this.state.contracten[1])

		}
		if (this.state.contracten.length > 2) {
			
			const myFileReader3 = new FileReader()
				myFileReader3.onload = (e) => {
					this.setState({ 
						imageSrc3: myFileReader3.result, 
					}); 
				}

			myFileReader3.readAsDataURL(this.state.contracten[2])
		}
		ReactGA.event({
			category: 'Contract',
			action: 'Added an image'
		});
	}

	handleChange = (e) => {

		const {name,value} = e.target
		this.setState({
			[name]: value
		})
	
	}
	  
	handleSubmit = (e) => {
		this.props.uploading()

		e.preventDefault(
			
		this.props.upload(this.props.currentUser.userId,
						this.state.contracten,
						this.state.type,
						this.state.provider,
						this.state.uploadStatus))
		
		document.getElementById("form").reset()

		ReactGA.event({
            category: 'Contract',
            action: 'Submitted'
        });
	}

	render() {

		if (this.props.appStatus === "waiting") {
		return (
			<div>
			<form onSubmit={this.handleSubmit} encrypt="multipart/form-data" id="form" className="upload-form">

				<div className="contract-pic">
					<img src={this.state.imageSrc1} alt='contract' className='contract-preview'/>

					{this.state.contracten.length >= 2 &&
					<img src={this.state.imageSrc2 || ''} alt='contract' className='contract-preview'/>
					}

					{this.state.contracten.length === 3 &&
					<img src={this.state.imageSrc3 || ''} alt='contract' className='contract-preview'/>
					}

					{this.state.contracten.length < 3 && 
					<label htmlFor="add-pic">
						<img src={'/icons/Addpic.svg'} alt='add-pic'  className='add-icon' />
					</label>}

                    <input type="file" name="add-pic" id="add-pic" onChange={ this.handleImageChange} className='fileIcon'/>
					
				</div>

				<div className="contract-field">

				<div className="contract-type">
					<p> Welk soort contract is het? </p>
					<select required
					name="type"
					id="type"
					onChange={ this.handleChange }>
					 	<option value="">Contract Type</option>
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
					<input type="text" name="provider" id="provider" onChange={ this.handleChange } placeholder="Contract Provider" required/>
				</div>

				</div>
			
				<button type="submit" className="submit-form">Voeg mijn contract toe</button>
			
			</form>	

			<BottomNav/>
				
			</div>
		)

			} else if (this.props.appStatus === "uploading") {
				
				return (
					<div>
						<div className="uploading-Page">
					<div className="header-uploading">
						<h1>Wij slaan uw contract op</h1>
						<p>
                			Een moment geduld
              			</p>
						<div className="anim">
						<UploadAnim />
						</div>
					</div>
					</div>
					<div>
					<BottomNav/>
				</div>
				</div>
			)}

			else if (this.props.appStatus === "uploadSucces") {
				setTimeout(window.location.assign('/contracts'), 3000)
				return (
					<div>
					<div className="uploading-Page">
					<div className="header-uploading">
						<h1>Uw contract is succesvol opgeslagen</h1>
					</div>
					</div>
					<div>
						<BottomNav/>
            		</div>
					</div>
			)} 
			
			else {
				return (
					<div>
					<div className="uploading-Page">
					<div className="header-uploading">
						<h1>Er is iets mis gegaan</h1>
						<p>probeer het later nogmaals...</p>
					</div>
					</div>
					<div>
						<BottomNav/>
            		</div>
					</div>
			)}
  }
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
	appStatus: state.appstatus

})

export default connect(mapStateToProps, {upload, uploading})(UploadForm) 
