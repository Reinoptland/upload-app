import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import {Link} from 'react-router-dom'
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography'

class ContractByUserId extends PureComponent {

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

    renderContractDetails(eachcontract) {
        let useremail = this.getEmail(eachcontract.userId)
        return (
            <Card>
                <CardContent>
                    <Typography component="h1">
                        Email:{useremail}
                    </Typography>
                    <Typography component="h1">
                        <img
                            alt='userpicture'
                            style={{
                            maxHeight: '100px'
                        }}
                            src={eachcontract.contractImage}/>
                    </Typography>
                    <Typography component="h1">
                        Description:{eachcontract.contractDescription}
                    </Typography>
                    <Typography component="h1">
                        Status:{eachcontract.uploadStatus}
                    </Typography>
                </CardContent>
            </Card>
        )
    }

    render() {

        return (

            <div>
                {this
                    .props
                    .contractsById
                    .map(eachcontract => this.renderContractDetails(eachcontract))}
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users === null
        ? null
        : state.users,
    contractsById: state.contractsById
})

export default connect(mapStateToProps)(ContractByUserId)
