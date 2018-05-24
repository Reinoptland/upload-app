import React, {Component} from 'react'
import '../../css/top.css'
import { withRouter } from "react-router-dom";

class Top extends Component {
    render() {
        return (
          <div className='top-nav'>
            <img src="icons/profile.svg" alt="profile-icon" className='profile' onClick={_ => this.props.history.push('/profile')}></img>
            <img src="assets/roos-logo.svg" alt="logo" className='logo'/>
            <img src="icons/chat.svg" alt="logo" className="chat" onClick={_ => this.props.history.push('/contact')}/>
          </div>
        )
    }
}

export default withRouter(Top);
