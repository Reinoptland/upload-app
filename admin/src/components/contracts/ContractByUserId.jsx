import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getUserDetails} from '../../actions/contracts'
import {getUsers, getUser} from '../../actions/users'

//Styling
import Card from 'material-ui/Card'
import Button from 'material-ui/Button'
import '../../css/index.css'
import '../../css/contracts.css'

class ContractByUserId extends PureComponent {

    constructor(){
        super()
        this.state={upload_Status:'alle'}
        this.handleChange=this.handleChange.bind(this)
    }

    componentWillMount() {

        this.props.getUserDetails(this.props.match.params.id)
        this.props.getUser(this.props.match.params.id)
    }

    handleChange(event){
       
        this.setState({upload_Status: event.target.value})
       
    }

    renderContractDetails = (eachContract, classes) => {

        return (

            <div key={eachContract.id} className='card'>

                <Card className='card-content'>

                    <div>
                        <h2>{eachContract.contractType}</h2>
                        <p>Provider: {eachContract.contractProvider}</p>
                        <p>Status: {eachContract.uploadStatus}</p>
         
            </div>
            <Button 
                variant="raised"
                className="button"
                type="submit"
                onClick={() => window.location=`${eachContract.userId}/${eachContract.contractImage}`}>
                Bekijk Contract
            </Button>
        </Card>
        </div>    
      )
    }

    render() {

        const {user} = this.props

        if (!this.props.user) return null
            
        const filteredContracts = this.props.contractsById.filter(contract => {return contract.uploadStatus === this.state.upload_Status})
      

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
              
                <p>Filter hier op status:</p>

                         <select required
                          className="filter-status"  name="type" id="type"
                          onChange={ this.handleChange }>
                          
                          <option value="alle">alle</option>
                          <option value="nieuw">nieuw</option>
                          <option value="behandeld">behandeld</option>
                          <option value="niet bruikbaar">niet bruikbaar</option>
                         
                          </select>
                          <p>Gebruiker : {user.email}</p> 
                          
                       <div className="contract-details">
                        {(this.state.upload_Status==="alle") && this.props.contractsById.map(eachContract => this.renderContractDetails(eachContract))}
                        {(this.state.upload_Status!=="alle") && filteredContracts.map(eachContract => this.renderContractDetails(eachContract))}

            </div>
            </div>}
            
        </div>       
      </div>
      )
    }
}

const mapStateToProps = (state) => ({contractsById: state.contractsById, user: state.user})

export default connect(mapStateToProps, {getUserDetails, getUsers, getUser})(ContractByUserId)