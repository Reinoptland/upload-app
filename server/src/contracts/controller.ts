import { JsonController, Get, Body, Post, HttpCode} from 'routing-controllers'
import Contract from './entity'

@JsonController()
export default class ContractController {

    //@Authorized()
    @Get('/contracts')
    async allContracts() {
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
   
}