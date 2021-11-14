import React, { useContext, useState } from "react"
import { galleryContext } from "../Context.js/context"

function CartItem({item}) {
  const {removeCartItem} = useContext(galleryContext)
  const [hovered , sethovered] = useState(false)
  const IconClass = hovered ?  "ri-delete-bin-fill" : "ri-delete-bin-line"
  return (
        <div className="cart-item">
            <i onMouseEnter={()=> sethovered(true)} onMouseLeave={() => sethovered(false)} className={IconClass} onClick={() =>{removeCartItem(item)}}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem