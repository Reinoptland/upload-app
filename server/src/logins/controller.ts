import { IsString } from 'class-validator'
import { JsonController, Post, Body, BadRequestError } from 'routing-controllers'
import { sign } from '../jwt'
import User from '../users/entity'
import Admin from '../admin/entity';

class AuthenticatePayload {
  @IsString()
  email: string

  @IsString()
  password: string
}

@JsonController()
export default class LoginController {

  @Post('/logins')
  async authenticate(
    @Body() { email, password }: AuthenticatePayload
  ) {
    const user = await User.findOne({ where: { email } })
    if (!user) throw new BadRequestError('Dit E-mail adres is bij ons niet bekend')

    if (!await user.checkPassword(password)) throw new BadRequestError('Het wachtwoord klopt niet...')

    const jwt = sign({ id: user.id! })
    return { jwt:jwt, userId:user.id }
  }

  @Post('/loginsAdmin')
  async authenticateAdmin(
    @Body() { email, password }: AuthenticatePayload
  ) {
    const user = await Admin.findOne({ where: { email } })
    if (!user) throw new BadRequestError('Dit E-mail adres is bij ons niet bekend')

    if (!await user.checkPassword(password)) throw new BadRequestError('Het wachtwoord klopt niet...')

    const jwt = sign({ id: user.id! })
    return { jwt:jwt, userId:user.id }
  }
}
