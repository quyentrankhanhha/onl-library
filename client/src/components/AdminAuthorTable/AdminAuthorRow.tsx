import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchDeleteAuthor } from '../../redux/actions'
import { AuthorType } from '../../types'
import AlertModal from '../AlertModal/AlertModal'

interface Props {
  info: AuthorType
}

const AdminAuthorRow: React.FC<Props> = ({ info }) => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch<any>()
  const handleAlert = () => {
    setShowModal(!showModal)
  }

  const handleDeleteAuthor = () => {
    dispatch(fetchDeleteAuthor(info._id))
    setShowModal(!showModal)
  }
  return (
    <>
      <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
        <th scope='row' className='px-6 py-4 text-white whitespace-nowrap'>
          {info.firstName}
        </th>
        <td className='px-6 py-4 text-white'>{info.lastName}</td>
        <td className='px-6 py-4 text-white'>{info.bio}</td>
        <td className='px-6 py-4 text-right font-medium text-blue-600 dark:text-blue-500 hover:underline'>
          <button>Edit</button>
        </td>

        <td className='px-6 py-4 text-right font-medium text-blue-600 dark:text-blue-500 hover:underline'>
          <AlertModal
            handleDelete={handleDeleteAuthor}
            handleAlert={handleAlert}
            showModal={showModal}
          />
        </td>
      </tr>
    </>
  )
}

export default AdminAuthorRow
