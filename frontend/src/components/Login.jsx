import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

import { RiLockPasswordLine } from "react-icons/ri";

import { MdOutlineEmail } from "react-icons/md";

const Login = () => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

  Axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
e.preventDefault()
 Axios.post("http://localhost:3000/auth/login", {
 email, 
 password,
    }).then(response => {
        if(response.data.status) {
            navigate('/home')
        }
    }).catch(err => {
        console.log(err)
    })
       
    }
  return (
    <div className='sign-up-container'>
      <form className='sign-up-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
    

        <label htmlFor="email"><MdOutlineEmail size={20} className='absolute mt-4 ml-56'/></label>
        <input type="email" autoComplete='off' placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="Password"><RiLockPasswordLine  size={20} className='absolute mt-4 ml-56'/></label>
        <input type="password" autoComplete='off' placeholder='******'
        onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit' className='bg-blue-500' id='button1'>Login</button>
        <Link to="/forgotPassword" className='text-blue-500'>Forgot Password?</Link>
        <p className='text-white'>Don' t Have Account<Link to="/" className='underline text-blue-500'>Sign Up</Link></p> 
      </form>
    </div>
  )
}

export default  Login;
