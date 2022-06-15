import axios from 'axios'
import { Dispatch } from 'redux'
import { loginUrl } from './../../constant/api'
import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  UserActions,
  UserType,
} from './../../types'

function signInRequest(googleTokenId: string): UserActions {
  return {
    type: SIGN_IN_REQUEST,
    payload: googleTokenId,
  }
}

function signInSuccess(user: UserType, token: string): UserActions {
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      user,
      token,
    },
  }
}

function signInFailure(error: string): UserActions {
  return {
    type: SIGN_IN_FAILURE,
    payload: error,
  }
}

export const signIn = (googleTokenId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(signInRequest(googleTokenId))
    try {
      const res = await axios.post(
        loginUrl,
        {},
        {
          headers: {
            Authorization: `Bearer ${googleTokenId}`,
          },
        }
      )

      const token = res.data.token
      const user = res.data.user

      return dispatch(signInSuccess(user, token))
    } catch (error: any) {
      dispatch(signInFailure(error))
    }
  }
}

export function signOut(): UserActions {
  return {
    type: SIGN_OUT,
  }
}
