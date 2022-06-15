import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from '@react-oauth/google'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signOut } from '../redux/actions'
import { AppState } from '../types'

const Login = () => {
  const dispatch = useDispatch<any>()

  const clientId =
    '91708142581-a5r9nob1cdb55j3t24m8encgrkgt11ao.apps.googleusercontent.com'

  const handleSuccess = async (googleResponse: CredentialResponse) => {
    const googleTokenId = googleResponse.credential
    if (googleTokenId) dispatch(signIn(googleTokenId))
  }
  const user = useSelector((state: AppState) => state.user)
  console.log(user)

  const isLoggedIn = window.localStorage.getItem('token') || ''
  const handleLogOut = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    dispatch(signOut())
    localStorage.removeItem('token')
  }
  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogOut}>log out</button>
      ) : (
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin onSuccess={handleSuccess} />
        </GoogleOAuthProvider>
      )}
    </div>
  )
}

export default Login
