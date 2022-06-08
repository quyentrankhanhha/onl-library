import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { UserDocument } from '../models/User'
import { JWT_SECRET } from '../util/secrets'

export const loginGoogle = (req: Request, res: Response) => {
  const user = req.user as UserDocument
  const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, {
    expiresIn: '1h',
  })
  res.json({ token })
}
