import mongoose, { Document, Schema, Types } from 'mongoose'

export type BookDocument = Document & {
  isbn: string
  title: string
  description: string
  publisher: string
  publishedDate: Date
  author: Types.ObjectId
  imgUri: string
  category: [string]
  status: boolean
  loanId: Types.ObjectId
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
    type: Schema.Types.ObjectId,
    ref: 'Author',
  },
  imgUrl: String,
  category: [
    {
      type: [String],
      enum: [
        'Crime',
        'Cookbook',
        'History',
        'Poetry',
        'Textbook',
        'Science',
        'Thriller',
        'Self help',
        'Travel',
      ],
    },
  ],
  status: {
    type: Boolean,
    default: false,
    required: true,
  },
  loanId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

export default mongoose.model<BookDocument>('Book', bookSchema)
