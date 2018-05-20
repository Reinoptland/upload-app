import React, { PureComponent } from 'react'
import { Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import AllUsers from './components/contracts/AllUsers'
import Privacy from './components/privacy/Privacy'
import UploadPage from './components/upload/uploadPage'
import UploadForm from './components/upload/uploadForm'
import ContractByUserId from './components/contracts/ContractByUserId'
import HowTo from './components/howto/HowTo'
import HomePage from './components/home/homePage'
import ContractsPage from './components/contracts/contractsPage'
import AdvicePage from './components/advice/advicePage'

import { createBrowserHistory, createHashHistory } from 'history'

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
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/Privacy" component={Privacy} />
            <Route exact path="/contracts" component={ContractsPage} />
            <Route exact path="/HowTo" component={HowTo} />
            <Route exact path="/upload" component={UploadPage} />
            <Route exact path="/UploadForm" component={UploadForm} />
            <Route exact path="/advice" component={AdvicePage} />
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
