import React from 'react'
import { Link } from 'react-router-dom'
import { AuthorType } from '../../types'

interface Props {
  author: AuthorType
  key: string
}

const AuthorFrame: React.FC<Props> = ({ author }) => {
  return (
    <div className='group'>
      <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
        <img
          src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
          alt='Tall slender porcelain bottle with natural clay textured body and cork stopper.'
          className='w-full h-full object-center object-cover '
        />
        <Link to={`/author/${author._id}`}>
          <div className='mt-[-1.5rem] bg-white text-center'>
            <button className='text-center bg-light-blue hover:bg-light-navy text-white py-3 px-6'>
              View details
            </button>
          </div>
        </Link>
      </div>
      <p className='mt-4 text-lg font-bold text-light-navy'>{`${author.firstName} ${author.lastName}`}</p>
    </div>
  )
}

export default AuthorFrame
