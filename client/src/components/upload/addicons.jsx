//src/components/upload/addicons.jsx
import React, {PureComponent} from 'react'

//Styling
import '../../css/uploadPage.css'

class AddIcons extends PureComponent {
    state = {
        camera: null,
        gallery: null
    }

    handleContractChange = (event) => {
		this.setState({
            contract: event.target.files[0]
        })
        console.log(event.target.files[0])
  	}
    
    render() {
        return (
            <div className='icons-add'>
            
            <div className='icons'>
                <img src='../../../icons/camIcon.svg' alt='camera' className='cam'/>
                <img src='../../../icons/fileUploadIcon.svg' alt='gallery' className='gal'/>
            </div>
            <div className='input'>
                <input type="file" name="camera" id="camera" onChange={ this.handleContractChange } className='camIcon' />  
                <input type="file" name="gallery" id="gallery" onChange={ this.handleContractChange } 
                className='fileIcon'/>
            </div>
            
            </div>
        )
    }
} 

export default AddIcons