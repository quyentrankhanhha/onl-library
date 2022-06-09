import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const handleClick = () => setToggleNav(!toggleNav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>LibOn.</h1>
          <ul className='hidden md:flex'>
            <li>
              <NavLink
                to='/'
                className={(isActive) =>
                  isActive ? 'text-black' : 'text-grey hover:text-black'
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/author'
                className={(isActive) =>
                  isActive ? 'text-black' : 'text-grey hover:text-black'
                }
              >
                Author
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/book'
                className={(isActive) =>
                  isActive ? 'text-black' : 'text-grey hover:text-black'
                }
              >
                Book
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='text-white px-6 py-2 border-light-blue bg-light-blue hover:bg-light-navy rounded-md'>
            Sign In
          </button>
        </div>
        <div className='md:hidden cursor-pointer' onClick={handleClick}>
          {!toggleNav ? (
            <MenuIcon className='w-5' />
          ) : (
            <XIcon className='w-5' />
          )}
        </div>
      </div>
      <ul
        className={!toggleNav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}
      >
        <li className='border-b-2 w-full'>Home</li>
        <li className='border-b-2 w-full'>
          <NavLink
            to='/author'
            className={(isActive) =>
              isActive ? 'text-black' : 'text-grey hover:text-black'
            }
          >
            Author
          </NavLink>
        </li>
        <li className='border-b-2 w-full'>
          <NavLink
            to='/book'
            className={(isActive) =>
              isActive ? 'text-black' : 'text-grey hover:text-black'
            }
          >
            Book
          </NavLink>
        </li>
        <div className='flex flex-col my-4'>
          <button className='text-white px-6 py-2 border-light-blue bg-light-blue hover:bg-light-navy rounded-md'>
            Sign In
          </button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar
