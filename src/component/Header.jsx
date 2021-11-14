import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { galleryContext } from "../Context.js/context";

function Header() {
  const{cartItems} =useContext(galleryContext)
  
  return (
    <header>
      <Link to="/"> Pic Some</Link>
      <Link to="/cart">
        {cartItems.length ? (
          <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
        ) : (
          <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        )}
      </Link>
    </header>
  );
}

export default Header;
