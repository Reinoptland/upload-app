import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import {Link} from 'react-router-dom'
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography'
import {getUserDetails} from '../../actions/contracts'
import {getAllContracts} from '../../actions/contracts'

const userid=1

class AllContracts extends PureComponent {
    constructor() {
        super()

    }
    
    componentWillMount(){
        this.props.getAllContracts()
    }

    handleClick(userid) {

        this
            .props
            .getUserDetails(userid)

    }

    render() {
       
        return (
            <div>
                <Card>
                    <CardContent>

                        <Link to ={`/contracts/${userid}`}><Typography component="h1">
                            <img
                            onClick={() => this.handleClick(Number(userid))}
                                alt='userpicture'
                                style={{
                                maxHeight: '100px'
                            }}
                                src="https://image.freepik.com/free-icon/male-user-close-up-shape-for-facebook_318-37635.jpg"/>
                        </Typography></Link>
                        <Typography component="h1">
                            UserName:
                        </Typography>

                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default connect(null,{getAllContracts,getUserDetails})(AllContracts)
