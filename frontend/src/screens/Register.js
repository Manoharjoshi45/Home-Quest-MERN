import React,{useState} from "react";
import{Link} from 'react-router-dom';

export default function Register() {
 const [credentials,setcredentials]=useState({
  firstName:'',
  lastName:'',
  email:'',
  phone:'',
  password:'',
  role:''
 });
 async function handleSubmit(e){
  e.preventDefault();
  const response=await fetch("http://localhost:5000/api/createUser",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      email: credentials.email,
      phone: credentials.phone,
      password: credentials.password,
      role:credentials.role
    })
  })
  const json = await response.json();
  console.log(json);
  if (json.success) {
    alert("User Created Successfully");
  } else {
    alert("Enter Valid Credentials");
  }
 };
 const onChange = (event) => {
  setcredentials({ ...credentials, [event.target.name]: event.target.value });
};





  return (
    <div>
      <form className="container-fluid mt-5" onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputfirstName">FirstName</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputfirstName"
            placeholder="FirstName"
            name="firstName"
            value={credentials.firstName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputlastName">LastName</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputlastName"
            placeholder="LasttName"
            name="lastName"
            value={credentials.lastName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPhone">Phone</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPhone"
            placeholder="Phone"
            name="phone"
            value={credentials.phone}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputrole">Role</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputrole"
            placeholder="Buyer or Seller"
            name="role"
            value={credentials.role}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/login" className="m-3 btn btn-danger">
          Already a User
        </Link>
      </form>
    </div>
  );
}
