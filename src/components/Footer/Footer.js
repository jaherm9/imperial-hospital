import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <footer class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> Vision & Mission: </span> To be the emerging markets largest integrated healthcare network.To build a legacy of accessible, high quality, safe private healthcare for low and middle-income patients in emerging markets.
    </p>
    <div class="icons">
    <a href="#"><i class="fab fa-twitter-square"></i></a>
    <a href="#"><i class="fab fa-dribbble-square"></i></a>
    <a href="#"><i class="fab fa-facebook-square"></i></a>
    <a href="#"><i class="fab fa-flickr"></i></a>
    <a href="#"><i class="fab fa-linkedin"></i></a>
    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span> Dhanmondi</span> Dhaka, Bangladesh</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> (+88) 01757 507591</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="#"> im.hospital@info.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <h2> <span>Imperial Hospital</span></h2>
    <p class="menu">
      <a href="#"> Home</a> |
      <a href="#"> Services</a> |
      <a href="#"> Contact</a>
    </p>
    <p class="name"> Imperial Hospital &copy; 2021</p>
  </div>
</footer>
            
  </div>

    );
};

export default Footer;