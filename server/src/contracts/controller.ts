import { JsonController, Get, Body, Post, HttpCode, Param} from 'routing-controllers'
import Contract from './entity'

@JsonController()
export default class ContractController {

    //@Authorized()
    @Get('/contracts')
    async getAllContracts() {
        const contractImages = await Contract.find()
        return { contractImages }
    }

    //@Authorized()
    @Post('/contracts')
    @HttpCode(201)
    async postContractImage(
    @Body() contractImage: Contract) {
        
        return contractImage.save()
    } 

    // @Authorized()
    @Get('/contracts/:userId')
    getAllContractsByUserId(
    @Param('userId') userId : number) {
        return Contract.find({userId})
    }
   
}