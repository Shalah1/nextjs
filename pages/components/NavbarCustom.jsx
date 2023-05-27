import Link from 'next/link';
import styles from '../../../styles/citizen/Navbar.module.css';
import Image from 'next/image'
import axios from 'axios';

const NavbarCustom = () => {
  return (
<nav className="bg-gray-800 text-white py-3 px-6 sm:px-12 lg:px-24 flex items-center justify-between">
  <div className="flex items-center">
    <Link href="/citizen" passHref>
     E governance 
    </Link>
  </div>
  <ul className="hidden sm:flex space-x-4">
    <li>
      <Link href="/citizen/profile" passHref>
         Profile 
      </Link>
    </li>
    <li>
    <button type="button" className="hover:text-gray-300 focus:outline-none">
        Services 
        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.293 13.707a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 11.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4z" clipRule="evenodd"/>
        </svg>
      </button>
      <ul className="absolute z-10 hidden bg-gray-800 text-white py-2 mt-1 w-full rounded-lg shadow-lg">
        <li>
          <Link href="/" passHref>
            Service 1
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            Service 2
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            Service 3
          </Link>
        </li>
      </ul>
    </li>
    <li>
      <Link href="/company" className="hover:text-gray-300" passHref>
         Campaign 
      </Link>
    </li>
    <li>
      <Link href="/citizen/blogs" className="hover:text-gray-300" passHref>
         Blogs 
      </Link>
    </li>
    <li>
      <Link href="/citizen/aboutus" className="hover:text-gray-300" passHref>
         About Us 
      </Link>
    </li>
    <li>
      <Link href="/citizen/feedback" className="hover:text-gray-300" passHref>
         Feedback 
      </Link>
    </li>
    <li>
      <Link href="/citizen/signin" className="hover:text-gray-300" passHref>
         Sign in 
      </Link>
    </li>
  </ul>
  <button type="button" className="sm:hidden focus:outline-none" aria-label="Toggle menu">
    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
      <path
        className="hidden"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
      />
      <path
        className="block"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
      />
    </svg>
  </button>
</nav>

  );
};

export default NavbarCustom;