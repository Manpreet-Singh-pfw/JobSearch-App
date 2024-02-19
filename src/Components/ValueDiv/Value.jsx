import React from 'react';
import simple from '../../Assets/simple.png';
import valentines from '../../Assets/valentines.png';
import shield from '../../Assets/shield.png';

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem] text-center sm:text-left'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] mx-auto sm:mx-0'>The values that hold us true and accountable to our users</h1>
      
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center'>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={simple} alt="" className='w-[70%]' />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              User-Centric Experience
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Intuitive design for easy navigation and personalized job recommendations.
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={valentines} alt="" className='w-[70%]' />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Transparency and Trust
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Clear, accurate job information and Verified, legitimate job listings.
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={shield} alt="" className='w-[70%]' />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Diversity and Inclusion
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Open opportunities for diverse backgrounds and promote inclusive hiring practices.
          </p>
        </div>

      </div>

      <div className="card mt-[2rem] flex flex-col sm:flex-row justify-between bg-blueColor p-[5rem] rounded-[10px]">

        <div className="text-white text-center sm:text-left">
          <h1 className='text-[30px] font-bold'>Ready to switch a career?</h1>
          <h2 className='text-textColor text-[25px] font-bold'>Let's get started!</h2>
        </div>

        <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor mt-4 sm:mt-0'>
          Get Started
        </button>

      </div>

    </div>
  );
};

export default Value;
