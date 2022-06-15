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

    case 'DELETE_AUTHOR':
      const index = state.authorList.findIndex(
        (found) => found._id === action.payload
      )
      if (index >= 0) {
        state.authorList.splice(index, 1)
        return {
          ...state,
          authorList: [...state.authorList],
        }
      }
      return state

    default:
      return state
  }
}

export default authors
