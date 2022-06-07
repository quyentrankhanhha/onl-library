import GoogleStrategy from 'passport-google-id-token'
import User, { UserDocument } from '../models/User'
import UserService from '../services/user'

const isAdmin = (domain: string) => {
  if (domain === 'ha.quyen@integrify.io') return true
  return false
}

const loginWithGoogle = () => {
  return new GoogleStrategy(
    async (
      parsedToken: {
        payload: {
          given_name: string
          family_name: string
          email: string
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
            firstName: parsedToken.payload.given_name,
            lastName: parsedToken.payload.family_name,
            email: parsedToken.payload.email,
            isAdmin: isAdmin(parsedToken.payload.email),
          } as UserDocument
          const newUser = new User(user)
          await UserService.createUserServices(newUser)
        }
        done(null, user)
      } catch (error) {
        console.log(error)
        done(error)
      }
    }
  )
}

export default loginWithGoogle
