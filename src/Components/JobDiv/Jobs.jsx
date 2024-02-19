import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import logo1 from '../../Assets/logo (1).png';
import logo2 from '../../Assets/logo (2).png';
import logo3 from '../../Assets/logo (3).png';
import logo4 from '../../Assets/logo (4).png';
import logo5 from '../../Assets/logo (5).png';
import logo6 from '../../Assets/logo (6).png';
import logo7 from '../../Assets/logo (7).png';
import logo8 from '../../Assets/logo (8).png';

// Data array containing job information
// Each object represents a job listing
const Data = [
    {
      id:1,
      image: logo1,
      title: 'Web Developer',
      time: 'Now', 
      location: 'Remote',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
      company: 'Novac Linus Co.'
    },
    {
      id:2,
      image: logo2,
      title: 'Front End Developer',
      time: '2hrs', 
      location: 'Indiana',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
      company: 'Liquid Accessments'
    },
  
    {
      id:3,
      image: logo3,
      title: 'React.js Developer',
      time: '19hrs', 
      location: 'Ohio',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
      company: 'Web Tech Agency'
    },
  
    {
      id: 4,
      image: logo4,
      title: 'UI/UX Designer',
      time: '2days',
      location: 'California',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
      company: 'Government',
    },
  
    {
      id: 5,
      image: logo5,
      title: 'Project Manager',
      time: '1week',
      location: 'New York',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
      company: 'Newcastle',
    },
   
  
    {
      id: 6,
      image: logo6,
      title: 'Software Engineer',
      time: '3weeks',
      location: 'Texas',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
      company: 'Nin Co.',
    },
  
    {
      id: 7,
      image: logo7,
      title: 'Senior Staff Engineer',
      time: '1month',
      location: 'Utah',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
      company: 'Nimeloi',
    },
  
  
    {
      id: 8,
      image: logo8,
      title: 'Data Scientist',
      time: '1year',
      location: 'New Jersey',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
      company: 'Nome And Sons',
    }
  
  ]
  
const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex flex-wrap gap-4 justify-center items-center py-10">

        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div key={id} className="group singleJob w-full sm:w-[50%] md:w-[33.33%] lg:w-[25%] p-4 bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg mb-4">

              <span className='flex justify-between items-center gap-2'>
                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                  <BiTimeFive/>{time}
                </span>
              </span>
              <h6 className='text-[#ccc]'>{location}</h6>

              <p className='text-[13px] text-[#959595] pt-2 border-t-[2px] mt-2 group-hover:text-white'>
                {desc}
              </p>

              <div className='company flex items-center gap-2 mt-2'>
                <img src={image} alt="Company Logo" className='w-[20%] sm:w-[10%]' />
                <span className='text-[14px] block group-hover:text-white'>{company}</span>
              </div>

              <button className='border-[2px] rounded-[10px] block p-2 w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover:item:text-textColor group-hover:text-black mt-2'>
                <a href="https://www.indeed.com/">Apply Now</a>
              </button>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;


