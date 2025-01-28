import React from 'react'

import { Link } from 'react-router-dom'; // Import Link
const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
        <div className='logoDiv'>
            <h1 className='logo text-[25px] text-blue-700 '> <strong>Job</strong>Search</h1>
        </div>

        <div className='menu flex gap-8'>
            <li className='menuList text-[#6f6f6f] hover:text-blue-700'>Jobs</li>
            <li className='menuList text-[#6f6f6f] hover:text-blue-700'>Companies</li>
            <li><Link to="/about">About</Link></li> {/* Use Link to navigate to About */}
            <li className='menuList text-[#6f6f6f] hover:text-blue-700'>Contact</li>
            <li className='menuList text-[#6f6f6f] hover:text-blue-700'>Blog</li>
            <li className='menuList text-[#6f6f6f] hover:text-blue-700'>Login</li>
            <li className='menuList text-[#6f6f6f] hover:text-blue-700'>Register</li>

        </div>
    </div>
  )
}

export default NavBar