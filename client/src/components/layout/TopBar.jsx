import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
// import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {withRouter} from 'react-router'
import {userId} from '../../jwt'
import {connect} from 'react-redux'
import '../../css/TopBar.css'

const TopBar = (props) => {
  const { location, history, user } = props

  return (
    <AppBar position="absolute" className="topBarBG" style={{zIndex:10}}>
      <Toolbar>
       <img className="roosLogo"src="../../assets/roos-logo.svg" alt="roos"/>
        {
          user &&
          <Button color="inherit">{ user.email }</Button>
        }

        {
          location.pathname.indexOf('signup') > 0 &&
          <Button color="inherit" onClick={() => history.push('/login')}>Login</Button>
        }
        {
          location.pathname.indexOf('login') > 0 &&
          <Button color="inherit" onClick={() => history.push('/signup')}>Sign up</Button>
        }
        {
          /roos$/.test(location.pathname) &&
          <Button className="loginButton"  onClick={() => history.push('/logout')}>Log out</Button>
        }
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  user: state.currentUser && state.users &&
    state.users[userId(state.currentUser.jwt)]
})

export default withRouter(
  connect(mapStateToProps)(TopBar)
)
