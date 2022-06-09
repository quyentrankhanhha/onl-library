import axios from 'axios'
import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  const [token, setToken] = useState('')
  console.log(token)
  const clientId =
    '91708142581-a5r9nob1cdb55j3t24m8encgrkgt11ao.apps.googleusercontent.com'

  const handleSucess = async (googleResponse: any) => {
    const tokenId = googleResponse.credential

    const res = await axios.post(
      'http://localhost:5000/login',
      {},
      {
        headers: {
          Authorization: `Bearer ${tokenId}`,
        },
      }
    )
    console.log(res.data)
    const token = res.data.token
    setToken(token)
  }

  const handleGetUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log('response:', response.data)
    } catch (error: any) {
      console.log('error:', error.response.data)
    }
  }

  return (
    <Switch>
      <Route path={'/'}>
        <HomePage />
      </Route>
    </Switch>
  )
}

export default App
