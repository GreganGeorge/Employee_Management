import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Display = () => {
    const [employees,setEmployees]=useState([]);
    const navigate=useNavigate();
    const getEmployees=async()=>{
        try{
            const response=await fetch("http://localhost:8080/api/employees");
            const data=await response.json();
            setEmployees(data);
        }catch(error){
            toast.error("Error fetching data");
        }
    }
    const handleDelete=async(id)=>{
        try{
            const response=await fetch(`http://localhost:8080/api/employee/${id}`,{
                method:"DELETE",
            })
            if(response.ok){
                setEmployees((prevEmployees)=>
                prevEmployees.filter((employee)=>employee.id!==id))
            }
            toast.success(`Employee with Employee Id ${id} deleted successfully`);
        }catch(error){
            toast.error("Error occured");
        }
    }
    const handleUpdate=(id)=>{
        navigate(`/update/${id}`);
    }
    useEffect(()=>{
        getEmployees();
    },[]);
  return (
    <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-700'>
            <thead>
                <tr>
                    <th className='px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider'>Name</th>
                    <th className='px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider'>Email</th>
                    <th className='px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider'>Phone Number</th>
                    <th className='px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider'>Department</th>
                    <th className='px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider'>Actions</th>
                </tr>
            </thead>
            <tbody className='divide-y divide-gray-700'>
                {employees.map((employee)=>(
                    <tr>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>{employee.name}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>{employee.email}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>{employee.phone}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>{employee.department}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-2'>
                            <button className='border border-green-700 rounded-md text-green-700 px-3 py-1 hover:bg-gray-100' onClick={()=>handleUpdate(employee.id)}>Update</button>
                            <button className='border border-red-700 rounded-md text-red-700 px-3 py-1 hover:bg-gray-100' onClick={()=>handleDelete(employee.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Display