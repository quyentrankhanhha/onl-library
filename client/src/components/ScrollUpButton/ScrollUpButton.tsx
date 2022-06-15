import { ChevronUpIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'

const ScrollUpButton = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className='fixed left-[95%] bottom-10 h-6 text-base z-50 cursor-pointer'>
      {showTopBtn && (
        <button
          style={{
            display: showTopBtn ? 'inline' : 'none',
          }}
          className='h-8 w-8 rounded-full bg-grey hover:bg-light-blue'
          onClick={goToTop}
        >
          <ChevronUpIcon className='w-8' />
        </button>
      )}
    </div>
  )
}

export default ScrollUpButton
