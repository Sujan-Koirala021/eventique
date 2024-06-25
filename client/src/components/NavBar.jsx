import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login'); // Redirect to login page after logout
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-slate-200'>
      <div className='flex flex-row items-center justify-between p-4'>
        <div className='text-lg font-bold'>
          Eventique
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-gray-700 focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>
        <div className={`hidden md:flex md:flex-row md:items-center ${isOpen ? 'flex flex-col w-full' : ''}`}>
          <Link to="/dashboard" className='block p-4 text-gray-700 hover:bg-gray-300'>Home</Link>
          <Link to="/about" className='block p-4 text-gray-700 hover:bg-gray-300'>About</Link>
          {localStorage.getItem('token') ? (
            <div onClick={handleLogout} className='block p-4 text-gray-700 hover:bg-gray-300 cursor-pointer'>
              Logout
            </div>
          ) : (
            <>
              <Link to="/login" className='block p-4 text-gray-700 hover:bg-gray-300'>Login</Link>
              <Link to="/sign-up" className='block p-4 text-gray-700 hover:bg-gray-300'>Sign Up</Link>
            </>
          )}
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden'>
          <Link to="/" className='block p-4 text-gray-700 hover:bg-gray-300'>Home</Link>
          <Link to="/about" className='block p-4 text-gray-700 hover:bg-gray-300'>About</Link>
          {localStorage.getItem('token') ? (
            <div onClick={handleLogout} className='block p-4 text-gray-700 hover:bg-gray-300 cursor-pointer'>
              Logout
            </div>
          ) : (
            <>
              <Link to="/login" className='block p-4 text-gray-700 hover:bg-gray-300'>Login</Link>
              <Link to="/sign-up" className='block p-4 text-gray-700 hover:bg-gray-300'>Sign Up</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default NavBar;
