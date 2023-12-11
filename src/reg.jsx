import React, { useState } from 'react'
import axios from "axios"
import { Link , useNavigate } from 'react-router-dom'


function reg() {
  const [formData,setFormData] = useState({
    username : "",
    email : "",
    password : "",
  })
  const hp = useNavigate()
  const handleClick =(e)=>{
    setFormData({
        ...formData,
        [e.target.name ]: e.target.value
    })
}
const handleSubmit = async (e)=>{
  
    e.preventDefault()
    console.log("username:",formData.username); 
    console.log("email:",formData.email); 
    console.log("password:",formData.password); 
try{
const res = await axios(
{
    url : 'http://localhost:3007/user/register',
    method : 'POST',
    headers : {
        'Content-Type': 'application/json',
    },body : JSON.stringify(formData),
    data : formData
})
if(res.status >= 200 && res.status < 300){
    alert("successss");
    hp("/log")
}else{
    console.log("error in saving data");
}

}
catch(err){
    console.error("catch error",err);
}

}
    return (
    <>
        <div className='reg'>
    <h1>Register</h1>
    <input required placeholder='Username' type='text' value={formData.username} name='username' onChange={handleClick} />
    <input required placeholder='Email' type='email'name='email'value={formData.email} onChange={handleClick}/>
    <input required minLength={6} placeholder='Password' type='password' name='password' value={formData.password} onChange={handleClick}/>
    <button type='submit' onClick={handleSubmit}>Submit</button><br/>
    <button className='hbtn'><Link  to={"/"}>Back to Home Page</Link></button>
    </div>
         
    </>
    )
}

export default reg