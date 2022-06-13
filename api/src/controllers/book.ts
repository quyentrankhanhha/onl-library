import { NextFunction, Request, Response } from 'express'
import { BadRequestError } from '../helpers/apiError'
import Book from '../models/Book'
import AuthorService from '../services/author'
import BookService from '../services/book'

// GET /books
export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await BookService.getAllBookServices())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /books/:bookId
export const findBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await BookService.findBookByIdServices(req.params.bookId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// POST /books
export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      isbn,
      title,
      description,
      publisher,
      publishedDate,
      author,
      imgUri,
      category,
      status,
      loanId,
    } = req.body

    const book = new Book({
      isbn,
      title,
      description,
      publisher,
      publishedDate,
      author,
      imgUri,
      category,
      status,
      loanId,
    })

    await BookService.createBookServices(book)
    await AuthorService.addAuthorToBookServices(author, book._id)
    res.json(book)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /books/:bookId
export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const bookId = req.params.bookId
    const oldBook = await BookService.findBookByIdServices(bookId)
    AuthorService.removeAuthorFromBookServices(oldBook.author, bookId)
    const updatedBook = await BookService.updateBookServices(bookId, update)
    await AuthorService.addAuthorToBookServices(update.author, bookId)

    res.json(updatedBook)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /books/:bookId
export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await BookService.deleteBookServices(req.params.bookId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
