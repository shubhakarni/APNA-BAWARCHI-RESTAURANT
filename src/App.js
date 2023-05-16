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
      <nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#"><i className="fa fa-envelope"></i>Shubhakarnidoulthabad@gmail.com</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link activee" aria-current="page" to="#">+91 123-456-7890</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Secunderabad</Link>
        </li>
       
        
      </ul>
      <form className="d-flex" classNameName="Shubha" role="search">
      <i className="fa fa-instagram"></i>
      <i className="fa fa-twitter"></i>
      <i className="fa fa-facebook"></i>
      <i className="fa fa-youtube"></i>
      </form>
    </div>
  </div>
</nav>
      <div className="App">
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-2 sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brandd" to="/Slider">APNA BAWARCHI</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Slider"><i className="fa fa-home "></i> Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/About"><i className="fa fa-question-circle"></i> About Us</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/contact"><i className="fa fa-phone"></i> Contact Us</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/Menu"><i className="fa fa-bars"></i> Menu</Link>
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