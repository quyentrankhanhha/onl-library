export const GET_BOOKS_REQUEST = 'GET_BOOKS_REQUEST'
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS'
export const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE'

export const GET_AUTHORS_REQUEST = 'GET_AUTHORS_REQUEST'
export const GET_AUTHORS_SUCCESS = 'GET_AUTHORS_SUCCESS'
export const GET_AUTHORS_FAILURE = 'GET_AUTHORS_FAILURE'

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'
export const SIGN_OUT = 'SIGN_OUT'

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
  payload: AuthorType[]
}

export type GetAthorsFailureAction = {
  type: typeof GET_AUTHORS_FAILURE
  payload: string
}

export type SignInRequestAction = {
  type: typeof SIGN_IN_REQUEST
  payload: string
}

export type SignInSuccessAction = {
  type: typeof SIGN_IN_SUCCESS
  payload: {
    user: UserType
    token: string
  }
}

export type SignInFailureAction = {
  type: typeof SIGN_IN_FAILURE
  payload: any
}

export type SignOutAction = {
  type: typeof SIGN_OUT
}

export type AuthorsActions =
  | GetAuthorsRequestAction
  | GetAuthorsSuccessAction
  | GetAthorsFailureAction

export type BooksActions =
  | GetBooksRequestAction
  | GetBooksSuccessAction
  | GetBooksFailureAction

export type UserActions =
  | SignInRequestAction
  | SignInSuccessAction
  | SignInFailureAction
  | SignOutAction

export type BookType = {
  isbn: string
  title: string
  description: string
  publisher: string
  publishedDate: string
  author: {
    _id: string
    firstName: string
    lastName: string
  }
  imgUrl?: string
  category: string[]
  status: boolean
  loanId?: string
  __v: number
  _id: string
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
  books: BookType[]
  _id: string
}

export type AuthorListType = {
  isLoading: boolean
  error: string
  authorList: AuthorType[]
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export type UserType = {
  _id: string
  firstName: string
  lastName: string
  email: string
  role: Role
  createdDate: string
}

export type UserListType = {
  isLoading: boolean
  error: string
  user: UserType | null
}

export type AppState = {
  books: BookListType
  authors: AuthorListType
  user: UserListType
}

export type StatType = {
  title: String
  number: String
}

export type AdminTableType = {
  col1: String
}
