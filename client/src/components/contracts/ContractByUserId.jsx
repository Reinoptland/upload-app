import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, { CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {getUserDetails} from '../../actions/contracts'
import {getUsers} from '../../actions/users'
import {getAllContracts} from '../../actions/contracts'

class ContractByUserId extends PureComponent {

    constructor() {
        super()

        this.state = {
            showPopup: false
        };
    }

    componentWillMount(){
        if (this.props.users === null) {
            this
                .props
                .getUsers()
        }
       
        this
            .props
            .getUserDetails(this.props.match.params.id)

        this
            .props
            .getAllContracts()
        
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    getEmail(userId) {
        if (this.props.users !== null) {
            const users = Object.values(this.props.users)

            const selecteduser = users.filter((eachuser, index) => {

                if (eachuser.id === userId) {

                    return eachuser.email
                }
                else {
                    return null
                }
            })

            const email = selecteduser.map(userdetails => userdetails.email)
            return email
        }
    }

    renderContractDetails(eachcontract) {

        return (
            <div>
                <Card>
                    <CardContent>

                        <Typography component="h1">
                            <img
                                alt='userpicture'
                                style={{
                                maxHeight: '100px'
                            }}
                                onClick={this
                                .togglePopup
                                .bind(this)}
                                src={eachcontract.contractImage}/>
                        </Typography>
                        <Typography component="h1">
                            ContractName:{eachcontract.contractName}
                        </Typography>
                        <Typography component="h1">
                            ContractType:{eachcontract.contractType}
                        </Typography>
                        <Typography component="h1">
                            Provider:{eachcontract.contractProvider}
                        </Typography>
                    </CardContent>
                </Card>

            </div>

        )
    }

    render() {
        const userId = this
            .props
            .contractsById
            .map((eachcontract) => {
                return eachcontract.userId
            })
        let email = " "
        if (userId.length > 0) {
            email = this.getEmail(userId[0])
        }

        return (

            <div>
                Email:{email} 
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

export default connect(mapStateToProps,{getUserDetails,getUsers,getAllContracts})(ContractByUserId)
