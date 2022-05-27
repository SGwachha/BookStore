import React from "react";
import logo from "../images/logo.jpg";
import Header from "../Components/Header";
import Cart from "../Cart/Cart"
import '../App.css'
// import { useNavigate } from "react-router-dom";

function Navbar() {
  // const navigate = useNavigate()
  return (
    <nav className="navbar">
      <div className="headers">
        <div className="title-header">
          <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo.." height="135px" /></a>
          <Header />
        </div>
        <div className="cart">
          <Cart className="cart" />
        </div>
        <div className="search">
          <input type="search" className="srch" name="" placeholder="Search" />
          <button className="btn">Search</button>
        </div>
      </div>
      <div className="navbar">
        <div className="nav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="a" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="a" href="/a">Product</a>
            </li>
            <li className="nav-item">
              <a className="a" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="a" href="/research">Research</a>
            </li>
            <li className="nav-item">
              <a className="a" href="/Contact">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="a" href="/payments">Payments</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;