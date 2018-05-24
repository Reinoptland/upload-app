//src/components/upload/addicons.jsx
import React, {PureComponent} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import UploadForm from './uploadForm'
import BottomNav from '../layout/BottomNav'
import {newfile} from '../../actions/upload'

//Styling
import '../../css/uploadPage.css'

class UploadPage extends PureComponent {
    state = {}

    handleContractChange = (event) => {
		this.setState({
            contract: event.target.files[0],
            step2: true
        })
  	}
    componentWillMount(){
      this.props.newfile()
    }

    render() {

        if (!this.props.currentUser) return (
			<Redirect to="/" />
		)

        if (this.state.step2) return(<UploadForm  contract={this.state.contract}/>)

        else return (

            <div className='upload-page'>
				<div className='header'>
					<h1> Voeg uw contract toe </h1>
					<p> Maak een foto of upload een document </p>
				</div>

                <div className='icons'>
                    <img src='icons/camIcon.svg' alt='camera' className='cam'/>
                    <img src='icons/fileUploadIcon.svg' alt='gallery' className='gal'/>
                </div>
                <div className='input'>
                    <input type="file" name="camera" accept="image/*" capture="camera" id="camera" onChange={ this.handleContractChange } className='camIcon' />
                    <input type="file" name="gallery" id="gallery" onChange={ this.handleContractChange }
                    className='fileIcon'/>
                </div>
                <div className='bottom-link'>
					<p><Link to={'/HowTo'}>Lees hier tips over foto's maken en waar je document aan moet voldoen</Link></p>
				</div>
                <BottomNav/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
	currentUser: state.currentUser,
})

export default connect(mapStateToProps,{newfile})(UploadPage)
