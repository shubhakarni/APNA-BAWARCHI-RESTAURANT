import React from 'react'
import './App.css';

export default function Slider() {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img src="https://wallpapercave.com/wp/wp1874159.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 class="btn">APNA BAWARCHI RESTAURANT<span></span></h1>
        <p><h4 class="btn">Live, love, eat</h4><span></span> </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://assets.gqindia.com/photos/5cdc7489956b1c5a8f6514ab/16:9/w_1280,c_limit/cafe-mozaic.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 class="btn">ENJOY OUR DELICIOUS FOOD<span></span></h1>
        <p><h4 class="btn">Try Something New</h4><span></span></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://wallup.net/wp-content/uploads/2019/09/761345-restaurant-food-architecture-interior-design-room.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 class="btn">HURRY AND BOOK YOUR TABLE NOW<span></span></h1>
        <p><h4 class="btn">Come and Enjoy with your friends and family</h4><span></span></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
