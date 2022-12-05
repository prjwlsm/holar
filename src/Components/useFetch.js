
import  { useEffect, useState } from "react";


const useFetch = (request) => {
   
    
        let[datas,setDatas]=useState(null)
        let[err,handlErr]=useState(null)
    
        useEffect(( )=>{


              fetch(request )
            //fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) =>
            {
            if(response.ok === true )
            {
              return response.json();
            }
            else
            {
              throw Error("data not found , please search for different keyword")
            }
        })
            .then((json) =>{ 
                  
                   setDatas(json)
                   console.log(datas);
              })
              .catch((err)=> 
              {
                console.log(err)
                handlErr(err)
              } )
                     
        },[])


  return {datas,err};

}

export default useFetch;
