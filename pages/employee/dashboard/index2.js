import Link from "next/link"
import axios from "axios";

export default function ALLINTERNS({ data }) {

    return (
        <>
            <div className="bg-gray-100 p-8">
                <h1 className="text-2xl font-bold mb-4">E-GovT (BANGLADESH)</h1>
                <h1 className="text-2xl font-bold mb-4 text-blue-600 shadow-lg">INTERNS/JUNIORS INFO's</h1>

                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full whitespace-no-wrap">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                                    <th className="px-6 py-4 border">Name</th>
                                    <th className="px-6 py-4 border">email</th>
                                    <th className="px-6 py-4 border">password</th>
                                    <th className="px-6 py-4 border">address</th>
                                    <th className="px-6 py-4 border">salary</th>
                                    <th className="px-6 py-4 border">doctorrating</th>
                                    <th className="px-6 py-4 border">juniorrank</th>
                                    {/* <th className="px-6 py-4 border">speaciality</th> */}
                                    {/* <th className="px-6 py-4 border">employee</th> */}
                                    <th className="px-6 py-4 border">age</th>
                                    <th className="px-6 py-4 border">phonenumber</th>
                               
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y">
                                {data.map((item) => (
                                    <tr key={item.id} className="text-gray-700">
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.name}</td>
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.email}</td>
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.password}</td>
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.address}</td>
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.salary}</td>
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.doctorrating}</td>
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.juniorrank}</td>
                                        {/* <td className="px-6 py-4 border whitespace-no-wrap">{item.speaciality}</td> */}
                                        {/* <td className="px-6 py-4 border whitespace-no-wrap">{item.employee}</td> */}
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.age}</td>
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.phonenumber}</td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/employee/index2');
      const data = await response.data;
    
  return { props: { data } }
  }