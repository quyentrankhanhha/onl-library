import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  UserActions,
  UserListType,
} from './../../types'

const initialState: UserListType = {
  isLoading: false,
  error: '',
  user: null,
}

const user = (state = initialState, action: UserActions): UserListType => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
      }

    case SIGN_IN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('user', JSON.stringify(action.payload.user))

      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
      }

    case SIGN_IN_FAILURE:
      localStorage.removeItem('token')
      localStorage.removeItem('user')

      return {
        ...state,
        isLoading: false,
        user: null,
      }

    case SIGN_OUT:
      localStorage.removeItem('token')
      localStorage.removeItem('user')

      return {
        ...state,
        isLoading: false,
        user: null,
      }

    default:
      return state
  }
}
export default user
