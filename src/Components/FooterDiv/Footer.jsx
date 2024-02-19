// import React from 'react'

// // Imported Icons from react-icons

// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";



// const Footer = () => {
//   return (
//     <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-start justify-center'>

//       <div>
//         <div className="logoDiv">
//             <h1 className="logo text-[25px] text-white pb-[1.5rem]">
//               <strong>Job</strong>Search
//             </h1>
//         </div>
//         <p className='text-white pb-[13px] opacity-70 leading-7 '>
//         Empowering Careers, Fostering Inclusion: Your Path to Success Starts Here!
//         </p>
//       </div>

//       <div className='grid'>
//         <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
//           Conmpany
//         </span>
//         <div className='grid gap-3'>

//           <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
//           <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
//           <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
//           <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>

//         </div>
//       </div>

//       <div className='grid'>
//         <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
//           Resources
//         </span>
//         <div className='grid gap-3'>

//           <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
//           <li className='text-white opacity-[.7] hover:opacity-[1]'>Support Center</li>
//           <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
//           <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact Us</li>

//         </div>
//       </div>

//       <div className='grid'>
//         <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
//           Support
//         </span>
//         <div className='grid gap-3'>

//           <li className='text-white opacity-[.7] hover:opacity-[1]'>Events</li>
//           <li className='text-white opacity-[.7] hover:opacity-[1]'>Promo</li>
//           <li className='text-white opacity-[.7] hover:opacity-[1]'>Request Demo</li>
//           <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>

//         </div>
//       </div>

//       <div className='grid'>
//         <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
//           Contact Info
//         </span>
//         <div>
//          <small className='text-[14px] text-white'>
//           er.manpreet0101@gmail.com
         
          
//          </small>
//          <div className='icons flex gap-4 py-[1rem]'>
//          <a href="https://www.linkedin.com/in/-manpreet-singh-/"><FaLinkedin className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' /></a>
//          <a href="https://github.com/Manpreet-Singh-pfw"><FaGithub className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' /></a>
//          <a href="mailto:er.manpreet0101@gmail.com"><MdEmail className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' /></a>

       
//          </div>

//         </div>
//       </div>
//       <small className='text-[14px] text-white'>
//       <p>&copy; Manpreet Singh</p>
//          </small>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='footer p-[2rem] md:p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-1 md:grid-cols-5 m-auto items-start justify-center'>

      <div className='md:col-span-2 mb-8 md:mb-0'>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
          Empowering Careers, Fostering Inclusion: Your Path to Success Starts Here!
        </p>
      </div>

      <div className='md:col-span-1 mb-8 md:mb-0'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>
        <div className='grid gap-3'>

          <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>

        </div>
      </div>

      <div className='md:col-span-1 mb-8 md:mb-0'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Resources
        </span>
        <div className='grid gap-3'>

          <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Support Center</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact Us</li>

        </div>
      </div>

      <div className='md:col-span-1 mb-8 md:mb-0'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Support
        </span>
        <div className='grid gap-3'>

          <li className='text-white opacity-[.7] hover:opacity-[1]'>Events</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Promo</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Request Demo</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>

        </div>
      </div>

      <div className='md:col-span-1'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Contact Info
        </span>
        <div>
          <small className='text-[14px] text-white'>
            er.manpreet0101@gmail.com
          </small>
          <div className='icons flex gap-4 py-[1rem]'>
            <a href="https://www.linkedin.com/in/-manpreet-singh-/"><FaLinkedin className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' /></a>
            <a href="https://github.com/Manpreet-Singh-pfw"><FaGithub className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' /></a>
            <a href="mailto:er.manpreet0101@gmail.com"><MdEmail className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' /></a>
          </div>
        </div>
      </div>

      <small className='text-[14px] text-white md:col-span-full'>
        <p>&copy; Manpreet Singh</p>
      </small>
    </div>
  );
};

export default Footer;
