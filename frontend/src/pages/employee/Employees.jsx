import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Employees = () => {
    const [name,setName]=useState('');
    const [data,setData]=useState([]);
    const handleSearch=async()=>{
        try{
            const response=await fetch(`http://localhost:8080/api/employee/search?name=${name}`);
            const data=await response.json();
            if(response.ok){
                setData(data);
            }
        }catch(error){
            toast.error(error);
        }
    }
  return (
    <div className='max-w-xl mx-auto mt-10 p-6 bg-white'>
        <h1 className='text-blue-600 text-2xl font-bold text-center mb-6'>Find Employee</h1>
        <div className='flex items-center justify-center gap-4'>
            <input className='p-2 border rounded' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} value={name}/>
            <button onClick={handleSearch} className='border bg-blue-500 rounded-md p-2 text-white hover:bg-blue-600'>Search</button>
        </div>
        {data.length>0 ? (<table className='min-w-full divide-y divide-gray-700 border mt-4'>
            <thead>
                <tr>
                    <th className='px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider'>Name</th>
                    <th className='px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider'>Email</th>
                    <th className='px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider'>Phone Number</th>
                    <th className='px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider'>Department</th>
                </tr>
            </thead>
            <tbody className='divide-y divide-gray-700'>
                {data.map((employee)=>(
                    <tr>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>{employee.name}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>{employee.email}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>{employee.phone}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>{employee.department}</td>
                    </tr>
                ))}
            </tbody>
        </table>):<h1 className='flex items-center justify-center p-4 text-blue-600 bg-white shadow-md rounded-md mt-10 font-bold'>No data found!</h1>}
    </div>
  )
}

export default Employees