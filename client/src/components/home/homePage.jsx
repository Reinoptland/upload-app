import React, {PureComponent} from 'react'
// import { Link } from 'react-router-dom'
import BottomNav from '../layout/BottomNav'

//styling
import '../../css/home.css'
import '../../css/index.css'

  class HomePage extends PureComponent {

  render() {
  
    return (
          <div className="home-Page">
            <div className="header-home" >
              <h1>Upload je contract en wij zetten een wekker voor je</h1>
              <h3>Contractwekker</h3>
                <p>
                  Elk jaar opnieuw verloopt je energiecontract, je mobiele abonnement of je verzekering: 
                  dat is hét moment om te checken of je nog wel goed zit bij je huidige aanbieder. 
                  Maar het uitzoeken? Daar heb je eigenlijk geen zin in. Je hebt wel iets beters te doen. 
                  Daarom heeft Roos een slimme tool ontwikkeld: de contractwekker! 
                  Die wekt je wanneer je contract bijna afloopt.
                </p> 
              <h3>Roos upload app</h3>
                <p>
                  Om het je nog makkelijker te maken kun je met deze app een foto van je contract uploaden naar Roos.
                  Hierna zullen wij een contractwekker voor je maken. Makkelijk toch?
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