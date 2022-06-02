import mongoose, { Document, Schema, Types } from 'mongoose'

export type AuthorDocument = Document & {
  firstname: string
  lastname: string
  bio: string
  books: Types.ObjectId[]
}

const authorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  bio: String,
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
})

export default mongoose.model<AuthorDocument>('Author', authorSchema)
