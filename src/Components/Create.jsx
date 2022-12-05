import React from 'react'
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';


const Create = () => {
  let navigate=useNavigate()
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

       fetch(`https://jsonplaceholder.typicode.com/posts` , { method : "POST",
                                                   headers :{"Content-Type" : "application/json"} ,
                                                   body : JSON.stringify(newPost)
                                                 } )
                                                 .then((response) => response.json())
                                                .then((json)=>{
                                                  console.log(json);
                                                 alert("new product has been added");
                                                 navigate('/')

        })                  


 }


  return (
    <div>
      <form  id='creat' action="">
      <label htmlFor="uerid"> UserID</label>
      <input id='uerid' type="number"  ref={uId} />
     
      <label htmlFor="title">Title</label>
      <input id='title' type="text" ref={title}  />

      <label htmlFor="body">Title</label>
      <textarea  id="body" cols="30" rows="10" ref={body}></textarea>
      
      <input id='sum' type="submit" onClick={handleSubmit} />
      </form>

    </div>
  )
}

export default Create
