import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/flag.png" alt="eng" width={25} />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/">OKSTORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to="/">HomePage</Link>
          </div>
          <div className="item">
            <Link to="/">About</Link>
          </div>
          <div className="item">
            <Link to="/">Contact</Link>
          </div>
          <div className="item">
            <Link to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorder />
            <div className="cart">
              <ShoppingCart />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
