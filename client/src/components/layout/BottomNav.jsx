import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

//styling
import '../../css/bottomNav.css'

const BottomNav = (props) => {

  
    const { location } = props
    return (
      <div className='bottom-nav'>
        <div className='left-icons'>
        {location.pathname.indexOf('home') < 0 && <Link to={'/home'}><img src="icons/home.svg" alt="home-icon"></img></Link>}
        {location.pathname.indexOf('home') > 0 && <Link to={'/home'}><img src="icons/homeActive.svg" alt="home-icon"></img></Link>}
        {location.pathname.indexOf('contracts') < 0 && <Link to={'/contracts'}><img src="icons/contracten.svg" alt="contracts-icon"></img></Link>}
        {location.pathname.indexOf('contracts') > 0 && <Link to={'/contracts'}><img src="icons/contractenActive.svg" alt="contracts-icon"></img></Link>}
        </div>
        <div className='add-button'>
        <Link to={'/upload'}><img src="icons/addButton.svg" alt="home-icon"></img></Link>
        </div>
        <div className='right-icons'>
          {location.pathname.indexOf('advice') > 0 && <Link to={'/advice'}><img src="icons/adviesActive.svg" alt="advice-icon"></img></Link>}
          {location.pathname.indexOf('advice') < 0 && <Link to={'/advice'}><img src="icons/advies.svg" alt="advice-icon"></img></Link>}
          <Link to={'/logout'}><img src="icons/loguit.svg" alt="loguit-icon"></img></Link>
        </div>

      </div>
      
    );
  }

  const mapStateToProps = state => ({
    
  })

export default withRouter(
  connect(mapStateToProps)(BottomNav)
)