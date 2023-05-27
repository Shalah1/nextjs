import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import MyLayout from '@/pages/components/layout';
import UserLayoutINTERNS from '@/pages/components/userlayoutinterns';
// import MyLayout from '@/pages/Components/layout';
// import UserLayout from '@/pages/Components/UserLayout';

export default function FindDoctors({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // redirect to the same page with query params containing the input value
    router.push({
      pathname: 'findemployee2byid',
      query: { inputValue: inputValue }
    });
  }
  return (
    <>
     <MyLayout />
     <div className="flex justify-center">
  <form onSubmit={handleFormSubmit} className="w-full max-w-sm">
    <div className="flex items-center border-b-2 border-blue-500 py-2">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter Data"
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
      />
      <button
        type="submit"
        className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
      >
        Fetch Data
      </button>
    </div>
  </form>
</div>

      {data.status == null? 
   <UserLayoutINTERNS data={data}/>
      : data.status }
    </>
  );
}

  export async function getServerSideProps({ query }) {
    const inputValue = query.inputValue;
    try {
  
      const response = await axios.get('http://localhost:3000/employee/findemployee2/'+inputValue);
      const data = await response.data;
    return { props: { data } }


    } catch (error) {

    return {
      props: {
        data: {status:"Enter valid id"}
      }
    };
  }
  }
