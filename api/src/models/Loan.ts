import mongoose, { Document, Schema, Types } from 'mongoose'

export type LoanDocument = Document & {
  bookId: Types.ObjectId
  userId: Types.ObjectId
  loanDate: Date
  returnDate: Date
}

const loanSchema = new mongoose.Schema({
  bookId: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  loanDate: {
    type: Date,
    default: Date.now,
  },
  returnDate: {
    type: Date,
  },
})

export default mongoose.model<LoanDocument>('Loan', loanSchema)
