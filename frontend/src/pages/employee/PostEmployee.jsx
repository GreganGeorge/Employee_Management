import React, { useState } from 'react'
import toast from 'react-hot-toast';


const PostEmployee = () => {
    const [employee,setEmployee]=useState({name:'',email:'',phone:'',department:''});
    const handleChange=(e)=>{
        setEmployee({...employee,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch("http://localhost:8080/api/employee",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(employee)
        })
        if(response.ok){
            toast.success("New Employee Added");
            setEmployee({name:'',email:'',phone:'',department:''});
        }
        else{
            toast.error("Error");
        }
    }
  return (
    <div className='max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md'>
        <h1 className='text-blue-600 text-2xl font-bold text-center mb-6'>Post New Employee</h1>
        <form onSubmit={handleSubmit} className='space-y-3'>
            <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder='Name' className='p-2 w-full border rounded'/>
            <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder='Email' className='p-2 w-full border rounded'/>
            <input type="text" name="phone" value={employee.phone} onChange={handleChange} placeholder='Phone Number' className='p-2 w-full border rounded'/>
            <input type="text" name="department" value={employee.department} onChange={handleChange} placeholder='Department' className='p-2 w-full border rounded'/>
            <button type="submit" className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'>Submit</button>
        </form>
    </div>
  )
}

export default PostEmployee