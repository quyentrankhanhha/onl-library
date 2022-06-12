import React from 'react'
import Stat from './Stat'

const Stats = () => {
  return (
    <div className='max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8'>
      <div className='sm:flex sm:space-x-4'>
        <Stat title='Total Books' number='52' />
        <Stat title='Total Authors' number='52' />
        <Stat title='Total Loans' number='52' />
        <Stat title='Total Users' number='52' />
      </div>
    </div>
  )
}

export default Stats
