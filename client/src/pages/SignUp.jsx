import React, { useState } from 'react'
import logo from '../assets/Tujibonge LOGO.png'

const SignUp = () => {
  const [formData, setFormData] = useState({});


  return (
    <div className='main-item'>
      <div className="form-items bg-white p-10">
        <div className="left-form">
          <img className='w-96' src={logo} alt="logo" />
          <p className='px-12 py-8 text-xl text-center'>Our community goal is always to save our Mental Health, We all need to be healthy and productive</p>
        </div>
        <div className="right-form">
          <h2>Welcome to Our Community</h2>
          <form>
            <div className='form-inputs flex flex-col gap-1 mb-5'>
              <label htmlFor="username">User Name</label>
              <input type="text" id='username' placeholder='Username' required  />
            </div>
            <div className='form-inputs flex flex-col gap-1 mb-5'>
              <label htmlFor="email">Email</label>
              <input type="email" id='email' placeholder='name@company.com' required  />
            </div>
            <div className='form-inputs flex flex-col gap-1 mb-5'>
              <label htmlFor="email">Password</label>
              <input type="password" id='password' placeholder='Enter password' required  />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;