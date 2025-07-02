import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-blue-600 flex items-center justify-between px-6 py-4'>
        <Link to='/'><h1 className='text-2xl font-bold text-white'>Employee Management System</h1></Link>
        <ul className='flex space-x-6 text-lg text-white px-40'>
            <Link to='/employees' className='hover:text-gray-200 transition-colors duration-200'><li>Employees</li></Link>
            <Link to='/employee' className='hover:text-gray-200 transition-colors duration-200'><li>Post Employees</li></Link>
        </ul>
    </div>
  )
}

export default Header