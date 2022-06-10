import React from 'react'
import { Link } from 'react-router-dom'

const BookPage = () => {
  return (
    <section className='w-full h-full py-16'>
      <div className='top-64 ml-6'>
        <img
          src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
          alt='Tall slender porcelain bottle with natural clay textured body and cork stopper.'
          className='w-1/3 h-full object-center object-cover '
        />
        <h1 className='text-3xl text-light-navy font-bold mr-4 sm:text-4xl py-4'>
          <b>Hungry For Love</b>
        </h1>
        <div>
          <p>
            <b>ISBN:</b> asd123123fsd
          </p>

          <p>
            <b>Author:</b> <Link to='/author/:authorId'>Evan William</Link>
          </p>
          <p>
            <b>Publisher:</b> asd123123fsd
          </p>
          <p>
            <b>Published Date:</b> asd123123fsd
          </p>
          <p>
            <b>Description: </b>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            dolorum ratione in eum dolore iure officia nam molestiae deserunt
            rem. Reiciendis adipisci praesentium rerum tempore, veniam minus
            itaque molestias neque?
          </p>
        </div>
      </div>
    </section>
  )
}

export default BookPage
