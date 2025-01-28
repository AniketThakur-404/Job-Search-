import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <div className='container mx-auto bg-white p-6 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold text-blue-700 mb-4'>About Us</h1>
        <p className='text-lg text-gray-700 mb-4'>
          Welcome to JobSearch, your number one source for finding the best job opportunities. 
          We are dedicated to providing you with the very best job listings, with an emphasis on 
          dependability, customer service, and uniqueness.
        </p>
        <p className='text-lg text-gray-700 mb-4'>
          Founded in 2021, JobSearch has come a long way from its beginnings in a small office. 
          When we first started out, our passion for helping people find jobs drove us to do tons 
          of research, so JobSearch can offer you the most relevant job listings.
        </p>
        <p className='text-lg text-gray-700 mb-4'>
          We hope you enjoy our services as much as we enjoy offering them to you. If you have any 
          questions or comments, please don’t hesitate to contact us.
        </p>
        <p className='text-lg text-gray-700 mb-4'>
          Sincerely, <br />
          The JobSearch Team
        </p>
      </div>
    </div>
  );
};

export default About;
