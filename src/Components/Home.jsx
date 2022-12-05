import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from '../Context/AuthContext'
import Display from "./Display";
import useFetch from "./useFetch";

const Home=()=>
{
    const{user} =UserAuth();
    let {datas} = useFetch("https://jsonplaceholder.typicode.com/posts")



    return(
        <div id="home">
        <h1 align='center' >Home Page</h1>
        <hr />
        {user && <Link to="/create"><input type="text" placeholder="click here to post something" /></Link>}
       { datas!=null &&   <Display  datas={datas} />  }
        
        </div>
    )
}
export default Home;