import React from 'react';
import logo1 from './../assets/logo1.jpg';
import logo2 from './../assets/logo2.jpg';
import logo3 from './../assets/logo3.jpg';
import logo4 from './../assets/logo4.jpg';
import logo5 from './../assets/logo5.jpg';

const LogoMarquee = () => {
  return (
    <>
  
    <div className="overflow-hidden w-full bg-gray-200 py-4">
    <div className='flex justify-center text-center text-gray-400 mb-2'>
    <h1 className=''>Company's </h1>
    </div>  
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Repeat the images to ensure smooth scrolling */}
      
        
        <img src={logo1} alt="Company 1" className="h-20 w-20 rounded-full mx-6" />
        <img src={logo2} alt="Company 2" className="h-20 w-20 rounded-full mx-6" />
        <img src={logo3} alt="Company 3" className="h-20 w-20 rounded-full mx-6" />
        <img src={logo4} alt="Company 4" className="h-20 w-20 rounded-full mx-6" />
        <img src={logo5} alt="Company 5" className="h-20 w-20 rounded-full mx-6" />
        <img src={logo1} alt="Company 1" className="h-20 w-20 rounded-full mx-6" />
        <img src={logo2} alt="Company 2" className="h-20 w-20 rounded-full mx-6" />
        <img src={logo3} alt="Company 3" className="h-20 w-20 rounded-full mx-6" />
        <img src={logo4} alt="Company 4" className="h-20 w-20 rounded-full mx-6" />
        <img src={logo5} alt="Company 5" className="h-20 w-20 rounded-full mx-6" />
        
        
      </div>
    </div>
    </>
  );
};

export default LogoMarquee;
