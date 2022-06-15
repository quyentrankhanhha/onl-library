import moment from 'moment'
import React from 'react'
import { BookType } from '../../types'

interface Props {
  info: BookType
}

const AdminBookRow: React.FC<Props> = ({ info }) => {
  let authorName
  if (info?.author?.firstName && info?.author?.lastName)
    authorName = info?.author.firstName + ' ' + info?.author.lastName
  else if (info?.author?.firstName) authorName = info.author.firstName
  else if (info?.author?.lastName) authorName = info.author.lastName
  else authorName = 'N/A'

  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
      <th scope='row' className='px-6 py-4 text-white'>
        {info.isbn}
      </th>
      <td className='px-6 py-4 text-white'>{info.title}</td>
      <td className='px-6 py-4 text-white'>{info.description}</td>
      <td className='px-6 py-4 text-white'>{info.publisher}</td>
      <td className='px-6 py-4 text-white'>
        {moment(info.publishedDate).format('DD-MM-YYYY')}
      </td>
      <td className='px-6 py-4 text-white'>{authorName}</td>
      <td className='px-6 py-4 text-white'>{info?.imgUrl || 'N/A'}</td>
      <td className='px-6 py-4 text-white'>{info.category}</td>
      <td className='px-6 py-4 text-white'>
        {info.status ? 'Available' : 'Not Available'}
      </td>
      <td className='px-6 py-4 text-white'>{info.loanId}</td>
      <td className='px-6 py-4 text-right'>
        <td className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
          Edit
        </td>
      </td>
      <td className='px-6 py-4 text-right'>
        <td className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
          Delete
        </td>
      </td>
    </tr>
  )
}

export default AdminBookRow
