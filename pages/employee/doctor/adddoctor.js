import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AddDoctor() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
  
    const [success, setSuccess] = useState("");
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append("nameD", data.nameD);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("speaciality", data.speaciality);
        formData.append("address", data.address);
        formData.append("employee", data.employee);
       
        console.log(formData);
        try {
            const response = await axios.post(
                "http://localhost:3000/employee/insertdoctor",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            setSuccess("DOCTOR add successfully");
            reset();
        } 
        catch (error) 
        {
            console.log(error.response.data.message);
            setSuccess("DOCTOR add unsuccessfull " + error.response.data.message);
        }
    };

//     return (
//         <>
//             <h1>Add Doctor</h1>
//             {success}
//             <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
//                 {/* name */}
//                 <div>
//                     <label htmlFor="nameD">nameD</label>
//                     <input
//                         type="text"
//                         id="nameD"
//                         {...register("nameD", { required: true })}
//                     />
//                     {errors.nameD && <p>NameD is required</p>}
//                 </div>
//                 {/* email */}
               
//                 <div>
//                     <label htmlFor="email">Your email</label>
//                     <input type="email" id="email" placeholder="name@company.com" required=""
//                         {...register('email', { required: true })}
//                     />
//                     {errors.email && (
//                         <p>
//                             {errors.email.type === 'required'
//                                 ?
//                                 <p>Email is required</p>
//                                 :
//                                 <p>Invalid email address</p>
//                             }
//                         </p>
//                     )}
//                 </div>
              
//                 {/* password */}
//                 <div>
//                     <label htmlFor="paassword">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         {...register("password", {
//                             required: true,
//                             //pattern: /((?=.*\d)|(?=.*\W+))(?![.\n]  )(?=.*[A-Z])(?=.*[a-z]).*$/,
//                             minLength: 3,
//                             maxLength:8,
//                         })}
//                     />
//                     {errors.password && (
//                         <p>
//                             {errors.password.type === "required"
//                                 ? "password is required"
//                                 : "Invalid password pattern"}
//                         </p>
//                     )}
//                 </div>
//                 {/* address */}
//                 <div>
//                     <label htmlFor="address">address</label>
//                     <textarea id="address" {...register("address", { required: true })} />
//                     {errors.address && <p>address is required</p>}
//                 </div>
//                {/* ////////////////////////////////// */}

//                { <div>
//                     <label htmlFor="employee">employee</label>
//                     <input
//                         type="employee"
//                         id="employee"
//                         {...register("employee", { required: true })}
//                     />
//                     {errors.employee && <p>{errors.employee.type === "required"}</p>}
//                 </div> }  

//                {/* ********************* */}
//                 <div>
//                     <label htmlFor="speaciality">speaciality</label>
//                     <input
//                         type="speaciality"
//                         id="speaciality"
//                         {...register("speaciality", { required: true})}
//                     />
//                     {errors.speaciality && (
//                         <p>
//                             {errors.speaciality.type === "required"
//                                 ? "speaciality is required"
//                                 : "invalid speaciality"}
//                         </p>
//                     )}
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//             <button type="button" onClick={() => router.back()}>
//                 Click here to go back
//             </button>
//         </>
//     );
// }
return (
    <>
        {/* <h1>Add Admin</h1> */}
        {/* <h2 className="text-3xl font-bold mb-4">Registration Form</h2> */}
        <h1 class="text-4xl font-bold text-center my-5">DOCTOR ADD</h1>

        {success}
        <div className="leading-loose flex justify-center">
            <form className="max-w-xl my-1 m-4 p-10 bg-white rounded w-full shadow-xl " onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

                <div className="flex flex-wrap -mx-2 mb-4">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">

                        <label className="block text-sm text-gray-00" htmlFor="nameD">DOCTOR Name</label>
                        <input
                            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                            id="nameD"
                            type="text" placeholder="@DRname" aria-label="nameD"
                            {...register("nameD", { required: true })}
                        />
                        {errors.name && <p className="text-red-500">DOC Name is required</p>}
                    </div>

                    <div className="w-full md:w-1/2 px-2">
                        <label className="block text-sm text-gray-600" htmlFor="email">Email</label>

                        <input
                            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                            type="email"
                            id="email"
                            placeholder="abc@gmail.com" aria-label="Email"
                            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                        />{errors.email && (
                            <p>
                                {errors.email.type === 'required'
                                    ? <p className="text-red-500">Email is required</p>
                                    : <p className="text-red-500">Invalid email address</p>
                                }
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-sm text-gray-00" htmlFor="address">Address</label>
                            <textarea
                                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                id="address"
                                type="text" placeholder="address" aria-label="name"
                                {...register("address", { required: true })}
                            />
                            {errors.address && <p className="text-red-500">address is required</p>}
                        </div>
                        </div>

                        <div className="w-full md:w-1/2 px-2">
                            <label className="block text-sm text-gray-600" htmlFor="password">Password</label>
                            <input
                                className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                                type="password"
                                id="password"
                                placeholder="*********" aria-label="Email"
                                {...register("password", {
                                    required: true,
                                 
                                    minLength: 2,
                                })} />
                            {errors.password && (
                                <p className="text-red-500">
                                    {errors.password.type === "required"
                                        ? "password is required"
                                        : "Invalid password pattern"}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-sm text-gray-00" htmlFor="employee">employee</label>
                            <textarea
                                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                id="employee"
                                type="text" placeholder="employee" aria-label="employee"
                                {...register("employee", { required: true })}
                            />
                            {errors.employee && <p className="text-red-500">employee is required</p>}
                        </div>
                        </div>



                        <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-sm text-gray-00" htmlFor="speaciality">speaciality</label>
                            <textarea
                                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                id="speaciality"
                                type="text" placeholder="speaciality" aria-label="name"
                                {...register("speaciality", { required: true })}
                            />
                            
                            {errors.speaciality && <p className="text-red-500">speaciality is required</p>}
                        </div>
                        </div>


                        {/* <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
  <label class="block text-sm font-medium text-gray-700" for="speaciality">speaciality</label>
  <select class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" id="speciality" name="speciality" {...register("speciality", { required: true })}>
    <option value="">Select a speciality</option>
    <option value="cardiologist">Cardiologist</option>
    <option value="dermatologist">Dermatologist</option>
    <option value="endocrinologist">Endocrinologist</option>
    <option value="gastroenterologist">Gastroenterologist</option>
    <option value="neurologist">Neurologist</option>
    <option value="ophthalmologist">Ophthalmologist</option>
    <option value="pediatrician">Pediatrician</option>
    <option value="psychiatrist">Psychiatrist</option>
    <option value="radiologist">Radiologist</option>
  </select>
  {errors.speaciality && <p class="mt-2 text-sm text-red-600" id="speaciality-error">Please select a speaciality.</p>}
</div> */}


<div class="flex items-center justify-center">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                        </button>
                    </div>

                </form>
                <div className="mt-4">
                    <button
                        className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="button"
                        onClick={() => router.back()}>Click here to go back
                        </button>
                </div>
            </div>



        </>
    );
}


