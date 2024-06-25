import React from 'react';
import HeroImg from '../assets/heroImg.png';
import {  useNavigate } from 'react-router-dom';
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export default function HeroSection() {
    const navigate = useNavigate();
    const goToLogin = () =>{
        navigate('/login');
    }
  return (

    <div className="mt-20 flex flex-col lg:flex-row items-center px-8 lg:px-16 py-16">
      <div className="lg:w-1/2 leading-snug">
        <h1 className="text-7xl font-bold">
          Eventique <br />
          Your Ultimate <br />
          Event Management System
        </h1>
        <p className="text-3xl pt-8">
          Organizing events seamlessly, <br />
          every step of the way.
        </p>
        <div className="pt-8">
          <button  onClick={goToLogin} className="bg-blue-500 text-white py-2 px-6 rounded-lg text-xl hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 mt-12 lg:mt-0 lg:ml-16">
        <img 
          src={HeroImg}
          alt="Event Management" 
          className="w-full h-auto rounded-lg "
        />
      </div>
    </div>
  );
}
