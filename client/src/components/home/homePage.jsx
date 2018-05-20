import React, {PureComponent} from 'react'
// import { Link } from 'react-router-dom'
import BottomNav from '../layout/BottomNav'

//styling
import '../../css/home.css'
import '../../css/index.css'

  class HomePage extends PureComponent {

  render() {
  
    return (
          <div>
          <div className="generalPage">
          <h1>Advies en goedkopere contracten?</h1>
          <p>
            Wij staan voor u klaar.
           </p>
          </div>
          <div>
          <BottomNav/>
          </div>
          </div>
    )
  }
}

export default HomePage