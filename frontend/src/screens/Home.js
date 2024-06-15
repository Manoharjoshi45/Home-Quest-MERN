import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

import PropertyData from "./PropertyData";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        
      </div>
      <div><Carousel/></div>
      <div><PropertyData/></div>
   
      <div>
        <Footer />
      </div>
    </div>
  );
}
