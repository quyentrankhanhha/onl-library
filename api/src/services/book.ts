import Book, { BookDocument } from './../models/Book'

const getAllBooks = async (): Promise<BookDocument[]> => {
  return Book.find().sort({ name: 1, publishedDate: -1 })
}

export default {
  getAllBooks,
}
