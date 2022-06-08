import { NextFunction, Request, Response } from 'express'
import { BadRequestError } from '../helpers/apiError'
import User from '../models/User'
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

// GET /users/:userId
export const findUserById = async (req: Request, res: Response) => {
  res.json(await UserService.findUserByIdServices(req.params.userId))
}

// POST /users
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, role, createdDate } = req.body

    const user = new User({ firstName, lastName, email, role, createdDate })
    await UserService.createUserServices(user)
    res.json(user)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /users/:userId
export const updateUser = async (req: Request, res: Response) => {
  const update = req.body
  const userId = req.params.userId
  const updatedUser = await UserService.updateUserServices(userId, update)
  res.json(updatedUser)
}

// DELETE /users/:userId
export const deleteUser = async (req: Request, res: Response) => {
  await UserService.deleteUserServices(req.params.userId)
  res.status(204).end()
}
