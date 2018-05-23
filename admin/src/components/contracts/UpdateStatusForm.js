import React, {PureComponent} from 'react'
import Button from 'material-ui/Button';
import {submitStatus, getContractImage} from '../../actions/contracts'
import {connect} from 'react-redux'

class UpdateStatusForm extends PureComponent {
   
  constructor() {

        super()

        this.handleSubmit = this.handleSubmit.bind(this)

        this.handleChange = this.handleChange.bind(this)

        this.state = {
            id:" ",
            uploadStatus: " ",
        };

    }


    handleSubmit(e) {

        e.preventDefault()
        this.props.onSubmit(this.state) 
        
    }

    handleChange(event,id) {

        this.setState({id:id})
        this.setState({uploadStatus: event.target.value})

    }

	render() {
      
		return (

			<form onSubmit={this.handleSubmit}>

                 <label>
                        <input
                            type={'radio'}
                            name='uploadStatus'
                            value={'new' || this.state.uploadStatus}
                            onChange={(event) => this.handleChange(event, this.props.details2.id)}/>nieuw
                    </label>
                    <label>
                        <input
                            type={'radio'}
                            name='uploadStatus'   
                            value={'processed'}
                            onChange={(event) => this.handleChange(event, this.props.details2.id)}/>behandeld
                    </label>
                    <label>
                        <input
                            type={'radio'}
                            name='uploadStatus'
                            value={'not usable'}
                            onChange={(event) => this.handleChange(event, this.props.details2.id)}/>niet bruikbaar
                    </label>
                <div>
                   
                    <Button style={{background: "linear-gradient(0.25turn,#e84435, #f57f17)",
                        color:"white"}} variant="raised" type="submit"> Verzenden </Button>
                </div>

			</form>

		)
	}
}


const mapStateToProps = (state) => ({

    details2: state.contractImage
    
})

export default connect (mapStateToProps, {submitStatus, getContractImage})(UpdateStatusForm)