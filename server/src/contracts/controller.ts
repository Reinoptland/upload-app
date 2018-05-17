import { JsonController, Get, Post, Body, HttpCode, Param,UploadedFile} from 'routing-controllers'
import Contract from './entity'

@JsonController()
export default class ContractController {

    //@Authorized()
    @Get('/contracts')
    async getAllContracts() {
        const contractImages = await Contract.find()
        contractImages.forEach(x=>delete x.contractImage)
        return contractImages
    }

    //@Authorized()
    @Post('/contracts/:id')
    @HttpCode(201)
    async postContractImage(
    @Param('id') id:number,
    @Body() body: any,
    @UploadedFile('file') file: any) {
        const contract = new Contract()
        contract.userId = id
        contract.contractImage = file
        contract.contractName = body.name
        contract.contractType = body.type
        contract.contractProvider = body.provider

        return await contract.save()
    } 
    

    // @Authorized()
    @Get('/contracts/:userId')
    async getAllContractsByUserId(
    @Param('userId') userId : number) {
        return  await Contract.find({userId})
        
    }
   
}