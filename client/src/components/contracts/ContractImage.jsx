import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getContractImage} from '../../actions/contracts'

// Styling


class ContractImage extends PureComponent {

    componentWillMount() {
        const contractImage = (window.location.href).split('/').pop()
        console.log(contractImage)
        this.props.getContractImage(this.props.currentUser.userId, contractImage)
    }

    render(){
        console.log(this.props.contractImage.contractImage)
        
        return(
            <div className="cardwrapper">
            <img src={this.props.contractImage.contractImage} alt={this.props.contractImage.id}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    contractImage: state.contractImage
})

export default (connect(mapStateToProps,{ getContractImage})(ContractImage))