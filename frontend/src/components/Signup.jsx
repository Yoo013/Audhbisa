import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Signup = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
e.preventDefault()
 Axios.post("http://localhost:3000/auth/signup", {
  username, 
 email, 
 password,
    }).then(response => {
        if(response.data.status) {
            navigate('/login')
        }
    }).catch(err => {
        console.log(err)
    })
       
    }
  return (
    <div className='sign-up-container'>
      <form className='sign-up-form' onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
        <label htmlFor="username"><FaRegUser size={18} className='absolute mt-4 ml-56'/></label>
        <input className='rounded' type="text" placeholder='Username'
        onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email"><MdOutlineEmail size={20} className='absolute mt-4 ml-56'/></label>
        <input className='rounded' type="email" autoComplete='off' placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="Password"><RiLockPasswordLine  size={20} className='absolute mt-4 ml-56'/></label>
        <input className='rounded' type="password" autoComplete='off' placeholder='******'
        onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit' className='bg-blue-500' id='button1'>Sign Up</button>
        <p className='text-white'>Have an Account? <Link to="/login" className='underline text-blue-500'>login</Link></p>
      </form> 
    </div>
  )
}

export default  Signup;
