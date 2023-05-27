import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
//import UserLayoutINTERNS from "@/pages/components/userlayoutinterns";
import tailwindConfig from "@/tailwind.config";

export default function AddEmployee2() {
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
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("address", data.address);
        formData.append("salary", data.salary);
         formData.append("doctorrating", data.doctorrating);
        formData.append("juniorrank", data.juniorrank);
        formData.append("employee", data.employee);
        formData.append("age",data.age);
        formData.append("phonenumber", data.phonenumber);
        
        // console.log(data.AddAdmin.getDate);
        console.log(formData);
        try {
            const response = await axios.post(
                "http://localhost:3000/employee/insertemployee2",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            setSuccess("INTERNS add successfully");
            reset();
        } catch (error) {
            console.log(error.response.data.message);
            setSuccess("INTERN add unsuccessfull " + error.response.data.message);
        }
    };

    return (
        <>
            {/* <h1>Add Admin</h1> */}
            {/* <h2 className="text-3xl font-bold mb-4">Registration Form</h2> */}
            <h1 class="text-4xl font-bold text-center my-5">JUNIORS ADD</h1>

            {success}
            <div className="leading-loose flex justify-center">
                <form className="max-w-xl my-1 m-4 p-10 bg-white rounded w-full shadow-xl " onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

                    <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">

                            <label className="block text-sm text-gray-00" htmlFor="name">Name</label>
                            <input
                                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                id="name"
                                type="text" placeholder="@URname" aria-label="name"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <p className="text-red-500">Name is required</p>}
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
                            <label className=" block text-sm text-gray-600" htmlFor="age">Age</label>
                            <input
                                className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                                id="age"
                                type="age" required="" placeholder="age" aria-label="Age"
                                {...register("age", { required: true })}
                            />
                            {errors.age &&<p className="text-red-500">Age is required</p>}
                        </div>


                        <div className="w-full md:w-1/2 px-2">
                            <label className="block text-sm text-gray-00" htmlFor="phonenumber">phone number</label>
                            <input
                                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                id="phonenumber"
                                type="tel" placeholder="num" aria-label="name"
                                {...register("phonenumber", { required: true })}
                            />
                            {errors.name && <p className="text-red-500">phone number is required</p>}
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
                        <div className="w-full md:w-1/2 px-2">
  <label className="block text-sm text-gray-600" htmlFor="salary">Salary</label>
  <input
    className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
    type="number"
    id="salary"
    placeholder="Enter your salary"
    {...register("salary", {
      required: true,
      min: 0,
    })}
  />
  {errors.salary && (
    <p className="text-red-500">
      {errors.salary.type === "required"
        ? "Salary is required"
        : "Salary must be greater than or equal to 0"}
    </p>
  )}
</div>
<div className="w-full md:w-1/2 px-2">
  <label className="block text-sm text-gray-600" htmlFor="doctorrating">Doctor Rating</label>
  <input
    className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
    type="number"
    id="doctorrating"
    placeholder="Enter doctor rating"
    {...register("doctorrating", {
      required: true,
      min: 0,
      max: 5,
    })}
  />
  {errors.doctorrating && (
    <p className="text-red-500">
      {errors.doctorrating.type === "required"
        ? "Doctor rating is required"
        : errors.doctorrating.type === "min"
        ? "Doctor rating must be greater than or equal to 0"
        : "Doctor rating must be less than or equal to 5"}
    </p>
  )}


</div>
<div className="w-full md:w-1/2 px-2">
  <label className="block text-sm text-gray-600" htmlFor="juniorrank">Junior Rank</label>
  <select
    className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
    id="juniorrank"
    {...register("juniorrank", { required: true })}
  >
    <option value="">-- Select junior rank --</option>
    <option value="Junior">Junior</option>
    <option value="intern">Senior</option>
    <option value="newlyjoined">Lead</option>
  </select>
  {errors.juniorrank && (
    <p className="text-red-500">Junior rank is required</p>
  )}
</div>



{/* ********** */}
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
