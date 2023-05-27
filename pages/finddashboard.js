import React from "react";
import { useRouter } from "next/router";

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
        FIND Dashboard
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


   

     { <Panel
      title="FIND OPERATIONS"
      onViewAll={() => window.location.href = '/employee/dashboard/getusers'}
      onAddNew={() => window.location.href = '/employee/dashboard/findusers'}
      onDelete={() => window.location.href = '/employee/dashboard/findinterns'}
      onSort={() => window.location.href = '/employee/dashboard/findcampaignbyemp'}
      onform={() => window.location.href = '/employee/dashboard/findemployee2byid'}
      onprint={() => window.location.href = '/employee/dashboard/findemployeebydoc'}
      onApprove={() => window.location.href = '/employee/dashboard/finddoctorbyemployee'}
      
      /> }
  </div>
</div>
</div>
);
}

function Panel({ title, onViewAll, onAddNew, onDelete, onSort, onform, onprint, onApprove }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-20">
        <h2 className="text-lg font-bold mb-10">{title}</h2>
        <div className="flex justify-between mb-4">
          <button
            onClick={onViewAll}
            className="bg-gray-500 hover:bg-gray-10000 text-white font-bold py-2 px-5 rounded mr-2"
          >
            GETUSERS
          </button>
          <button
            onClick={onAddNew}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            findusers
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            findinterns
          </button>
          <button
            onClick={onSort}
            className="bg-yellow-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            findcampaignbyemp
          </button>
          <button
            onClick={onform}
            className="bg-blue-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            findemployee2byid
          </button>
          <button
            onClick={onprint}
            className="bg-cyan-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            findemployeebydoc
          </button>
          <button
            onClick={onApprove}
            className="bg-red-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            finddoctorbyemployee
          </button>
        </div>
      </div>
    );
  }
  

export default App;
