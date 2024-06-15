import React, { useState, useContext, useEffect } from 'react';
import { PropertyContext } from './PropertyContext';


export default function UpdatePd(props) {
  const token = localStorage.getItem("authToken");
  
  const { dispatch } = useContext(PropertyContext);
  const [credentials, setCredentials] = useState({
    id:'' ,
    title: '',
    img: '',
    description: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    nearby: '',
  });

  useEffect(() => {
    async function fetchProperty() {
      try {
        const response = await fetch(`http://localhost:5000/api/propertyData`);
        const property = await response.json();
        setCredentials(property);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    }
    fetchProperty();
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/modifyProperty', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' ,
          "Authorization": `${token}`
        },
        body: JSON.stringify(credentials),
      });

      const json = await response.json();
      if (json.success) {
        dispatch({ type: 'UPDATE_PROPERTY', payload: json.property });
        alert('Property Updated Successfully');
      } else {
        alert('Enter Valid Details');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

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
            placeholder="Enter No. of Bedrooms"
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
            placeholder="Enter No. of Bathrooms"
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
            placeholder="Enter Nearby"
            name="nearby"
            value={credentials.nearby}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
