import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import BookFrame from '../components/BookFrame/BookFrame'
import { authorUrl } from '../constant/api'
import { AuthorType } from '../types'

const AuthorPage = () => {
  const { authorId } = useParams<{ authorId: string }>()
  const [authorInfo, setAuthorInfo] = useState<AuthorType>()
  const url = authorUrl + '/' + authorId

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setAuthorInfo(response.data)
      })
      .catch((error) => console.log(error))
  }, [])
  const authorName = authorInfo?.firstName + ' ' + authorInfo?.lastName

  return (
    <section className='w-full h-full py-16'>
      <div className='top-64 ml-6'>
        <img
          src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
          alt='Tall slender porcelain bottle with natural clay textured body and cork stopper.'
          className='w-1/3 h-full object-center object-cover '
        />
        <h1 className='text-3xl text-light-navy font-bold mr-4 sm:text-4xl py-4'>
          <b>{authorName}</b>
        </h1>
        <div>
          <p>{authorInfo?.bio}</p>
        </div>
      </div>
      <h2 className='text-xl font-bold mx-6 mt-6'>Books By {authorName}</h2>
      <div className='max-w-2xl py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {authorInfo?.books.map((book) => (
            <BookFrame
              key={uuidv4()}
              book={book}
              authorName={authorName}
              authorId={authorId}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AuthorPage
