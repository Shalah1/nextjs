import Link from "next/link"
import axios from "axios";

export default function ALLINTERNS({ data }) {

    return (
        <>
            <div className="bg-gray-100 p-8">
                <h1 className="text-2xl font-bold mb-4">E-GovT (BANGLADESH)</h1>
                <h1 className="text-2xl font-bold mb-4 text-blue-600 shadow-lg">PRODUCT INFO's</h1>

                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full whitespace-no-wrap">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                                    <th className="px-6 py-4 border">Name</th>
                                    <th className="px-6 py-4 border">ProductDescription</th>
                                    <th className="px-6 py-4 border">ProductPrice</th>
                                    <th className="px-6 py-4 border">ProductCategory</th>
                                    <th className="px-6 py-4 border">ProductAvailability</th>
                                    <th className="px-6 py-4 border">employee</th>
                                    <th className="px-6 py-4 border">Productreviews</th>
                                    {/* <th className="px-6 py-4 border">speaciality</th> */}
                                    {/* <th className="px-6 py-4 border">employee</th> */}
                                    <th className="px-6 py-4 border">myfile</th>
                                 
                               
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y">
                                {data.map((item) => (
                                    <tr key={item.id} className="text-gray-700">
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.namep}</td>
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.ProductDescription}</td>
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.ProductPrice}</td>
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.ProductCategory}</td>
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.ProductAvailability}</td>
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.employee}</td>
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.Productreviews}</td>
                                        {/* <td className="px-6 py-4 border whitespace-no-wrap">{item.speaciality}</td> */}
                                        {/* <td className="px-6 py-4 border whitespace-no-wrap">{item.employee}</td> */}
                                        <td className="px-6 py-4 border whitespace-no-wrap">{item.myfile}</td>
                                      
                                        
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
 
      const response = await axios.get('http://localhost:3000/employee/ProductIndex');
      const data = await response.data;
    
  return { props: { data } }
  }