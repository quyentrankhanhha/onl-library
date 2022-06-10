import React from 'react'
import { Link } from 'react-router-dom'

const BookFrame = () => {
  return (
    <div className='group'>
      <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 mb-4'>
        <Link to='/book/:bookId'>
          <img
            src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
            alt='Tall slender porcelain bottle with natural clay textured body and cork stopper.'
            className='w-full h-full object-center object-cover group-hover:opacity-75'
          />
        </Link>
      </div>
      <p className='mt-4 text-lg font-bold text-light-navy'>Hungry For Love</p>
      <p className='mt-1'>Willam Carry</p>
      <p className='text-light-blue mt-1'>Available</p>
    </div>
  )
}

export default BookFrame
