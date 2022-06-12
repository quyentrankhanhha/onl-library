import { AuthorListType, AuthorsActions } from '../../types'

const initialState: AuthorListType = {
  isLoading: false,
  error: '',
  authorList: [],
}

const authors = (
  state = initialState,
  action: AuthorsActions
): AuthorListType => {
  switch (action.type) {
    case 'GET_AUTHORS_REQUEST':
      return { ...state, isLoading: true }

    case 'GET_AUTHORS_SUCCESS':
      return { ...state, isLoading: false, authorList: action.payload }

    case 'GET_AUTHORS_FAILURE':
      return { ...state, isLoading: false, error: action.payload }

    default:
      return state
  }
}

export default authors
