import React, {PureComponent} from 'react'
// import { Link } from 'react-router-dom'
import BottomNav from '../layout/BottomNav'
import {connect} from 'react-redux'
import {getAllContracts} from '../../actions/contracts'

//styling
import Card, {CardContent} from 'material-ui/Card'
import '../../css/index.css'
import '../../css/contracts.css'


  class ContractsPage extends PureComponent {

    componentWillMount() {
      this.props.getAllContracts()
    }

    renderContract() {
      const {contracts} = this.props
      return (
        <Card> 
          
        </Card>
      )
    }

    render() {
    
      return (
      <div>
        <div className="overview">
          <h1>Mijn contracten</h1>
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