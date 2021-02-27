import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user'

export default function Header() {
  const {firebase} = useContext(FirebaseContext);
  const {user} = useContext(UserContext);


  return (
    <header className="h-16 bg-white border-b mb-8">
      <div className="container mx-auto max-width-lg h-full">
        <div className="flex justify-between h-full">
         
          <div className="text-gray text-center flex items-center align-items">
          { user ? (<>
            <Link to={ROUTES.COLLECTION_FORM}>
            <svg
              className="w-8 mr-6 text-black-light cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
            />
                                    </svg></Link>

 
                                    
            <button 
              type="button" 
              title = "Sign Out" 
              onClick = {() => firebase.auth().signOut()}
              onKeyDown = { (event) => {
                  if (event.key === 'Enter') {
                    firebase.auth().signOut();
                  }
                }
              }
            >
            <svg
              className="w-8 mr-6 text-black-light cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
            </svg>
            </button>
            
            </>) : (
            <>
              <Link to={ROUTES.LOGIN} aria-label="Log In"><button type = "button" className="bg-blue-500 font-bold text-sm rounded text-white w-20 h-8">Log In</button></Link>
              </>) }
          </div>
        </div>
      </div>
    </header>  
  )
}