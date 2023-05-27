import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AddEmployee() {
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
        formData.append("gender", data.gender);
        formData.append("date", data.getDate);
        formData.append("age",data.age);
        formData.append("gender", data.gender);
        formData.append("phonenumber", data.phonenumber);
        formData.append("myfile", data.myfile[0]);
        // console.log(data.AddAdmin.getDate);
        console.log(formData);
        try {
            const response = await axios.post(
                "http://localhost:3000/employee/signup",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setSuccess("EMPLOYEE add successfully");
            reset();
        } catch (error) {
            console.log(error.response.data.message);
            setSuccess("Employee add unsuccessfull " + error.response.data.message);
        }
    };

   
    return (
        <>
            {/* <h1>Add Admin</h1> */}
            {/* <h2 className="text-3xl font-bold mb-4">Registration Form</h2> */}
            <h1 class="text-4xl font-bold text-center my-5">Registration Form</h1>

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
                            {/* <label htmlFor="profilepic">File: </label> */}
                                <label className="" htmlFor="myfile">File</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    type="file"
                                    id="myfile"
                                    placeholder="Your Name" aria-label="name"
                                    {...register("myfile", { required: true })}
                                />

                                {errors.myfile && (
                                    <p className="text-red-500">
                                        {errors.myfile.type === "required"
                                            ? "file is required"
                                            : "invalid file"}
                                    </p>
                                )}
                            </div>
                            <div className="w-full md:w-1/2 px-8">
                                <label>Gender: </label>
                                <label className="text-sm block text-gray-600" htmlFor="male">Male</label>
                                <input
                                    className="flex items-center rounded"
                                    // id="cus_email" 
                                    // name="cus_email" 
                                    // type="text" 
                                    type="radio"
                                    value="male"
                                    id="male"
                                    required="" aria-label="Gender" checked
                                    {...register("gender", { resquired: true })}
                                />
                                {errors.gender && <p className="text-red-500">{errors.gender.type === "required"}</p>}

                                <label className=" text-sm block text-gray-600" htmlFor="female">Female</label>
                                <input
                                    className="flex items-center rounded"
                                    // id="cus_email" 
                                    // name="cus_email" 
                                    // type="text" 
                                    type="radio"
                                    value="female"
                                    id="female"
                                    required="" aria-label="Gender"
                                    {...register("gender", { required: true })}
                                />
                                {errors.gender && <p className="text-red-500">{errors.gender.type === "required"}</p>}
                            </div>
                        </div>

                    </div>
                    {/* <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            submit
                        </span>
                    </button> */}

                    <div class="flex items-center justify-center">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                        </button>
                    </div>

                </form>
                <div className="mt-4">
                    {/* <button
                        className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="button"
                        onClick={() => router.back()}>Click here to go back
                        </button> */}
                </div>
            </div>

            <button
                        className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="button"
                        onClick={() => router.back()}>Click here to go back
                        </button>

        </>
    );
}
