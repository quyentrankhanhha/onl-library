import express from 'express'
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
router.post('/', createAuthor)
router.delete('/:authorId', deleteAuthor)

export default router
