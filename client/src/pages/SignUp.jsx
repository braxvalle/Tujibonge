import React, { useState } from 'react'
import logo from '../assets/Tujibonge LOGO.png'

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [erroMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim() });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!formData.username || !formData.email || !formData.password) {
      return setErrorMessage(alert('Please fill all the fields as required'))
    }
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
    } catch (error) {}
  }

  return (
    <div className='main-item'>
      <div className="form-items bg-white p-10">
        <div className="left-form">
          <img className='w-96' src={logo} alt="logo" />
          <p className='px-12 py-8 text-xl text-center'>Our community goal is always to save our Mental Health, We all need to be healthy and productive</p>
        </div>
        <div className="right-form">
          <h2 className='text-center'>Welcome to Our Community</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-inputs flex flex-col gap-1 mb-5'>
              <label htmlFor="username">User Name</label>
              <input type="text" id='username' placeholder='Username' required onChange={handleChange} />
            </div>
            <div className='form-inputs flex flex-col gap-1 mb-5'>
              <label htmlFor="email">Email</label>
              <input type="email" id='email' placeholder='name@company.com' required onChange={handleChange} />
            </div>
            <div className='form-inputs flex flex-col gap-1 mb-5'>
              <label htmlFor="email">Password</label>
              <input type="password" id='password' placeholder='Enter password' required onChange={handleChange} />
            </div>
            <div className="btn-div">
              <button className='btn' type='submit'>Sign Up</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default SignUp;