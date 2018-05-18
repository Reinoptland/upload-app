import { JsonController, Get, Post, Body, HttpCode, Param,UploadedFile, Authorized} from 'routing-controllers'
import Contract from './entity'
//import S3 from 'aws-sdk'
const S3 = require('aws-sdk/clients/s3');

@JsonController()
export default class ContractController {

    @Authorized()
    @Get('/contracts')
    async getAllContracts() {
        const contractImages = await Contract.find()
        contractImages.forEach(x=>delete x.contractImage)
        return contractImages
    }

    @Authorized()
    @Post('/contracts/:id')
    @HttpCode(201)
    async postContractImage(
    @Param('id') id:number,
    @Body() body: any,
    @UploadedFile('file') file: any) {
        console.log(file)
        let s3 = new S3()
        var params = {Bucket: 'hallorooscontracttest', Key: `${id}/${body.name}`, Body: file.buffer};
        s3.upload(params, function(err, data) {
            console.log(err, data); //handle error and success
        });
        const contract = new Contract()
        contract.userId = id
        contract.contractImage = `${id}/${body.name}` //TODO: keyname - need to make an original
        contract.contractName = body.name
        contract.contractType = body.type
        contract.contractProvider = body.provider

        return await contract.save()
    } 
    

    @Authorized()
    @Get('/contracts/:userId')
    async getAllContractsByUserId(
    @Param('userId') userId : number) {
        return  await Contract.find({userId})
        
    }
   
}