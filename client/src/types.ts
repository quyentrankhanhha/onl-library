export const GET_BOOKS_REQUEST = 'GET_BOOKS_REQUEST'
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS'
export const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE'
export const GET_AUTHORS_REQUEST = 'GET_AUTHORS_REQUEST'
export const GET_AUTHORS_SUCCESS = 'GET_AUTHORS_SUCCESS'
export const GET_AUTHORS_FAILURE = 'GET_AUTHORS_FAILURE'

export type GetBooksRequestAction = {
  type: typeof GET_BOOKS_REQUEST
}

export type GetBooksSuccessAction = {
  type: typeof GET_BOOKS_SUCCESS
  payload: BookType[]
}

export type GetBooksFailureAction = {
  type: typeof GET_BOOKS_FAILURE
  payload: string
}

export type GetAuthorsRequestAction = {
  type: typeof GET_AUTHORS_REQUEST
}

export type GetAuthorsSuccessAction = {
  type: typeof GET_AUTHORS_SUCCESS
  payload: BookType[]
}

export type GetAthorsFailureAction = {
  type: typeof GET_AUTHORS_FAILURE
  payload: string
}

export type AuthorsActions =
  | GetAuthorsRequestAction
  | GetAuthorsSuccessAction
  | GetAthorsFailureAction

export type BooksActions =
  | GetBooksRequestAction
  | GetBooksSuccessAction
  | GetBooksFailureAction

export type BookType = {
  isbn: string
  title: string
  description: string
  publisher: string
  publishedDate: Date
  author: object
  imgUrl?: string
  category: string[]
  status: string
  loanId: string
}

export type BookListType = {
  isLoading: boolean
  error: string
  bookList: BookType[]
}

export type AuthorType = {
  firstName: string
  lastName: string
  bio: string
  books: string[]
}

export type AuthorListType = {
  isLoading: boolean
  error: string
  bookList: AuthorType[]
}

export type AppState = {
  books: BookListType
}

export type StatType = {
  title: String
  number: String
}

export type AdminTableType = {
  col1: String
}
