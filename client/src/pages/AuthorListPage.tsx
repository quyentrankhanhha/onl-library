import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import AuthorFrame from '../components/AuthorFrame/AuthorFrame'
import { fetchAuthors } from '../redux/actions'
import { AppState } from '../types'

const AuthorListPage = () => {
  const dispatch = useDispatch()
  const authors = useSelector((state: AppState) => state.authors)

  useEffect(() => {
    dispatch<any>(async () => {
      dispatch<any>(fetchAuthors())
    })
  }, [dispatch])

  return (
    <>
      <section className='w-full h-[40rem]'>
        <div className='inline-block align-middle'>
          <img
            className='absolute left-0 top-[160px]'
            src={require('../assets/left-landing-page.png')}
            alt='left landing img'
          />
        </div>
        <div className='inline-block align-middle'>
          <img
            className='absolute right-0 top-0'
            src={require('../assets/right-landing-page.png')}
            alt='right landing img'
          />
        </div>
        <div className='absolute top-80 ml-6'>
          <h1 className='text-4xl text-light-navy font-bold mr-4 sm:text-5xl'>
            Meet Our <b>Authors</b>
          </h1>
        </div>
      </section>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {authors.authorList.map((author) => (
            <AuthorFrame key={uuidv4()} author={author} />
          ))}
        </div>
      </div>
    </>
  )
}

export default AuthorListPage
