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

    case 'DELETE_BOOK':
      const index = state.bookList.findIndex(
        (found) => found._id === action.payload
      )
      if (index >= 0) {
        state.bookList.splice(index, 1)
        return {
          ...state,
          bookList: [...state.bookList],
        }
      }
      return state

    default:
      return state
  }
}

export default books
