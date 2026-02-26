import React from "react";
import "./Navbar.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar__container">
      <h2 className="header__brand__name">Shop Flow</h2>

      <ul className="header__nav__links">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/success"}>success</Link>
        </li>
        <li>
          <Link to={"/cancel"}>cancel</Link>
        </li>
        <li>
          <Link to={"/cart"}>cart</Link>
        </li>
      </ul>

      <div className="header__cart">
        <p>Cart</p>
        <ShoppingCartCheckoutIcon />
      </div>
    </nav>
  );
};

export default Navbar;
