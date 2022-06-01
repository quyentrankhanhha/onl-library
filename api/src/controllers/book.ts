import { NextFunction, Request, Response } from 'express'
import BookService from '../services/book'

// GET books
export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => res.json(await BookService.getAllBooks())
