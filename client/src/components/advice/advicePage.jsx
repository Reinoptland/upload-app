import React, {PureComponent} from 'react'
import BottomNav from '../layout/BottomNav'
import {connect} from 'react-redux'

//styling
import '../../css/index.css'
import '../../css/advice.css'


  class AdvicePage extends PureComponent {

  render() {
  
    return (
      <div className="advice-Page">
        <div className="header-advice" >
            <h1>Advies</h1>
              <p>
                Binnenkort vind u hier ons advies met betrekking tot uw contracten.
              </p>
                <div className="advice-link">
                  <p>
                    <a href="https://halloroos.nl/login" target="_blank" rel="noopener noreferrer">
                      voor nu ga naar <span className="linkStyle">halloroos.nl</span> en login in om uw advies pagina te bekijken
                    </a>
                  </p>
                </div>
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