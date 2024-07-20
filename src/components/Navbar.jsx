import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  let timer;

  const handleMouseEnter = () => {
    clearTimeout(timer);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center" role="navigation" aria-label="Main Navigation">
      <div className="logo">
        <Link to="/" className="text-xl font-bold">Logo</Link>
      </div>
      <div className="md:hidden z-50" onClick={toggleMenu}>
        {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
      </div>
      <ul ref={menuRef} className={`navbar-menu fixed top-16 left-0 bg-gray-800 flex flex-col items-start p-4 space-y-4 md:flex md:flex-row md:space-y-0 md:space-x-4 md:static md:h-auto md:bg-transparent ${menuOpen ? 'block' : 'hidden'}`}>
        <li><Link to="/about" className="hover:text-gray-400" onClick={closeMenu}>About</Link></li>
        <li><Link to="/programs" className="hover:text-gray-400" onClick={closeMenu}>Programs</Link></li>
        <li><Link to="/locations" className="hover:text-gray-400" onClick={closeMenu}>Locations</Link></li>
        <li 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleMouseEnter}
          onBlur={handleMouseLeave}
        >
          <Link to="#" className="hover:text-gray-400">Get Started</Link>
          <ul className={`absolute bg-gray-700 p-2 mt-1 transition-all duration-300 ease-in-out ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <li><Link to="/admissions" className="block px-4 py-2 hover:bg-gray-600" onClick={closeMenu}>Admissions</Link></li>
            <li><Link to="/financial-aid" className="block px-4 py-2 hover:bg-gray-600" onClick={closeMenu}>Financial Aid</Link></li>
            <li><Link to="/career-evaluation" className="block px-4 py-2 hover:bg-gray-600" onClick={closeMenu}>Free Career Evaluation</Link></li>
            <li><Link to="/request-info" className="block px-4 py-2 hover:bg-gray-600" onClick={closeMenu}>Request Information</Link></li>
            <li><Link to="/schedule-tour" className="block px-4 py-2 hover:bg-gray-600" onClick={closeMenu}>Schedule Tour</Link></li>
          </ul>
        </li>
        <li><Link to="/student-portal" className="hover:text-gray-400" onClick={closeMenu}>Student Portal</Link></li>
        <li><Link to="/news" className="hover:text-gray-400" onClick={closeMenu}>News</Link></li>
        <li className="phone-number md:hidden">
          <a href="tel:+1234567890" className="hover:text-gray-400" onClick={closeMenu}>+1 234 567 890</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
