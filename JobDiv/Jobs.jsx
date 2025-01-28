import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import logo1 from './../assets/logo1.jpg'
import logo2 from './../assets/logo2.jpg'
import logo3 from './../assets/logo3.jpg'
import logo4 from './../assets/logo4.jpg'
import logo5 from './../assets/logo5.jpg'
import logo6 from './../assets/logo6.jpg'
import logo7 from './../assets/logo7.jpg'
import logo8 from './../assets/logo8.jpg'

const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'lorem ipsum, dolor sit amet consectetur adipisicing elit.Corruoti, laboriosam!',
    company: 'Yoyo Tech Corp.',
  },
  {
    id: 2,
    image: logo2,
    title: 'UI Designer',
    time: '14hrs',
    location: 'Manchester',
    desc: 'lorem ipsum, dolor sit amet consectetur adipisicing elit.Corruoti, laboriosam!',
    company: 'Bruh Tech Corp.',
  },
  {
    id: 3,
    image: logo3,
    title: 'Software Eng',
    time: '23hrs',
    location: 'Austria',
    desc: 'lorem ipsum, dolor sit amet consectetur adipisicing elit.Corruoti, laboriosam!',
    company: 'Oxxo Tech Corp.',
  },
  {
    id: 4,
    image: logo4,
    title: 'SEO Developer',
    time: '2hrs',
    location: 'Austria',
    desc: 'lorem ipsum, dolor sit amet consectetur adipisicing elit.Corruoti, laboriosam!',
    company: 'Riyal Tech Corp.',
  },
  {
    id: 5,
    image: logo5,
    title: 'Backend Dev',
    time: '13hrs',
    location: 'Austria',
    desc: 'lorem ipsum, dolor sit amet consectetur adipisicing elit.Corruoti, laboriosam!',
    company: 'Microsoft Tech Corp.',
  },
  {
    id: 6,
    image: logo6,
    title: 'DevOps',
    time: '3hrs',
    location: 'Usa',
    desc: 'lorem ipsum, dolor sit amet consectetur adipisicing elit.Corruoti, laboriosam!',
    company: 'Apple Tech Corp.',
  },
  {
    id: 7,
    image: logo7,
    title: 'Data Science',
    time: '6hrs',
    location: 'New Jerse',
    desc: 'lorem ipsum, dolor sit amet consectetur adipisicing elit.Corruoti, laboriosam!',
    company: 'Pexels Tech Corp.',
  },
  {
    id: 8,
    image: logo8,
    title: 'AI/ML',
    time: '9hrs',
    location: 'India',
    desc: 'lorem ipsum, dolor sit amet consectetur adipisicing elit.Corruoti, laboriosam!',
    company: 'Indian Oil Tech Corp.',
  },
]

const Jobs = () => {
  return (
    <div>
      <div className="jobConatainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1 group-hover:text-white">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="text-[#ccc] group-hover:text-white">{location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>
              <div className="company flex items-center gap-2">
                <img
                  src={image}
                  alt=""
                  className="rounded-full w-[20%] h-[35px]"
                />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-black hover:text-white ">
                Apply Now
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Jobs
