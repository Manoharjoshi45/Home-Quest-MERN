import React from "react";


import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="container ">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-muted">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-muted">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-muted">
                Construction Progress
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-muted">
                Specifications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-muted">
                Floor Plan
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-muted">
                Disclaimer
              </Link>
            </li>
          </ul>
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-muted">
              © 2024 All Rights Are Reserved By H-Q Company,Inc..
            </span>
          </div>
          {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <Link className="text-muted" to="/">
                <svg className="bi" width={24} height={24}>
                  <use xlinkto="/twitter" />
                </svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-muted" to="/">
                <svg className="bi" width={24} height={24}>
                  <use xlinkto="/instagram" />
                </svg>
              </Link>
            </li>
            <li className="ms-3">
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </li>
          </ul> */}
        </footer>
      </div>
    </div>
  );
}
