import React from "react";
import Header1 from "./Header1";
import Footer from './Footer'
import { useNavigate } from "react-router-dom";
import './signin.css'
import axios from "axios";
import { useState } from "react";


export default function Signin() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email:'',
    password:''
   })
const changeHandler = (event) =>{
    setUser({...user,[event.target.name]:event.target.value})
}
const submitHandler = async (event)=>{
    event.preventDefault(event);
const res= await axios.post("http://localhost:5000/login",user)
console.log(res) 
console.log(res.status)
console.log(user)
if(res.status===200){
    alert("Login Successfully")
}
}


  return (
    <>
      
     <div className='homepage'>
            < Header1 />
            <div className='lmaincontent'>
                <div className='lleftmain'>
                    <div className='lleftcontent'>
                        <h2 className="lheading2">Laundry Service</h2>
                        <p className='ldescription1'>Doorstep Wash and Drycelan Service</p>
                        <p className='lhaveaccount1'>Dont Have An Account?</p>
                        {/* <button className="lregister-btn1">Register</button> */}
                        <button className="lregister-btn1" onClick={()=>{navigate('./register')}}>Register</button>
                    </div>
                </div>
                <div className='lrightmain'>
                    <div className='lrightcontent'>
                        <h2 className='lheading3'>SIGN IN</h2>
                        <form className="loginform" onSubmit={submitHandler} autoComplete="off">
                            <label className="email1">Email</label><br />
                            <input type="email" onChange={changeHandler} name="email" required/><br />
                            <label className="password1">Password</label><br />
                            <input type="password" onChange={changeHandler} name="password" required/><br />
                            <span className='lforget1'>Forget Password?</span><br />
                            <button type="submit" value="Login" className="lsigninbtn">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
           
            <Footer />
        </div>
         </>
  );
}
