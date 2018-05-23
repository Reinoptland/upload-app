import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {getAllContracts, deleteContract} from '../../actions/contracts'

//styling
import Card from 'material-ui/Card'
import BottomNav from '../layout/BottomNav'
import '../../css/index.css'
import '../../css/contracts.css'

  class ContractsPage extends PureComponent {

    componentWillMount() {
      this.props.getAllContracts()
    }

    handleDelete = event => {
      this.props.deleteContract(event.target.value)
    }

    renderContract = (contract) => {
      
      return (
        <Card key={contract.id} className='contract-card'>
          <div className='card-content'> 
            <h2> {contract.contractType} </h2>
            <p> {contract.contractProvider} </p>
          </div>
          <div className='card-action'>
            <button className='card-button' onClick={this.handleDelete} value={contract.id}>DELETE </button>
            <button className='card-button' value={contract.id}><Link to={`/contracts/${contract.contractImage}`}>DETAILS </Link></button>
          </div>
        </Card>
      )
    }

    render() {
      const {contracts} = this.props

      if (contracts === null) return null

      return (
      <div>
        <div className="overview">
          <h1>Mijn contracten</h1>
          {contracts.map(contract => this.renderContract(contract))}
        </div>
        

      <BottomNav/>
      </div>
      )
    }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  contracts: state.contracts
})

export default connect(mapStateToProps, {getAllContracts, deleteContract})(ContractsPage)