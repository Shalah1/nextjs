import Link from "next/link"
import axios from "axios";

export default function GetALLDOCTORS({ data }) {

    return (
        <>
            <div className="bg-gray-100 p-8">
                <h1 className="text-2xl font-bold mb-4">E-GOVT (BANGLADESH)</h1>
                <h1 className="text-2xl font-bold mb-4 text-blue-600 shadow-lg">ALL DOCTOR INFO's</h1>

                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full whitespace-no-wrap">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                                    <th className="px-6 py-4 border">Name</th>
                                    <th className="px-6 py-4 border">email</th>
                                    <th className="px-6 py-4 border">Specialty</th>
                                    <th className="px-6 py-4 border">password</th>
                                    <th className="px-6 py-4 border"> address</th>
                                    {/* <th className="px-6 py-4 border">employee</th> */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y">
                                {data.map((item) => (
                                    <tr key={item.id} className="text-gray-700">
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.nameD}</td>
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.email}</td>
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.speaciality}</td>
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.password}</td>
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.address}</td>
                                        {/* <td className="px-6 py-4 border whitespace-no-wrap">{item.employee}</td>  */}
                                        {/* <td className="px-6 py-4 border whitespace-no-wrap"><img src={item.myfile} className="max-w-full h-auto" /></td> */}
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
 
      const response = await axios.get('http://localhost:3000/employee/DoctorIndex');
      const data = await response.data;
    
  return { props: { data } }
  }