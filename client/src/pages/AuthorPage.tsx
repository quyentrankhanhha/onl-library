import React from 'react'
import AuthorFrame from '../components/AuthorFrame/AuthorFrame'

const AuthorPage = () => {
  return (
    <section className='w-full h-full py-16'>
      <div className='top-64 ml-6'>
        <img
          src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
          alt='Tall slender porcelain bottle with natural clay textured body and cork stopper.'
          className='w-1/3 h-full object-center object-cover '
        />
        <h1 className='text-3xl text-light-navy font-bold mr-4 sm:text-4xl py-4'>
          <b>Evan William</b>
        </h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            dolorum ratione in eum dolore iure officia nam molestiae deserunt
            rem. Reiciendis adipisci praesentium rerum tempore, veniam minus
            itaque molestias neque?
          </p>
        </div>
      </div>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          <AuthorFrame />
          <AuthorFrame />
          <AuthorFrame />
        </div>
      </div>
    </section>
  )
}

export default AuthorPage
