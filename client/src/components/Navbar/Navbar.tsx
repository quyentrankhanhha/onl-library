import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const handleClick = () => setToggleNav(!toggleNav)
  const isAdmin = true

  const userMenuList = (
    <ul className='hidden md:flex'>
      <li>
        <NavLink
          to='/'
          exact={true}
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
  )

  const userMobileMenuList = (
    <ul
      className={
        !toggleNav ? 'hidden' : 'block absolute bg-zinc-300 w-full px-8'
      }
    >
      <NavLink
        to='/'
        className={(isActive) =>
          isActive ? 'text-black' : 'text-grey hover:text-black'
        }
      >
        <li className='border-b-2 border-zinc-300 w-full'>Home</li>
      </NavLink>
      <NavLink
        to='/author'
        className={(isActive) =>
          isActive ? 'text-black' : 'text-grey hover:text-black'
        }
      >
        <li className='border-b-2 border-zinc-300 w-full'>Author</li>
      </NavLink>

      <NavLink
        to='/book'
        className={(isActive) =>
          isActive ? 'text-black' : 'text-grey hover:text-black'
        }
      >
        <li className='border-b-2 border-zinc-300 w-full'>Book</li>
      </NavLink>
      <div className='flex flex-col my-4'>
        <button className='text-white px-6 py-2 border-light-blue bg-light-blue hover:bg-light-navy rounded-md'>
          Sign In
        </button>
      </div>
    </ul>
  )

  const adminMenuList = (
    <ul className='hidden md:flex'>
      <li>
        <NavLink
          to='/admin'
          exact={true}
          className={(isActive) =>
            isActive ? 'text-black' : 'text-grey hover:text-black'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/admin/user'
          className={(isActive) =>
            isActive ? 'text-black' : 'text-grey hover:text-black'
          }
        >
          User
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/admin/author'
          className={(isActive) =>
            isActive ? 'text-black' : 'text-grey hover:text-black'
          }
        >
          Author
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/admin/book'
          className={(isActive) =>
            isActive ? 'text-black' : 'text-grey hover:text-black'
          }
        >
          Book
        </NavLink>
      </li>
    </ul>
  )

  const adminMobileMenuList = (
    <ul
      className={
        !toggleNav ? 'hidden' : 'block absolute bg-zinc-300 w-full px-8'
      }
    >
      <NavLink
        to='/admin'
        className={(isActive) =>
          isActive ? 'text-black' : 'text-grey hover:text-black'
        }
      >
        <li className='border-b-2 border-zinc-300 w-full'>Home</li>
      </NavLink>
      <NavLink
        to='/admin/user'
        className={(isActive) =>
          isActive ? 'text-black' : 'text-grey hover:text-black'
        }
      >
        <li className='border-b-2 border-zinc-300 w-full'>User</li>
      </NavLink>
      <NavLink
        to='/admin/author'
        className={(isActive) =>
          isActive ? 'text-black' : 'text-grey hover:text-black'
        }
      >
        <li className='border-b-2 border-zinc-300 w-full'>Author</li>
      </NavLink>

      <NavLink
        to='/admin/book'
        className={(isActive) =>
          isActive ? 'text-black' : 'text-grey hover:text-black'
        }
      >
        <li className='border-b-2 border-zinc-300 w-full'>Book</li>
      </NavLink>
      <div className='flex flex-col my-4'>
        <button className='text-white px-6 py-2 border-light-blue bg-light-blue hover:bg-light-navy rounded-md'>
          Sign In
        </button>
      </div>
    </ul>
  )
  return (
    <div className='w-full h-full z-10 drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='block text-3xl font-bold mr-4 sm:text-4xl'>
            Lib<b>On.</b>
          </h1>
          {isAdmin ? adminMenuList : userMenuList}
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='text-white px-6 py-2 border-light-blue bg-light-blue hover:bg-light-navy rounded-md'>
            Sign In
          </button>
        </div>
        <div className='cursor-pointer md:hidden z-10' onClick={handleClick}>
          {!toggleNav ? (
            <MenuIcon className='w-6' />
          ) : (
            <XIcon className='w-6' />
          )}
        </div>
      </div>
      {isAdmin ? adminMobileMenuList : userMobileMenuList}
    </div>
  )
}

export default Navbar
