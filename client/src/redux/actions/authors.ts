import axios from 'axios'
import { Dispatch } from 'redux'
import { authorUrl } from '../../constant/api'
import {
  AuthorsActions,
  AuthorType,
  GET_AUTHORS_FAILURE,
  GET_AUTHORS_REQUEST,
  GET_AUTHORS_SUCCESS,
} from '../../types'
import {} from './../../types'

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
