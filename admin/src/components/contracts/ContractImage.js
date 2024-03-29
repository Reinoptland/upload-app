import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getContractImage, submitStatus} from '../../actions/contracts'
import UpdateStatusForm from './UpdateStatusForm'
import {Link} from 'react-router-dom'

//Styling
import Card, {CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import '../../css/ContractByUserId.css'
import '../../css/index.css'
import {withStyles} from 'material-ui/styles'
import Modal from 'material-ui/Modal';


function getModalStyle() {

    const top = 40;
    const left = 40;
    return {top: `${top}%`, left: `${left}%`, transform: `translate(-${top}%, -${left}%)`};

}

const styles = theme => ({

    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 140,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        height:theme.spacing.unit* 90,
    }

});

class ContractImage extends PureComponent {

        state = {
            edit: false,
            open: false
        };
    
        handleOpen = () => {
            this.setState({open: true});
        };
    
        handleClose = () => {
            this.setState({open: false});
        };
   
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
        this.props.submitStatus(details) 
        
      }

    render(){

        const {details,classes} = this.props
       
        if (!details) return null

        return(
        
        <div key={details.id} className="cardwrapper">

         <Link to ={`/users/${details.userId}`}> 
                <Button 
                className='button'
                variant="raised"
                type="submit" >
                Alle contracten
                </Button>
            </Link>

                <Card className='contract-card'>
                    <CardContent >
                    
         <Typography component="h1">
                           
         <img 
                 alt='userpicture'
                 style={{
                        maxHeight: '250px'
                        }}
                 src={details.contractImage}                            
                 onClick={this.handleOpen}
         />

         </Typography>

            <Modal className= "modal"
                        open={this.state.open} onClose={this.handleClose}>

                            <div style={getModalStyle()} className={classes.paper}>
                                <Typography variant="title" id={`${this.props.details.id}`}>
                                    <img  
                                        alt='userpicture'
                                        src={details.contractImage}/>

                                </Typography>

                            </div>
                        </Modal>
                        

            <p >Contract type : {details.contractType}</p>
                 
            <p className="card-paragraph">Provider : {details.contractProvider}</p>     
                           
            <p className="card-paragraph1">Status : {details.uploadStatus}</p>

            </CardContent>

            { this.state.edit &&
                    
                    <UpdateStatusForm initialValues={details} onSubmit={this.updateStatus} />
                    
            }
            { !this.state.edit && 
                    <Button                      
                        variant="raised"
                        className="button"
                        type="submit"
                        onClick={this.toggleEdit}>
                        Contract status aanpassen
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

export default withStyles(styles)(connect(mapStateToProps,{getContractImage, submitStatus})(ContractImage))