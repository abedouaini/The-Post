import './HomePageCSS.css';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const HomePage = ()=>{
    const [Posts,setPosts] = useState(null)
    useEffect(()=>{
     fetch('http://localhost:8000/Posts')
     .then(res =>{
      return res.json();
     })
     .then(data =>{
        setPosts(data);
     }); 
    },[]);

    const ondelete = (Post)=>{
      fetch('http://localhost:8000/Posts/'+Post.id,{method:'DELETE'}).then(()=>{
    }).then(window.location.reload(false))}
return(
  <div className='Home'>
    <br/>
    <br/>
    <p className='a'><Link to = {`/PostForm`}>Add Post</Link></p>
    {Posts && Posts.map((Post)=>(
      <div className='Post'>
      <p className='Name'>Posted by: {Post.Fname} {Post.Lname}</p>
      <p className='Email'>Email: {Post.Email}</p>
      <p className='Message'>{Post.Message}</p>
      <button onClick={()=>ondelete(Post)}>Delete</button>
      <button className='b'><Link to ={`/EditPost/${Post.id}`}className='b'>Edit</Link></button>
      </div>
    ))}
  </div>
);}
export default HomePage;


