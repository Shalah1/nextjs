import Image from 'next/image'

export default function UserLayout({data}) {
    console.log("fetch : ")
console.log(data)
// console.log(data[0].doctors)
   
    return (
        <>

            <div className='p-28'>

                    <div className="mx-auto w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
               
                        <div className="flex flex-col items-center pb-8">
                            {/* <img className=" py-1 px-1 w-24 h-18 mb-0 rounded-full shadow-lg" src={"http://localhost:3000/employee/getimage/" + data.filename} alt="me" width="150" height="150" /> */}
                            {data && data.filename &&
  <img className="py-1 px-1 w-24 h-18 mb-0 rounded-full shadow-lg" src={"http://localhost:3000/employee/getimage/" + data.filename} alt="me" width="150" height="150" />
}

<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Name : {data?.name}</h5>
<span className="text-sm text-gray-500 dark:text-gray-400">Email: {data?.email}</span>
<span className="text-sm text-gray-500 dark:text-gray-400">address: {data?.address}</span>
{/* <span className="text-sm text-gray-500 dark:text-gray-400">salary: {data?.salary}</span> */}

{/* <span className="mb-1 text-xl font-medium text-gray-900 dark:text-white">juniorrank : {data?.juniorrank}</span>        */}
<span className="mb-1 text-xl font-medium text-gray-900 dark:text-white">age : {data?.age}</span>
<span className="text-sm text-gray-500 dark:text-gray-400">phonenumber: {data?.phonenumber}</span>
<span className="text-sm text-gray-500 dark:text-gray-400">address: {data?.address}</span>
{/* <span className="text-sm text-gray-500 dark:text-gray-400">speaciality: {data?.speaciality}</span>
<span className="text-sm text-gray-500 dark:text-gray-400">importance: {data?.importance}</span>
<span className="text-sm text-gray-500 dark:text-gray-400">Age : {data?.age}</span>

<span className="text-sm text-gray-500 dark:text-gray-400">date : {data?.date}</span> */}
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</a>
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Delete</a>
                            </div>
                        </div>
                    </div>
                
            </div>
            {/* {data[0].doctors.map((item)=>(
                 <div>
                    { item.name   }
                    </div>

        ))} */}
        </>
    )
}
