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

let userid=1

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
        this
        .props
        .getAllContracts()
       
    }

    handleClick(userid) {

        this
            .props
            .getUserDetails(userid)

    }

    

    renderUser(eachuser) {
       
            const selectedcontract = this.props.contracts.filter((eachcontract, index) => {

                if (eachuser.id === eachcontract.userId) {

                    return eachcontract.contractImage
                }
            })
          const image=selectedcontract.map(contractdetails => contractdetails.contractImage)
       
        return (
            <Card>
                <CardContent className="card-content">

                    <Link to ={`/users/${userid}`}>
                        <Typography component="h1">
                            <img
                                //onClick={() => this.handleClick(Number(userid))}
                                alt='userpicture'
                                style={{
                                maxHeight: '100px'
                            }}
                                src={image}/>
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
         userslist = Object.values(this.props.users)}

         
        return (
          
           <Paper className="outer-paper">

                <div>
                    {userslist
                        .map(eachuser => this.renderUser(eachuser))}
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

export default connect(mapStateToProps, {getUserDetails, getAllContracts,getUsers})(AllUsers)