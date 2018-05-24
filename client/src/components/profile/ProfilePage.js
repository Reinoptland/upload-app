import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import BottomNav from '../layout/BottomNav'
import {getUser} from '../../actions/users'

//styling
import '../../css/top.css'
import '../../css/index.css'

  class ProfilePage extends PureComponent {

    componentWillMount() {
        this.props.getUser(this.props.currentUser.userId)
    }


  render() {

    return (
          <div className="layout">
            <div className="header" >
              <h1>Hallo Roos gebruiker</h1>
              <p>Je bent ingeschreven als: {this.props.user.email} </p>

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
