import React, { useState } from 'react'

function CreatePost() {
    const [title, setTitle] = useState('');
    const [user, setUser] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      const post = { user, title, content };

      try {
          const response = await fetch('http://localhost:5000/api/posts', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(post)
          });

          if (response.ok) {
              const data = await response.json();
              console.log('New post created:', data);
              alert("New post created")
              // Optionally, reset form fields
              setTitle('');
              setUser('');
              setContent('');
          } else {
              console.error('Error creating post:', response.statusText);
          }
      } catch (error) {
          console.error('Error creating post:', error);
      }
  }


  return (
    <div>
        <h1>Create a New Post</h1>

        <form type="submit" onSubmit={handleSubmit}>
            <input type="text" value={user} placeholder='Author' onChange={(e) => setUser(e.target.value)} required />
            <input type="text" value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)}required />
            <textarea value={content} placeholder='Content' onChange={(e) => setContent(e.target.value)}required />
        <button type='submit'>Create Post</button>
        </form>

    </div>
  )
}

export default CreatePost