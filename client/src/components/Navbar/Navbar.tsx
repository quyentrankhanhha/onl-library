import { MenuIcon, XIcon } from '@heroicons/react/outline'
import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from '@react-oauth/google'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { signIn, signOut } from '../../redux/actions'
import { AppState } from '../../types'
const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const dispatch = useDispatch<any>()
  const clientId =
    '91708142581-a5r9nob1cdb55j3t24m8encgrkgt11ao.apps.googleusercontent.com'
  const handleSuccess = async (googleResponse: CredentialResponse) => {
    const googleTokenId = googleResponse.credential
    if (googleTokenId) dispatch(signIn(googleTokenId))
  }
  const user = useSelector((state: AppState) => state.user)
  const isLoggedIn = window.localStorage.getItem('token') || ''

  const handleLogOut = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    dispatch(signOut())
  }
  const handleClick = () => setToggleNav(!toggleNav)

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
        exact={true}
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
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin onSuccess={handleSuccess} />
        </GoogleOAuthProvider>
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
        exact={true}
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
        {/* <button className='text-white px-6 py-2 border-light-blue bg-light-blue hover:bg-light-navy rounded-md'>
          Sign In
        </button> */}
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin onSuccess={handleSuccess} />
        </GoogleOAuthProvider>
      </div>
    </ul>
  )
  return (
    <div className='w-full h-full z-10 drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='block text-3xl text-light-navy font-bold mr-4 sm:text-4xl'>
            Lib<b>On.</b>
          </h1>
          {user?.user?.role === 'ADMIN' ? adminMenuList : userMenuList}
        </div>
        <div className='hidden md:flex pr-4'>
          {isLoggedIn === '' ? (
            <GoogleOAuthProvider clientId={clientId}>
              <GoogleLogin onSuccess={handleSuccess} />
            </GoogleOAuthProvider>
          ) : (
            <div>
              <div className='dropdown'>
                <label
                  tabIndex={0}
                  className='btn text-white px-6 py-2 border-light-blue bg-light-blue hover:bg-light-navy rounded-md'
                >
                  {user.user?.firstName} {user.user?.lastName}
                </label>
                <ul
                  tabIndex={0}
                  className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
                >
                  <Link to='/'>
                    <li className='text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2'>
                      Dashboard
                    </li>
                  </Link>

                  <button
                    className='hover:bg-gray-100 mx-0 my-0'
                    onClick={handleLogOut}
                  >
                    <li className='text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 text-left'>
                      Sign out
                    </li>
                  </button>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className='cursor-pointer md:hidden z-10' onClick={handleClick}>
          {!toggleNav ? (
            <MenuIcon className='w-6' />
          ) : (
            <XIcon className='w-6' />
          )}
        </div>
      </div>
      {user?.user?.role === 'ADMIN' ? adminMobileMenuList : userMobileMenuList}
    </div>
  )
}

export default Navbar
