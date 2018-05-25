
import { JsonController, Get, Post, Body, HttpCode, Param,UploadedFile, Authorized, NotFoundError, UnauthorizedError, Delete, Put, Patch} from 'routing-controllers'

import Contract from './entity'
import User from '../users/entity'
import { verify, sign } from '../jwt'
//import S3 from 'aws-sdk'
const S3 = require('aws-sdk/clients/s3');

@JsonController()
export default class ContractController {
    @Get('/')
    intruder() {
        return 'Silence is golden - xoxo'
    }
    @Authorized()
    @Get('/contracts')
    async getAllContracts() {

       // add security 
        
        const contractImages = await Contract.find()

        return contractImages
    }

    @Authorized()
    @Post('/contracts/:id')
    @HttpCode(201)
    async postContractImage(
    @Param('id') id:number,
    @Body() body: any,
    @UploadedFile('file') file: any) {
        const signed = sign({id})
        const jwt = verify(signed)

        const user = await User.findOne({id})
        if(!user) throw new NotFoundError('Geen gebruiker')

        if(user.id !== jwt.id) throw new UnauthorizedError(`Contract not owned by you`)
        const randName = Math.floor(Math.random()*9000000000000)

        let s3 = new S3()
        var params = {Bucket: 'roos-upload-app', Key: `${id}/${randName}.${file.originalname.split('.').pop()}`, Body: file.buffer};
        s3.upload(params, function(err, data) {
            if (err) {
                throw new NotFoundError('Er is een technisch probleem, probeer later nog een keer.')
            } else
            console.log(err, data)
        });

        const contract = new Contract()
        contract.userId = id
        contract.contractImage = `${randName}.${file.originalname.split('.').pop()}`
        contract.contractType = body.type
        contract.contractProvider = body.provider
        contract.uploadStatus = body.uploadStatus

        return await contract.save()
    }


    @Authorized()
    @Get('/contracts/:userId')
    async getAllContractsByUserId(
    @Param('userId') userId : number) {
        // add security
        return  await Contract.find({userId})

    }
   
    @Authorized()
    @Get('/contracts/:userId/:image')
    async getContractImage(
        @Param('userId') userId: number,
        @Param('image') image: string) {

            // add security
        const contract = await Contract.findOne({contractImage: `${image}`})

        var s3 = new S3({region: 'eu-central-1'}, {signatureVersion: 'v4'});
        var params = {Bucket: 'roos-upload-app', Key: `${userId}/${image}` , Expires: 60};
        var url = s3.getSignedUrl('getObject', params);

        if (!contract) throw new NotFoundError('Geen contract gevonden.')
        contract.contractImage = url

        return (contract);
    }

    @Put('/contracts/:id/')
    async updateStatus(

        @Param('id') id: number,
        @Body() update: Partial<Contract>) {
        const contract = await Contract.findOne({id})
        if (!contract) throw new NotFoundError('Cannot find contract')

        return Contract.merge(contract, update).save()
    }

    @Authorized()
    @Delete('/contracts/:id')
    async deleteContract(
        @Param('id') id: number
    ) {
        const contract = await Contract.findOneById(id)

        if (!contract) throw new NotFoundError('Geen contract met deze gegevens')
        
        console.log('delete', contract)

        var s3 = new S3({region: 'eu-central-1'}, {signatureVersion: 'v4'});
        var params = {Bucket: 'roos-upload-app', Key: `${contract.userId}/${contract.contractImage}`};
        s3.deleteObject(params, function(err, data) {
            if (err) {
                throw new NotFoundError('Er is een technisch probleem, probeer later nog een keer.')
            } else
            console.log(err, data)
        });

        Contract.remove(contract)
        return 'Succescol verwijderd'
    }

    @Patch('/contracts/:id')
    async setUploadStatus(@Param('id') id : number, @Body()update) {
    const status = await Contract.findOneById(id)


    if (!status) 
      throw new NotFoundError(`User not found`)


    const updatedStatus = Contract.merge(status, update)

    const entity = await updatedStatus.save()
    return entity
  }


}
