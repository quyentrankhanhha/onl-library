import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  firstName: string
  lastName: string
  email: string
  createdDate: Date
  role: Role
}

enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: Role,
    required: true,
    default: Role.USER,
  },
  createdDate: Date,
})

export default mongoose.model<UserDocument>('User', userSchema)
