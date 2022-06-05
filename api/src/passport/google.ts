import GoogleStrategy from 'passport-google-id-token'
import User, { UserDocument } from '../models/User'
import UserService from '../services/user'

const isAdmin = (domain: string) => {
  if (domain !== 'integrify.io') return false
  return true
}

const loginWithGoogle = () => {
  return new GoogleStrategy(
    async (
      parsedToken: {
        payload: {
          email: string
          firstName: string
          lastName: string
          hd: string
        }
      },
      googleId: string,
      done: Function
    ) => {
      try {
        let user = await UserService.findUserByEmail(parsedToken.payload.email)

        if (!user) {
          user = {
            firstName: parsedToken.payload.firstName,
            lastName: parsedToken.payload.lastName,
            email: parsedToken.payload.email,
            password: '',
            isAdmin: isAdmin(parsedToken.payload.hd) ? true : false,
          } as UserDocument

          const newUser = new User(user)
          await UserService.createUserServices(newUser)
        }
        done(null, user)
      } catch (error) {
        done(error)
      }
    }
  )
}

export default loginWithGoogle
