import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import {Link} from 'react-router-dom'
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography'
import getAllUsers from '../../actions/images'

class UserById extends PureComponent {
    constructor() {
        super()

    }

   render() {

        return (
            <div>
                <Card>
                    <CardContent>
                    <Typography component="h1">
                            UserName:
                        </Typography>
                        <Typography component="h1">
                            <img
                           
                                alt='userpicture'
                                style={{
                                maxHeight: '100px'
                            }}
                                src=" "/>
                        </Typography>
                        <Typography component="h1">
                            Description:
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default connect(UserById)
