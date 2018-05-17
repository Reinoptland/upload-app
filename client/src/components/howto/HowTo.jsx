import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'

//styling
import Paper from 'material-ui/Paper';

export default class HowTo extends PureComponent {

  render() {
  

    return (
        <Paper>
          <div className="infodiv">
            <div>
              <h1>Waar moet mijn nota aan voldoen?</h1>
              <p> de nota moet de volgende informatie hebben:</p>
              <ul>
                <li>Bedrijfsnaam - bij wie is het contract afgesloten</li>
                <li>Einddatum van het contract - of startdatum met duur van het contract</li>
                <li>Jaarlijks/ Maandlijks/ Wekelijks bedrag van contract</li>
              </ul>
            </div>
            <div>
              <h1>Hoe maak ik een goede foto van mijn contract?</h1>
              <p>
                Wanneer u het contract niet digitaal heeft (een PDF) kunt u een foto maken van het contract met uw mobiele telefoon.
                Let hierbij op de duidelijkheid:
              </p>
              <ul>
                <li>Zet het gehele contract op de foto</li>
                <li>Alleen het contract zichtbaar</li>
                <li>het moet een scherpe foto zijn</li>
                <li>Maak de foto recht van boven</li>
                <li>Zorg voor genoeg licht</li>
                <li>voorkom schaduwen, bijvoorbeeld door een vouw</li>
              </ul>
                <div>
                  <img src="Takephoto.png" alt="" className="takephoto"/>
                  <img src="Takephoto.png" alt="" className="takephoto"/>
                  <img src="Takephoto.png" alt="" className="takephoto"/>
                  <img src="Takephoto.png" alt="" className="takephoto"/>
                </div>
            </div>
            <Link to={'/upload'}><button className="customButton">back</button></Link>
          </div>

        </Paper>
    )
  }
}