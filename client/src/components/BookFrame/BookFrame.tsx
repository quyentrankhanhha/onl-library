import React from 'react'
import { Link } from 'react-router-dom'
import { BookType } from '../../types'

interface Props {
  book: BookType
  key: string
  authorName?: string
  authorId?: string
}

const BookFrame: React.FC<Props> = ({ book, authorName, authorId }) => {
  return (
    <div className='group'>
      <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 mb-4'>
        <Link to={`/book/${book._id}`}>
          <img
            src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
            alt='Tall slender porcelain bottle with natural clay textured body and cork stopper.'
            className='w-full h-full object-center object-cover group-hover:opacity-75'
          />
        </Link>
      </div>
      <Link to={`/book/${book._id}`}>
        <p className='mt-4 text-lg font-bold text-light-navy'>{book.title}</p>
      </Link>
      <Link to={`/author/${book.author._id || authorId}`}>
        <p className='mt-1'>
          {authorName || `${book?.author?.firstName} ${book?.author?.lastName}`}
        </p>
      </Link>
      <p className={`mt-1 ${book.status ? `text-light-blue` : `text-red-500`}`}>
        {book.status ? 'Available' : 'Not Available'}
      </p>
    </div>
  )
}

export default BookFrame
