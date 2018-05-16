import { JsonController, Get, Post, HttpCode, Param,UploadedFile} from 'routing-controllers'
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
    @Post('/contracts/:id')
    @HttpCode(201)
    async postContractImage(
    @Param('id') id:number,
    @UploadedFile('file') file: any) {
        const contract = new Contract()
        contract.userId = id
        contract.contractImage = file

        return await contract.save()
    } 
    

    // @Authorized()
    @Get('/contracts/:userId')
    getAllContractsByUserId(
    @Param('userId') userId : number) {
        return Contract.find({userId})
    }
   
}