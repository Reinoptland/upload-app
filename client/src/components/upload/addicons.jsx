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
  	}
    
    render() {
        return (
            <div className='icons-add'>
            <form>
            <div className='camera'>
                <img src='../../../icons/camIcon.svg' alt='camera'/>
                <input type="file" name="camera" id="camera" onChange={ this.handleContractChange } className='camIcon' />
            </div>
            <div className='gallery'>
                <img src='../../../icons/fileUploadIcon.svg' alt='camera'/>
                <input type="file" name="gallery" id="gallery" onChange={ this.handleContractChange } />
            </div>
            </form>
            </div>
        )
    }
} 

export default AddIcons