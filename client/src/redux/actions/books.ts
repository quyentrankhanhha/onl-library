import axios from 'axios'
import { Dispatch } from 'redux'
import { bookUrl } from '../../constant/api'
import {
  BooksActions,
  BookType,
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
} from '../../types'

function getBooksRequest(): BooksActions {
  return {
    type: GET_BOOKS_REQUEST,
  }
}

function getBooksSuccess(bookList: BookType[]): BooksActions {
  return {
    type: GET_BOOKS_SUCCESS,
    payload: bookList,
  }
}

function getBooksFailure(error: string): BooksActions {
  return {
    type: GET_BOOKS_FAILURE,
    payload: error,
  }
}

export const fetchBooks = () => {
  return (dispatch: Dispatch) => {
    dispatch(getBooksRequest())
    axios
      .get(bookUrl)
      .then((response) => {
        dispatch(getBooksSuccess(response.data))
      })
      .catch((error) => dispatch(getBooksFailure(error.message)))
  }
}
