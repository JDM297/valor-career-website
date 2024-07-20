import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white p-8 mt-8">
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between items-start mb-8">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <img src="/path/to/logo.png" alt="Company Logo" className="h-16" />
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/disclosure-statements" className="hover:underline">Additional Disclosure Statements</a></li>
            <li><a href="/jobs" className="hover:underline">Jobs</a></li>
            <li><a href="/contact" className="hover:underline">Contact Info</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h4 className="font-bold mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><a href="/new-to-it" className="hover:underline">New to IT?</a></li>
            <li><a href="/financial-aid" className="hover:underline">Financial Aid</a></li>
            <li><a href="/locations" className="hover:underline">Locations</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="h-6 w-6 fill-current"><path d="...Facebook SVG Path..."></path></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="h-6 w-6 fill-current"><path d="...Twitter SVG Path..."></path></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="h-6 w-6 fill-current"><path d="...Instagram SVG Path..."></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="h-6 w-6 fill-current"><path d="...LinkedIn SVG Path..."></path></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="h-6 w-6 fill-current"><path d="...YouTube SVG Path..."></path></svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="h-6 w-6 fill-current"><path d="...TikTok SVG Path..."></path></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
