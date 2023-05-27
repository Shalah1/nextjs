// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";

// export default function EditCampaign() {
//   const router = useRouter();
//   const [campaignData, setCampaignData] = useState(null);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const { id } = router.query;
//     async function fetchCampaign() {
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/employee/campaign/${id}`
//         );
//         setCampaignData(response.data);
//       } catch (error) {
//         console.log(error.response.data.message);
//       }
//     }
//     if (id) {
//       fetchCampaign();
//     }
//   }, [router.query]);

//   const onSubmit = async (data) => {
//     console.log(data);
//     const formData = new FormData();
//     formData.append("nameC", data.nameC);
//     formData.append("date", data.date);
//     formData.append("speaciality", data.speaciality);
//     formData.append("importance", data.importance);
//     formData.append("employee", data.employee);
//     if (data.myfile && data.myfile[0]) {
//       formData.append("myfile", data.myfile[0]);
//     }
//     console.log(formData);
//     const { id } = router.query;
//     try {
//       const response = await axios.put(
//         `http://localhost:3000/employee/campaign/${id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setSuccess("CAMPAIGN updated successfully");
//       setError("");
//       reset();
//     } catch (error) {
//       console.log(error.response.data.message);
//       setError("CAMPAIGN update failed " + error.response.data.message);
//     }
//   };

//   return (
//     <>
//         <h1>EDITED EMPLOYEE</h1>
//         {success}
//         <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
//             {/* nameC */}
//             <div>
//                 <label htmlFor="nameC">Name</label>
//                 <input
//                     type="text"
//                     id="nameC"
//                     {...register("nameC", { required: true })}
//                 />
//                 {errors.nameC && <p>Name is required</p>}
//             </div>
        
//             <div>
//                 <label htmlFor="date">DATE</label>
//                 <input type="date" id="date" placeholder="DAY" required=""
//                     {...register('date', { required: true})}
//                 />
//                 {errors.date && (
//                     <p>
//                         {errors.date.type === 'required'
//                             ?
//                             <p>day is required</p>
//                             :
//                             <p>Invalid</p>
//                         }
//                     </p>
//                 )}
//             </div>
//             {/* Age */}
//             { <div>
//                 <label htmlFor="employee">employee</label>
//                 <input
//                     type="employee"
//                     id="employee"
//                     {...register("employee", { required: true })}
//                 />
//                 {errors.employee && <p>{errors.employee.type === "required"}</p>}
//             </div> }

//             {/* password */}
//             <div>
//                 <label htmlFor="speaciality">speaciality</label>
//                 <input
//                     type="speaciality"
//                     id="speaciality"
//                     {...register("speaciality", {
//                         required: true,
//                         //pattern: /((?=.*\d)|(?=.*\W+))(?![.\n]  )(?=.*[A-Z])(?=.*[a-z]).*$/,
//                         minLength: 3,
//                         maxLength:18,
//                     })}
//                 />
//                 {errors.speaciality && (
//                     <p>
//                         {errors.speaciality.type === "required"
//                             ? "speaciality is required"
//                             : "Invalid "}
//                     </p>
//                 )}
//             </div>
//             {/* address */}
//             <div>
//                 <label htmlFor="importance">importance</label>
//                 <textarea id="importance" {...register("importance", { required: true })} />
//                 {errors.importance && <p>importance is required</p>}
//             </div>
         
//             <div>
//                 <label htmlFor="myfile">File</label>
//                 <input
//                     type="file"
//                     id="myfile"
//                     {...register("myfile", { required: true})}
//                 />
//                 {errors.myfile && (
//                     <p>
//                         {errors.myfile.type === "required"
//                             ? "file is required"
//                             : "invalid file"}
//                     </p>
//                 )}
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//         <button type="button" onClick={() => router.back()}>
//             Click here to go back
//         </button>
//     </>
// );
// }
