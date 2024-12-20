import {Link, useNavigate} from "react-router-dom";
import React, { useState } from "react";
import axios from 'axios';
function Signup(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate()

  const handleSubmit=(e)=> {
    e.preventDefault()
    axios.post('http://localhost:3001/register', { name, email, password })
    .then(result => {
        console.log(result);
        navigate('/Login');
    })
    .catch(err => {
        console.error(err);
        alert("Registration failed. Please try again.");
    });


  }
  return(
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input type="text" onChange={(e)=> setName(e.target.value)} placeholder="Enter Name" autoComplete="off" name="name" className="form-control rounded-0"></input>
          </div>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input type="text" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0"></input>
          </div>
          {/* password */}
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input type="text" onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password" autoComplete="off" name="password" className="form-control rounded-0"></input>
          </div>

          {/*Button */}
          <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
          <p>Already have an Account?</p>
          <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
        </form>
      </div>

    </div>
  );
}
export default Signup;