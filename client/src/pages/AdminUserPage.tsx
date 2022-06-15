import React from 'react'
import AdminUserTable from '../components/AdminUserTable/AdminUserTable'

const AdminUserPage = () => {
  return (
    <>
      <div className='mx-8 my-8'>
        <h2 className='font-bold text-4xl'>User List</h2>
      </div>
      <AdminUserTable />
    </>
  )
}

export default AdminUserPage
