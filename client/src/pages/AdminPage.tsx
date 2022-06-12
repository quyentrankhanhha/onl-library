import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Stats from '../components/Stats/Stats'

const AdminPage = () => {
  return (
    <>
      <Navbar />
      <div className='mx-8 my-8'>
        <h2 className='font-bold text-4xl'>Hello</h2>
        <p>
          Here is what's happening in <b>LibOn</b> today
        </p>
      </div>
      <Stats />
    </>
  )
}

export default AdminPage
