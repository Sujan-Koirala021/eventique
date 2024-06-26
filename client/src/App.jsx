import React, { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SignupPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutPage';
import Dashboard from './pages/Dashboard';
import HeroSection from './components/HeroSection';

// import CreatePost from './pages/CreatePost'
// import ShowResults from './pages/ShowResults'


function App() {


  const Layout = () => {
    return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    );
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HeroSection />
        },
        {
          path: '/login',
          element: <LoginPage />
        },
        {
          path: '/about',
          element: <AboutUs />
        },
        {
          path: '/contact-us',
          element: <ContactUs />
        },
        {
          path : '/sign-up',
          element: <SignupPage/>
        },
        {
          path : '/dashboard',
          element: <Dashboard/>
        }
      ]
    },
  
  ]);
  


  return (
    <>
      <div className="flex flex-col min-h-screen">

        {/* <NavBar /> */}
        <main className='flex-grow'>

        <RouterProvider router={router} />

          {/* <CreatePost /> */}
          {/* <ShowResults/> */}
          {/* <LoginPage/> */}
          {/* <SignupPage/> */}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App
