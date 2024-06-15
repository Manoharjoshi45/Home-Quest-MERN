import React, { useState } from 'react'
import{Link, useNavigate} from 'react-router-dom';


export default function Login() {

  const [credentials,setcredentials]=useState({
    email:'',
    password:''
  });
  let navigate=useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginUser",
      {method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email:credentials.email,
          password:credentials.password
        })

   } );
   const json =await response.json()
    console.log(json);
    if(!json.success){
      alert("Enter Valid Credentials")
    };
    if(json.success){
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
     navigate('/')
    }

  };

  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  };






  return (
    <div >
      <form className='container-fluid mt-5' onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name='email'
            value={credentials.email}
            onChange={onChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name='password'
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/register" className="m-3 btn btn-danger">
          New User
        </Link>
      </form>
    </div>
  )
}
