import React, { PureComponent } from 'react'
import { Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import AllUsers from './components/contracts/AllUsers'
import ContractByUserId from './components/contracts/ContractByUserId'
import { createBrowserHistory, createHashHistory } from 'history'


//Styling
// import TopBar from './components/layout/TopBar'
import Top from './components/layout/Top'

function configureHistory() {
  if(window.matchMedia('(display-mode: standalone)').matches) {
    console.log("We are in home screen");
    return createHashHistory()
  } else {
    console.log("We are in regular browser");
    return createBrowserHistory()
  }
}

class App extends PureComponent {
  render() {
    return (
      <Router history={configureHistory()}>
        <div>
          <nav>
            <Top/>
          </nav>
          <main>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/users" component={AllUsers}/>
            <Route exact path="/users/:id" component={ContractByUserId}/>
            <Route exact path="/" render={ () => <Redirect to="/login" /> } />
          </main>
        </div>
      </Router>
    )
  }
}
export default App