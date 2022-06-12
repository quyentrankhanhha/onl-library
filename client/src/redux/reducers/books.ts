import { BookListType, BooksActions } from '../../types'

const initialState: BookListType = {
  isLoading: false,
  error: '',
  bookList: [],
}

const books = (state = initialState, action: BooksActions): BookListType => {
  switch (action.type) {
    case 'GET_BOOKS_REQUEST':
      return { ...state, isLoading: true }

    case 'GET_BOOKS_SUCCESS':
      return { ...state, isLoading: false, bookList: action.payload }

    case 'GET_BOOKS_FAILURE':
      return { ...state, isLoading: false, error: action.payload }

    default:
      return state
  }
}

export default books
