import axios from 'axios'
import { Dispatch } from 'redux'
import { authorUrl } from '../../constant/api'
import {
  AuthorsActions,
  AuthorType,
  DELETE_AUTHOR,
  GET_AUTHORS_FAILURE,
  GET_AUTHORS_REQUEST,
  GET_AUTHORS_SUCCESS,
} from '../../types'

function getAuthorsRequest(): AuthorsActions {
  return {
    type: GET_AUTHORS_REQUEST,
  }
}

function getAuthorsSuccess(authorList: AuthorType[]): AuthorsActions {
  return {
    type: GET_AUTHORS_SUCCESS,
    payload: authorList,
  }
}

function getAuthorsFailure(error: string): AuthorsActions {
  return {
    type: GET_AUTHORS_FAILURE,
    payload: error,
  }
}

export const fetchAuthors = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getAuthorsRequest())
    await axios
      .get(authorUrl)
      .then((response) => dispatch(getAuthorsSuccess(response.data)))
      .catch((error) => dispatch(getAuthorsFailure(error.message)))
  }
}

function deleteAuthor(id: string): AuthorsActions {
  return {
    type: DELETE_AUTHOR,
    payload: id,
  }
}

export const fetchDeleteAuthor = (id: string) => {
  return async (dispatch: Dispatch) => {
    await axios
      .delete(`${authorUrl}/${id}`)
      .then((response) => {
        dispatch(deleteAuthor(id))
      })
      .catch((error) => dispatch(getAuthorsFailure(error)))
  }
}
