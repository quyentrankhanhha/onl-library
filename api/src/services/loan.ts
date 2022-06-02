import { NotFoundError } from '../helpers/apiError'
import Loan, { LoanDocument } from '../models/Loan'

const getAllLoanServices = async (): Promise<LoanDocument[]> => {
  return Loan.find().sort({ loanDate: 1 })
}

const findLoanByIdServices = async (loanId: string): Promise<LoanDocument> => {
  const foundLoan = await Loan.findById(loanId)
  if (!foundLoan) {
    throw new NotFoundError(`Author ${loanId} not found`)
  }

  return foundLoan
}

const createLoanServices = async (
  loan: LoanDocument
): Promise<LoanDocument> => {
  return loan.save()
}

const updateLoanServices = async (
  loanId: string,
  update: Partial<LoanDocument>
): Promise<LoanDocument | null> => {
  const foundLoan = await Loan.findByIdAndUpdate(loanId, update)

  if (!foundLoan) {
    throw new NotFoundError(`Book ${loanId} not found`)
  }

  return foundLoan
}

const deleteLoanServices = async (
  loanId: string
): Promise<LoanDocument | null> => {
  const foundLoan = Loan.findByIdAndDelete(loanId)

  if (!foundLoan) {
    throw new NotFoundError(`Book ${loanId} not found`)
  }

  return foundLoan
}

export default {
  getAllLoanServices,
  findLoanByIdServices,
  createLoanServices,
  updateLoanServices,
  deleteLoanServices,
}
