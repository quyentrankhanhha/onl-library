import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { authorTable } from '../../constant/table'
import { AuthorType } from '../../types'
import AdminAuthorRow from './AdminAuthorRow'

interface Props {
  authorInfo: AuthorType[]
}
const AdminAuthorTable: React.FC<Props> = ({ authorInfo }) => {
  return (
    <div className='overflow-x-auto shadow-md'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            {authorTable.map((name) => (
              <th scope='col' className='px-6 py-3' key={uuidv4()}>
                {name}
              </th>
            ))}
            <th scope='col' className='px-6 py-3'>
              <span className='sr-only'>Edit</span>
            </th>
            <th scope='col' className='px-6 py-3'>
              <span className='sr-only'>Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {authorInfo.map((info) => (
            <AdminAuthorRow key={uuidv4()} info={info} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminAuthorTable
