import React from 'react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

// Functional component representing the search bar
const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>

      {/* Search form */}
      <form action="">

        {/* First section containing search inputs and button */}
        <div className='firstDiv flex flex-col sm:flex-row justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>

          {/* Search by Job */}
          <div className='flex gap-2 items-center mb-4 sm:mb-0'>
            <AiOutlineSearch className='text-[25px] icon'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Job Here....' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
          </div>

          {/* Search by Company */}
          <div className='flex gap-2 items-center mb-4 sm:mb-0'>
            <BsHouseDoor className='text-[25px] icon'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by company....' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
          </div>

          {/* Search by Location */}
          <div className='flex gap-2 items-center mb-4 sm:mb-0'>
            <CiLocationOn className='text-[25px] icon'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by location....' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
          </div>

          {/* Search Button */}
          <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Search</button>

        </div>

      </form>

      {/* Second section containing dropdowns and Clear All option */}
      <div className='secDiv flex flex-col sm:flex-row items-center gap-10 justify-center'>

        {/* Sort by Dropdown */}
        <div className='singleSearch flex items-center gap-2 mb-4 sm:mb-0'>
          <label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort by:</label>
          <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
             <option value="">Relevance</option>
             <option value="">Inclusive</option>
             <option value="">Starts With</option>
             <option value="">Contains</option>
          </select>
        </div>

        {/* Type Dropdown */}
        <div className='singleSearch flex items-center gap-2 mb-4 sm:mb-0'>
          <label htmlFor="type" className='text-[#808080] font-semibold'>Type:</label>
          <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1'>
             <option value="">Full-time</option>
             <option value="">Remote</option>
             <option value="">Contract</option>
             <option value="">Part-time</option>
          </select>
        </div>

        {/* Level Dropdown */}
        <div className='singleSearch flex items-center gap-2 mb-4 sm:mb-0'>
          <label htmlFor="level" className='text-[#808080] font-semibold'>Level:</label>
          <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1'>
             <option value="">Senior</option>
             <option value="">Beginner</option>
             <option value="">Intermediate</option>
             <option value="">Advocate</option>
          </select>
        </div>

        {/* Clear All */}
        <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>

      </div>
    </div>
  );
};

// Export the Search component as the default export
export default Search;
