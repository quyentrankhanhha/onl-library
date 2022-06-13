import { NotFoundError } from '../helpers/apiError'
import Book, { BookDocument } from './../models/Book'

const getAllBookServices = async (): Promise<BookDocument[]> => {
  return Book.find().populate('author').sort({ name: 1, publishedDate: -1 })
}

const findBookByIdServices = async (bookId: string): Promise<BookDocument> => {
  const foundBook = await Book.findById(bookId).populate('author')
  if (!foundBook) {
    throw new NotFoundError(`Book ${bookId} not found`)
  }

  return foundBook
}

const createBookServices = async (
  book: BookDocument
): Promise<BookDocument> => {
  return book.save()
}

const updateBookServices = async (
  bookId: string,
  update: Partial<BookDocument>
): Promise<BookDocument | null> => {
  const foundBook = await Book.findByIdAndUpdate(bookId, update)

  if (!foundBook) {
    throw new NotFoundError(`Book ${bookId} not found`)
  }

  return foundBook
}

const deleteBookServices = async (
  bookId: string
): Promise<BookDocument | null> => {
  const foundBook = Book.findByIdAndDelete(bookId)

  if (!foundBook) {
    throw new NotFoundError(`Book ${bookId} not found`)
  }

  return foundBook
}

export default {
  getAllBookServices,
  findBookByIdServices,
  createBookServices,
  updateBookServices,
  deleteBookServices,
}
