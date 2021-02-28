// import React from 'react'

import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  useEffect(() => {
    document.title = 'Login';
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault();
        
    try {
        await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
        history.push(ROUTES.COLLECTION_FORM);
      } catch (error) {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      }
    }

  
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">

        <div className="flex flex-col items-center bg-white p-4 border mb-4">
          <h1 className="flex justify-center ">
            RentificatR
          </h1>
           {error && <p className="mb-4 text-xs text-red-500">{error}</p>}     
          <form onSubmit={handleLogin} method="POST">
            <input
                        aria-label="Enter your email address"
                        className="text-sm mr-3 w-full py-5 px-4 h-2 border rounded mb-2"
                        type="text"
                        placeholder="Email address"
                        value = {emailAddress}
                        onChange = {({target}) => setEmailAddress(target.value)}
            />
            <input
                        aria-label="Enter your password"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                        type="password"
                        placeholder="Password"
                        value = {password}
                        onChange = {({target}) => setPassword(target.value)}
            />
            <button
                        type="submit"
                        className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${isInvalid && 'cursor-not-allowed opacity-50'}`}
            >
              Log In
            </button>
          </form>
        
      </div>
    </div>
  )
}