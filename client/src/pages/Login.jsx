import React, { useState } from 'react';
import logo from '../assets/Tujibonge LOGO.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logInStart, logInSuccess, logInFailure } from '../redux/user/userSlice';

const Login = () => {
  const [formData, setFormData] = useState({});
  const { loading, error: erroMessage} = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim() });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!formData.email || !formData.password) {
      return dispatch(logInFailure('Please fill all the fileds'));
    }
    try {
      dispatch(logInStart());
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(logInFailure(data.message));
      }
      if(res.ok) {
        navigate('/');
      }
    } catch (error) {
      dispatch(logInFailure(error.message));
    }
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
              <label htmlFor="email">Email</label>
              <input type="email" id='email' placeholder='name@company.com' required onChange={handleChange} />
            </div>
            <div className='form-inputs flex flex-col gap-1 mb-5'>
              <label htmlFor="email">Password</label>
              <input type="password" id='password' placeholder='Enter password' required onChange={handleChange} />
            </div>
            <div className="btn-div">
              <button className='btn' type='submit' disabled={loading}>Login</button>
            </div>
          </form>
        <p className='pt-5 font-medium'>Don't have an Account? <span className='text-red-700 underline'><a href="/signup">Register here</a></span></p>
          <p className='error'>{erroMessage}</p>
        </div>
      </div>
    </div>
  )
}

export default Login;