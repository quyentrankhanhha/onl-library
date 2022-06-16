import { NextFunction, Request, Response } from 'express'
import { ForbiddenError, UnauthorizedError } from '../helpers/apiError'
import { UserDocument } from '../models/User'

export default function isAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = req.user as UserDocument

    if (user.role !== 'ADMIN') {
      throw new ForbiddenError()
    }

    next()
  } catch (error) {
    console.log('error:', error)
    throw new UnauthorizedError()
  }
}
