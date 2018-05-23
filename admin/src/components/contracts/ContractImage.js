import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getContractImage} from '../../actions/contracts'
import Card, {CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import '../../css/ContractByUserId.css'
import {submitStatus} from '../../actions/contracts'
import UpdateStatusForm from './UpdateStatusForm'

class ContractImage extends PureComponent {

        state = {
            edit: false,
            showPopup: false
        };
    
 
    
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    
    toggleEdit = () => {
        this.setState({
          edit: !this.state.edit
        })
    }

    componentWillMount() {
        this.props.getContractImage(this.props.match.params.id, this.props.match.params.image)
    }

    updateStatus = (details) => {
        this.toggleEdit()
        this.props.updateStatus(this.props.details.id, details)   
      }

    render(){

        const {details} = this.props
        if (!details) return null
        
        return(
            <div key={details.id} className="cardwrapper">
                <Card className='contractcard'>
                    <CardContent className='contractcard'>
                    
                        <Typography component="h1">
                            <img
                                alt='userpicture'
                                style={{
                                maxHeight: '250px'
                            }}
                            onClick={this
                                .togglePopup
                                .bind(this)}
                            src={details.contractImage}                            
                                />

                        </Typography>
                        
                        <p >ContractType : {details.contractType}</p>
                        <p className="card-paragraph">Provider : {details.contractProvider}</p>         
                        <p className="card-paragraph1">Status : {details.uploadStatus}</p>

                    </CardContent>
{console.log(this.props.details.id)}
                     { this.state.edit &&
                    <UpdateStatusForm initialValues={details} onSubmit={this.updateStatus.bind(this)}/>
                    }
                    { !this.state.edit && 
                    <Button
                        color="primary"
                        variant="raised"
                        className="create-batch"
                        type="submit"
                        onClick={()=>this.toggleEdit()}>
                        Update Contract Status
                    </Button>
                    }  
               </Card>

            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    details: state.contractImage
})

export default (connect(mapStateToProps,{getContractImage, submitStatus})(ContractImage))