import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { bookUrl } from '../constant/api'
import { BookType } from '../types'

const BookPage = () => {
  const { bookId } = useParams<{ bookId: string }>()
  const [bookInfo, setBookInfo] = useState<BookType>()
  const url = bookUrl + '/' + bookId

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setBookInfo(response.data)
      })
      .catch((error) => console.log(error))
  }, [])
  const authorName =
    bookInfo?.author?.firstName + ' ' + bookInfo?.author?.lastName

  return (
    <section className='w-full h-full py-16'>
      <div className='top-64 ml-6'>
        <img
          src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
          alt='Tall slender porcelain bottle with natural clay textured body and cork stopper.'
          className='w-1/3 h-full object-center object-cover '
        />
        <h1 className='text-3xl text-light-navy font-bold mr-4 sm:text-4xl py-4'>
          <b>{bookInfo?.title}</b>
        </h1>
        <div>
          <p>
            <b>ISBN:</b> {bookInfo?.isbn}
          </p>

          <p>
            <b>Author:</b>
            <Link to={`/author/${bookInfo?.author._id}`}> {authorName}</Link>
          </p>
          <p>
            <b>Publisher:</b> {bookInfo?.publisher}
          </p>
          <p>
            <b>Published Date: </b>
            {moment(bookInfo?.publishedDate).format('DD-MM-YYYY')}
          </p>
          <p>
            <b>Description: </b>
            {bookInfo?.description}
          </p>
          <p>
            <b>Status: </b> {bookInfo?.status ? 'Available' : 'Not Available'}
          </p>
        </div>
      </div>
    </section>
  )
}

export default BookPage
