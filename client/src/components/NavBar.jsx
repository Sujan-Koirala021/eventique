import React from 'react'

function NavBar() {
  return (
    <div className='bg-slate-200 '>
        <div className='flex flex-row items-center justify-between p-2'>
            
           <div className='m-6 text-lg'>
             My Blogs
            </div>
            <div className='flex flex-row items-center justify-around'>
            
        
        <div className='p-6'>Home</div>
        <div className='p-6'>About</div>
        <div className='p-6'>Login</div>
        <div className='p-6'>SIgnUp</div>
            </div>

        </div>


    </div>
  )
}

export default NavBar