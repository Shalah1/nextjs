import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AddCampaign() {
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
        formData.append("nameC", data.nameC);
        formData.append("date", data.date);
        formData.append("speaciality", data.speaciality);
        formData.append("importance", data.importance);
        formData.append("employee", data.employee);
        formData.append("myfile", data.myfile[0]);
        // console.log(data.AddAdmin.getDate);
        console.log(formData);
        try {
            const response = await axios.post(
                "http://localhost:3000/employee/insertCampaign",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setSuccess("CAMPAIGN add successfully");
            reset();
        } catch (error) {
            console.log(error.response.data.message);
            setSuccess("CAMPAIGN add unsuccessfull " + error.response.data.message);
        }
    };

//     return (
//         <>
//             <h1>Add EMPLOYEE</h1>
//             {success}
//             <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
//                 {/* nameC */}
//                 <div>
//                     <label htmlFor="nameC">Name</label>
//                     <input
//                         type="text"
//                         id="nameC"
//                         {...register("nameC", { required: true })}
//                     />
//                     {errors.nameC && <p>Name is required</p>}
//                 </div>
            
//                 <div>
//                     <label htmlFor="date">DATE</label>
//                     <input type="date" id="date" placeholder="DAY" required=""
//                         {...register('date', { required: true})}
//                     />
//                     {errors.date && (
//                         <p>
//                             {errors.date.type === 'required'
//                                 ?
//                                 <p>day is required</p>
//                                 :
//                                 <p>Invalid</p>
//                             }
//                         </p>
//                     )}
//                 </div>
//                 {/* Age */}
//                 { <div>
//                     <label htmlFor="employee">employee</label>
//                     <input
//                         type="employee"
//                         id="employee"
//                         {...register("employee", { required: true })}
//                     />
//                     {errors.employee && <p>{errors.employee.type === "required"}</p>}
//                 </div> }

//                 {/* password */}
//                 <div>
//                     <label htmlFor="speaciality">speaciality</label>
//                     <input
//                         type="speaciality"
//                         id="speaciality"
//                         {...register("speaciality", {
//                             required: true,
//                             //pattern: /((?=.*\d)|(?=.*\W+))(?![.\n]  )(?=.*[A-Z])(?=.*[a-z]).*$/,
//                             minLength: 3,
//                             maxLength:18,
//                         })}
//                     />
//                     {errors.speaciality && (
//                         <p>
//                             {errors.speaciality.type === "required"
//                                 ? "speaciality is required"
//                                 : "Invalid "}
//                         </p>
//                     )}
//                 </div>
//                 {/* address */}
//                 <div>
//                     <label htmlFor="importance">importance</label>
//                     <textarea id="importance" {...register("importance", { required: true })} />
//                     {errors.importance && <p>importance is required</p>}
//                 </div>
             
//                 <div>
//                     <label htmlFor="myfile">File</label>
//                     <input
//                         type="file"
//                         id="myfile"
//                         {...register("myfile", { required: true})}
//                     />
//                     {errors.myfile && (
//                         <p>
//                             {errors.myfile.type === "required"
//                                 ? "file is required"
//                                 : "invalid file"}
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
   
        <h1 class="text-4xl font-bold text-center my-5">CAMPAIGN ADD</h1>

        {success}
        <div className="leading-loose flex justify-center">
            <form className="max-w-xl my-1 m-4 p-10 bg-white rounded w-full shadow-xl " onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

                <div className="flex flex-wrap -mx-2 mb-4">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">

                        <label className="block text-sm text-gray-00" htmlFor="nameC">CAMPAIGN Name</label>
                        <input
                            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                            id="nameC"
                            type="text" placeholder="@URname" aria-label="nameC"
                            {...register("nameC", { required: true })}
                        />
                        {errors.nameC && <p className="text-red-500">CAMPAIGN is required</p>}
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
                            <label className=" block text-sm text-gray-600" htmlFor="date">date</label>
                            <input
                                className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                                id="date"
                                type="date" required="" placeholder="date" aria-label="date"
                                {...register("date", { required: true })}
                            />
                            {errors.date &&<p className="text-red-500">date is required</p>}
                        </div>
                        </div>

                        
                        <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className=" block text-sm text-gray-600" htmlFor="speaciality">speaciality</label>
                            <input
                                className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                                id="speaciality"
                                type="speaciality" required="" placeholder="speaciality" aria-label="speaciality"
                                {...register("speaciality", { required: true })}
                            />
                            {errors.speaciality &&<p className="text-red-500">speaciality is required</p>}
                        </div>
                        </div>

                        <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className=" block text-sm text-gray-600" htmlFor="importance">importance</label>
                            <input
                                className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                                id="importance"
                                type="importance" required="" placeholder="importance" aria-label="importance"
                                {...register("importance", { required: true })}
                            />
                            {errors.importance &&<p className="text-red-500">importance is required</p>}
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
