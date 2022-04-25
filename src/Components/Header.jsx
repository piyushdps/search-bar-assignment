import React from 'react'

const Header = () => {
  return (
    <div className='header-wrapper'>
    <div className="header_logo flex items-center p-2 md:mx-44 cursor-pointer">
        <img className='w-28' src="/Images/logo.png" alt="Logo" />
        <h2 className='pl text-xl font-semibold text-blue-700 '>Books Search</h2>
    </div>
    <div className='divider bg-gray-200 w-full'>
    </div>
</div>)
}

export default Header