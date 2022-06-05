import { NotFoundError } from '../helpers/apiError'
import User, { UserDocument } from './../models/User'

const getAllUserServices = async (): Promise<UserDocument[]> => {
  return User.find()
}

const findUserByIdServices = async (userId: string): Promise<UserDocument> => {
  const foundUser = await User.findById(userId)
  if (!foundUser) {
    throw new NotFoundError(`Author ${userId} not found`)
  }

  return foundUser
}

const findUserByEmail = async (email: string): Promise<UserDocument | null> => {
  return User.findOne({ email })
}

const createUserServices = async (
  user: UserDocument
): Promise<UserDocument> => {
  return user.save()
}

const updateUserServices = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const foundUser = await User.findByIdAndUpdate(userId, update)

  if (!foundUser) {
    throw new NotFoundError(`Book ${userId} not found`)
  }

  return foundUser
}

const deleteUserServices = async (
  userId: string
): Promise<UserDocument | null> => {
  const foundUser = User.findByIdAndDelete(userId)

  if (!foundUser) {
    throw new NotFoundError(`Book ${userId} not found`)
  }

  return foundUser
}

export default {
  getAllUserServices,
  findUserByIdServices,
  findUserByEmail,
  createUserServices,
  updateUserServices,
  deleteUserServices,
}
