import { Types } from 'mongoose'
import { NotFoundError } from '../helpers/apiError'
import Author, { AuthorDocument } from '../models/Author'

const getAllAuthorServices = async (): Promise<AuthorDocument[]> => {
  return Author.find().sort({ firstName: 1 })
}

const findAuthorByIdServices = async (
  authorId: string
): Promise<AuthorDocument> => {
  const foundAuthor = await Author.findById(authorId).populate('books')
  if (!foundAuthor) {
    throw new NotFoundError(`Author ${authorId} not found`)
  }

  return foundAuthor
}

const createAuthorServices = async (
  author: AuthorDocument
): Promise<AuthorDocument> => {
  return author.save()
}

const updateAuthorServices = async (
  authorId: string,
  update: Partial<AuthorDocument>
): Promise<AuthorDocument | null> => {
  const foundAuthor = await Author.findByIdAndUpdate(authorId, update)

  if (!foundAuthor) {
    throw new NotFoundError(`Book ${authorId} not found`)
  }

  return foundAuthor
}

const deleteAuthorServices = async (
  authorId: string
): Promise<AuthorDocument | null> => {
  const foundBook = Author.findByIdAndDelete(authorId)

  if (!foundBook) {
    throw new NotFoundError(`Book ${authorId} not found`)
  }

  return foundBook
}

const addAuthorToBookServices = async (
  authorId: string,
  bookId: string
): Promise<AuthorDocument | null> => {
  const foundAuthor = await Author.findByIdAndUpdate(
    authorId,
    { $push: { books: bookId } },
    { new: true }
  )

  if (!foundAuthor) {
    throw new NotFoundError(`Author ${authorId} not found`)
  }

  return foundAuthor
}

const removeAuthorFromBookServices = async (
  authorId: string | Types.ObjectId,
  bookId: string
): Promise<AuthorDocument | null> => {
  const foundAuthor = await Author.findByIdAndUpdate(
    authorId,
    { $pull: { books: bookId } },
    { new: true }
  )
  if (!foundAuthor) {
    throw new NotFoundError(`Author ${authorId} not found`)
  }

  return foundAuthor
}

export default {
  getAllAuthorServices,
  findAuthorByIdServices,
  createAuthorServices,
  updateAuthorServices,
  deleteAuthorServices,
  addAuthorToBookServices,
  removeAuthorFromBookServices,
}
