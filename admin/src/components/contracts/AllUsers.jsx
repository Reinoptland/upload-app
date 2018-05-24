import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../../actions/users'
import {Link} from 'react-router-dom'
import Grid from 'material-ui/Grid';
import userImage from '../../admin_people_img.jpg'

// Styling
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Card, { CardContent} from 'material-ui/Card'
import '../../css/AllUsers.css'


class AllUsers extends PureComponent {

    componentWillMount() {  

        this.props.getUsers() 
    }

    renderUser(eachUser) {

        return (
            <Grid item xs={12} sm={6}>
                <Card className='user-card'>
                    <CardContent>

                        <Link to ={`/users/${eachUser.id}`}>
                            <Typography component="h1">
                                <img 
                                    alt='userpicture' 
                                    src={userImage}/>
                            </Typography>
                        </Link>

                        <Typography component="h1">
                            E-mail: <br/>
                            {eachUser.email}
                        </Typography>

                    </CardContent>
                </Card>
            </Grid>
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
                <Grid container spacing={16}>
                    <div className="user-page">
                        {usersList.map((eachUser,index) =>  <div key={eachUser.id}>{this.renderUser(eachUser)}</div>)}
                    </div>
                </Grid>
                    </Paper>
                }
              
                {this.props.users.length === 0 && <Paper className="user-paper">
                    <p>Geen gebruikers in de database op het moment.</p>
                </Paper>
            }
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps, {getUsers})(AllUsers)
