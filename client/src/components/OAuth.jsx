import React from 'react';
import {GoogleAuthProvider, signInWithPopup, getAuth} from "firebase/auth";
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { logInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
  const dispatch = useDispatch()
  const auth = getAuth(app)
  const Navigate = useNavigate()

    const handleGoogleClicks = async () => {
      const provider = new GoogleAuthProvider()
      provider.setCustomParameters({prompt: 'select_accoutn'})
      try {
        const resultsFromGoogle = await signInWithPopup(auth, provider)
        const res = await fetch('/api/auth/google', {
          method: 'POST',
          headers: {'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: resultsFromGoogle.user.displayName,
            email: resultsFromGoogle.user.email,
            googlePhotoURL: resultsFromGoogle.user.photoURL,
          }),
        })
        const data = await res.json()
        if(res.ok) {
          dispatch(logInSuccess(data));
          Navigate('/')
        }
      } catch(error) {
          console.log(error);
        }
      }

  return (
    <button type='button' className='google-btn' onClick={handleGoogleClicks}>Continue with Google</button>
  )
}

export default OAuth;