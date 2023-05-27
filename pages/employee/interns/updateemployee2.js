// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';

// export default function EmployeeForm({ employeeData }) {
//   const [name, setName] = useState(employeeData.name);
//   const [email, setEmail] = useState(employeeData.email);
//   const [password, setPassword] = useState(employeeData.password);
//   const [address, setAddress] = useState(employeeData.address);
//   const [salary, setSalary] = useState(employeeData.salary);
//   const [doctorRating, setDoctorRating] = useState(employeeData.doctorrating);
//   const [juniorRank, setJuniorRank] = useState(employeeData.juniorrank);
//   const [employee, setEmployee] = useState(employeeData.employee);
//   const [age, setAge] = useState(employeeData.age);
//   const [phoneNumber, setPhoneNumber] = useState(employeeData.phonenumber);
//   const router = useRouter();
//   const { id } = router.query;

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('email', email);
//     formData.append('password', password);
//     formData.append('address', address);
//     formData.append('salary', salary);
//     formData.append('doctorrating', doctorRating);
//     formData.append('juniorrank', juniorRank);
//     formData.append('employee', employee);
//     formData.append('age', age);
//     formData.append('phonenumber', phoneNumber);

//     try {
//       const response = await axios.put(`/http://localhost:3000/employee/updateemployee2/${id}`, formData);
//       console.log(response.data);
//       // TODO: handle success case
//     } catch (error) {
//       console.error(error);
//       // TODO: handle error case
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
//             Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             id="name"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             id="email"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             id="password"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
            
//             </label>
            
//             </div>
//             </form>
//             </div>
            
           
//   )
//   }
//   import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';

// export default function EmployeeForm({ employeeData }) {
//   const [name, setName] = useState(employeeData.name);
//   const [email, setEmail] = useState(employeeData.email);
//   const [password, setPassword] = useState(employeeData.password);
//   const [address, setAddress] = useState(employeeData.address);
//   const [salary, setSalary] = useState(employeeData.salary);
//   const [doctorRating, setDoctorRating] = useState(employeeData.doctorrating);
//   const [juniorRank, setJuniorRank] = useState(employeeData.juniorrank);
//   const [employee, setEmployee] = useState(employeeData.employee);
//   const [age, setAge] = useState(employeeData.age);
//   const [phoneNumber, setPhoneNumber] = useState(employeeData.phonenumber);
//   const router = useRouter();
//   const { id } = router.query;

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('email', email);
//     formData.append('password', password);
//     formData.append('address', address);
//     formData.append('salary', salary);
//     formData.append('doctorrating', doctorRating);
//     formData.append('juniorrank', juniorRank);
//     formData.append('employee', employee);
//     formData.append('age', age);
//     formData.append('phonenumber', phoneNumber);

//     try {
//       const response = await axios.put(`/api/employee/insertemployee2/${id}`, formData);
//       console.log(response.data);
//       // TODO: handle success case
//     } catch (error) {
//       console.error(error);
//       // TODO: handle error case
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <label>
//         Password:
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </label>
//       <label>
//         Address:
//         <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
//       </label>
//       <label>
//         Salary:
//         <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
//       </label>
//       <label>
//         Doctor Rating:
//         <input type="number" value={doctorRating} onChange={(e) => setDoctorRating(e.target.value)} />
//       </label>
//       <label>
//         Junior Rank:
//         <input type="number" value={juniorRank} onChange={(e) => setJuniorRank(e.target.value)} />
//       </label>
//       <label>
//         Employee:
//         <input type="text" value={employee} onChange={(e) => setEmployee(e.target.value)} />
//       </label>
//       <label>
//         Age:
//         <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
//       </label>
//       <label>
//         Phone Number:
//         <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//       </label>
//       <button type="submit">Update Employee</button>
//     </form>
//   );
// }
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import EmployeeForm from '../../components/EmployeeForm';

// export default function EditEmployee() {
//   const [employeeData, setEmployeeData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { id } = useRouter().query;

//   useEffect(() => {
//     const fetchEmployeeData = async () => {
//       try {
//         const response = await axios.get(`/api/employee/getemployeebyid/${id}`);
//         setEmployeeData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setError('An error occurred while fetching employee data');
//         setLoading(false);
//       }
//     };

//     fetchEmployeeData();
//   }, [id]);

//   if (loading) {
//     return <p>Loading employee data...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div>
//       <h1>Edit Employee</h1>
//       <EmployeeForm employeeData={employeeData} />
//     </div>
//   );
// }
