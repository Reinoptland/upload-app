import React, { PureComponent } from 'react'
import { Router, Route, Redirect } from 'react-router-dom'

import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import AllUsers from './components/contracts/AllUsers'
import ContractByUserId from './components/contracts/ContractByUserId'
import TopBar from './components/layout/TopBar';
import ContractImage from './components/contracts/ContractImage'

import { createBrowserHistory, createHashHistory } from 'history'


function configureHistory() {

  if(window.matchMedia('(display-mode: standalone)').matches) {
   
    return createHashHistory()
  } 
  else {

     return createBrowserHistory()
  }
}

class App extends PureComponent {
  
  render() {

    return (

      <Router history={configureHistory()}>

        <div>
          <nav>
            <TopBar/>
          </nav>

          <main>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/users" component={AllUsers}/>
            <Route exact path="/users/:id" component={ContractByUserId}/>
            <Route exact path="/users/:id/:image" component={ContractImage}/>
            <Route exact path="/" render={ () => <Redirect to="/login" /> } />
          </main>

        </div>

      </Router>

    )
  }
}

export default App
