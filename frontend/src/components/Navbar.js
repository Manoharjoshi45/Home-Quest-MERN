import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top display-flex">
        <div className="container-fluid">
          <Link
            className="navbar-brand mx-2 mt-2 btn  opacity-0.6s"
            id="kaushan-script-regular"
            to="/"
          >
            Home-Quest...
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {!localStorage.getItem("authToken") ? (
                <div className="d-flex position-absolute top-0 end-0">
                  <Link className=" btn text-white mx-1 " to="/login">
                    <div className="btn bg-white text-success mx-2">Login</div>
                  </Link>
                  <Link className=" btn  text-white mx-1 " to="/register">
                    <div className="btn bg-white text-success mx-2">
                      Register
                    </div>
                  </Link>
                </div>
              ) : (
                <div className="container-fluid">

                  <Link className="btn bg-white text-danger mx-2 mt-2 " to='/createpd'>
                    Create Property
                  </Link>
                  
                  <div
                    className="btn bg-white text-danger mx-2 mt-2 position-absolute top-0 end-0"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
