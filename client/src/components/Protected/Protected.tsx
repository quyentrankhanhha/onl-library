import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppState } from '../../types'

interface Props {
  children: JSX.Element
}

const Protected = ({ children }: Props) => {
  const role = useSelector((state: AppState) => state.user.user?.role)

  if (role !== 'ADMIN') {
    return <Redirect to='/' />
  }
  return children
}

export default Protected
