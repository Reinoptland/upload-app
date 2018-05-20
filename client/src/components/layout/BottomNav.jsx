import React, {Component} from 'react'
import { Link } from 'react-router-dom'

//styling
import '../../css/bottomNav.css'

class BottomNav extends Component {

  render() {
    return (
      <div className='bottom-nav'>
        <div className='left-icons'>
        <Link to={'/home'}><img src="icons/home.svg" alt="home-icon"></img></Link>
        <Link to={'/contracts'}><img src="icons/contracten.svg" alt="contract-icon"></img></Link>
        </div>
        <div className='add-button'>
        <Link to={'/upload'}><img src="icons/addButton.svg" alt="home-icon"></img></Link>
        </div>
        <div className='right-icons'>
          <Link to={'/advice'}><img src="icons/advies.svg" alt="advies-icon"></img></Link>
          <Link to={'/logout'}><img src="icons/loguit.svg" alt="loguit-icon"></img></Link>
        </div>

      </div>
      
    );
  }
}

export default BottomNav