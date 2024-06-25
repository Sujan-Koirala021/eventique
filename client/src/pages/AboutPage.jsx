import React from 'react';
import missionImage from '../assets/mission.png';
import visionImage from '../assets/vision.png';
import valuesImage from '../assets/values.jpg';

const AboutUs = () => {
  return (
    <div className="bg-slate-100 text-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">About Our Event Management System</h2>
        <p className="text-lg md:text-md text-center max-w-3xl mx-auto mb-12">
          Our Event Management System is designed to streamline the process of planning, organizing, and executing events with ease and efficiency. Our mission, vision, and values drive our commitment to providing exceptional service and innovative solutions.
        </p>
        <div className="flex flex-wrap justify-center items-stretch space-y-8 md:space-y-0">
          <div className="w-full md:w-1/3 px-4 flex flex-col items-center">
            <img src={missionImage} alt="Our Mission" className="rounded-lg shadow-md w-full h-64 object-cover mb-4"/>
            <h3 className="text-xl font-bold mb-2 text-center">Our Mission</h3>
            <p className="text-center">
              Our mission is to simplify event management by providing a comprehensive platform that meets the needs of event organizers, ensuring seamless planning and execution.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 flex flex-col items-center">
            <img src={visionImage} alt="Our Vision" className="rounded-lg shadow-md w-full h-64 object-cover mb-4"/>
            <h3 className="text-xl font-bold mb-2 text-center">Our Vision</h3>
            <p className="text-center">
              We envision a future where technology empowers event organizers to create memorable experiences with minimal effort, making event management accessible and efficient for everyone.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 flex flex-col items-center">
            <img src={valuesImage} alt="Our Values" className="rounded-lg shadow-md w-full h-64 object-cover mb-4"/>
            <h3 className="text-xl font-bold mb-2 text-center">Our Values</h3>
            <p className="text-center">
              We value innovation, customer satisfaction, and integrity. Our goal is to continuously improve our platform to better serve our users and help them achieve their event management goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
