import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className='h-full w-full'>
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
        <h2>
          Library <b>Online</b>
        </h2>
      </section>
    </>
  )
}

export default HomePage
