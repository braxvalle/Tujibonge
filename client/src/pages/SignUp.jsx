import React from 'react'
import logo from '../assets/Tujibonge LOGO.png'

const SignUp = () => {
  return (
    <div className='main-item'>
      <div className="form-items bg-white p-10">
        <div className="left-form">
          <img className='w-96' src={logo} alt="logo" />
          <p className='w-2/4 py-8 text-xl'>Our community goal is always to save our Mental Health, We all need to be healthy and productive</p>
        </div>
        <div className="right-form">
          <h1>Welcome to Our Community</h1>
          <form>
            <div className='flex flex-col w-full'>
              <label htmlFor="username">User Name</label>
              <input type="text" id='username' placeholder='Username' required  />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor="email">Email</label>
              <input type="email" id='email' placeholder='name@company.com' required  />
            </div>
            <div className='flex flex-col w-full'>
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