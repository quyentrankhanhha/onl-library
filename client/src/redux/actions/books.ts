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
import { DELETE_BOOK } from './../../types'

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
  return async (dispatch: Dispatch) => {
    dispatch(getBooksRequest())
    await axios
      .get(bookUrl)
      .then((response) => {
        dispatch(getBooksSuccess(response.data))
      })
      .catch((error) => dispatch(getBooksFailure(error.message)))
  }
}

function deleteBook(id: string): BooksActions {
  return {
    type: DELETE_BOOK,
    payload: id,
  }
}

export const fetchDeleteBook = (id: string) => {
  return async (dispatch: Dispatch) => {
    await axios
      .delete(`${bookUrl}/${id}`)
      .then((response) => {
        dispatch(deleteBook(id))
        console.log(response)
      })
      .catch((error) => dispatch(getBooksFailure(error)))
  }
}
