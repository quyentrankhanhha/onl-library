import express from 'express'
import {
  createBook,
  deleteBook,
  findBookById,
  getAllBooks,
  updateBook,
} from '../controllers/book'
import verifyAuth from '../middlewares/verifyAuth'
import isAdmin from '../middlewares/verifyRole'

const router = express.Router()

router.get('/', getAllBooks)
router.get('/:bookId', findBookById)
router.put('/:bookId', verifyAuth, isAdmin, updateBook)
router.delete('/:bookId', verifyAuth, isAdmin, deleteBook)
router.post('/', verifyAuth, isAdmin, createBook)

export default router
