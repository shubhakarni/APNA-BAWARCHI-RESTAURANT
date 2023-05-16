import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div>
      
  <footer className="footer">
     <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow us</h4>
          <div className="social-links">
            <a href="#"> <i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
          </div>
        </div>
      </div>
     </div>
  </footer>
    </div>
  )
}
