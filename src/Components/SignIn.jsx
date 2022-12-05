import React, { useContext, useEffect } from 'react'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom';
import '../App.css'


const SignIn = () => {
   const navigate =useNavigate();

    const {googleSignIn,user}=UserAuth()

const handleGsignIn=async ()=>{
   
    try{
       await googleSignIn()
    }
    catch(err)
    {
      console.log(err)
    }
}

useEffect(()=>{
 if(user!=null)
 {
  navigate('/account');
 }

},[user])


  return (
    <div id='signin'>
      <h1>Sign In Here</h1>
      <GoogleButton  onClick={handleGsignIn} />
    </div>
  )
}

export default SignIn
