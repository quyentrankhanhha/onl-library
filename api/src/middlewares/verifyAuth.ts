import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { BadRequestError, ForbiddenError } from '../helpers/apiError'

export default function verifyAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const auth = req.headers.authorization || ''
    const token = auth.split(' ')[1]
    if (!token) return next(new ForbiddenError('Access denied.'))

    const JWT_SECRET = process.env.JWT_SECRET as string

    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    console.log('error:', error)
    throw new BadRequestError()
  }
  return next()
}
