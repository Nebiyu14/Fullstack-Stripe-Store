import React from "react";
import "./Navbar.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { cart, getItemCount } = useCart();

  return (
    <nav className="navbar__container">
      <h2 className="header__brand__name">
        <Link to={"/"}>Shop Flow</Link>
      </h2>

      <ul className="header__nav__links">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/success"}>Success</Link>
        </li>
        <li>
          <Link to={"/cancel"}>Cancel</Link>
        </li>
        <li>
          <Link to={"/cart"}>Cart</Link>
        </li>
      </ul>

      <div className="header__cart">
        <Link to={"/cart"} className="header__cart__link">
          <ShoppingCartCheckoutIcon fontSize="small" />
          <span>Cart</span>
          {cart?.length > 0 && (
            <span className="header__cart__badge">{getItemCount}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
