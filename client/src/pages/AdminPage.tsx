import React from 'react'
import Stats from '../components/Stats/Stats'

const AdminPage = () => {
  return (
    <>
      <div className='mx-8 my-10'>
        <h2 className='font-bold text-4xl'>Hello</h2>
        <p>
          Here is what's happening in <b>LibOn</b> today
        </p>
        <Stats />
      </div>
    </>
  )
}

export default AdminPage
