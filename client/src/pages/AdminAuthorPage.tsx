import React from 'react'
import AdminAuthorTable from '../components/AdminAuthorTable/AdminAuthorTable'
import Navbar from '../components/Navbar/Navbar'

const AdminAuthorPage = () => {
  return (
    <>
      <Navbar />
      <div className='mx-8 my-8'>
        <h2 className='font-bold text-4xl'>Author List</h2>
      </div>
      <AdminAuthorTable />
    </>
  )
}

export default AdminAuthorPage
