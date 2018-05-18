import { JsonController, Post, Param, Get, Body, Authorized } from 'routing-controllers'
import Admin from './entity'

@JsonController()
export default class AdminController {

  @Post('/admins')
  async signup(
    @Body() data: Admin
  ) {
    const {password, ...rest} = data
    const entity = Admin.create(rest)
    await entity.setPassword(password)

    const admin = await entity.save()

    return admin
  }

  @Authorized()
  @Get('/admins/:id([0-9]+)')
  getAdmin(
    @Param('id') id: number
  ) {
    return Admin.findOneById(id)
  }

  @Authorized()
  @Get('/admins')
  allAdmins() {
    return Admin.find()
  }
}