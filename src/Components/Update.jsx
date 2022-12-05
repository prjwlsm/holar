import React from 'react';
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import useFetch from './useFetch'
import '../App.css'

let Update=()=>{
   
    let{id1}=useParams();
    let navigate=useNavigate()
    let {datas} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id1}`)



  let uId = useRef();
  let title = useRef();
  let body = useRef();

 let handleSubmit=(e)=>{
       e.preventDefault()

       let newPost={
        "userId": uId.current.value,
        "title": title.current.value,
          "body": body.current.value
       }

       fetch(`https://jsonplaceholder.typicode.com/posts/${id1}` , { method : "PUT",
                                                   headers :{"Content-Type" : "application/json" ,"Accept-Type" : "application/json" },
                                                   body : JSON.stringify(newPost)
                                                 } )
                                                 .then((response) => response.json())
                                                .then((json)=>{
                                                  console.log(json);
                                                 alert(" product has been Updated");
                                                 navigate('/')

        })                  

 }


  return (
    <div >
      <form  id='update' action="">
      <label htmlFor="uerid"> UserID :</label>
      <input  id='uerid' type="number"   ref={uId} defaultValue={datas?.userId}/>
     
      <label htmlFor="title">Title  :</label>
      <input id='title' type="text" ref={title} defaultValue={datas?.title}  />

      <label htmlFor="body">Body   :</label>
      <textarea  id="body" cols="30" rows="10" ref={body}  defaultValue={datas?.body} ></textarea>
      
      <input id='upd' type="submit" value='UPDATE' onClick={handleSubmit} />
      </form>

    </div>
  )

}
export default Update;