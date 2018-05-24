import React, {PureComponent} from 'react'
// import { Link } from 'react-router-dom'
import BottomNav from '../layout/BottomNav'

//styling
import '../../css/home.css'
import '../../css/index.css'

  class ContactPage extends PureComponent {

  render() {

    return (
          <div className="home-Page">
            <div className="header-home" >
              <h1>Contact</h1>
              <h3>E-mail</h3>
                <p>
                  Stuur Roos een e-mail op <a href="mailto:service@halloroos.nl">service@halloroos.nl</a>
                </p>
              <h3>Post</h3>
                <p>
                  Roos (Hello Labs B.V.) Herengracht 504 1017 CB Amsterdam
                </p>
                <h3>Social Media</h3>
                  <p>
                    Je kan Roos ook altijd bereiken op <a href="https://www.facebook.com/roosnl">Facebook</a> en <a href="https://twitter.com/halloroosnl">Twitter</a> .
                  </p>


            </div>
              <div>
                <BottomNav/>
              </div>
          </div>
    )
  }
}

export default ContactPage
// Contact
// Roos is altijd bereikbaar. Heb je een vraag over een wekker of een bestelling?
//
// E-mail
// Stuur Roos een e-mail op service@halloroos.nl
//
// Post
// Roos (Hello Labs B.V.) Herengracht 504 1017 CB Amsterdam
//
// Social Media
// Je kan Roos ook altijd bereiken op Facebook en Twitter .
