import React from 'react'
import { Link, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';

const BlogView = () => {
  let{id}=useParams();
  let navigate=useNavigate()
  let {datas} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
 

  let deletePost =(id)=>{
    
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}` , {method:"DELETE"})
      .then((res)=>{ 
         console.log(res.json()) 
          alert("item has been deleted");
         navigate('/')
          
      });
  } 

  return (
    <div id='view'>
           <hr />
                <h2>{datas?.title}</h2>
                <p>{datas?.body}</p>
                <div>
             <Link to={`/update${datas?.id}`} ><button>Edit post</button> </Link>
                <button onClick={()=> deletePost(datas.id) } >Delete post</button>
                </div>
            <hr />
    </div>
  )
}

export default BlogView
