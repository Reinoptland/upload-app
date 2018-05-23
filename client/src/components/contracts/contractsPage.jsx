import React, {PureComponent} from 'react'
// import { Link } from 'react-router-dom'
import BottomNav from '../layout/BottomNav'
import {connect} from 'react-redux'
import {getAllContracts, deleteContract} from '../../actions/contracts'

//styling
import Card from 'material-ui/Card'
import '../../css/index.css'
import '../../css/contracts.css'


  class ContractsPage extends PureComponent {
    constructor(){
      super()
      this.state = {}
    }

    componentWillMount() {
      this.props.getAllContracts()
    }

    handleChange = (event) => {
      this.setState({contracttype: event.target.value})
      console.log(this.state)
    }

    handleDelete = (event) => {
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
          </div>
        </Card>

      )
    }

    render() {
      const {contracts} = this.props

      if (contracts === null) return null
      console.log('state',this.state.contracttype)

      const filteredContracts = this.props.contracts.filter(contract => {return contract.contractType === this.state.contracttype})
      console.log(filteredContracts)


      return (
      <div>


        <div className="overview">
          <h1>Mijn contracten</h1>
          <p>Filter hier op type:</p>
          <select required
          className="type"  name="type" id="type"
          onChange={ this.handleChange }>
            <option value="">Contract Type</option>
            <option value="Aansprakelijkheidsverzekering">Aansprakelijkheidsverzekering</option>
              <option value="AOV verzekering">AOV verzekering</option>
              <option value="Autoverzekering">Autoverzekering</option>
              <option value="Bootverzekering">Bootverzekering</option>
            <option value="Dierenverzekering">Dierenverzekering</option>
            <option value="Energie">Energie</option>
            <option value="Hypotheek">Hypotheek</option>
            <option value="Inboedelverzekering">Inboedelverzekering</option>
            <option value="Internet, tv & bellen">Internet, tv & bellen</option>
            <option value="Kranten & tijdschriften">Kranten & tijdschriften</option>
            <option value="Motorverzekering">Motorverzekering</option>
            <option value="Opstalverzekering">Opstalverzekering</option>
            <option value="OV">OV</option>
            <option value="Overlijdensrisicoverzekering">Overlijdensrisicoverzekering</option>
            <option value="Rechtsbijstandverzekering">Rechtsbijstandverzekering</option>
            <option value="Reisverzekering">Reisverzekering</option>
            <option value="Scooterverzekering">Scooterverzekering</option>
            <option value="Uitvaartverzekering">Uitvaartverzekering</option>
            <option value="Zorgverzekering">Zorgverzekering</option>
          </select>
          {!this.state.contracttype && contracts.map(contract => this.renderContract(contract))}
          {this.state.contracttype && filteredContracts.map(contract => this.renderContract(contract))}


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
