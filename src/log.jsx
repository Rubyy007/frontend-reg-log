import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
function log() {
    const hp = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleClick = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("email:", formData.email);
        console.log("password:", formData.password);
try{
    const res = await axios(
        {
            url: 'regi-login.vercel.app/user/login',
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(formData),
            data: formData
        })

    if (res.status >= 200 && res.status < 300) {
        alert("login success")
        hp("/home")
    } else if (res.status >= 400){
        alert("User Not Found or Wrong Password ")
    }else{
        alert("login error")
    }



}catch{err => {
    console.log("err in log req",err);
}}
       
    }
    return (
        <>
            <div className='reg'>
                <h1>Login</h1>

                <input placeholder='Email' required type='email' name='email' value={formData.email} onChange={handleClick} />
                <input placeholder='Password' type='password' name='password' value={formData.password} onChange={handleClick} />
                <button type='submit' onClick={handleSubmit}>Submit</button><br />
                <button className='hbtn'><Link to={"/"}>Back to Home Page</Link></button>
            </div>

        </>
    )
}

export default log
