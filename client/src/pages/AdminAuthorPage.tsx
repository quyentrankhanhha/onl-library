import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminAuthorTable from '../components/AdminAuthorTable/AdminAuthorTable'
import { fetchAuthors } from '../redux/actions'
import { AppState } from '../types'

const AdminAuthorPage = () => {
  const dispatch = useDispatch()
  const authors = useSelector((state: AppState) => state.authors)
  useEffect(() => {
    dispatch<any>(async () => {
      dispatch<any>(fetchAuthors())
    })
  }, [dispatch])

  return (
    <>
      <div className='mx-8 my-8'>
        <h2 className='font-bold text-4xl'>Author List</h2>
      </div>
      <AdminAuthorTable authorInfo={authors.authorList} />
    </>
  )
}

export default AdminAuthorPage
