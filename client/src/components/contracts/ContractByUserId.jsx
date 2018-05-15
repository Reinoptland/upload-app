import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import {Link} from 'react-router-dom'
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography'


class ContractByUserId extends PureComponent {
    constructor() {
        super()

    }

    renderContractDetails(){
        return(
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
                                src={this.props.contractsById.contractImage}/>
                        </Typography>
                        <Typography component="h1">
                            Description:{this.props.contractsById.contractDescription}
                        </Typography>
                    </CardContent>
                </Card>
        )}

   render() {

        return (
           
                  <div>
                    {this
                        .props
                        .contractsById
                        .map(eachcontract => this.renderContractDetails(eachcontract))}
                </div>

                
           
        )
    }
}

const mapStateToProps = (state) => ({

    contractsById: state.contractsById
})

export default connect(mapStateToProps)(ContractByUserId)
