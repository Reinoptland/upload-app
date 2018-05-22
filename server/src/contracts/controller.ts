
import { JsonController, Get, Post, Body, HttpCode, Param,UploadedFile, Authorized, NotFoundError, UnauthorizedError, Delete} from 'routing-controllers'

import Contract from './entity'
import User from '../users/entity'
import { verify, sign } from '../jwt'
//import S3 from 'aws-sdk'
const S3 = require('aws-sdk/clients/s3');

@JsonController()
export default class ContractController {

    // // @Authorized()
    // @Get('/contracts')
    // async getAllContracts() {

    //    // add security 
        
    //     const contractImages = await Contract.find()
    //     contractImages.forEach(x=>delete x.contractImage)
    //     return contractImages
    // }

    

    @Authorized()
    @Post('/contracts/:id')
    @HttpCode(201)
    async postContractImage(
    @Param('id') id:number,
    @Body() body: any,
    @UploadedFile('file') file: any) {
        const signed = sign({id})
        const jwt = verify(signed)
        
        console.log('BACKEND', file)

        const user = await User.findOne({id})
        if(!user) throw new NotFoundError('Geen gebruiker')

        if(user.id !== jwt.id) throw new UnauthorizedError(`Contract not owned by you`)
        
        let s3 = new S3()
        var params = {Bucket: 'hallorooscontracttest', Key: `${id}/${body.type}${file.originalname}`, Body: file.buffer};
        s3.upload(params, function(err, data) {
            if (err) {
                throw new NotFoundError('Er is een technisch probleem, probeer later nog een keer.')
            } else 
            console.log(err, data)
        });
        
        const contract = new Contract()
        contract.userId = id
        contract.contractImage = `${body.type}${file.originalname}`
        contract.contractType = body.type
        contract.contractProvider = body.provider
        contract.uploadStatus = body.uploadStatus

        return await contract.save()
    } 
    

    //@Authorized()
    @Get('/contracts/:userId')
    async getAllContractsByUserId(
    @Param('userId') userId : number) {
        // add security 
        return  await Contract.find({userId})
        
    }
   

   // @Authorized()
    @Get('/contracts/:userId/:image')
    async getContractImage(
        @Param('userId') userId: number,
        @Param('image') image: string) {
        
            // add security  
        const contract = await Contract.findOne({contractImage: `${image}`})

        var s3 = new S3({region: 'eu-central-1'}, {signatureVersion: 'v4'});
        var params = {Bucket: 'hallorooscontracttest', Key: `${userId}/${image}` , Expires: 60};
        var url = s3.getSignedUrl('getObject', params);
        
        if (!contract) throw new NotFoundError('Geen contract gevonden.')
        contract.contractImage = url

        return (contract);
    }

    @Authorized()
    @Delete('/contracts/:id')
    async deleteStudent(
        @Param('id') id: number
    ) {
        const contract = await Contract.findOneById(id)
        
        if (!contract) throw new NotFoundError('Contract doesn\'t exist')

        if (contract) Contract.remove(contract)
        return 'Successfully deleted'
    }

}





