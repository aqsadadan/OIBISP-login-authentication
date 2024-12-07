import {Link, useNavigate} from "react-router-dom";
import React, { useState } from "react";
import axios from 'axios';
function ForgotPassword(){
  const [email, setEmail] = useState("");
  const navigate= useNavigate()
  
  axios.defaults.withCredentials=true;
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/forgot-password', {email})
    .then(res=>{
        if(res.data.Status==="Success"){
            if(res.data.role==="admin"){
                navigate('/login')
            }else{
                navigate('/')
            }
        }
    }).catch(err=> console.log(err))
  }
  return(
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>          
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input type="text" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0"></input>
          </div>
          {/*Button */}
          <button type="submit" className="btn btn-success w-100 rounded-0">Send Email</button>
          
          <br></br>
       
 
        </form>
      </div>

    </div>
  )
}
export default ForgotPassword;