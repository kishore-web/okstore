import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h2>Categories</h2>
          <span>Woman</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>New Arrivals</span>
          <span>Accessories</span>
        </div>
        <div className="item">
          <h2>Links</h2>
          <span>FAQs</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h2>About</h2>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            animi dolore explicabo doloribus suscipit rerum, quas nesciunt vel
            consequuntur quibusdam.
          </span>
        </div>
        <div className="item">
          <h2>Contact</h2>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            animi dolore explicabo doloribus suscipit rerum, quas nesciunt vel
            consequuntur quibusdam.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <h2>OKStore</h2>
          <span> &#169; CopyRight All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
