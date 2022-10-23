import React from "react";
import img from "../starbucks.png";
import Button from "./Button";
import imgNav from "../location.png"

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <a href="Homepage"><img className="logo" src={img} alt="starbucks logo " /></a>
        <ul className="left-list">
          <li>
            <a href="menu">Menu</a>
          </li>
          <li>
            <a href="rewards">Rewards</a>
          </li>
          <li>
            <a href="gifts">Gift cards</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <a href="location"><img className="img-Nav" src={imgNav} alt='location icon' /></a>
        <ul className="right-list">
          <li>
            <a href="store">Find a store</a>
          </li>
        </ul>
        <Button text={'Sign in'} />
        <Button text={'Join now'} />
      </div>
    </nav>
  );
}

export default Navbar;
