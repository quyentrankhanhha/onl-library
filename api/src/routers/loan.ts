import express from 'express'
import { getAllLoans } from '../controllers/loan'
import verifyAuth from '../middlewares/verifyAuth'
import {
  createLoan,
  deleteLoan,
  findLoanById,
  updateLoan,
} from './../controllers/loan'

const router = express.Router()

router.get('/', getAllLoans)
router.get('/:loanId', findLoanById)
router.put('/:loanId', verifyAuth, updateLoan)
router.post('/', verifyAuth, createLoan)
router.delete('/:loanId', verifyAuth, deleteLoan)

export default router
