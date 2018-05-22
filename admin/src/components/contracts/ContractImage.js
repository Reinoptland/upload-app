import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import {getContractImage} from '../../actions/contracts'

export const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
      display: 'flex'
    }
})
class ContractImage extends PureComponent {
    componentWillMount() {
        this.props.getContractImage(this.props.match.params.id, this.props.match.params.image)
    }
    render(){
        const {classes, contractImage} = this.props
        return(
            <Paper className={classes.root}>
                <img alt='contractImage'
                src={contractImage}
                style={{maxHeight: '550px'}}/>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    contractImage: state.contractImage
})

export default withStyles(styles) (connect(mapStateToProps,{getContractImage})(ContractImage))