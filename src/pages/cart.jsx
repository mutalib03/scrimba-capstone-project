import React, { useContext } from "react";

import CartItem from "../component/CartItem";
import { galleryContext } from "../Context.js/context";

function Cart() {
  const { cartItems, removeCartItem, setcartItems } =
    useContext(galleryContext);
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  const numOfItem = (5.99 * cartItems.length).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  
  
  const handleClick = (e) => {
    console.log(e)
   e.target.innerText = "ordering"
    setTimeout(() => {
      console.log("Order placed!");
      setcartItems([]);
   }, 3000)

  }
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {numOfItem}</p>
      <div className="order-button">
    { cartItems ?
            <button onClick={handleClick}>place order</button>
            :
            null
    }    
      </div>
    </main>
  );
}

export default Cart;
