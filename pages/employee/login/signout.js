import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import 'flowbite/dist/flowbite.css';

function SignOut() {
  const [error, setError] = useState(null);
  const { handleSubmit } = useForm();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await axios.get('http://localhost:3000/employee/signout');
      router.push('/');
    } catch (error) {
      setError('There was an error signing you out. Please try again.');
    }
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <form className="w-full md:w-1/2 lg:w-1/3 p-8 rounded-lg shadow-lg bg-white" onSubmit={handleSubmit(handleSignOut)}>
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Sign Out</h1>
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{error}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg onClick={() => setError(null)} className="fill-current h-6 w-6 text-red-500 cursor-pointer" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 5.652a.999.999 0 1 0-1.414 1.414L11.414 9l-1.52 1.52a.999.999 0 1 0 1.414 1.414L12.828 10l1.52 1.52a.999.999 0 1 0 1.414-1.414L14.242 9l1.106-1.106a.999.999 0 0 0 0-1.414z"/></svg>
          </span>
        </div>}
        <p className="text-gray-700 text-base mb-8">Are you sure you want to sign out?</p>
        <div className="flex justify-center">
          <button className="btn bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mr-4" type="submit">
            Sign Out
          </button>
          <button className="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg" type="button" onClick={() => router.push('/dashboard')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignOut;

