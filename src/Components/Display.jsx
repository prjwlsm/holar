import React from 'react'
import { Link } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
import '../App.css'


const Display = ({datas}) => {
    const{user} =UserAuth();
  
     console.log(datas)


    return(

        
    datas.map(({id,title,body})=>{
            
            return(
                <div id='posts' key={id}>
                    
                    <hr />
                <h2>{title}</h2>
                <h6>{body}</h6>
              {user? <Link to={`/view${id}`}><button> Edit</button></Link> : <p>sign to edit</p> }
                <hr />
               </div>  
            )
     })
    )
}
export default Display