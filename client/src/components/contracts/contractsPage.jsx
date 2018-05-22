import React, {PureComponent} from 'react'
// import { Link } from 'react-router-dom'
import BottomNav from '../layout/BottomNav'
import {connect} from 'react-redux'
import {getAllContracts} from '../../actions/contracts'

//styling
import Card from 'material-ui/Card'
import '../../css/index.css'
import '../../css/contracts.css'


  class ContractsPage extends PureComponent {

    componentWillMount() {
      this.props.getAllContracts()
    }

    renderContract() {
      
      return (
        <Card> 
          <h2> {contract.contractType} </h2>
          <p> {contract.contractProvider} </p>
          
        </Card>
      )
    }

    render() {
      const {contracts} = this.props

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

export default connect(mapStateToProps, {getAllContracts})(ContractsPage)