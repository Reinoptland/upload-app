import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, { CardContent} from 'material-ui/Card'
import {Link} from 'react-router-dom'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import {getUsers} from '../../actions/users'
import '../../css/AllUsers.css'

const userimage = "https://thumbs.dreamstime.com/b/businessman-icon-18603234.jpg"

class AllUsers extends PureComponent {

    componentWillMount() {   
        this.props.getUsers() 
    }

    renderUser(eachUser) {

        return (
            <Card className='user-card'>
                <CardContent>

                    <Link to ={`/users/${eachUser.id}`}>
                        <Typography component="h1">
                            <img 
                                alt='userpicture' 
                                style={{maxHeight: '100px'
                                }}
                                src={userimage}/>
                        </Typography>
                    </Link>
                    <Typography component="h1">
                        E-mail: <br/>
                        {eachUser.email}
                    </Typography>

                </CardContent>
            </Card>
        )
    }

    render() {

        let usersList = []
        if (this.props.users !== null) {
            usersList = Object.values(this.props.users)
        }

        return (
            <div>
                 {this.props.users.length > 0 && <Paper className="user-paper">

                    <div className="user-page">
                        {usersList.map((eachUser,index) =>  <div key={eachUser.id}>{this.renderUser(eachUser)}</div>)}
                    </div>

                </Paper>}
              
                {this.props.users.length === 0 && <Paper className="user-paper">
                    <p>Geen gebruikers in de database op het moment.</p>
                </Paper>}
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps, {getUsers})(AllUsers)
