import React, { useState } from 'react';

// Functional component representing the NavBar
const NavBar = () => {
  // State to manage the visibility of the menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menuOpen state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // JSX for the NavBar component
  return (
    <div className={`navBar flex justify-between items-center p-[3rem] ${menuOpen ? 'flex-col' : ''}`}>
      {/* Logo section */}
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Job</strong>Search
        </h1>
      </div>

      {/* Menu section */}
      <div className={`menu flex flex-col gap-8 ${menuOpen ? 'visible' : 'hidden'}`}>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Companies</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Contact</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Register</li>
      </div>

      {/* Hamburger menu button */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'rotate-bar1' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'hide-bar2' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'rotate-bar3' : ''}`}></div>
      </div>
    </div>
  );
};

// Export the NavBar component as the default export
export default NavBar;
