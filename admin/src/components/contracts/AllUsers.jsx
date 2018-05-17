import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, { CardContent} from 'material-ui/Card'
import {Link} from 'react-router-dom'
import Typography from 'material-ui/Typography'
import {getUserDetails} from '../../actions/contracts'
import {getAllContracts} from '../../actions/contracts'
import Paper from 'material-ui/Paper'
import {getUsers} from '../../actions/users'
import '../../css/AllUsers.css'

const userimage = "https://thumbs.dreamstime.com/b/businessman-icon-18603234.jpg"

class AllUsers extends PureComponent {
    constructor() {
        super()
        this.handleClick = this
            .handleClick
            .bind(this)
    }

    componentWillMount() {
        if (this.props.users === null) {
            this
                .props
                .getUsers()
        }
    }

    handleClick(userid) {
       
        this
            .props
            .getUserDetails(userid)

    }

    renderUser(eachuser) {

        return (
            <Card className='usercard'>
                <CardContent className="card-content">

                    <Link to ={`/users/${eachuser.id}`}>
                        <Typography component="h1">
                            <img
                                onClick={() => this.handleClick(eachuser.id)}
                                alt='userpicture'
                                style={{
                                maxHeight: '100px'
                            }}
                                src={userimage}/>
                        </Typography>
                    </Link>
                    <Typography component="h1">
                        Email:{eachuser.email}
                    </Typography>

                </CardContent>
            </Card>
        )
    }

    render() {

        let userslist = []
        if (this.props.users !== null) {
            userslist = Object.values(this.props.users)
        }

        return (

            <Paper className="user-paper">

                <div>
                    {userslist.map((eachuser,index) =>  <div key={eachuser.id}>{this.renderUser(eachuser)}</div>)}
                </div>

            </Paper>
        )

    }
}

const mapStateToProps = (state) => ({
    users: state.users === null
        ? null
        : state.users,
    contracts: state.contracts

})

export default connect(mapStateToProps, {getUserDetails, getAllContracts, getUsers})(AllUsers)
