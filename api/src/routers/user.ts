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
router.get('/:userId', findUserById)
router.post('/', createUser)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)

export default router
