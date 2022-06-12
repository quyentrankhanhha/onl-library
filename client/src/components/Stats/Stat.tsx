import React from 'react'
import { StatType } from '../../types'

const Stat: React.FC<StatType> = ({ title, number }) => {
  return (
    <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8'>
      <div className='bg-white p-5'>
        <div className='sm:flex sm:items-start'>
          <div className='text-center sm:mt-0 sm:ml-2 sm:text-left'>
            <h3 className='text-s leading-6 font-medium text-gray-500'>
              {title}
            </h3>
            <p className='text-3xl font-bold text-black'>{number}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stat
