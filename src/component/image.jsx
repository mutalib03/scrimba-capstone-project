import React, { useState,useContext } from "react" 
import { galleryContext } from "../Context.js/context";
import PropTypes from 'prop-types'

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, AddToCart, cartItems, removeCartItem } =
    useContext(galleryContext);


  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)} 
        ></i>
      );
    }
  }

  function cartIcon() {
    const cartCheck = cartItems.some(item => item.id === img.id)
    
    if (cartCheck) {
    return <i className="ri-shopping-cart-fill cart" onClick={() => removeCartItem(img)}></i>;
    } else if (hovered) {
      return (
      <i className="ri-add-circle-line cart" onClick={() => AddToCart(img)}></i>
      );
    }
  

  }

  

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
    isFavourite: PropTypes.bool
  }),
};

export default Image