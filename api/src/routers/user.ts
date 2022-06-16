import express from 'express'
import {
  createUser,
  deleteUser,
  findUserById,
  getAllUsers,
  updateUser,
} from '../controllers/user'
import verifyAuth from '../middlewares/verifyAuth'

const router = express.Router()

router.get('/', verifyAuth, getAllUsers)
router.get('/:userId', verifyAuth, findUserById)
router.post('/', verifyAuth, createUser)
router.put('/:userId', verifyAuth, updateUser)
router.delete('/:userId', verifyAuth, deleteUser)

export default router
