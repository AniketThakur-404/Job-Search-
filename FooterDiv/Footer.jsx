import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer p-[3rem] mb-4 bg-blue-700 rounded-[10px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[2rem] m-auto'>
      <div className='space-y-4'>
        <div className='logoDiv'>
          <h1 className='logo text-[25px] text-white pb-[1rem]'>
            <strong className='font-bold'>Job</strong>Search
          </h1>
        </div>
        <p className='text-greyIsh pb-[1rem] opacity-70 leading-7'>
          We always make our seekers and Companies find the best jobs and employers find the best candidates.
        </p>
      </div>

      <div className='space-y-4'>
        <span className='divTitle text-[18px] font-semibold pb-[1rem] text-white'>
          Company
        </span>
        <ul className='space-y-2'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
        </ul>
      </div>

      <div className='space-y-4'>
        <span className='divTitle text-[18px] font-semibold pb-[1rem] text-white'>
          Resources
        </span>
        <ul className='space-y-2'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Support Center</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact Us</li>
        </ul>
      </div>

      <div className='space-y-4'>
        <span className='divTitle text-[18px] font-semibold pb-[1rem] text-white'>
          Support
        </span>
        <ul className='space-y-2'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Events</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Promo</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Req Demo</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>
        </ul>
      </div>

      <div className='space-y-4'>
        <span className='divTitle text-[18px] font-semibold pb-[1rem] text-white'>
          Follow Us
        </span>
        <div className='flex gap-4'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faFacebook} className='text-white text-[24px] hover:text-blue-500' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faInstagram} className='text-white text-[24px] hover:text-pink-500' />
          </a>
          <a href='https://google.com' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGoogle} className='text-white text-[24px] hover:text-red-500' />
          </a>
         
        </div>
        <div className='divTitle text-[18px] pb-[1rem] text-white mt-10'>
            <span>
              Contact Info
            </span>
            <p className=''>NoobMaster69@gmail.com</p>

          </div>
      </div>
      
    </div>
  );
};

export default Footer;
