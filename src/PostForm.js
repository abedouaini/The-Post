import './App.css';
import './PostFormCSS.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const PostForm = ()=>{
    const [Fname,setFname] = useState('')
    const [Lname,setLname] = useState('')
    const [Email,setEmail] = useState('')
    const [Message,setMessage] = useState('')
    const Navigate = useNavigate();
    const HandleSubmit = (e)=>{
        e.preventDefault();
        const Post = {Fname,Lname,Email,Message};
        fetch('http://localhost:8000/Posts', {
          method : 'POST',
          headers : {'Content-Type':'application/json'},
          body: JSON.stringify(Post)
        });{Navigate(-1)}
    }

      
return(
<div className='Body'>
    <title>
    form
  </title>
  <div className='InnerBody'>
    <br/>
    <form onSubmit={HandleSubmit}>
    <div className = 'names1'>
        <label for="Fname">First Name</label>
        <input type="text" name="Fname" id = "Fname" required value={Fname} onChange={(e)=> setFname(e.target.value)}/>
    </div>
    <div className = 'names2'>
        <label for="Lname">Last Name</label>
        <input type="text" name="Lname" id = "Lname" required value={Lname} onChange={(e)=> setLname(e.target.value)}/>
    </div>
    <br/>
        <div class = 'mail'>
        <label for="mail">Email Address</label>
        <input type="email" name = "mail" id="mail" required value ={Email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
    <label for="Message" id = "labe" class ="labe">Message</label>
    <textarea type="text" className = "Message" id = "Message" required value={Message} onChange={(e)=> setMessage(e.target.value)}/>
    <br/>
    <input type="submit" className='Submit' />
    </form>
    </div>
</div>
);}
export default PostForm;