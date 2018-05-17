import React, {Component} from 'react'
import { Link } from 'react-router-dom'

//styling
import '../../css/bottomNav.css'

class BottomNav extends Component {

  render() {
    return (
      <div className='bottom-nav'>
        <div className='left-icons'>
            <img src="icons/home.svg" alt="home-icon"></img>
            <img src="icons/contracten.svg" alt="contract-icon"></img>
        </div>
        <div className='add-button'>
        <img src="icons/addButton.svg" alt="home-icon"></img>
        </div>
        <div className='right-icons'>
          <img src="icons/advies.svg" alt="advies-icon"></img>
          <Link to={'/logout'}>
            <img src="icons/loguit.svg" alt="loguit-icon"></img>
          </Link>
        </div>

      </div>
      
    );
  }
}

export default BottomNav