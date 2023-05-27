import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';

export default function Session() {
  const [email, setEmail] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const session = sessionStorage.getItem('email');
      if (session) {
        setEmail(sessionStorage.getItem('email'));

      }
    }

  }, []);

  const handleSignOut = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/employee/signout')
      console.log(response.data)
      sessionStorage.removeItem('email');
      setEmail(null);
      router.push('login/signin');
    } catch (error) {
      console.error(error)
    }

  };

  return (
    <>
      {email !== null ? (
        <>
          <div className="flex md:order-2">
            <Link href="/employee/dashboard" className="text-white  bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mx-6 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">DashBoard</Link>
            <button className="text-white bg-red-700  hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg mx-6 text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={handleSignOut}>Sign out</button>
          </div>

        </>
      ) : (
        <div className="flex md:order-2">
          <Link href="/login/signin"
            className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mx-6 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign in
          </Link>

        </div>

      )}

    </>
  );
}