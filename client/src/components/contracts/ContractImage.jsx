import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {getContractImage} from '../../actions/contracts'

// Styling
import '../../css/contracts.css'

class ContractImage extends PureComponent {

    componentWillMount() {
        const contractImage = (window.location.href).split('/').pop()
        this.props.getContractImage(this.props.currentUser.userId, contractImage)
    }

    render(){
        const {contractDetails} = this.props
        
        return(
            <div className="contract-details">
    
            <h1> {contractDetails.contractType}</h1>
            <p>{contractDetails.contractProvider}</p>
            <img src={contractDetails.contractImage} alt="Afbeelding is niet beschikbaar"/>

            <div className="go-back-btn">
            <button className='card-button'><Link to={`/contracts`}> TERUG </Link></button>
            </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    contractDetails: state.contractImage
})

export default (connect(mapStateToProps,{ getContractImage})(ContractImage))