import React, {PureComponent} from 'react'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class UpdateStatusForm extends PureComponent {

    constructor() {
        super()

        this.handleSubmit = this
            .handleSubmit
            .bind(this)

        this.handleChange = this
            .handleChange
            .bind(this)

        this.state = {
            id:" ",
            uploadStatus: " ",
        };

    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    handleChange(id,event) {
       
        this.setState({id:id})
        this.setState({uploadStatus: event.target.value})

    }

    // handleChange = e => {
    //     const {name, value} = e.target
    //     this.setState({
    //      [name]:value
    //     }) 
        
    // } 


	render() {
        const {classes} = this.props
		return (

			<form onSubmit={this.handleSubmit}>

                 <label>
                        <input
                            type={'radio'}
                            name='uploadStatus'
                            value='new'
                            onChange={(event)=>this.handleChange(this.state.id,event)}/>new
                    </label>
                    <label>
                        <input
                            type={'radio'}
                            name='uploadStatus'   
                            value='processed'
                            onChange={(event)=>this.handleChange(this.state.id,event)}/>processed
                    </label>
                    <label>
                        <input
                            type={'radio'}
                            name='uploadStatus'
                            value='not usable'
                            onChange={(event)=>this.handleChange(this.state.id,event)}/>not usable
                    </label>
                <div>
                    <Button variant="raised" type="submit"> Submit </Button>
                </div>
			</form>

		)
	}
}

export default UpdateStatusForm