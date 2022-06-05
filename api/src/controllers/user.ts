import { NextFunction, Request, Response } from 'express'
import { BadRequestError } from '../helpers/apiError'
import UserService from '../services/user'

// GET /users
export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserService.getAllUserServices())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /user/:userId
export const findUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json(await UserService.findUserByIdServices(req.params.userId))
}

// PUT /users/:userId
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const update = req.body
  const userId = req.params.userId
  const updatedUser = await UserService.updateUserServices(userId, update)
  res.json(updatedUser)
}

// DELETE /users/:userId
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await UserService.deleteUserServices(req.params.userId)
  res.status(204).end()
}
