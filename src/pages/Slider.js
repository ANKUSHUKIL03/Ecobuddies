import React from "react";
import hero1 from "./img1.png";
import './Slider.css';


function Slider() {
  return (

    <div id="carouselExampleInterval" class="carousel slide container-fluid" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="1500">
        <img src={hero1} class="d-block slidersize blurred-image" alt="..." />
        <div class="blur-overlay"></div>
        <div class="carousel-caption d-none d-md-block position-absolute top-30 start-20 translate-middle text-center text-white" >
          <h1>Find Best partner for your business</h1>
        </div>
      </div>
    </div>
  </div>
  


  );
}
export default Slider;