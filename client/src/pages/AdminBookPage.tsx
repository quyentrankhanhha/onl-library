import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdminBookTable } from '../components/AdminBookTable/AdminBookTable'
import Navbar from '../components/Navbar/Navbar'
import { fetchBooks } from '../redux/actions'
import { AppState } from '../types'

const AdminBookPage = () => {
  const dispatch = useDispatch()
  const books = useSelector((state: AppState) => state.books)

  useEffect(() => {
    dispatch<any>(async () => {
      dispatch<any>(fetchBooks())
    })
  }, [dispatch])

  return (
    <>
      <Navbar />
      <div className='mx-8 my-8'>
        <h2 className='font-bold text-4xl'>Book List</h2>
      </div>
      <AdminBookTable bookInfo={books.bookList} />
    </>
  )
}

export default AdminBookPage
