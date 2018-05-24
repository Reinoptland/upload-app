import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import BottomNav from '../layout/BottomNav'
import {getUser} from '../../actions/users'
//styling
import '../../css/home.css'
import '../../css/index.css'

  class ProfilePage extends PureComponent {

    componentWillMount() {
        this.props.getUser(this.props.currentUser.userId)
    }


  render() {



    return (
          <div className="home-Page">
            <div className="header-home" >
              <h1>Hallo Roos gebruiker</h1>
              <h3>Je bent ingeschreven als: {this.props.user.email} </h3>



            </div>
              <div>
                <BottomNav/>
              </div>
          </div>
    )
  }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    user: state.user
})

export default (connect(mapStateToProps,{getUser})(ProfilePage))
