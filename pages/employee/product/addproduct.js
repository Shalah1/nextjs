import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AddProducts() {
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
        formData.append("namep", data.namep);
        formData.append("ProductDescription", data.ProductDescription);
        formData.append("ProductPrice", data.ProductPrice);
        formData.append("ProductCategory", data.ProductCategory);
        formData.append("ProductAvailability", data.ProductAvailability);
        formData.append("employee", data.employee);
        formData.append("Productreviews", data.Productreviews);
        formData.append("myfile", data.myfile[0]);
        // console.log(data.AddAdmin.getDate);
        console.log(formData);
        try {
            const response = await axios.post(
                "http://localhost:3000/employee/insertProduct",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setSuccess("PRODUCT add successfully");
            reset();
        } catch (error) {
            console.log(error.response.data.message);
            setSuccess("PRODUCT unsuccessfull " + error.response.data.message);
        }
    };

    return (
        <>
       
            <h1 class="text-4xl font-bold text-center my-5">PRODUCT-MEDICINE</h1>

            {success}
            <div className="leading-loose flex justify-center">
                <form className="max-w-xl my-1 m-4 p-10 bg-white rounded w-full shadow-xl " onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

                    <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">

                            <label className="block text-sm text-gray-00" htmlFor="namep">Product Name</label>
                            <input
                                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                id="namep"
                                type="text" placeholder="@URname" aria-label="namep"
                                {...register("namep", { required: true })}
                            />
                            {errors.namep && <p className="text-red-500">Name is required</p>}
                        </div>
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
                            </div>
                            <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-sm text-gray-00" htmlFor="ProductCategory">ProductCategory</label>
                            <textarea
                                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                id="ProductCategory"
                                type="text" placeholder="ProductCategory" aria-label="name"
                                {...register("ProductCategory", { required: true })}
                            />
                            {errors.ProductCategory && <p className="text-red-500">ProductCategory is required</p>}
                        </div>
                        </div>
                        <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-sm text-gray-00" htmlFor="ProductAvailability">ProductAvailability</label>
                            <textarea
                                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                id="ProductAvailability"
                                type="text" placeholder="ProductAvailability" aria-label="name"
                                {...register("ProductAvailability", { required: true })}
                            />
                            {errors.ProductAvailability && <p className="text-red-500">ProductAvailability is required</p>}
                        </div>
                        </div>
                        <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-sm text-gray-00" htmlFor="Productreviews">Productreviews</label>
                            <textarea
                                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                id="Productreviews"
                                type="text" placeholder="Productreviews" aria-label="name"
                                {...register("Productreviews", { required: true })}
                            />
                            {errors.Productreviews && <p className="text-red-500">Productreviews is required</p>}
                        </div>
                        </div>
                        <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-sm text-gray-00" htmlFor="ProductDescription">ProductDescription</label>
                            <textarea
                                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                id="ProductDescription"
                                type="number" placeholder="ProductDescription" aria-label="name"
                                {...register("ProductDescription", { required: true })}
                            />
                            {errors.ProductDescription && <p className="text-red-500">ProductDescription is required</p>}
                        </div>
                        </div>
                        <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-sm text-gray-00" htmlFor="ProductPrice">ProductPrice</label>
                            <textarea
                                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                id="ProductPrice"
                                type="number" placeholder="ProductPrice" aria-label="name"
                                {...register("ProductPrice", { required: true })}
                            />
                            {errors.ProductPrice && <p className="text-red-500">ProductPrice is required</p>}
                        </div>
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

                        