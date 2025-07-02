import React,{useEffect, useState} from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateEmployee = () => {
  const [employee,setEmployee]=useState({name:'',email:'',phone:'',department:''});
  const {id}=useParams();
  const navigate=useNavigate();
    const handleChange=(e)=>{
        setEmployee({...employee,[e.target.name]:e.target.value});
    }
    const handleUpdate=async(e)=>{
        e.preventDefault();
        try{
        const response=await fetch(`http://localhost:8080/api/employee/update/${id}`,{
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(employee)
        });
        const data=await response.json();
        console.log(data);
        toast.success("Employee Updated");
        navigate('/');
        }
        catch(error){
            toast.error("Error");
        }
    }
    const getEmployee=async()=>{
        try{
            const response=await fetch(`http://localhost:8080/api/employee/${id}`);
            const data=await response.json();
            setEmployee(data);
        }catch(error){
            toast.error("Error fetching data");
        }

    }
    useEffect(()=>{
        getEmployee();
    },[id])
  return (
    <div className='max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md'>
        <h1 className='text-blue-600 text-2xl font-bold text-center mb-6'>Update Employee</h1>
        <form onSubmit={handleUpdate} className='space-y-3'>
            <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder='Name' className='p-2 w-full border rounded'/>
            <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder='Email' className='p-2 w-full border rounded'/>
            <input type="text" name="phone" value={employee.phone} onChange={handleChange} placeholder='Phone Number' className='p-2 w-full border rounded'/>
            <input type="text" name="department" value={employee.department} onChange={handleChange} placeholder='Department' className='p-2 w-full border rounded'/>
            <button type="submit" className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'>Update</button>
        </form>
    </div>
  )
}

export default UpdateEmployee