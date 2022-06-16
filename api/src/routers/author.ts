import express from 'express'
import verifyAuth from '../middlewares/verifyAuth'
import isAdmin from '../middlewares/verifyRole'
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
router.put('/:authorId', verifyAuth, isAdmin, updateAuthor)
router.post('/', verifyAuth, isAdmin, createAuthor)
router.delete('/:authorId', verifyAuth, isAdmin, deleteAuthor)

export default router
