import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import 'flowbite/dist/flowbite.css';


export default function Login() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/employee/signin',
        data,
        {
            headers: {
                "Content-Type": "application/json",
            },
            //   withCredentials: true, // To send cookies along with the request
        }
      );
      console.log(response.data);
      router.push('/dashboard'); // Redirect to dashboard page
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };


  return (



  
    <div className="bg-gray-50 dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16"></div>
      <div class="flex flex-col justify-center">
       {/* <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">WELCOME TO BANGLADESH E-governance (HEALTH SECTOR).</p> */}
       <button class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
  WELCOME TO BANGLADESH E-GOVERNANCE (HEALTH SECTOR)
</button>
           {/* <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">WELCOME TO BANGLADESH E-governance (HEALTH SECTOR).</p> */}
          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">SEE OUR CAMPAIGNS IN BANGLADESH E-GOVERNANCE SITE-

                <svg aria-hidden="true" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </a>
            </div>
         
            <div></div>
            <h2 class="text-2xl font-bold text-blue-900 blue:text-black">
                    Sign in to OUR E-GOVERENCE 
                </h2>
                <form class="mt-8 space-y-6" action="#"></form>
   
<div class="flex justify-center">
  <button class="text-4xl font-bold mb-8 text-center text-violet-500 bg-gray-100 hover:bg-blue-500 hover:text-white py-2 px-4 rounded-lg mx-auto">
    SIGN IN
  </button>
</div>

      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
        <div className="form-control mb-4">
          <label htmlFor="email" className="label">
            Email
          </label>
        
          <input
  type="email"
  id="email"
  {...register('email', { required: true })}
  className="input border border-gray-400 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
/>
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="form-control mb-4">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register('password', { required: true })}
            className="input border border-gray-400 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          {errors.password && (
            
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div class="flex items-start">
                        <div class="flex items-center h-5">
                           
                            <input id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required>
                            </input>
                        </div>
                        <div class="ml-3 text-sm">
                        <label for="remember" class="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
                        </div>
                        </div>
                        <button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>


      </form>
      <div className="mt-4 text-sm text-gray-500">
                    Don't have an account yet? <a href="/login/signup" className="text-blue-500 hover:text-blue-700">Sign up here</a>.
                </div>
    </div>
    
    
  );
}
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import MyLayout from './component/layout';
// import { useRouter } from 'next/router';
// import { useState } from 'react';

// export default function SignIn() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const onSubmit = async (data) => {
//     const { email, password } = data;

//     try {
//       const response = await axios.post('http://localhost:3000/doctor/signin/', { email, password });
//       const message = response.data.message;

//       if (message === 'You have successfully signed in') {
//         sessionStorage.setItem('email', email);
//         sessionStorage.setItem('password', password);
//         router.push('/doctor/dashboard');
//       } else {
//         setError('Invalid login credentials');
//       }
//     } catch (error) {
//       console.log('error: ' + error.message);
//       setError('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <>
//       <MyLayout title="Sign In" />

//       <div className="p-24">
//         <section className="text-gray-600 body-font mx-auto w-96">
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="bg-blue-300 rounded-lg p-8 md:ml-auto w-auto mt-10 md:mt-0">
//               <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>
//               <div className="relative mb-4">
//                 <label htmlFor="email" className="leading-7 text-sm text-gray-600">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   {...register('email', { required: true })}
//                   className={`w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${errors.email && 'border-red-500'}`}
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-xs mt-1">Email is required</p>
//                 )}
//               </div>
//               <div className="relative mb-4">
//               <label htmlFor="password" className="leading-7 text-sm text-gray-600">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 {...register('password', { required: true })}
//                 className={`w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${errors.password && 'border-red-500'}`}
//               />
//               {errors.password && (
//                 <p className="text-red-500 text-xs mt-1">Password is required</p>
//               )}
//             </div>
//             <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Sign In</button>
//             {error && (
//               <div>
//                 <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400">
//                   <span className="font-medium">{error}</span>
//                 </p>
//               </div>
//             )}
//           </div>
//         </form>
//       </section>
//     </div>


    
//   </>
// );
// }