import express from 'express'
import { verifyToken } from '../controllers/verifyToken'
import verifyAuth from '../middlewares/verifyAuth'

const router = express.Router()

router.post('/', verifyAuth, verifyToken)

export default router
