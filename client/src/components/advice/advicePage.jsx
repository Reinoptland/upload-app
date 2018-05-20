import React, {PureComponent} from 'react'
// import { Link } from 'react-router-dom'
import BottomNav from '../layout/BottomNav'
import {connect} from 'react-redux'

//styling
import '../../css/index.css'
import '../../css/advice.css'


  class AdvicePage extends PureComponent {

  render() {
  
    return (
          <div>
          <div className="generalPage">
          <h1>Advies</h1>
          <p>
            Binnenkort vind u hier advies met betrekking tot uw contracten.
           </p>
          </div>
          <div>
          <BottomNav/>
          </div>
          </div>
    )
  }
}

const mapStateToProps = (state) => ({
	currentUser: state.currentUser
})

export default connect(mapStateToProps)(AdvicePage)