import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import {getContractImage} from '../../actions/contracts'
import '../../css/ContractImage.css'

class ContractImage extends PureComponent {
    componentWillMount() {
        this.props.getContractImage(this.props.match.params.id, this.props.match.params.image)
    }
    render(){

        
        return(
            <Paper className="image-paper">
                <img className='image-contract' alt='contractImage'
                src={'http://jjlawfl.com/wp-content/uploads/2018/02/contract-breach-3-700x400.jpg'}
                style={{maxHeight: '550px'}}/>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    contractImage: state.contractImage
})

export default (connect(mapStateToProps,{getContractImage})(ContractImage))