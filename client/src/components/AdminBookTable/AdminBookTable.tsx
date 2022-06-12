import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { bookTable } from '../../constant/table'

export const AdminBookTable = () => {
  return (
    <div className='overflow-x-auto shadow-md'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            {bookTable.map((name) => (
              <th scope='col' className='px-6 py-3' key={uuidv4()}>
                {name}
              </th>
            ))}
            <th scope='col' className='px-6 py-3'>
              <span className='sr-only'>Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-white whitespace-nowrap'
            >
              Apple MacBook Pro 17"
            </th>
            <td className='px-6 py-4 text-white'>Sliver</td>
            <td className='px-6 py-4 text-white'>Laptop</td>
            <td className='px-6 py-4 text-white'>$2999</td>
            <td className='px-6 py-4 text-right'>
              {/* <a
                  href='#'
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                >
                  Edit
                </a> */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
