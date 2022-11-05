import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchDeleteAuthor } from '../../redux/actions'
import { AuthorType } from '../../types'
import AlertModal from '../AlertModal/AlertModal'
import FormModal from '../FormModal/FormModal'

interface Props {
  info: AuthorType
}

const AdminAuthorRow: React.FC<Props> = ({ info }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  const dispatch = useDispatch<any>()
  const handleAlert = () => {
    setShowDeleteModal(!showDeleteModal)
  }

  const handleDeleteAuthor = () => {
    dispatch(fetchDeleteAuthor(info._id))
    setShowDeleteModal(!showDeleteModal)
  }

  const handleEditAuthor = () => {
    setShowEditModal(!showEditModal)
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
          <FormModal handleAlert={handleEditAuthor} showModal={showEditModal}>
            Edit
          </FormModal>
        </td>

        <td className='px-6 py-4 text-right font-medium text-blue-600 dark:text-blue-500 hover:underline'>
          <AlertModal
            handleDelete={handleDeleteAuthor}
            handleAlert={handleAlert}
            showModal={showDeleteModal}
          />
        </td>
      </tr>
    </>
  )
}

export default AdminAuthorRow
