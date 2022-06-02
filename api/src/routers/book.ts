import express from 'express'
import {
  createBook,
  deleteBook,
  findBookById,
  getAllBooks,
  updateBook,
} from '../controllers/book'

const router = express.Router()

router.get('/', getAllBooks)
router.get('/:bookId', findBookById)
router.put('/:bookId', updateBook)
router.delete('/:bookId', deleteBook)
router.post('/', createBook)

export default router
