// NavBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className='bg-slate-200 '>
      <div className='flex flex-row items-center justify-between p-2'>
        <div className='m-6 text-lg'>
          Eventique
        </div>
        <div className='flex flex-row items-center justify-around'>
          <Link to="/"><div className='p-6'> Home 
          </div></Link>
          <Link to="/about"><div className='p-6'> About
          </div></Link>
          {localStorage.getItem('token') ? (
            <>
              <div className='p-6' onClick={handleLogout} style={{ cursor: 'pointer' }}>
                Logout
              </div>
            </>
          ) : (
            <>
              <div className='p-6'>
                <Link to="/login">Login</Link>
              </div>
              <div className='p-6'>
                <Link to="/sign-up">SignUp</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
