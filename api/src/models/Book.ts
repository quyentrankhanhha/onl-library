import mongoose, { Document, Schema } from 'mongoose'

export type BookDocument = Document & {
  isbn: string
  title: string
  description: string
  publisher: string
  publishedDate: Date
  author: string
  status: boolean
  imgUri: string
  borrowerId: string
  borrowDate: Date
  returnDate: Date
  category: string
}

const bookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    index: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  publisher: String,
  publishedDate: Date,
  author: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
    required: true,
  },
  imgUri: String,
  borrowerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  borrowDate: Date,
  returnDate: Date,
  category: String,
})

export default mongoose.model<BookDocument>('Book', bookSchema)
