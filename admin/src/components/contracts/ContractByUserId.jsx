import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, {CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {getUserDetails} from '../../actions/contracts'
import {getUsers} from '../../actions/users'
import {getAllContracts} from '../../actions/contracts'
import {submitStatus} from '../../actions/contracts'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import '../../css/ContractByUserId.css'

class ContractByUserId extends PureComponent {

    constructor() {
        super()

        this.handleSubmit = this
            .handleSubmit
            .bind(this)

        this.handleChange = this
            .handleChange
            .bind(this)

        this.state = {
            id:" ",
            uploadStatus: " ",
            hidden:true
        };

    }

    componentWillMount() {

        if ((this.props.users === null) ||(this.props.users.length===0)){
            this
                .props
                .getUsers()
        }

        this
            .props
            .getUserDetails(this.props.match.params.id)

    }


    handleSubmit() {

        this.setState({hidden:!this.state.hidden})
        this.props.submitStatus(this.state)
    }

    handleChange(id,event) {
       
        this.setState({id:id})
        this.setState({uploadStatus: event.target.value})

    }

    getEmail(userId) {
        if (this.props.users !== null) {
            const users = Object.values(this.props.users)

            const selecteduser = users.filter((eachuser, index) => {

                if (eachuser.id === userId) {

                    return eachuser.email
                } else {
                    return null
                }
            })

            const email = selecteduser.map(userdetails => userdetails.email)
            
            return email
        }
    }

    renderContractDetails(eachcontract) {

      
        return (
            <div className="cardwrapper">
                <Card className='contractcard'>
                    <CardContent className='contractcard'>

                        <Typography component="h1">
                            <img
                                alt='userpicture'
                                style={{
                                maxHeight: '100px'
                            }}
                                src={eachcontract.contractImage}/>
                        </Typography>
                        <Typography component="h1">
                            ContractName : {eachcontract.contractName}
                        </Typography>
                        <Typography component="h1">
                            ContractType : {eachcontract.contractType}
                        </Typography>
                        <Typography component="h1">
                            Provider : {eachcontract.contractProvider}
                        </Typography>
                        <Typography component="h1">
                            Status: {eachcontract.contractStatus}
                        </Typography>
                    </CardContent>

                    <Button
                        color="primary"
                        variant="raised"
                        className="create-batch"
                        type="submit"
                        onClick={this.handleSubmit}>
                        Update Contract Status
                    </Button>
              
                   <div>
                   <label>
                        <input
                            type={'radio'}
                            name='status'
                            key={eachcontract.id}
                            value='new'
                            onChange={(event)=>this.handleChange(eachcontract.id,event)}/>new
                    </label>

                    <label>
                        <input
                            type={'radio'}
                            name='status'
                            key={eachcontract.id}
                            value='processed'
                            onChange={(event)=>{
                                console.log("image",event)
                                this.handleChange(eachcontract.id,event)}}/>processed
                    </label>
                    <label>
                        <input
                            type={'radio'}
                            name='status'
                            key={eachcontract.id}
                            value='not usable'
                            onChange={(event)=>this.handleChange(eachcontract.id,event)}/>not usable
                    </label>
                    </div>
                   
                
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

                {this.props.contractsById.length === 0 && <p>No contracts stored at the moment</p>
}
                {this.props.contractsById.length > 0 && <Paper className='contract-paper'>
                    <span
                        style={{
                        width: '100%',
                        display: 'block',
                        marginTop: '75px'
                    }}>Email:{email}</span>
                    {this
                        .props
                        .contractsById
                        .map(eachcontract => this.renderContractDetails(eachcontract))}
                </Paper>}
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

export default connect(mapStateToProps, {getUserDetails, getUsers, getAllContracts,submitStatus})(ContractByUserId)
