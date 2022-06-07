import express from 'express'
import verifyAuth from '../middlewares/verifyAuth'
import {
  createAuthor,
  deleteAuthor,
  findAuthorById,
  getAllAuthors,
  updateAuthor,
} from './../controllers/author'

const router = express.Router()

router.get('/', getAllAuthors)
router.get('/:authorId', findAuthorById)
router.put('/:authorId', updateAuthor)
router.post('/', verifyAuth, createAuthor)
router.delete('/:authorId', deleteAuthor)

export default router
