import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-800 text-white p-8 mt-8">
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between items-start mb-8">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <img src="/path/to/logo.png" alt="Valor Career - Company Logo" className="h-16" />
        </div>

        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/disclosure-statements" className="hover:underline">Additional Disclosure Statements</Link></li>
            <li><Link to="/jobs" className="hover:underline">Jobs</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Info</Link></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h4 className="font-bold mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><Link to="/new-to-it" className="hover:underline">New to IT?</Link></li>
            <li><Link to="/financial-aid" className="hover:underline">Financial Aid</Link></li>
            <li><Link to="/locations" className="hover:underline">Locations</Link></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <h4 className="font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="hover:text-gray-400">
              <svg className="h-6 w-6 fill-current"><path d="...Facebook SVG Path..."></path></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter profile" className="hover:text-gray-400">
              <svg className="h-6 w-6 fill-current"><path d="...Twitter SVG Path..."></path></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram profile" className="hover:text-gray-400">
              <svg className="h-6 w-6 fill-current"><path d="...Instagram SVG Path..."></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className="hover:text-gray-400">
              <svg className="h-6 w-6 fill-current"><path d="...LinkedIn SVG Path..."></path></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube channel" className="hover:text-gray-400">
              <svg className="h-6 w-6 fill-current"><path d="...YouTube SVG Path..."></path></svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our TikTok profile" className="hover:text-gray-400">
              <svg className="h-6 w-6 fill-current"><path d="...TikTok SVG Path..."></path></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Valor Career. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
