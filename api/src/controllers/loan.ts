import { NextFunction, Request, Response } from 'express'
import { BadRequestError } from '../helpers/apiError'
import Loan from '../models/Loan'
import LoanService from '../services/loan'

// GET /loans
export const getAllLoans = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await LoanService.getAllLoanServices())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /loans/:loanId
export const findLoanById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await LoanService.findLoanByIdServices(req.params.loanId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// POST /loans
export const createLoan = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId, userId, loanDate, returnDate } = req.body

    const loan = new Loan({ bookId, userId, loanDate, returnDate })
    await LoanService.createLoanServices(loan)
    res.json(loan)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /loans/:loanId
export const updateLoan = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const loanId = req.params.loanId
    const updatedLoan = await LoanService.updateLoanServices(loanId, update)
    res.json(updatedLoan)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /loans/:loanId
export const deleteLoan = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await LoanService.deleteLoanServices(req.params.loanId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
