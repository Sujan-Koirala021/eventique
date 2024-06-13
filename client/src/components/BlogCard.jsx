import React from 'react'

function BlogCard({post}) {
  return (
    <div>
        <div className='text-md text-red-600'>{post.user}</div>

        <div className='text-lg font-bold '>{post.title}</div>
        <div className='text-md '>{post.content}</div>

    </div>
  )
}

export default BlogCard