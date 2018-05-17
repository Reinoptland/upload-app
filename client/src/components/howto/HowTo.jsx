import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'


export default class HowTo extends PureComponent {

  render() {
  

    return (
          <div className="generalPage">
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
                  <img src="assets/goodPhoto1.svg" alt="How to do it" className="takephoto"/>
                  <img src="assets/badPhoto1.svg" alt="How not to do it" className="takephoto"/>
                  <img src="assets/badPhoto2.svg" alt="How not to do it" className="takephoto"/>
                  <img src="assets/badPhoto3.svg" alt="How not to do it" className="takephoto"/>
                </div>
            </div>
            <Link to={'/upload'}><button className="customButton">Terug</button></Link>
          </div>
    )
  }
}