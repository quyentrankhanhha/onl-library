import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import BookFrame from '../components/BookFrame/BookFrame'

const HomePage = () => {
  return (
    <>
      <section className='h-full w-full my-10'>
        <div className='flex justify-between'>
          <div className='inline-block align-middle'>
            <img
              className='left-0 top-[160px]'
              src={require('../assets/left-landing-page.png')}
              alt='left landing img'
            />
          </div>
          <div className='inline-block align-middle'>
            <img
              className='right-0 top-0'
              src={require('../assets/right-landing-page.png')}
              alt='right landing img'
            />
          </div>
        </div>

        <div className='absolute top-32 md:top-64 ml-6 pr-2'>
          <h2 className='text-light-navy text-7xl -z-10'>
            Library <b>Online</b>
          </h2>
          <p className='w-full md:w-1/2 text-grey text-l leading-7 mt-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quibusdam quae ducimus nihil dolor perferendis aliquid eveniet eius,
            labore, tempora iusto excepturi dignissimos, doloribus quaerat
            beatae exercitationem dolorum officiis consequatur.
          </p>

          <div className='mt-6 w-full md:w-1/2'>
            <form role='search' className='flex justify-center'>
              <input
                className='bg-light-white text-s py-2 pl-2 leading-10 w-5/6'
                type='text'
                placeholder='Search..'
                name='search'
                aria-label='Search through site content'
              />

              <button type='submit' className='bg-light-blue text-white w-1/6'>
                <SearchIcon className='w-6 inline' />
              </button>
            </form>
          </div>
        </div>
      </section>
      <h2 className='text-light-navy font-black text-4xl leading-10 my-2'>
        Popular Books This Week
      </h2>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          <BookFrame />
          <BookFrame />
          <BookFrame />
          <BookFrame />
          <BookFrame />
          <BookFrame />
        </div>
      </div>
    </>
  )
}

export default HomePage
