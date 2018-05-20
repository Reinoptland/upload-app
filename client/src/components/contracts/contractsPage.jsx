import React, {PureComponent} from 'react'
// import { Link } from 'react-router-dom'
import BottomNav from '../layout/BottomNav'
import {connect} from 'react-redux'

//styling
import '../../css/index.css'
import '../../css/contracts.css'


  class ContractsPage extends PureComponent {

  render() {
  
    return (
          <div>
          <div className="generalPage">
          <h1>Contracten</h1>
          <p>
            Vind u straks hier.
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

export default connect(mapStateToProps)(ContractsPage)