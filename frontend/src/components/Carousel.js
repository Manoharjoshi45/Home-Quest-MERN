import React from "react";

export default function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide mt-3em"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" id="carousel">
        <div className="carousel-caption "style={{ zIndex:"10" }} >
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"

            />
            
          </form>
        </div>

        <div className="carousel-item active">
          <img
            src="https://images.ctfassets.net/5wq17jjenal9/6tgLdbC7pFXwCavdne2uk5/3d3fea83c31b01104ffc0d32f1107cf1/HERO_IMAGE.jpg"
            className="d-block w-100"
            alt="..."
            style={{filter:"brightness(30%)"}}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.aparnaconstructions.com/wp-content/uploads/2019/05/7-reasons-for-the-rapid-rise-of-real-estate-prices-in-Hyderabad-4.png"
            className="d-block w-100"
            alt="..."
            style={{filter:"brightness(30%)"}}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.smrholdings.in/images/blog-images/bi-11.jpg"
            className="d-block w-100"
            alt="..."
            style={{filter:"brightness(30%)"}}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  
  );
}
