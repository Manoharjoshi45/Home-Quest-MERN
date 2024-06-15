import React, { useContext, useEffect } from "react";
import { PropertyContext } from "../components/PropertyContext";
import { Link } from "react-router-dom";

export default function PropertyData() {
  const { state, dispatch } = useContext(PropertyContext);
  const { properties, loading, error } = state;

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: "FETCH_PROPERTIES_REQUEST" });
      try {
        const response = await fetch("http://localhost:5000/api/propertyData", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        dispatch({ type: "FETCH_PROPERTIES_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_PROPERTIES_FAILURE", payload: error.message });
      }
    }

    fetchData();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="d-flex">
      <div className="card ml-3 mx-4 mt-2 w-auto h-auto">
        <div className="card-body">
          <div className="card-text">
            {properties.map((property) => (
              <div key={property._id}>
                <div className="card-header">
                  <img src={property.img} alt="...img" />
                </div>
                <h2>{property.title}</h2>
                <p>{property.description}</p>
                <p>Area: {property.area} sqft</p>
                <p>Price: ${property.price}</p>
                <p>Location: {property.location}</p>
                <p>Nearby: {property.nearby.join(", ")}</p>
                <Link to={`/updatepd`} className="m-3 btn btn-danger">
                  Update
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
