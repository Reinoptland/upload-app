import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, {CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {getUserDetails} from '../../actions/contracts'
import {getUsers} from '../../actions/users'
import {getAllContracts} from '../../actions/contracts'
import Paper from 'material-ui/Paper'
import {withStyles} from 'material-ui/styles';
import Modal from 'material-ui/Modal';

import '../../css/ContractByUserId.css'

function getModalStyle() {
    const top = 40;
    const left = 40;

    return {top: `${top}%`, left: `${left}%`, transform: `translate(-${top}%, -${left}%)`};
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit *100,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4
    }
});

class ContractByUserId extends PureComponent {

    constructor() {
        super()


        this.state = {
            open: false
        };
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    componentWillMount() {
        if (this.props.users === null) {
            this.props.getUsers()
        }

        this.props.getUserDetails(this.props.match.params.id)

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
        const {classes} = this.props;
        console.log("called")
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
                                onClick={this.handleOpen}
                                src={`${eachcontract.contractImage}`}/>
                        </Typography>
                        <Modal open={this.state.open} onClose={this.handleClose}>

                            <div style={getModalStyle()} className={classes.paper}>
                                <Typography variant="title" id={`${eachcontract.id}`}>
                                    <img
                                        alt='userpicture'
                                        style={{
                                        maxHeight: '500px'
                                    }}
                                        src={`${eachcontract.contractImage}`}/>

                                </Typography>

                            </div>
                        </Modal>
                        <Typography component="h1">
                            ContractName : {eachcontract.contractName}
                        </Typography>
                        <Typography component="h1">
                            ContractType : {eachcontract.contractType}
                        </Typography>
                        <Typography component="h1">
                            Provider : {eachcontract.contractProvider}
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

            <Paper className='contract-paper'>
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
            </Paper>

        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users === null
        ? null
        : state.users,
    contractsById: state.contractsById
})

export default withStyles(styles)(connect(mapStateToProps, {getUserDetails, getUsers, getAllContracts})(ContractByUserId))
