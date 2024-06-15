import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CreatePd() {
  const [credentials, setCredentials] = useState({
    title: '',
    img: '',
    description: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    nearby: ''
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("authToken"); // Assuming the token is stored in local storage

    const response = await fetch("http://localhost:5000/api/createProperty", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      },
      body: JSON.stringify({
        title: credentials.title,
        img: credentials.img,
        description: credentials.description,
        area: credentials.area,
        bedrooms: credentials.bedrooms,
        bathrooms: credentials.bathrooms,
        nearby: credentials.nearby
      })
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      alert("Property Created Successfully");
    } else {
      alert("Enter Valid Details");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form className="container-fluid mt-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputTitle">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputTitle"
            aria-describedby="descriptionHelp"
            placeholder="Enter Title"
            name="title"
            value={credentials.title}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputTitle">Image</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputTitle"
            aria-describedby="descriptionHelp"
            placeholder="Enter Image Link"
            name="img"
            value={credentials.img}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputDescription">Description</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputDescription"
            aria-describedby="descriptionHelp"
            placeholder="Enter Description"
            name="description"
            value={credentials.description}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputArea">Area</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputArea"
            aria-describedby="descriptionHelp"
            placeholder="Enter Area in sq.m"
            name="area"
            value={credentials.area}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputBedrooms">Bedrooms</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputBedrooms"
            aria-describedby="descriptionHelp"
            placeholder="Enter No.of BedRooms"
            name="bedrooms"
            value={credentials.bedrooms}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputBedrooms">Bathrooms</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputBedrooms"
            aria-describedby="descriptionHelp"
            placeholder="Enter No.of BathRooms"
            name="bathrooms"
            value={credentials.bathrooms}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputDescription">Nearby</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputDescription"
            aria-describedby="descriptionHelp"
            placeholder="Enter NearBy"
            name="nearby"
            value={credentials.nearby}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/updatepd" className="m-3 btn btn-danger">
          Update Existing
        </Link>
      </form>
    </div>
  );
}
