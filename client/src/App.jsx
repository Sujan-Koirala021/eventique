import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CreatePost from './pages/CreatePost'
import ShowResults from './pages/ShowResults'



function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">

        <NavBar />
        <main className='flex-grow'>

          {/* <CreatePost /> */}
          <ShowResults/>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
