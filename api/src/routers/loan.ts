import express from 'express'
import { getAllLoans } from '../controllers/loan'
import {
  createLoan,
  deleteLoan,
  findLoanById,
  updateLoan,
} from './../controllers/loan'

const router = express.Router()

router.get('/', getAllLoans)
router.get('/:loanId', findLoanById)
router.put('/:loanId', updateLoan)
router.post('/', createLoan)
router.delete('/:loanId', deleteLoan)

export default router
