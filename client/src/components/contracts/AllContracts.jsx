import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import {Link} from 'react-router-dom'
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography'
import {getUserDetails} from '../../actions/contracts'
import {getAllContracts} from '../../actions/contracts'
import Paper from 'material-ui/Paper'
import {getUsers} from '../../actions/users'

const userid = 1

class AllContracts extends PureComponent {
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

        this
            .props
            .getAllContracts()
    }

    handleClick(userid) {

        this
            .props
            .getUserDetails(userid)

    }

    getEmail(userId) {
        if (this.props.users !== null) {
            const users = Object.values(this.props.users)

            const selecteduser = users.filter((eachuser, index) => {

                if (eachuser.id === userId) {

                    return eachuser.email
                }
            })

            const email = selecteduser.map(userdetails => userdetails.email)
            return email
        }
    }

    renderContract(eachcontract) {

        let useremail = this.getEmail(eachcontract.userId)
        console.log("inside render", useremail)
        return (
            <Card>
                <CardContent className="card-content">

                    <Link to ={`/contracts/${userid}`}>
                        <Typography component="h1">
                            <img
                                onClick={() => this.handleClick(Number(userid))}
                                alt='userpicture'
                                style={{
                                maxHeight: '100px'
                            }}
                                src={eachcontract.contractImage}/>
                        </Typography>
                    </Link>
                    <Typography component="h1">
                        Email:{useremail}
                    </Typography>

                </CardContent>
            </Card>
        )
    }

    render() {

        console.log(this.props.contracts)
        return (

            <Paper className="outer-paper">

                <div>
                    {this
                        .props
                        .contracts
                        .map(eachcontract => this.renderContract(eachcontract))}
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

export default connect(mapStateToProps, {getAllContracts, getUserDetails, getUsers})(AllContracts)
