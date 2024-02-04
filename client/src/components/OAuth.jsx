import React from 'react';
import {GoogleAuthProvider, signInWithPopup, getAuth} from "firebase/auth";
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { logInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    <button type='button' className='google-btn' onClick={handleGoogleClicks}><p>Continue with Google </p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg></button>
  )
}

export default OAuth;