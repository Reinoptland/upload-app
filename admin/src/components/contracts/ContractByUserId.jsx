import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card from 'material-ui/Card'
import {getUserDetails} from '../../actions/contracts'
import {getUsers, getUser} from '../../actions/users'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'
import '../../css/index.css'
import '../../css/contracts.css'

class ContractByUserId extends PureComponent {

    componentWillMount() {

        this.props.getUserDetails(this.props.match.params.id)
        this.props.getUser(this.props.match.params.id)
    }

    renderContractDetails = (eachcontract, classes) => {

        return (

            <div key={eachcontract.id} className='contract-details'>

                <Card key={eachcontract.id} className='contract-card'>

                    <div className='card-content'>
                        <h2>{eachcontract.contractType}</h2>
                        <p>Provider: {eachcontract.contractProvider}</p>
                        <p>Status: {eachcontract.uploadStatus}</p>
                    </div>

                    <div className='card-action'>

                        <Button
                            className="card-button"
                            style={{
                            background: "linear-gradient(0.25turn,#e84435, #f57f17)",
                            color: "white"
                        }}
                            variant="raised"
                            type="submit"
                            onClick={() => window.location = `${eachcontract.userId}/${eachcontract.contractImage}`}>
                            Bekijk Contract
                        </Button>

                    </div>

                </Card>

            </div>
        )
    }

    render() {

        const {user} = this.props
       
        if (!this.props.user) 
            return null

        return (

            <div>

                <Link to='/users'>
                    <Button className='all-users-button' variant="raised" type="submit">
                        Alle gebruikers
                    </Button>
                </Link>

                <div className="overview">

                    {this.props.contractsById.length === 0 && <p>Geen contracten opgeslagen op het moment</p>
}
                    {this.props.contractsById.length > 0 && <div>
                       
                        <h1
                            style={{
                            textAlign: "center"
                        }}>Mijn contracten</h1>
                       
                        <p
                            style={{
                            width: '100%',
                            display: 'block',
                            marginTop: '50px',
                            textAlign: "center"
                        }}>Gebruiker : {user.email}
                        </p>

                        {this
                            .props
                            .contractsById
                            .map(eachcontract => this.renderContractDetails(eachcontract))}

                    </div>
                }
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({contractsById: state.contractsById, user: state.user})

export default connect(mapStateToProps, {getUserDetails, getUsers, getUser})(ContractByUserId)