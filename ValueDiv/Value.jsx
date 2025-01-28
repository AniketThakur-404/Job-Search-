import React from 'react'
import simple1 from './../assets/simple1.jpg'
import simple2 from './../assets/simple2.jpg'
import simple3 from './../assets/simple3.jpg'
const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem] '>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>The value that holds us true and to account</h1>

      <div className='grid gap-[10rem] grid-cols-3 items-center'>
  <div className='shadow-lg shadow-greyIsh-400/700 hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
    <div className='flex items-center gap-3'>
      <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[60px] flex items-center justify-center'>
        <img src={simple1} alt="Simplicity" className='rounded-full w-[70%]' />    
      </div>
      <span className='font-semibold text-textColor text-[18px]'>
        Simplicity
      </span>
    </div>
    <p className='text-[13px] text-textColor opacity-[.7] py-[1rem]'>
      Things being made beautifully simple are at the heart of everything we do. 
    </p>
  </div>
  <div className='shadow-lg shadow-greyIsh-400/700 hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
    <div className='flex items-center gap-3'>
      <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[60px] flex items-center justify-center'>
        <img src={simple2} alt="Simplicity" className='rounded-full w-[70%]' />    
      </div>
      <span className='font-semibold text-textColor text-[18px]'>
        Simplicity
      </span>
    </div>
    <p className='text-[13px] text-textColor opacity-[.7] py-[1rem]'>
      We believe in making things better for everyone, even if just by a little bit!
    </p>
  </div>
  <div className='shadow-lg shadow-greyIsh-400/700 hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
    <div className='flex items-center gap-3'>
      <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[60px] flex items-center justify-center'>
        <img src={simple3} alt="Simplicity" className='rounded-full h-[70%] w-[70%]' />    
      </div>
      <span className='font-semibold text-textColor text-[18px]'>
        Simplicity
      </span>
    </div>
    <p className='text-[13px] text-textColor opacity-[.7] py-[1rem]'>
     We work on the basis of creating trust which can be nurtured through authenticity and transparency  
    </p>
  </div>
</div>  
<div className='card mt-[2rem] flex justify-between bg-blue-700 p-[5rem] rounded-[10px]'>
  <div className='flex justify-between items-center w-full'>
    <div>
      <h1 className='text-blue-700 text-[30px] font-bold'>
        Ready to switch a career
      </h1>
      <h2 className='text-textColor text-[25px] font-bold'>
        Let's get started!
      </h2>
    </div>
    <div>
      <button className='border-[2px] rounded-[10px] py-[20px] px-[30px] text-[18px] font-semibold text-blue-700 hover:bg-white border-blue-700'>
        Get Started
      </button>
    </div>
  </div>
</div>



    </div>
  )
}

export default Value