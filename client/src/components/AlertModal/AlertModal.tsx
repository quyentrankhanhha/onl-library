import { XIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchDeleteAuthor } from '../../redux/actions'

interface Props {
  id: string
}

const AlertModal: React.FC<Props> = ({ id }) => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch<any>()

  const handleAlert = () => {
    setShowModal(!showModal)
  }

  const handleDeleteAuthor = () => {
    dispatch(fetchDeleteAuthor(id))
    setShowModal(!showModal)
  }

  return (
    <>
      <button
        className='text-white px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1'
        type='button'
        onClick={handleAlert}
      >
        Delete
      </button>
      {showModal ? (
        <>
          <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black'>
            <div
              className='relative w-auto my-2 mx-auto max-w-5xl'
              style={{ minWidth: '32rem' }}
            >
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                <div className='flex items-start justify-between p-5  border-gray-300 rounded-t '>
                  <h3 className='text-xl font=semibold '>Delete</h3>
                  <button
                    className='bg-transparent border-0 float-right'
                    onClick={handleAlert}
                  >
                    <button>
                      <XIcon className='w-6 inline' />
                    </button>
                  </button>
                </div>
                <div className='relative p-6 flex-auto'>
                  <p className='text-left'>Are you sure you want to delete?</p>
                </div>
                <div className='flex items-center justify-between p-6 rounded-b'>
                  <button
                    className='background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                    onClick={handleAlert}
                  >
                    Close
                  </button>
                  <button
                    className='text-white bg-light-blue hover:bg-navy font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                    onClick={handleDeleteAuthor}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default AlertModal
