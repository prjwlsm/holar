import React from 'react'
import { Link } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext'


const Account = () => {

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
  };


  return (
    <div id='account'>
      <h1>Account page</h1>
      
     <p>Welcome, {user?.displayName}</p>
     <button onClick={handleLogout}  id='abtn1'>LogOut</button>
    { user && <Link to='/'>  <button id='abtn2' >Go to Home</button> </Link>}
      
    </div>
  )
}

export default Account