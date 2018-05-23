import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {withRouter} from 'react-router'
import {userId} from '../../jwt'
import {connect} from 'react-redux'
import '../../css/topBar.css'

const TopBar = (props) => {
  const { location, history, user } = props

  return (
    <AppBar position="absolute" className="topBarBG" style={{zIndex:10}}>
      <Toolbar>
      <Typography style={{flex: 1}}>
        <img className="roosLogo"src="../../assets/roos-logo.svg" alt="roosLogo"/>
      </Typography>
        {
          user &&
          <Button color="inherit">{ user.email }</Button>
        }

        {
          location.pathname.indexOf('signup') > 0 &&
          <Button color="inherit" onClick={() => history.push('/login')}>Inloggen</Button>
        }
        {
          location.pathname.indexOf('login') > 0 &&
          <Button color="inherit" onClick={() => history.push('/signup')}>Aanmelden</Button>
        }

        {
          location.pathname.indexOf('users') > 0 &&
          <Button color="inherit" onClick={() => history.push('/logout')}>Uitloggen</Button>
        }
        {/* {
          /users$/.test(location.pathname) &&
          <Button  color="inherit" className="loginButton"  onClick={() => history.push('/logout')}>Log out</Button>
        } */}
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