import React, { createContext, useEffect } from 'react';
import { useState } from 'react';


export const galleryContext = createContext()



const GalleryContextProvider = (props) => {

   const [allPhotos, setAllPhotos] = useState([])
   const [cartItems, setcartItems] =  useState([])
     useEffect(() => {
   fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(response=> response.json())
        .then(data=> setAllPhotos(data))

 },[])  
   console.log(allPhotos)
 const AddToCart = (image) => {

setcartItems(prItems => [...prItems, image])

 }
 const removeCartItem = (img) => {
const filterItem = cartItems.filter(image => image.id !== img.id)
   setcartItems(filterItem)
 }

 const toggleFavorite = (id) => {
   const updatedPhotos = allPhotos.map(photo=> {
     if ( photo.id === id) {
    return {...photo,isFavorite:!photo.isFavorite}
     }
     return photo
     }
 
        
     )
      setAllPhotos(updatedPhotos)
    }

   
     return ( 
    <galleryContext.Provider value={{allPhotos,toggleFavorite, cartItems,
    AddToCart,
    removeCartItem,
    setcartItems}}>
     {props.children}
    </galleryContext.Provider>
     );
}
 
export default GalleryContextProvider;