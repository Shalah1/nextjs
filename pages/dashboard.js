import React from "react";
import { useRouter } from "next/router";
import Link from "next/link"

function App() {
  const router = useRouter();
  const logoutroute = () => {
    router.push("/employee/login/signout");
  };
  return (
//     
<div>
<nav className="bg-gray-800 py-4">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center">
      <button className="text-white font-bold bg-transparent border-none cursor-pointer focus:outline-none">
        Employee Dashboard
      </button>
      <div className="flex">
        <button
          onClick={logoutroute}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</nav>

<div className="container mx-auto mt-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    <Panel
      title="Campaign"
      onViewAll={() => window.location.href = '/employee/dashboard/campaignindex'}
      onAddNew={() => window.location.href = '/employee/campaign/addcampaign'}
      onDelete={() => window.location.href = '/employee/campaign/deletecampaign'}
    
  
     
    />
    <Panel
      title="Doctor"
      onViewAll={() => window.location.href = '/employee/dashboard/doctorindex'}
      onAddNew={() => window.location.href = '/employee/doctor/adddoctor'}
      onDelete={() => window.location.href = '/employee/doctor/deletedoctor'}
     
    />
    <Panel
      title="Product"
      onViewAll={() => window.location.href = '/employee/dashboard/productindex'}
      onAddNew={() => window.location.href = '/employee/product/addproduct'}
      onDelete={() => window.location.href = '/employee/product/deleteproduct'}
      
    />
    <Panel
      title="Interns"
      onViewAll={() => window.location.href = '/employee/dashboard/index2'}
      onAddNew={() => window.location.href = '/employee/interns/addemployee2'}
      onDelete={() => window.location.href = '/employee/interns/deleteemployee2'}
   

    />
    
  </div>
</div>
</div>
);
}


function Panel({ title, onViewAll, onAddNew, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="flex justify-between">
        <button
          onClick={onViewAll}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          View All
        </button>
        <button
          onClick={onAddNew}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add New
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
      <li>
                <Link href="finddashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        
                                <span className="flex-1 ml-3 whitespace-nowrap">FIND Dashboard</span>
                            </Link>
                        </li>
          
    </div>
  );
}

export default App;
