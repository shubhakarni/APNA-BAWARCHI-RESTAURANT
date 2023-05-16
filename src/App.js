import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Menu from "./Components/Menu";
import Slider from "./Components/Slider";
import './App.css';

import{ BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><i class="fa fa-envelope"></i>Shubhakarnidoulthabad@gmail.com</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link activee" aria-current="page" href="#">+91 123-456-7890</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Secunderabad</a>
        </li>
       
        
      </ul>
      <form class="d-flex" className="Shubha" role="search">
      <i class="fa fa-instagram"></i>
      <i class="fa fa-twitter"></i>
      <i class="fa fa-facebook"></i>
      <i class="fa fa-youtube"></i>
      </form>
    </div>
  </div>
</nav>
      <div class="App">
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-2">
  <div class="container-fluid">
    <Link class="navbar-brandd" to="/Slider">APNA BAWARCHI</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Slider"><i class="fa fa-home "></i> Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/About"><i class="fa fa-question-circle"></i> About Us</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/contact"><i class="fa fa-phone"></i> Contact Us</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/Menu"><i class="fa fa-bars"></i> Menu</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>  

<Routes>
  <Route exact path='/Slider' element={< Slider />}></Route>
  <Route exact path='/About' element={< About />}></Route>
  <Route exact path='/Contact' element={< Contact />}></Route> 
  <Route exact path='/Login' element={< Login />}></Route>
  <Route exact path='/Menu'  element={<Menu/>}></Route>
</Routes>
    </div>
    </Router>
  );
}

export default App;