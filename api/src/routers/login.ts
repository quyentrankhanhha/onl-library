import express from 'express'
import passport from 'passport'
import { loginGoogle } from '../controllers/login'

const router = express.Router()

router.post(
  '/',
  passport.authenticate('google-id-token', { session: false }),
  loginGoogle
)

export default router
