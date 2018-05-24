import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getUserDetails} from '../../actions/contracts'
import {getUsers, getUser} from '../../actions/users'

// Styling
import Card from 'material-ui/Card'
import Button from 'material-ui/Button'
import '../../css/index.css'
import '../../css/contracts.css'

class ContractByUserId extends PureComponent {

    componentWillMount() {
        this.props.getUserDetails(this.props.match.params.id)
        this.props.getUser(this.props.match.params.id)
    }

    renderContractDetails = (eachcontract, classes) => {
      
      return (
        <div key={eachcontract.id} className='card'>
        <Card className='card-content'>
            <div>
                <h2>{eachcontract.contractType}</h2>
                <p>Provider: {eachcontract.contractProvider}</p>
                <p>Status: {eachcontract.uploadStatus}</p>
            </div>
            <Button 
                variant="raised"
                className="button"
                type="submit"
                onClick={() => window.location=`${eachcontract.userId}/${eachcontract.contractImage}`}>
                Bekijk Contract
            </Button>
        </Card>
        </div>    
      )
    }

    render() {

        const {user} = this.props
        if (!this.props.user) return null
        const userId = this
        .props
        .contractsById
        .map((eachcontract) => {
            return eachcontract.userId
        })

      return (

      <div className="overview-page">
         
         <Link to ='/users'> 
         <Button 
          className='button'
          variant="raised"
          type="submit" >
          Alle gebruikers
         </Button>
         </Link>

        <div className="contract-overview">
        
            {this.props.contractsById.length === 0 && <p>Geen contracten opgeslagen op het moment</p>
            }
            {this.props.contractsById.length > 0 && 
            <div>
            
            <h1>Mijn contracten</h1>
            <p>Gebruiker : {user.email}</p> 
            
            <div className="contract-details">     
            {this
                .props
                .contractsById
                .map(eachcontract => this.renderContractDetails(eachcontract))}
            </div>
            </div>}
            
        </div>       
      </div>
      )
    }
}

const mapStateToProps = (state) => ({
    contractsById: state.contractsById,
    user : state.user
})

export default connect(mapStateToProps, 
    {getUserDetails, getUsers, getUser})(ContractByUserId)