import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { UserAuth } from '../Context/AuthContext'

const Navbar = () => {
  const{user,logOut}=UserAuth()

const handleLogout=async ()=>
{
  try{
          await logOut();
  }
  catch(err)
  {
    console.log(err);
  }
}

  return (
    <div id='nav'>
         <h1>HolaPort</h1>
         {user?.uid ? <button onClick={handleLogout}>Log-Out</button> : <Link to='/signin'> <button>Sign-In</button> </Link> }
         
         
    </div>
  )
}

export default Navbar
