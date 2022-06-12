import React from 'react'
import { AdminBookTable } from '../components/AdminBookTable/AdminBookTable'
import Navbar from '../components/Navbar/Navbar'

const AdminBookPage = () => {
  return (
    <>
      <Navbar />
      <div className='mx-8 my-8'>
        <h2 className='font-bold text-4xl'>Book List</h2>
      </div>
      <AdminBookTable />
    </>
  )
}

export default AdminBookPage
